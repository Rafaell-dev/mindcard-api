import { randomUUID } from 'crypto';

export enum TipoResposta {
  MULTIPLA_ESCOLHA = 'MULTIPLA_ESCOLHA',
  TEXTO_LIVRE = 'TEXTO_LIVRE',
  DATA = 'DATA',
}

export interface OpcaoPerguntaProps {
  id?: string;
  texto: string;
  valor: string;
  ordem: number;
}

export class OpcaoPergunta {
  readonly id: string;
  texto: string;
  valor: string;
  ordem: number;

  constructor(props: OpcaoPerguntaProps) {
    this.id = props.id ?? randomUUID();
    this.texto = props.texto;
    this.valor = props.valor;
    this.ordem = props.ordem;
  }
}

export interface PerguntaOnboardingProps {
  id?: string;
  ordem: number;
  texto: string;
  tipoResposta: TipoResposta;
  obrigatoria?: boolean;
  ativa?: boolean;
  dataCriacao?: Date;
  opcoes?: OpcaoPergunta[];
}

export class PerguntaOnboarding {
  readonly id: string;
  ordem: number;
  texto: string;
  tipoResposta: TipoResposta;
  obrigatoria: boolean;
  ativa: boolean;
  readonly dataCriacao: Date;
  opcoes: OpcaoPergunta[];

  constructor(props: PerguntaOnboardingProps) {
    this.id = props.id ?? randomUUID();
    this.ordem = props.ordem;
    this.texto = props.texto;
    this.tipoResposta = props.tipoResposta;
    this.obrigatoria = props.obrigatoria ?? true;
    this.ativa = props.ativa ?? true;
    this.dataCriacao = props.dataCriacao ?? new Date();
    this.opcoes = props.opcoes ?? [];
  }
}
