import { Injectable } from '@nestjs/common';
import { CardRepository } from '../../repositories/CardRepository';
import { Card } from '../../entities/Card';
import { NotFoundException } from 'src/exceptions/NotFoundException';

@Injectable()
export class FindByIdCardUseCase {
  constructor(private cardRepository: CardRepository) {}

  async execute(id: string): Promise<Card> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new NotFoundException();
    }

    return card;
  }
}
