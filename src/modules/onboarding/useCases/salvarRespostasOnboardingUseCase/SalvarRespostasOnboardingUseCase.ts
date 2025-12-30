import { Injectable } from '@nestjs/common';
import {
  RespostaOnboardingRepository,
  SalvarRespostaData,
} from '../../repositories/RespostaOnboardingRepository';
import { RespostaOnboarding } from '../../entities/RespostaOnboarding';
import { UserRepository } from 'src/modules/user/repositories/UserRepository';
import { VerificarOnboardingCompletoUseCase } from '../verificarOnboardingCompletoUseCase/VerificarOnboardingCompletoUseCase';

interface SalvarRespostasRequest {
  usuarioId: string;
  respostas: Array<{
    perguntaId: string;
    respostaTexto?: string;
    opcaoId?: string;
  }>;
}

@Injectable()
export class SalvarRespostasOnboardingUseCase {
  constructor(
    private respostaRepository: RespostaOnboardingRepository,
    private userRepository: UserRepository,
    private verificarOnboardingUseCase: VerificarOnboardingCompletoUseCase,
  ) {}

  async execute(
    request: SalvarRespostasRequest,
  ): Promise<RespostaOnboarding[]> {
    const { usuarioId, respostas } = request;

    // Salvar respostas
    const respostasData: SalvarRespostaData[] = respostas.map((r) => ({
      usuarioId,
      perguntaId: r.perguntaId,
      respostaTexto: r.respostaTexto,
      opcaoId: r.opcaoId,
    }));

    const saved = await this.respostaRepository.salvarRespostas(respostasData);

    // Verificar se onboarding está completo e atualizar flag
    const isCompleto = await this.verificarOnboardingUseCase.execute(usuarioId);

    if (isCompleto) {
      await this.userRepository.updateById(usuarioId, {
        onboardingCompleto: true,
      });
    }

    return saved;
  }
}
