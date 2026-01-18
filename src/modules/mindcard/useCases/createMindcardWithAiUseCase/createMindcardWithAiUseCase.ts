import { Injectable, Logger } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { ItemMindcardRepository } from 'src/modules/itemMindcard/repositories/ItemMindcardRepository';
import { OpcaoRespostaRepository } from 'src/modules/itemMindcard/repositories/OpcaoRespostaRepository';
import { Mindcard } from '../../entities/Mindcard';
import {
  ItemMindcard,
  TipoCard,
  Dificuldade,
} from 'src/modules/itemMindcard/entities/ItemMindcard';
import { OpcaoResposta } from 'src/modules/itemMindcard/entities/OpcaoResposta';
import { v7 as uuidV7 } from 'uuid';
import { R2Service } from 'src/r2/r2.service';
import { GeminiService } from 'src/gemini/gemini.service';
import { BadRequestException } from '@nestjs/common';

interface CreateMindcardWithAiRequest {
  titulo: string;
  fonteArquivo: Express.Multer.File;
  promptPersonalizado?: string | null;
  usuarioId: string;
  intervaloPaginas?: string | null;
  tipoQuestoes?: ('Alternativa' | 'Múltipla escolha')[] | null;
  skipFileUpload?: boolean;
  existingMindcardId?: string;
}

/**
 * Use case for creating a mindcard with AI-generated items
 * Integrates file upload, AI generation, and item creation in a single transaction
 */
@Injectable()
export class CreateMindcardWithAiUseCase {
  private readonly logger = new Logger(CreateMindcardWithAiUseCase.name);

  constructor(
    private mindcardRepository: MindcardRepository,
    private itemMindcardRepository: ItemMindcardRepository,
    private opcaoRespostaRepository: OpcaoRespostaRepository,
    private r2Service: R2Service,
    private geminiService: GeminiService,
  ) {}

