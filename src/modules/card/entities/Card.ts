import { randomUUID } from 'crypto';

export enum TipoCard {
  ABERTA = 'ABERTA',
  MULTIPLA_ESCOLHA = 'MULTIPLA_ESCOLHA',
  ALTERNATIVA = 'ALTERNATIVA',
}

export enum Dificuldade {
  FACIL = 'FACIL',
  MEDIO = 'MEDIO',
  DIFICIL = 'DIFICIL',
}

export interface CardProps {
  id?: string;
  titulo: string;
  tipo: TipoCard;
  dificuldade: Dificuldade;
  pergunta: string;
  respostaCorreta: string | null;
  alternativaTexto: string | null;
  mindcardId: string;
}

export class Card {
  readonly id: string;
  titulo: string;
  tipo: TipoCard;
  dificuldade: Dificuldade;
  pergunta: string;
  respostaCorreta: string | null;
  alternativaTexto: string | null;
  readonly mindcardId: string;

  constructor(props: CardProps) {
    this.id = props.id ?? randomUUID();
    this.titulo = props.titulo;
    this.tipo = props.tipo;
    this.dificuldade = props.dificuldade;
    this.pergunta = props.pergunta;
    this.respostaCorreta = props.respostaCorreta;
    this.alternativaTexto = props.alternativaTexto;
    this.mindcardId = props.mindcardId;
  }
}
