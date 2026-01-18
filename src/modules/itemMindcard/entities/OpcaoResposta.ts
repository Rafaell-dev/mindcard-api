import { randomUUID } from 'crypto';

export interface OpcaoRespostaProps {
  id?: string;
  texto: string;
  correta: boolean;
  itemMindcardId: string;
}

export class OpcaoResposta {
  readonly id: string;
  texto: string;
  correta: boolean;
  readonly itemMindcardId: string;

  constructor(props: OpcaoRespostaProps) {
    this.id = props.id ?? randomUUID();
    this.texto = props.texto;
    this.correta = props.correta;
    this.itemMindcardId = props.itemMindcardId;
  }
}
