import { RespostaOnboarding } from '../entities/RespostaOnboarding';

export interface SalvarRespostaData {
  usuarioId: string;
  perguntaId: string;
  respostaTexto?: string;
  opcaoId?: string;
}

export abstract class RespostaOnboardingRepository {
  abstract salvarResposta(
    data: SalvarRespostaData,
  ): Promise<RespostaOnboarding>;
  abstract salvarRespostas(
    respostas: SalvarRespostaData[],
  ): Promise<RespostaOnboarding[]>;
  abstract findByUsuarioId(usuarioId: string): Promise<RespostaOnboarding[]>;
  abstract countRespostasObrigatorias(usuarioId: string): Promise<number>;
}
