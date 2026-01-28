import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';

export class FlashcardDto {
  @ApiProperty({
    description: 'Pergunta do flashcard',
    example: 'O que é NestJS?',
  })
  @IsString()
  @IsNotEmpty({ message: 'A pergunta é obrigatória' })
  pergunta: string;

  @ApiProperty({
    description: 'Resposta do flashcard',
    example: 'Framework Node.js progressivo para aplicações server-side',
  })
  @IsString()
  @IsNotEmpty({ message: 'A resposta é obrigatória' })
  resposta: string;
}

export class CreateDeckDto {
  @ApiProperty({
    description: 'Título do deck',
    example: 'Estudo de NestJS',
  })
  @IsString()
  @IsNotEmpty({ message: 'O título é obrigatório' })
  titulo: string;

  @ApiProperty({
    description: 'Lista de flashcards (mínimo 1)',
    type: [FlashcardDto],
    example: [
      {
        pergunta: 'O que é NestJS?',
        resposta: 'Framework Node.js progressivo',
      },
    ],
  })
  @IsArray()
  @ArrayMinSize(1, { message: 'O deck deve conter pelo menos um flashcard' })
  @ValidateNested({ each: true })
  @Type(() => FlashcardDto)
  flashcards: FlashcardDto[];
}
