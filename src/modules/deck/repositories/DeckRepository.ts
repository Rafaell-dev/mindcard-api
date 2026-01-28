import { Deck } from '../entities/deck';

export abstract class DeckRepository {
  abstract create(deck: Deck): Promise<Deck>;
  abstract findById(id: string): Promise<Deck | null>;
  abstract findByUsuarioId(usuarioId: string): Promise<Deck[]>;
}
