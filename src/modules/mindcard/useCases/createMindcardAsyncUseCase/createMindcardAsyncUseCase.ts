import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { v7 as uuidV7 } from 'uuid';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { Mindcard } from '../../entities/Mindcard';
import { R2Service } from 'src/r2/r2.service';
import {
  QUEUE_NAMES,
  QUEUE_PRIORITIES,
  FILE_SIZE_THRESHOLDS,
} from '../../../../queue/queue.constants';
import {
  MindcardGenerationJobData,
  TipoGeracao,
} from '../../../../queue/interfaces/job-data.interface';
import { BadRequestException } from '@nestjs/common';

interface CreateMindcardAsyncRequest {
  titulo: string;
  fonteArquivo: Express.Multer.File;
  promptPersonalizado?: string | null;
  usuarioId: string;
  tipoGeracao: 'FLASHCARDS' | 'QUIZ';
}

interface CreateMindcardAsyncResponse {
  mindcardId: string;
  jobId: string;
  status: string;
  message: string;
}

/**
 * Use case para criar mindcard de forma assíncrona
 * Não processa com IA imediatamente, apenas cria mindcard e adiciona job na fila
 */
@Injectable()
export class CreateMindcardAsyncUseCase {
  private readonly logger = new Logger(CreateMindcardAsyncUseCase.name);

  constructor(
    private mindcardRepository: MindcardRepository,
    private r2Service: R2Service,
    @InjectQueue(QUEUE_NAMES.MINDCARD_GENERATION)
    private readonly queue: Queue,
  ) {}

  async execute({
    titulo,
    fonteArquivo,
    promptPersonalizado,
    usuarioId,
    tipoGeracao,
  }: CreateMindcardAsyncRequest): Promise<CreateMindcardAsyncResponse> {
    if (!fonteArquivo) {
      throw new BadRequestException(
        'Arquivo é obrigatório para geração com IA',
      );
    }

    const mindcardId = uuidV7();

    try {
      // Step 1: Upload file to R2 ANTES de processar
      this.logger.log(`Uploading file to R2 for mindcard ${mindcardId}`);
      const fonteArquivoUrl = await this.r2Service.uploadFileFromMulter(
        fonteArquivo,
        `mindcards/${usuarioId}_${mindcardId}`,
      );

      // Step 2: Create mindcard with file URL and PENDING status
      this.logger.log(`Creating mindcard ${mindcardId} with PENDING status`);
      const mindcard = new Mindcard({
        id: mindcardId,
        titulo,
        fonteArquivo: fonteArquivoUrl, // URL do R2 já salvo
        promptPersonalizado: promptPersonalizado ?? null,
        usuarioId,
        dataCriacao: new Date(),
      });

      await this.mindcardRepository.create(mindcard);

      // Step 3: Determine priority based on file size
      const priority = this.determinePriority(fonteArquivo.size);

      // Step 4: Add job to queue with file buffer (convertido para Base64)
      // Mantemos o buffer no job para processar com Gemini sem baixar do R2
      this.logger.log(`Adding job to queue for mindcard ${mindcardId}`);
      const fileBufferBase64 = fonteArquivo.buffer.toString('base64');

      const jobData: MindcardGenerationJobData = {
        mindcardId,
        userId: usuarioId,
        fileBufferBase64, // Buffer para processar com Gemini (economia de download)
        fileName: fonteArquivo.originalname,
        mimeType: fonteArquivo.mimetype,
        fileSize: fonteArquivo.size,
        tipoGeracao: tipoGeracao as TipoGeracao,
        promptPersonalizado: promptPersonalizado ?? undefined,
      };

      const job = await this.queue.add('generate', jobData, {
        priority,
        removeOnComplete: {
          count: 100,
          age: 7 * 24 * 3600, // 7 dias
        },
        removeOnFail: {
          count: 500,
          age: 30 * 24 * 3600, // 30 dias
        },
      });

      this.logger.log(
        `Mindcard ${mindcardId} created and job ${job.id} added to queue with priority ${priority}`,
      );

      return {
        mindcardId,
        jobId: job.id!,
        status: 'PROCESSING',
        message:
          'Mindcard criado com sucesso. O processamento será feito em background.',
      };
    } catch (error) {
      this.logger.error(
        `Error creating async mindcard: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      throw error;
    }
  }

  /**
   * Determinar prioridade baseada no tamanho do arquivo
   */
  private determinePriority(fileSize: number): number {
    if (fileSize < FILE_SIZE_THRESHOLDS.SMALL) {
      return QUEUE_PRIORITIES.HIGH; // Arquivos pequenos: prioridade alta
    } else if (fileSize < FILE_SIZE_THRESHOLDS.MEDIUM) {
      return QUEUE_PRIORITIES.NORMAL; // Arquivos médios: prioridade normal
    } else {
      return QUEUE_PRIORITIES.LOW; // Arquivos grandes: prioridade baixa
    }
  }
}
