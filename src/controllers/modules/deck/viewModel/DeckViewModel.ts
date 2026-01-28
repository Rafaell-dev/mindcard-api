import { Deck } from 'src/modules/deck/entities/deck';

export class DeckViewModel {
  static toHttp(deck: Deck) {
    return {
      id: deck.id,
      titulo: deck.titulo,
      usuarioId: deck.usuarioId,
      dataCriacao: deck.dataCriacao,
      flashcards: deck.flashcards.map((fc) => ({
        id: fc.id,
        pergunta: fc.pergunta,
        resposta: fc.resposta,
      })),
    };
  }
}
