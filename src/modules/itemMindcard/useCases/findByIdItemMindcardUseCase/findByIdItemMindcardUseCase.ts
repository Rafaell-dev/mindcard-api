import { Injectable } from '@nestjs/common';
import { ItemMindcardRepository } from '../../repositories/ItemMindcardRepository';
import { ItemMindcard } from '../../entities/ItemMindcard';
import { NotFoundException } from 'src/exceptions/NotFoundException';

@Injectable()
export class FindByIdItemMindcardUseCase {
  constructor(private itemMindcardRepository: ItemMindcardRepository) {}

  async execute(id: string): Promise<ItemMindcard> {
    const itemMindcard = await this.itemMindcardRepository.findById(id);

    if (!itemMindcard) {
      throw new NotFoundException();
    }

    return itemMindcard;
  }
}
