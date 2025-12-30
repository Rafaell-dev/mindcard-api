import { randomUUID } from 'crypto';

export interface RespostaOnboardingProps {
  id?: string;
  usuarioId: string;
  perguntaId: string;
  respostaTexto?: string;
  opcaoId?: string;
  dataResposta?: Date;
}

export class RespostaOnboarding {
  readonly id: string;
  usuarioId: string;
  perguntaId: string;
  respostaTexto?: string;
  opcaoId?: string;
  readonly dataResposta: Date;

  constructor(props: RespostaOnboardingProps) {
    this.id = props.id ?? randomUUID();
    this.usuarioId = props.usuarioId;
    this.perguntaId = props.perguntaId;
    this.respostaTexto = props.respostaTexto;
    this.opcaoId = props.opcaoId;
    this.dataResposta = props.dataResposta ?? new Date();
  }
}
