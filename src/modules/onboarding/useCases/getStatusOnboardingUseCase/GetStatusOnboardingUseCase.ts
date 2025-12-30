import { Injectable } from '@nestjs/common';
import { RespostaOnboardingRepository } from '../../repositories/RespostaOnboardingRepository';
import { PerguntaOnboardingRepository } from '../../repositories/PerguntaOnboardingRepository';
import { VerificarOnboardingCompletoUseCase } from '../verificarOnboardingCompletoUseCase/VerificarOnboardingCompletoUseCase';

export interface StatusOnboarding {
  completo: boolean;
  totalPerguntas: number;
  perguntasRespondidas: number;
  perguntasPendentes: string[];
}

@Injectable()
export class GetStatusOnboardingUseCase {
  constructor(
    private respostaRepository: RespostaOnboardingRepository,
    private perguntaRepository: PerguntaOnboardingRepository,
    private verificarCompletoUseCase: VerificarOnboardingCompletoUseCase,
  ) {}

  async execute(usuarioId: string): Promise<StatusOnboarding> {
    const perguntas = await this.perguntaRepository.findAllAtivas();
    const respostas = await this.respostaRepository.findByUsuarioId(usuarioId);
    const completo = await this.verificarCompletoUseCase.execute(usuarioId);

    const perguntasRespondidasIds = new Set(respostas.map((r) => r.perguntaId));

    const perguntasPendentes = perguntas
      .filter((p) => !perguntasRespondidasIds.has(p.id))
      .map((p) => p.id);

    return {
      completo,
      totalPerguntas: perguntas.length,
      perguntasRespondidas: respostas.length,
      perguntasPendentes,
    };
  }
}
