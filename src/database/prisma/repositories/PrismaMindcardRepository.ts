import { Injectable } from '@nestjs/common';
import {
  Mindcard,
  type MindcardProps,
} from 'src/modules/mindcard/entities/Mindcard';
import { MindcardRepository } from 'src/modules/mindcard/repositories/MindcardRepository';
import { PrismaMindcardMapper } from '../mappers/PrismaMindcardMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaMindcardRepository implements MindcardRepository {
  constructor(private prisma: PrismaService) {}

  async create(mindcard: Mindcard): Promise<void> {
    const mindcardRaw = PrismaMindcardMapper.toPrisma(mindcard);

    await this.prisma.mindcard.create({
      data: mindcardRaw,
    });
  }

  async findById(id: string): Promise<Mindcard | null> {
    const mindcard = await this.prisma.mindcard.findUnique({
      where: {
        id,
      },
    });

    if (!mindcard) return null;

    return PrismaMindcardMapper.toDomain(mindcard);
  }

  async findByUsuarioId(usuarioId: string): Promise<Mindcard[]> {
    const mindcards = await this.prisma.mindcard.findMany({
      where: {
        usuario_id: usuarioId,
      },
      orderBy: {
        data_criacao: 'desc',
      },
    });

    return mindcards.map((mindcard) => PrismaMindcardMapper.toDomain(mindcard));
  }

  async updateById(
    id: string,
    mindcard: Partial<MindcardProps>,
  ): Promise<Mindcard | null> {
    const mindcardRaw = PrismaMindcardMapper.toPrismaPartial(mindcard);

    const updatedMindcard = await this.prisma.mindcard.update({
      where: {
        id,
      },
      data: mindcardRaw,
    });

    if (!updatedMindcard) return null;

    return PrismaMindcardMapper.toDomain(updatedMindcard);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.mindcard.delete({
      where: {
        id,
      },
    });
  }
}
