import { Injectable } from '@nestjs/common';
import { ItemMindcardRepository } from '../../repositories/ItemMindcardRepository';
import { NotFoundException } from 'src/exceptions/NotFoundException';

@Injectable()
export class DeleteItemMindcardByIdUseCase {
  constructor(private itemMindcardRepository: ItemMindcardRepository) {}

  async execute(id: string): Promise<void> {
    const itemMindcard = await this.itemMindcardRepository.findById(id);

    if (!itemMindcard) {
      throw new NotFoundException();
    }

    await this.itemMindcardRepository.deleteById(id);
  }
}
