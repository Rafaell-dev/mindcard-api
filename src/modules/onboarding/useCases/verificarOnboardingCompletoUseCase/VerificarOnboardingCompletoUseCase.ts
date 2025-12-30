import { Injectable } from '@nestjs/common';
import { RespostaOnboardingRepository } from '../../repositories/RespostaOnboardingRepository';
import { PerguntaOnboardingRepository } from '../../repositories/PerguntaOnboardingRepository';

@Injectable()
export class VerificarOnboardingCompletoUseCase {
  constructor(
    private respostaRepository: RespostaOnboardingRepository,
    private perguntaRepository: PerguntaOnboardingRepository,
  ) {}

  async execute(usuarioId: string): Promise<boolean> {
    // Contar perguntas obrigatórias ativas
    const perguntasAtivas = await this.perguntaRepository.findAllAtivas();
    const perguntasObrigatoriasCount = perguntasAtivas.filter(
      (p) => p.obrigatoria,
    ).length;

    // Contar respostas do usuário para perguntas obrigatórias
    const respostasCount =
      await this.respostaRepository.countRespostasObrigatorias(usuarioId);

    return respostasCount >= perguntasObrigatoriasCount;
  }
}