  async execute({
    titulo,
    fonteArquivo,
    promptPersonalizado,
    usuarioId,
    intervaloPaginas,
    tipoQuestoes,
    skipFileUpload = false,
    existingMindcardId,
  }: CreateMindcardWithAiRequest) {
    if (!fonteArquivo) {
      throw new BadRequestException(
        'Arquivo é obrigatório para geração com IA',
      );
    }

    // Usar ID existente ou gerar novo
    const mindcardId = existingMindcardId ?? uuidV7();
    let fonteArquivoUrl: string | null = null;
    const createdItems: ItemMindcard[] = [];

    try {
      // Step 1: Upload file to R2 (apenas se não for processamento assíncrono)
      if (!skipFileUpload) {
        this.logger.log(`Uploading file for mindcard ${mindcardId}`);
        fonteArquivoUrl = await this.r2Service.uploadFileFromMulter(
          fonteArquivo,
          `mindcards/${usuarioId}_${mindcardId}`,
        );
      } else {
        this.logger.log(
          `Skipping file upload for mindcard ${mindcardId} (async processing)`,
        );
      }

      // Step 2: Create mindcard (apenas se titulo foi fornecido)
      // No modo assíncrono, o mindcard já foi criado, então titulo vem vazio
      let createdMindcard: Mindcard | null = null;
      if (titulo) {
        this.logger.log(`Creating mindcard ${mindcardId}`);
        createdMindcard = new Mindcard({
          id: mindcardId,
          titulo,
          fonteArquivo: fonteArquivoUrl,
          promptPersonalizado: promptPersonalizado ?? null,
          usuarioId,
          dataCriacao: new Date(),
          intervaloPaginas: intervaloPaginas ?? null,
          tipoQuestoes: tipoQuestoes ? tipoQuestoes.join(', ') : null,
        });

        await this.mindcardRepository.create(createdMindcard);
      } else {
        // Modo assíncrono: buscar mindcard existente
        this.logger.log(`Loading existing mindcard ${mindcardId}`);
        createdMindcard = await this.mindcardRepository.findById(mindcardId);
        if (!createdMindcard) {
          throw new Error(`Mindcard ${mindcardId} not found`);
        }
      }

      // Step 3: Generate items with IA
      this.logger.log(
        `Generating ${tipoQuestoes?.join(', ') || 'Alternativa'} for mindcard ${mindcardId} using IA`,
      );

      // Flag para solicitar o título apenas na primeira chamada se necessário
      let requestTitle =
        !titulo ||
        titulo === 'Gerando título com IA...' ||
        titulo === '' ||
        (createdMindcard &&
          createdMindcard.titulo === 'Gerando título com IA...');

      let suggestedTitle: string | null = null;
      const types = tipoQuestoes || ['Alternativa'];

      for (const type of types) {
        if (type === 'Alternativa') {
          const result = await this.generateFlashcards(
            fonteArquivo,
            mindcardId,
            createdItems,
            intervaloPaginas ?? undefined,
            requestTitle,
          );
          if (requestTitle && result.tituloSugestao) {
            suggestedTitle = result.tituloSugestao;
            requestTitle = false; // Título já sugerido
          }
        } else if (type === 'Múltipla escolha') {
          const result = await this.generateQuiz(
            fonteArquivo,
            mindcardId,
            createdItems,
            intervaloPaginas ?? undefined,
            requestTitle,
          );
          if (requestTitle && result.tituloSugestao) {
            suggestedTitle = result.tituloSugestao;
            requestTitle = false; // Título já sugerido
          }
        }
      }

      // Step 4: Update mindcard title if suggested
      if (suggestedTitle && createdMindcard) {
        this.logger.log(
          `Updating mindcard ${mindcardId} title to: ${suggestedTitle}`,
        );
        createdMindcard.titulo = suggestedTitle;
        await this.mindcardRepository.updateById(createdMindcard.id, {
          titulo: suggestedTitle,
        });
      }

      this.logger.log(
        `Successfully created mindcard ${mindcardId} with ${createdItems.length} items`,
      );

      return {
        mindcard: createdMindcard,
        itensMindcard: createdItems,
        totalGenerated: createdItems.length,
      };
    } catch (error) {
      // Rollback: Delete uploaded file and created items
      this.logger.error(
        `Error creating mindcard with AI: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );

      if (fonteArquivoUrl) {
        await this.r2Service.deleteFile(fonteArquivoUrl).catch(() => {});
      }

      // Delete created items (mindcard will cascade delete if DB supports it)
      for (const item of createdItems) {
        await this.itemMindcardRepository.deleteById(item.id).catch(() => {});
      }

      throw error;
    }
  }

  /**
   * Generate flashcards from file using Gemini AI
   */
  private async generateFlashcards(
    file: Express.Multer.File,
    mindcardId: string,
    createdItems: ItemMindcard[],
    intervaloPaginas?: string,
    requestTitle = false,
  ): Promise<{ tituloSugestao?: string | null }> {
    const aiResult = await this.geminiService.generateFlashcards(
      file.buffer,
      file.mimetype,
      intervaloPaginas,
      requestTitle,
    );

    this.logger.log(`AI generated ${aiResult.total} flashcards`);

    for (const flashcard of aiResult.flashcards) {
      const itemMindcard = new ItemMindcard({
        titulo: flashcard.frente.substring(0, 255),
        tipo: TipoCard.ABERTA,
        dificuldade: this.mapDificuldade(flashcard.dificuldade),
        pergunta: flashcard.frente,
        respostaCorreta: flashcard.verso,
        alternativaTexto: null,
        mindcardId,
      });

      await this.itemMindcardRepository.create(itemMindcard);
      createdItems.push(itemMindcard);
    }

    return { tituloSugestao: aiResult.tituloSugestao };
  }

  /**
   * Generate quiz questions from file using Gemini AI
   */
  private async generateQuiz(
    file: Express.Multer.File,
    mindcardId: string,
    createdItems: ItemMindcard[],
    intervaloPaginas?: string,
    requestTitle = false,
  ): Promise<{ tituloSugestao?: string | null }> {
    // Generate 10 questions by default
    const aiResult = await this.geminiService.generateQuestions(
      file.buffer,
      file.mimetype,
      10,
      intervaloPaginas,
      requestTitle,
    );

    this.logger.log(`AI generated ${aiResult.total} quiz questions`);

    for (const question of aiResult.questions) {
      // Format options as text for alternativa_texto field
      const alternativaTexto = question.opcoes
        .map((opt) => `${opt.id}. ${opt.texto}`)
        .join('\n');

      const itemMindcard = new ItemMindcard({
        titulo: question.pergunta.substring(0, 255),
        tipo: TipoCard.MULTIPLA_ESCOLHA,
        dificuldade: Dificuldade.MEDIO,
        pergunta: question.pergunta,
        respostaCorreta: question.respostaCorreta,
        alternativaTexto,
        mindcardId,
      });

      await this.itemMindcardRepository.create(itemMindcard);
      createdItems.push(itemMindcard);

      // Create opcao_resposta entries for each option
      for (const opcao of question.opcoes) {
        const opcaoResposta = new OpcaoResposta({
          texto: opcao.texto,
          correta: opcao.id === question.respostaCorreta,
          itemMindcardId: itemMindcard.id,
        });

        await this.opcaoRespostaRepository.create(opcaoResposta);
      }
    }

    return { tituloSugestao: aiResult.tituloSugestao };
  }

  /**
   * Map AI difficulty to ItemMindcard entity difficulty
   */
  private mapDificuldade(aiDificuldade: string): Dificuldade {
    const map: Record<string, Dificuldade> = {
      FACIL: Dificuldade.FACIL,
      MEDIO: Dificuldade.MEDIO,
      DIFICIL: Dificuldade.DIFICIL,
    };

    return map[aiDificuldade] || Dificuldade.MEDIO;
  }
}
