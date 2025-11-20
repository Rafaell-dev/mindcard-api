import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsInt,
  IsOptional,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class ListFaculdadesQuery {
  @ApiProperty({
    description: 'Termo de busca com pelo menos 3 caracteres',
    example: 'univers',
    minLength: 3,
  })
  @Transform(({ value }) => String(value ?? '').trim())
  @IsString()
  @MinLength(3)
  search: string;

  @ApiProperty({
    description: 'Quantidade máxima de resultados retornados',
    required: false,
    default: 20,
    minimum: 1,
    maximum: 50,
  })
  @IsOptional()
  @Transform(({ value }) =>
    value === undefined || value === null || value === ''
      ? undefined
      : Number(value),
  )
  @IsInt()
  @Min(1)
  @Max(50)
  limit?: number;
}
