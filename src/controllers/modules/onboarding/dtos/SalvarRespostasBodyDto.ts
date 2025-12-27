import { IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class RespostaDto {
  @ApiProperty({
    description: 'ID da pergunta',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
  })
  @IsString()
  perguntaId: string;

  @ApiProperty({
    description:
      'Resposta em texto livre (para perguntas do tipo TEXTO_LIVRE ou DATA)',
    example: '2000-01-15',
    required: false,
  })
  @IsOptional()
  @IsString()
  respostaTexto?: string;

  @ApiProperty({
    description:
      'ID da opção escolhida (para perguntas do tipo MULTIPLA_ESCOLHA)',
    example: '019a8588-9582-72f8-ac5e-231e942f52d9',
    required: false,
  })
  @IsOptional()
  @IsString()
  opcaoId?: string;
}

export class SalvarRespostasBodyDto {
  @ApiProperty({
    description: 'Array de respostas do usuário',
    type: [RespostaDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RespostaDto)
  respostas: RespostaDto[];
}
