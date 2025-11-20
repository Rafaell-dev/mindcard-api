import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { ListFaculdadesUseCase } from 'src/modules/faculdade/useCases/listFaculdadesUseCase/ListFaculdadesUseCase';
import { FaculdadeViewModel } from './viewModel/FaculdadeViewModel';
import { ListFaculdadesQuery } from './dto/ListFaculdadesQuery';

@ApiTags('Faculdade')
@Controller('faculdades')
export class FaculdadeController {
  constructor(private listFaculdadesUseCase: ListFaculdadesUseCase) {}

  @Get()
  @ApiOperation({
    summary: 'Buscar faculdades por nome ou sigla',
    description:
      'Retorna instituições de ensino superior ativas filtradas pelo termo informado (mínimo 3 caracteres).',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de faculdades retornada com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parâmetros de busca inválidos' })
  @ApiQuery({
    name: 'search',
    type: String,
    required: true,
    description: 'Termo de busca com pelo menos 3 caracteres',
    example: 'univers',
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: false,
    description: 'Número máximo de resultados (1-50). Valor padrão: 20',
  })
  async listGet(@Query() query: ListFaculdadesQuery) {
    const { search, limit = 20 } = query;
    const faculdades = await this.listFaculdadesUseCase.execute({
      search,
      limit,
    });

    return faculdades.map((faculdade) => FaculdadeViewModel.toHttp(faculdade));
  }
}
