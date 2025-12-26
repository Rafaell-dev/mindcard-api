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
  @IsOptional()
  @IsString()
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
    description: 'ID da faculdade/universidade (opcional)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  faculdadeId?: string;

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
