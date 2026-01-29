import { Deck } from '../entities/deck';

export interface NewFlashcardData {
  pergunta: string;
  resposta: string;
}

export interface UpdateDeckData {
  titulo?: string;
  novosFlashcards?: NewFlashcardData[];
}

export abstract class DeckRepository {
  abstract create(deck: Deck): Promise<Deck>;
  abstract findById(id: string): Promise<Deck | null>;
  abstract findByUsuarioId(usuarioId: string): Promise<Deck[]>;
  abstract update(id: string, data: UpdateDeckData): Promise<Deck>;
  abstract delete(id: string): Promise<void>;
}
