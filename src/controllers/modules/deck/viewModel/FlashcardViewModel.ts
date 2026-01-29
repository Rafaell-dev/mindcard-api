import { Flashcard } from 'src/modules/deck/entities/Flashcard';

export class FlashcardViewModel {
  static toHttp(flashcard: Flashcard) {
    return {
      id: flashcard.id,
      pergunta: flashcard.pergunta,
      resposta: flashcard.resposta,
      deckId: flashcard.deckId,
    };
  }
}
