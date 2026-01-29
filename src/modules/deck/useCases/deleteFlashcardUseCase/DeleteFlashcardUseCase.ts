import { Injectable, NotFoundException } from '@nestjs/common';
import { FlashcardRepository } from '../../repositories/FlashcardRepository';

@Injectable()
export class DeleteFlashcardUseCase {
  constructor(private readonly flashcardRepository: FlashcardRepository) {}

  async execute(id: string): Promise<void> {
    const existing = await this.flashcardRepository.findById(id);

    if (!existing) {
      throw new NotFoundException('Flashcard não encontrado');
    }

    await this.flashcardRepository.delete(id);
  }
}
