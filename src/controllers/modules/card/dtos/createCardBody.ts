import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';
import { TipoCard, Dificuldade } from 'src/modules/card/entities/Card';

export class CreateCardBody {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsEnum(TipoCard)
  @IsNotEmpty()
  tipo: TipoCard;

  @IsEnum(Dificuldade)
  @IsNotEmpty()
  dificuldade: Dificuldade;

  @IsString()
  @IsNotEmpty()
  pergunta: string;

  @IsString()
  @IsOptional()
  respostaCorreta?: string | null;

  @IsString()
  @IsOptional()
  alternativaTexto?: string | null;

  @IsString()
  @IsNotEmpty()
  mindcardId: string;
}
