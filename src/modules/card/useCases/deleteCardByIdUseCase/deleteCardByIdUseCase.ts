import { Injectable } from '@nestjs/common';
import { CardRepository } from '../../repositories/CardRepository';
import { NotFoundException } from 'src/exceptions/NotFoundException';

@Injectable()
export class DeleteCardByIdUseCase {
  constructor(private cardRepository: CardRepository) {}

  async execute(id: string): Promise<void> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new NotFoundException();
    }

    await this.cardRepository.deleteById(id);
  }
}
