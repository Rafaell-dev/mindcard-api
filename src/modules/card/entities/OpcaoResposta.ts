import { randomUUID } from 'crypto';

export interface OpcaoRespostaProps {
  id?: string;
  texto: string;
  correta: boolean;
  cardId: string;
}

export class OpcaoResposta {
  readonly id: string;
  texto: string;
  correta: boolean;
  readonly cardId: string;

  constructor(props: OpcaoRespostaProps) {
    this.id = props.id ?? randomUUID();
    this.texto = props.texto;
    this.correta = props.correta;
    this.cardId = props.cardId;
  }
}
