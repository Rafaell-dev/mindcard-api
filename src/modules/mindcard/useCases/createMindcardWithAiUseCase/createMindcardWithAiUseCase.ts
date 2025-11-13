import { Injectable, Logger } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { CardRepository } from 'src/modules/card/repositories/CardRepository';
import { OpcaoRespostaRepository } from 'src/modules/card/repositories/OpcaoRespostaRepository';
import { Mindcard } from '../../entities/Mindcard';
import { Card, TipoCard, Dificuldade } from 'src/modules/card/entities/Card';
import { OpcaoResposta } from 'src/modules/card/entities/OpcaoResposta';
import { v7 as uuidV7 } from 'uuid';
import { R2Service } from 'src/r2/r2.service';
import { GeminiService } from 'src/gemini/gemini.service';
import { BadRequestException } from '@nestjs/common';

interface CreateMindcardWithAiRequest {
  titulo: string;
  fonteArquivo: Express.Multer.File;
  promptPersonalizado?: string | null;
  usuarioId: string;
  tipoGeracao: 'FLASHCARDS' | 'QUIZ';
}

/**
 * Use case for creating a mindcard with AI-generated cards
 * Integrates file upload, AI generation, and card creation in a single transaction
 */
@Injectable()
export class CreateMindcardWithAiUseCase {
  private readonly logger = new Logger(CreateMindcardWithAiUseCase.name);

  constructor(
    private mindcardRepository: MindcardRepository,
    private cardRepository: CardRepository,
    private opcaoRespostaRepository: OpcaoRespostaRepository,
    private r2Service: R2Service,
    private geminiService: GeminiService,
  ) {}

  async execute({
    titulo,
    fonteArquivo,
    promptPersonalizado,
    usuarioId,
    tipoGeracao,
  }: CreateMindcardWithAiRequest) {
    if (!fonteArquivo) {
      throw new BadRequestException(
        'Arquivo é obrigatório para geração com IA',
      );
    }

    const mindcardId = uuidV7();
    let fonteArquivoUrl: string | null = null;
    const createdCards: Card[] = [];

    try {
      // Step 1: Upload file to R2
      this.logger.log(`Uploading file for mindcard ${mindcardId}`);
      fonteArquivoUrl = await this.r2Service.uploadFileFromMulter(
        fonteArquivo,
        `mindcards/${usuarioId}_${mindcardId}`,
      );

      // Step 2: Create mindcard
      this.logger.log(`Creating mindcard ${mindcardId}`);
      const mindcard = new Mindcard({
        id: mindcardId,
        titulo,
        fonteArquivo: fonteArquivoUrl,
        promptPersonalizado: promptPersonalizado ?? null,
        usuarioId,
        dataCriacao: new Date(),
      });

      await this.mindcardRepository.create(mindcard);

      // Step 3: Generate cards with AI
      this.logger.log(
        `Generating ${tipoGeracao} for mindcard ${mindcardId} using AI`,
      );

      if (tipoGeracao === 'FLASHCARDS') {
        await this.generateFlashcards(fonteArquivo, mindcardId, createdCards);
      } else if (tipoGeracao === 'QUIZ') {
        await this.generateQuiz(fonteArquivo, mindcardId, createdCards);
      }

      this.logger.log(
        `Successfully created mindcard ${mindcardId} with ${createdCards.length} cards`,
      );

      return {
        mindcard,
        cards: createdCards,
        totalGenerated: createdCards.length,
      };
    } catch (error) {
      // Rollback: Delete uploaded file and created cards
      this.logger.error(
        `Error creating mindcard with AI: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );

      if (fonteArquivoUrl) {
        await this.r2Service.deleteFile(fonteArquivoUrl).catch(() => {});
      }

      // Delete created cards (mindcard will cascade delete if DB supports it)
      for (const card of createdCards) {
        await this.cardRepository.deleteById(card.id).catch(() => {});
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
    createdCards: Card[],
  ): Promise<void> {
    const aiResult = await this.geminiService.generateFlashcards(
      file.buffer,
      file.mimetype,
    );

    this.logger.log(`AI generated ${aiResult.total} flashcards`);

    for (const flashcard of aiResult.flashcards) {
      const card = new Card({
        titulo: flashcard.frente.substring(0, 255),
        tipo: TipoCard.ABERTA,
        dificuldade: this.mapDificuldade(flashcard.dificuldade),
        pergunta: flashcard.frente,
        respostaCorreta: flashcard.verso,
        alternativaTexto: null,
        mindcardId,
      });

      await this.cardRepository.create(card);
      createdCards.push(card);
    }
  }

  /**
   * Generate quiz questions from file using Gemini AI
   */
  private async generateQuiz(
    file: Express.Multer.File,
    mindcardId: string,
    createdCards: Card[],
  ): Promise<void> {
    // Generate 10 questions by default
    const aiResult = await this.geminiService.generateQuestions(
      file.buffer,
      file.mimetype,
      10,
    );

    this.logger.log(`AI generated ${aiResult.total} quiz questions`);

    for (const question of aiResult.questions) {
      // Format options as text for alternativa_texto field
      const alternativaTexto = question.opcoes
        .map((opt) => `${opt.id}. ${opt.texto}`)
        .join('\n');

      const card = new Card({
        titulo: question.pergunta.substring(0, 255),
        tipo: TipoCard.MULTIPLA_ESCOLHA,
        dificuldade: Dificuldade.MEDIO,
        pergunta: question.pergunta,
        respostaCorreta: question.respostaCorreta,
        alternativaTexto,
        mindcardId,
      });

      await this.cardRepository.create(card);
      createdCards.push(card);

      // Create opcao_resposta entries for each option
      for (const opcao of question.opcoes) {
        const opcaoResposta = new OpcaoResposta({
          texto: opcao.texto,
          correta: opcao.id === question.respostaCorreta,
          cardId: card.id,
        });

        await this.opcaoRespostaRepository.create(opcaoResposta);
      }
    }
  }

  /**
   * Map AI difficulty to Card entity difficulty
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
