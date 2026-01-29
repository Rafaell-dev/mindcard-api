import { Flashcard } from '../entities/Flashcard';

export interface UpdateFlashcardData {
  pergunta?: string;
  resposta?: string;
}

export abstract class FlashcardRepository {
  abstract findById(id: string): Promise<Flashcard | null>;
  abstract update(id: string, data: UpdateFlashcardData): Promise<Flashcard>;
  abstract delete(id: string): Promise<void>;
}
