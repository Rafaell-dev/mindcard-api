import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateFlashcardDto {
  @ApiProperty({
    description: 'Pergunta do flashcard',
    example: 'O que é TypeScript?',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'A pergunta não pode ser vazia' })
  pergunta?: string;

  @ApiProperty({
    description: 'Resposta do flashcard',
    example: 'Superset tipado de JavaScript',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'A resposta não pode ser vazia' })
  resposta?: string;
}
