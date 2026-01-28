export interface FlashcardProps {
  id?: string;
  pergunta: string;
  resposta: string;
  deckId?: string;
}

export class Flashcard {
  readonly id: string;
  pergunta: string;
  resposta: string;
  deckId: string;

  constructor(props: FlashcardProps) {
    this.id = props.id ?? '';
    this.pergunta = props.pergunta;
    this.resposta = props.resposta;
    this.deckId = props.deckId ?? '';
  }
}
