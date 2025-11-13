import { IsOptional, IsString } from 'class-validator';

export class UpdateMindcardBody {
  @IsOptional()
  @IsString()
  titulo?: string;

  @IsOptional()
  @IsString()
  fonteArquivo?: string;

  @IsOptional()
  @IsString()
  promptPersonalizado?: string;
}
