import { Processor, WorkerHost, OnWorkerEvent } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { QUEUE_NAMES } from '../../../queue/queue.constants';
import {
  MindcardGenerationJobData,
  StatusProcessamento,
  JobEvent,
  MindcardLogJobData,
} from '../../../queue/interfaces/job-data.interface';
import { CreateMindcardWithAiUseCase } from '../useCases/createMindcardWithAiUseCase/createMindcardWithAiUseCase';
import { MindcardRepository } from '../repositories/MindcardRepository';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

/**
 * Processor para processar jobs de geração de mindcards com IA
 * Executa em background de forma assíncrona
 */
@Processor(QUEUE_NAMES.MINDCARD_GENERATION, {
  concurrency: 3, // 3 workers simultâneos
  limiter: {
    max: 60, // 60 jobs por minuto
    duration: 60000,
  },
})
export class MindcardGenerationProcessor extends WorkerHost {
  private readonly logger = new Logger(MindcardGenerationProcessor.name);

  constructor(
    private readonly createMindcardWithAiUseCase: CreateMindcardWithAiUseCase,
    private readonly mindcardRepository: MindcardRepository,
    @InjectQueue(QUEUE_NAMES.MINDCARD_LOGS)
    private readonly logsQueue: Queue,
  ) {
    super();
  }

  async process(
    job: Job<MindcardGenerationJobData>,
  ): Promise<{ success: boolean; cardsGenerated: number }> {
    const {
      mindcardId,
      userId,
      fileBufferBase64,
      fileName,
      mimeType,
      fileSize,
      tipoGeracao,
      promptPersonalizado,
    } = job.data;

    this.logger.log(`Processing job ${job.id} for mindcard ${mindcardId}`);

    try {
      // Log: JOB_STARTED
      await this.logEvent(job, JobEvent.JOB_STARTED, {
        userId,
        tipoGeracao,
        fileSize,
      });

      // Atualizar status para PROCESSANDO
      await this.mindcardRepository.updateStatus(
        mindcardId,
        StatusProcessamento.PROCESSANDO,
        new Date(),
      );

      await job.updateProgress(10);

      // Converter Base64 de volta para Buffer
      if (!fileBufferBase64 || fileBufferBase64.length === 0) {
        throw new Error('Buffer do arquivo está vazio');
      }

      const fileBuffer = Buffer.from(fileBufferBase64, 'base64');

      await this.logEvent(job, JobEvent.FILE_VALIDATED, {
        fileName,
        fileSize,
        mimeType,
        bufferSize: fileBuffer.length,
      });

      await job.updateProgress(20);

      // Criar objeto Multer.File a partir do buffer (convertido do Redis)
      const multerFile: Express.Multer.File = {
        buffer: fileBuffer,
        mimetype: mimeType,
        originalname: fileName,
        fieldname: 'file',
        encoding: '7bit',
        size: fileSize,
      } as Express.Multer.File;

      await this.logEvent(job, JobEvent.GEMINI_REQUEST_SENT, {
        fileSize,
        mimeType,
      });

      await job.updateProgress(30);

      // Gerar cards com IA (modo assíncrono)
      const result = await this.createMindcardWithAiUseCase.execute({
        titulo: '', // Vazio = mindcard já foi criado pelo CreateMindcardAsyncUseCase
        fonteArquivo: multerFile,
        promptPersonalizado,
        usuarioId: userId,
        tipoGeracao: tipoGeracao as 'FLASHCARDS' | 'QUIZ',
        skipFileUpload: true, // Pular upload do R2 (usando buffer do Redis)
        existingMindcardId: mindcardId, // ID do mindcard existente
      });

      await job.updateProgress(80);

      await this.logEvent(job, JobEvent.GEMINI_RESPONSE_RECEIVED, {
        cardsGenerated: result.totalGenerated,
      });

      await this.logEvent(job, JobEvent.CARDS_SAVED, {
        totalCards: result.totalGenerated,
      });

      await job.updateProgress(90);

      // Atualizar status para CONCLUIDO
      await this.mindcardRepository.updateStatus(
        mindcardId,
        StatusProcessamento.CONCLUIDO,
        undefined,
        new Date(),
      );

      await job.updateProgress(100);

      await this.logEvent(job, JobEvent.JOB_COMPLETED, {
        cardsGenerated: result.totalGenerated,
        duration: Date.now() - job.timestamp,
      });

      this.logger.log(
        `Job ${job.id} completed successfully with ${result.totalGenerated} cards`,
      );

      return {
        success: true,
        cardsGenerated: result.totalGenerated,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';

      this.logger.error(
        `Job ${job.id} failed for mindcard ${mindcardId}: ${errorMessage}`,
      );

      // Atualizar status para FALHOU
      await this.mindcardRepository.updateStatus(
        mindcardId,
        StatusProcessamento.FALHOU,
        undefined,
        undefined,
        errorMessage,
      );

      await this.logEvent(job, JobEvent.JOB_FAILED, {
        error: errorMessage,
        stack: error instanceof Error ? error.stack : undefined,
      });

      throw error; // Relançar para que o BullMQ tente novamente
    }
  }

  /**
   * Log de eventos na fila de logs
   */
  private async logEvent(
    job: Job<MindcardGenerationJobData>,
    event: JobEvent,
    metadata?: Record<string, any>,
  ): Promise<void> {
    try {
      const logData: MindcardLogJobData = {
        jobId: job.id!,
        mindcardId: job.data.mindcardId,
        event,
        timestamp: new Date(),
        metadata,
      };

      await this.logsQueue.add('log', logData, {
        removeOnComplete: {
          count: 1000,
          age: 7 * 24 * 3600, // 7 dias
        },
      });
    } catch (error) {
      this.logger.warn(`Failed to log event ${event}: ${error}`);
    }
  }

  /**
   * Eventos do worker
   */
  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log(`Job ${job.id} completed`);
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, error: Error) {
    this.logger.error(`Job ${job.id} failed: ${error.message}`);
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.log(`Job ${job.id} started processing`);
  }
}
