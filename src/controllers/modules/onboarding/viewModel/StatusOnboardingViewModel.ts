import { StatusOnboarding } from 'src/modules/onboarding/useCases/getStatusOnboardingUseCase/GetStatusOnboardingUseCase';

export class StatusOnboardingViewModel {
  static toHttp(status: StatusOnboarding) {
    return {
      completo: status.completo,
      totalPerguntas: status.totalPerguntas,
      perguntasRespondidas: status.perguntasRespondidas,
      perguntasPendentes: status.perguntasPendentes,
    };
  }
}
