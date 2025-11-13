import { IsOptional } from 'class-validator';

export class UpdateUserRequest {
  @IsOptional()
  email?: string;

  @IsOptional()
  nome?: string;

  @IsOptional()
  senha?: string;

  @IsOptional()
  faculdade?: string;

  @IsOptional()
  idioma?: string;
}
