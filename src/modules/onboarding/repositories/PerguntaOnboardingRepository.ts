import { PerguntaOnboarding } from '../entities/PerguntaOnboarding';

export abstract class PerguntaOnboardingRepository {
  abstract findAllAtivas(): Promise<PerguntaOnboarding[]>;
  abstract findById(id: string): Promise<PerguntaOnboarding | null>;
}
