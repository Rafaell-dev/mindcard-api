import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum TipoGeracao {
  FLASHCARDS = 'FLASHCARDS',
  QUIZ = 'QUIZ',
}

export class CreateMindcardBody {
  @ApiProperty({
    description: 'Título do mindcard',
    example: 'Matemática - Álgebra Linear',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'Prompt personalizado para a IA (opcional)',
    example: 'Foque em conceitos básicos para iniciantes',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  promptPersonalizado?: string;

  @ApiProperty({
    description: 'ID do usuário (UUID v7)',
    example: '8c40a29b-04f4-4960-965d-9e741f66288f',
    type: String,
    format: 'uuid',
  })
  @IsString()
  @IsNotEmpty()
  usuarioId: string;

  @ApiProperty({
    description: 'Tipo de conteúdo a ser gerado',
    enum: TipoGeracao,
    example: TipoGeracao.FLASHCARDS,
  })
  @IsEnum(TipoGeracao)
  @IsNotEmpty()
  tipoGeracao: TipoGeracao;
}
