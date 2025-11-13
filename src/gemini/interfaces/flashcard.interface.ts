import { IsString, IsEnum, IsArray, IsOptional } from 'class-validator';

/**
 * Difficulty levels for flashcards
 */
export enum FlashcardDificuldade {
  FACIL = 'FACIL',
  MEDIO = 'MEDIO',
  DIFICIL = 'DIFICIL',
}

/**
 * Flashcard structure for spaced repetition learning
 */
export class Flashcard {
  /**
   * Front side of the card (question/prompt)
   */
  @IsString()
  frente: string;

  /**
   * Back side of the card (answer/explanation)
   */
  @IsString()
  verso: string;

  /**
   * Difficulty level of the flashcard
   */
  @IsEnum(FlashcardDificuldade)
  dificuldade: FlashcardDificuldade;

  /**
   * Tags for categorization and filtering
   */
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}

/**
 * Response structure for flashcard generation
 */
export interface FlashcardGenerationResponse {
  /**
   * Generated flashcards
   */
  flashcards: Flashcard[];

  /**
   * Total number of flashcards generated
   */
  total: number;

  /**
   * Metadata about the generation process
   */
  metadata?: {
    model: string;
    tokensUsed?: number;
    processingTime?: number;
  };
}
