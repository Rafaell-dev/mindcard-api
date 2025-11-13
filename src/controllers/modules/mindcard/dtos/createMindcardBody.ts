import { IsNotEmpty, IsOptional, IsString, IsEnum } from 'class-validator';

export enum TipoGeracao {
  FLASHCARDS = 'FLASHCARDS',
  QUIZ = 'QUIZ',
}

export class CreateMindcardBody {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsOptional()
  @IsString()
  promptPersonalizado?: string;

  @IsString()
  @IsNotEmpty()
  usuarioId: string;

  @IsEnum(TipoGeracao)
  @IsNotEmpty()
  tipoGeracao: TipoGeracao;
}
