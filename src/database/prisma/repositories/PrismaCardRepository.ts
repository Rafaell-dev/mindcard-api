import { Injectable } from '@nestjs/common';
import { Card, type CardProps } from 'src/modules/card/entities/Card';
import { CardRepository } from 'src/modules/card/repositories/CardRepository';
import { PrismaCardMapper } from '../mappers/PrismaCardMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaCardRepository implements CardRepository {
  constructor(private prisma: PrismaService) {}

  async create(card: Card): Promise<void> {
    const cardRaw = PrismaCardMapper.toPrisma(card);

    await this.prisma.card.create({
      data: cardRaw,
    });
  }

  async findById(id: string): Promise<Card | null> {
    const card = await this.prisma.card.findUnique({
      where: {
        id,
      },
    });

    if (!card) return null;

    return PrismaCardMapper.toDomain(card);
  }

  async findByMindcardId(mindcardId: string): Promise<Card[]> {
    const cards = await this.prisma.card.findMany({
      where: {
        mindcard_id: mindcardId,
      },
      orderBy: {
        titulo: 'asc',
      },
    });

    return cards.map((card) => PrismaCardMapper.toDomain(card));
  }

  async updateById(id: string, card: Partial<CardProps>): Promise<Card | null> {
    const cardRaw = PrismaCardMapper.toPrismaPartial(card);

    const updatedCard = await this.prisma.card.update({
      where: {
        id,
      },
      data: cardRaw,
    });

    if (!updatedCard) return null;

    return PrismaCardMapper.toDomain(updatedCard);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.card.delete({
      where: {
        id,
      },
    });
  }
}
