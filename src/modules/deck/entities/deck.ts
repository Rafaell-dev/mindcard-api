import { Flashcard } from './Flashcard';

export interface DeckProps {
  id?: string;
  titulo: string;
  usuarioId: string;
  dataCriacao?: Date;
  flashcards?: Flashcard[];
}

export class Deck {
  readonly id: string;
  titulo: string;
  usuarioId: string;
  dataCriacao: Date;
  flashcards: Flashcard[];

  constructor(props: DeckProps) {
    this.id = props.id ?? '';
    this.titulo = props.titulo;
    this.usuarioId = props.usuarioId;
    this.dataCriacao = props.dataCriacao ?? new Date();
    this.flashcards = props.flashcards ?? [];
  }
}
