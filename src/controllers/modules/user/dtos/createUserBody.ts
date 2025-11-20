import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserBody {
  @ApiProperty({
    description: 'Email do usuário',
    example: 'usuario@exemplo.com',
    type: String,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'João Silva',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Senha do usuário (mínimo 6 caracteres)',
    example: 'senha123',
    type: String,
    minLength: 6,
  })
  @IsString()
  @IsNotEmpty()
  senha: string;

  @ApiProperty({
    description: 'Nome da faculdade/universidade (opcional)',
    example: 'Universidade Federal do Brasil',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  faculdade?: string;

  @ApiProperty({
    description: 'Idioma preferido (opcional)',
    example: 'pt-BR',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  idioma?: string;
}
