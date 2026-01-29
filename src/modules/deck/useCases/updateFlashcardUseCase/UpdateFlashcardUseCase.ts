import { Injectable, NotFoundException } from '@nestjs/common';
import { Flashcard } from '../../entities/Flashcard';
import {
  FlashcardRepository,
  UpdateFlashcardData,
} from '../../repositories/FlashcardRepository';

export interface UpdateFlashcardRequest {
  id: string;
  data: UpdateFlashcardData;
}

@Injectable()
export class UpdateFlashcardUseCase {
  constructor(private readonly flashcardRepository: FlashcardRepository) {}

  async execute(request: UpdateFlashcardRequest): Promise<Flashcard> {
    const { id, data } = request;

    const existing = await this.flashcardRepository.findById(id);

    if (!existing) {
      throw new NotFoundException('Flashcard não encontrado');
    }

    return this.flashcardRepository.update(id, data);
  }
}
