import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TipoCard, Dificuldade } from 'src/modules/card/entities/Card';

export class UpdateCardBody {
  @IsString()
  @IsOptional()
  titulo?: string;

  @IsEnum(TipoCard)
  @IsOptional()
  tipo?: TipoCard;

  @IsEnum(Dificuldade)
  @IsOptional()
  dificuldade?: Dificuldade;

  @IsString()
  @IsOptional()
  pergunta?: string;

  @IsString()
  @IsOptional()
  respostaCorreta?: string | null;

  @IsString()
  @IsOptional()
  alternativaTexto?: string | null;
}
