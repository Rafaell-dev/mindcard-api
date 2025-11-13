import { IsString, IsArray, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * Multiple choice option
 */
export class QuestionOption {
  /**
   * Option identifier (A, B, C, D)
   */
  @IsString()
  id: string;

  /**
   * Option text
   */
  @IsString()
  texto: string;
}

/**
 * Question structure for assessments and quizzes
 */
export class Question {
  /**
   * The question text
   */
  @IsString()
  pergunta: string;

  /**
   * Available answer options
   */
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionOption)
  opcoes: QuestionOption[];

  /**
   * Correct answer identifier
   */
  @IsString()
  respostaCorreta: string;

  /**
   * Explanation for the correct answer
   */
  @IsString()
  @IsOptional()
  explicacao?: string;

  /**
   * Tags for categorization
   */
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
}

/**
 * Response structure for question generation
 */
export interface QuestionGenerationResponse {
  /**
   * Generated questions
   */
  questions: Question[];

  /**
   * Total number of questions generated
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
