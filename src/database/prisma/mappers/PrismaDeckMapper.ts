import { Deck } from 'src/modules/deck/entities/deck';
import { Flashcard } from 'src/modules/deck/entities/Flashcard';
import type {
  deck as PrismaDeck,
  flashcard as PrismaFlashcard,
} from '@prisma/client';

type PrismaDeckWithFlashcards = PrismaDeck & {
  flashcard: PrismaFlashcard[];
};

export class PrismaDeckMapper {
  static toDomain(raw: PrismaDeckWithFlashcards): Deck {
    const flashcards = raw.flashcard.map(
      (fc) =>
        new Flashcard({
          id: fc.id,
          pergunta: fc.pergunta,
          resposta: fc.resposta,
          deckId: fc.deck_id,
        }),
    );

    return new Deck({
      id: raw.id,
      titulo: raw.titulo,
      usuarioId: raw.usuario_id,
      dataCriacao: raw.data_criacao,
      flashcards,
    });
  }

  static toPrisma(deck: Deck): {
    id?: string;
    titulo: string;
    usuario_id: string;
    data_criacao: Date;
  } {
    return {
      ...(deck.id ? { id: deck.id } : {}),
      titulo: deck.titulo,
      usuario_id: deck.usuarioId,
      data_criacao: deck.dataCriacao,
    };
  }
}
