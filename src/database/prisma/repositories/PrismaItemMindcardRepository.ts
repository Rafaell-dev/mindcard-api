import { Injectable } from '@nestjs/common';
import {
  ItemMindcard,
  type ItemMindcardProps,
} from 'src/modules/itemMindcard/entities/ItemMindcard';
import { ItemMindcardRepository } from 'src/modules/itemMindcard/repositories/ItemMindcardRepository';
import { PrismaItemMindcardMapper } from '../mappers/PrismaItemMindcardMapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaItemMindcardRepository implements ItemMindcardRepository {
  constructor(private prisma: PrismaService) {}

  async create(itemMindcard: ItemMindcard): Promise<void> {
    const itemMindcardRaw = PrismaItemMindcardMapper.toPrisma(itemMindcard);

    await this.prisma.item_mindcard.create({
      data: itemMindcardRaw,
    });
  }

  async findById(id: string): Promise<ItemMindcard | null> {
    const itemMindcard = await this.prisma.item_mindcard.findUnique({
      where: {
        id,
      },
    });

    if (!itemMindcard) return null;

    return PrismaItemMindcardMapper.toDomain(itemMindcard);
  }

  async findByMindcardId(mindcardId: string): Promise<ItemMindcard[]> {
    const itensMindcard = await this.prisma.item_mindcard.findMany({
      where: {
        mindcard_id: mindcardId,
      },
      orderBy: {
        titulo: 'asc',
      },
    });

    return itensMindcard.map((item) => PrismaItemMindcardMapper.toDomain(item));
  }

  async updateById(
    id: string,
    itemMindcard: Partial<ItemMindcardProps>,
  ): Promise<ItemMindcard | null> {
    const itemMindcardRaw =
      PrismaItemMindcardMapper.toPrismaPartial(itemMindcard);

    const updatedItemMindcard = await this.prisma.item_mindcard.update({
      where: {
        id,
      },
      data: itemMindcardRaw,
    });

    if (!updatedItemMindcard) return null;

    return PrismaItemMindcardMapper.toDomain(updatedItemMindcard);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.item_mindcard.delete({
      where: {
        id,
      },
    });
  }
}
