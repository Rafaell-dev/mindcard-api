import { Injectable, BadRequestException } from '@nestjs/common';
import { Deck } from '../../entities/deck';
import { Flashcard } from '../../entities/Flashcard';
import { DeckRepository } from '../../repositories/DeckRepository';

export interface CreateDeckRequest {
  titulo: string;
  usuarioId: string;
  flashcards: Array<{
    pergunta: string;
    resposta: string;
  }>;
}

@Injectable()
export class CreateDeckUseCase {
  constructor(private readonly deckRepository: DeckRepository) {}

  async execute(request: CreateDeckRequest): Promise<Deck> {
    const { titulo, usuarioId, flashcards } = request;

    if (!flashcards || flashcards.length === 0) {
      throw new BadRequestException(
        'Um deck deve conter pelo menos um flashcard',
      );
    }

    const flashcardEntities = flashcards.map(
      (fc) =>
        new Flashcard({
          pergunta: fc.pergunta,
          resposta: fc.resposta,
        }),
    );

    const deck = new Deck({
      titulo,
      usuarioId,
      flashcards: flashcardEntities,
    });

    return this.deckRepository.create(deck);
  }
}
