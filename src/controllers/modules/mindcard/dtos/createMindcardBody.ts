import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMindcardBody {
  @ApiProperty({
    description: 'Título do mindcard (opcional)',
    example: 'Matemática - Álgebra Linear',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  titulo?: string;

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
    description: 'Intervalo de páginas a ser processado (opcional)',
    example: '1-10',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  intervaloPaginas?: string;

  @ApiProperty({
    description: 'Tipo(s) de questões a serem geradas',
    example: ['Alternativa'],
    enum: ['Alternativa', 'Múltipla escolha'],
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  tipoQuestoes: ('Alternativa' | 'Múltipla escolha')[];
}
