import { Injectable } from '@nestjs/common';
import { Deck } from 'src/modules/deck/entities/deck';
import {
  DeckRepository,
  UpdateDeckData,
} from 'src/modules/deck/repositories/DeckRepository';
import { PrismaService } from '../prisma.service';
import { PrismaDeckMapper } from '../mappers/PrismaDeckMapper';

@Injectable()
export class PrismaDeckRepository implements DeckRepository {
  constructor(private prisma: PrismaService) {}

  async create(deck: Deck): Promise<Deck> {
    const createdDeck = await this.prisma.deck.create({
      data: {
        titulo: deck.titulo,
        usuario_id: deck.usuarioId,
        data_criacao: deck.dataCriacao,
        flashcard: {
          create: deck.flashcards.map((fc) => ({
            pergunta: fc.pergunta,
            resposta: fc.resposta,
          })),
        },
      },
      include: {
        flashcard: true,
      },
    });

    return PrismaDeckMapper.toDomain(createdDeck);
  }

  async findById(id: string): Promise<Deck | null> {
    const deck = await this.prisma.deck.findUnique({
      where: { id },
      include: { flashcard: true },
    });

    if (!deck) return null;

    return PrismaDeckMapper.toDomain(deck);
  }

  async findByUsuarioId(usuarioId: string): Promise<Deck[]> {
    const decks = await this.prisma.deck.findMany({
      where: { usuario_id: usuarioId },
      include: { flashcard: true },
      orderBy: { data_criacao: 'desc' },
    });

    return decks.map((deck) => PrismaDeckMapper.toDomain(deck));
  }

  async update(id: string, data: UpdateDeckData): Promise<Deck> {
    const updated = await this.prisma.deck.update({
      where: { id },
      data: {
        ...(data.titulo !== undefined && { titulo: data.titulo }),
        ...(data.novosFlashcards &&
          data.novosFlashcards.length > 0 && {
            flashcard: {
              create: data.novosFlashcards.map((fc) => ({
                pergunta: fc.pergunta,
                resposta: fc.resposta,
              })),
            },
          }),
      },
      include: { flashcard: true },
    });

    return PrismaDeckMapper.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.deck.delete({
      where: { id },
    });
  }
}
