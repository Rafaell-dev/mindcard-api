import { Injectable } from '@nestjs/common';
import { PerguntaOnboardingRepository } from '../../repositories/PerguntaOnboardingRepository';
import { PerguntaOnboarding } from '../../entities/PerguntaOnboarding';

@Injectable()
export class ListPerguntasOnboardingUseCase {
  constructor(private perguntaRepository: PerguntaOnboardingRepository) {}

  async execute(): Promise<PerguntaOnboarding[]> {
    return this.perguntaRepository.findAllAtivas();
  }
}
