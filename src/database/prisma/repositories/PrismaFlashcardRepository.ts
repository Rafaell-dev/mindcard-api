import { Injectable } from '@nestjs/common';
import { Flashcard } from 'src/modules/deck/entities/Flashcard';
import {
  FlashcardRepository,
  UpdateFlashcardData,
} from 'src/modules/deck/repositories/FlashcardRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaFlashcardRepository implements FlashcardRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: string): Promise<Flashcard | null> {
    const flashcard = await this.prisma.flashcard.findUnique({
      where: { id },
    });

    if (!flashcard) return null;

    return new Flashcard({
      id: flashcard.id,
      pergunta: flashcard.pergunta,
      resposta: flashcard.resposta,
      deckId: flashcard.deck_id,
    });
  }

  async update(id: string, data: UpdateFlashcardData): Promise<Flashcard> {
    const updated = await this.prisma.flashcard.update({
      where: { id },
      data: {
        ...(data.pergunta !== undefined && { pergunta: data.pergunta }),
        ...(data.resposta !== undefined && { resposta: data.resposta }),
      },
    });

    return new Flashcard({
      id: updated.id,
      pergunta: updated.pergunta,
      resposta: updated.resposta,
      deckId: updated.deck_id,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.flashcard.delete({
      where: { id },
    });
  }
}
