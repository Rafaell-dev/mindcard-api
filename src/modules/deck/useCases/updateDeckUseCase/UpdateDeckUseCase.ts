import { Injectable, NotFoundException } from '@nestjs/common';
import { Deck } from '../../entities/deck';
import {
  DeckRepository,
  NewFlashcardData,
} from '../../repositories/DeckRepository';

export interface UpdateDeckRequest {
  id: string;
  titulo?: string;
  novosFlashcards?: NewFlashcardData[];
}

@Injectable()
export class UpdateDeckUseCase {
  constructor(private readonly deckRepository: DeckRepository) {}

  async execute(request: UpdateDeckRequest): Promise<Deck> {
    const { id, titulo, novosFlashcards } = request;

    const existing = await this.deckRepository.findById(id);

    if (!existing) {
      throw new NotFoundException('Deck não encontrado');
    }

    return this.deckRepository.update(id, { titulo, novosFlashcards });
  }
}
