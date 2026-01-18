import { Injectable } from '@nestjs/common';
import { ItemMindcardRepository } from '../../repositories/ItemMindcardRepository';
import { ItemMindcard } from '../../entities/ItemMindcard';

@Injectable()
export class FindByMindcardIdItemMindcardUseCase {
  constructor(private itemMindcardRepository: ItemMindcardRepository) {}

  async execute(mindcardId: string): Promise<ItemMindcard[]> {
    const itensMindcard =
      await this.itemMindcardRepository.findByMindcardId(mindcardId);

    return itensMindcard;
  }
}
