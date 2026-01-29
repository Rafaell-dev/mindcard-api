import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
} from 'class-validator';

export class NewFlashcardDto {
  @ApiProperty({
    description: 'Pergunta do flashcard',
    example: 'O que é NestJS?',
  })
  @IsString()
  @IsNotEmpty({ message: 'A pergunta é obrigatória' })
  pergunta: string;

  @ApiProperty({
    description: 'Resposta do flashcard',
    example: 'Framework Node.js progressivo',
  })
  @IsString()
  @IsNotEmpty({ message: 'A resposta é obrigatória' })
  resposta: string;
}

export class UpdateDeckDto {
  @ApiProperty({
    description: 'Título do deck',
    example: 'Novo título do deck',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'O título não pode ser vazio' })
  titulo?: string;

  @ApiProperty({
    description: 'Novos flashcards a serem adicionados ao deck',
    type: [NewFlashcardDto],
    required: false,
    example: [{ pergunta: 'Nova pergunta?', resposta: 'Nova resposta' }],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => NewFlashcardDto)
  novosFlashcards?: NewFlashcardDto[];
}
