import { Injectable, NotFoundException } from '@nestjs/common';
import { DeckRepository } from '../../repositories/DeckRepository';

@Injectable()
export class DeleteDeckUseCase {
  constructor(private readonly deckRepository: DeckRepository) {}

  async execute(id: string): Promise<void> {
    const existing = await this.deckRepository.findById(id);

    if (!existing) {
      throw new NotFoundException('Deck não encontrado');
    }

    await this.deckRepository.delete(id);
  }
}
