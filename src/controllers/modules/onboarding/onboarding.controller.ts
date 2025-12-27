import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { IsPublic } from 'src/modules/auth/decorators/isPublicDecorator';
import { CurrentUser } from 'src/modules/auth/decorators';
import type { AuthenticatedUser } from 'src/modules/auth/decorators';
import { ListPerguntasOnboardingUseCase } from 'src/modules/onboarding/useCases/listPerguntasOnboardingUseCase/ListPerguntasOnboardingUseCase';
import { SalvarRespostasOnboardingUseCase } from 'src/modules/onboarding/useCases/salvarRespostasOnboardingUseCase/SalvarRespostasOnboardingUseCase';
import { GetStatusOnboardingUseCase } from 'src/modules/onboarding/useCases/getStatusOnboardingUseCase/GetStatusOnboardingUseCase';
import { SalvarRespostasBodyDto } from './dtos/SalvarRespostasBodyDto';
import { PerguntaOnboardingViewModel } from './viewModel/PerguntaOnboardingViewModel';
import { StatusOnboardingViewModel } from './viewModel/StatusOnboardingViewModel';

@ApiTags('Onboarding')
@Controller('onboarding')
export class OnboardingController {
  constructor(
    private listPerguntasUseCase: ListPerguntasOnboardingUseCase,
    private salvarRespostasUseCase: SalvarRespostasOnboardingUseCase,
    private getStatusUseCase: GetStatusOnboardingUseCase,
  ) {}

  @IsPublic()
  @Get('perguntas')
  @ApiOperation({
    summary: 'Listar perguntas do onboarding',
    description:
      'Retorna todas as perguntas ativas do questionário de onboarding',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de perguntas retornada com sucesso',
  })
  async listPerguntas() {
    const perguntas = await this.listPerguntasUseCase.execute();
    return perguntas.map((p) => PerguntaOnboardingViewModel.toHttp(p));
  }

  @Post('responder')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Salvar respostas do onboarding',
    description:
      'Salva as respostas do usuário e atualiza o status de conclusão',
  })
  @ApiResponse({
    status: 201,
    description: 'Respostas salvas com sucesso',
  })
  @ApiResponse({
    status: 401,
    description: 'Não autenticado',
  })
  async salvarRespostas(
    @CurrentUser() user: AuthenticatedUser,
    @Body() body: SalvarRespostasBodyDto,
  ) {
    await this.salvarRespostasUseCase.execute({
      usuarioId: user.userId,
      respostas: body.respostas,
    });

    return {
      success: true,
      message: 'Respostas salvas com sucesso',
    };
  }

  @Get('status')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Obter status do onboarding',
    description: 'Retorna o status de conclusão do onboarding do usuário',
  })
  @ApiResponse({
    status: 200,
    description: 'Status retornado com sucesso',
  })
  @ApiResponse({
    status: 401,
    description: 'Não autenticado',
  })
  async getStatus(@CurrentUser() user: AuthenticatedUser) {
    const status = await this.getStatusUseCase.execute(user.userId);
    return StatusOnboardingViewModel.toHttp(status);
  }
}
