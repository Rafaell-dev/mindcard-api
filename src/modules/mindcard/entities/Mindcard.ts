import { randomUUID } from 'crypto';

export interface MindcardProps {
  id?: string;
  titulo: string;
  fonteArquivo: string | null;
  promptPersonalizado: string | null;
  usuarioId: string;
  dataCriacao?: Date;
}

export class Mindcard {
  readonly id: string;
  titulo: string;
  fonteArquivo: string | null;
  promptPersonalizado: string | null;
  readonly usuarioId: string;
  readonly dataCriacao: Date;

  constructor(props: MindcardProps) {
    this.id = props.id ?? randomUUID();
    this.titulo = props.titulo;
    this.fonteArquivo = props.fonteArquivo;
    this.promptPersonalizado = props.promptPersonalizado;
    this.usuarioId = props.usuarioId;
    this.dataCriacao = props.dataCriacao ?? new Date();
  }
}
