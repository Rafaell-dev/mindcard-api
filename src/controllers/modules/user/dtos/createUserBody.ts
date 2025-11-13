import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserBody {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsOptional()
  @IsString()
  faculdade?: string;

  @IsOptional()
  @IsString()
  idioma?: string;
}
