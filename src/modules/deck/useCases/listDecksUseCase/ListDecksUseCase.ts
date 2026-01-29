import { Injectable } from '@nestjs/common';
import { Deck } from '../../entities/deck';
import { DeckRepository } from '../../repositories/DeckRepository';

@Injectable()
export class ListDecksUseCase {
  constructor(private readonly deckRepository: DeckRepository) {}

  async execute(usuarioId: string): Promise<Deck[]> {
    return this.deckRepository.findByUsuarioId(usuarioId);
  }
}
