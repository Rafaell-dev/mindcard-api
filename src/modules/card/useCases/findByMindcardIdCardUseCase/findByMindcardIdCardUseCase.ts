import { Injectable } from '@nestjs/common';
import { CardRepository } from '../../repositories/CardRepository';
import { Card } from '../../entities/Card';

@Injectable()
export class FindByMindcardIdCardUseCase {
  constructor(private cardRepository: CardRepository) {}

  async execute(mindcardId: string): Promise<Card[]> {
    const cards = await this.cardRepository.findByMindcardId(mindcardId);

    return cards;
  }
}
