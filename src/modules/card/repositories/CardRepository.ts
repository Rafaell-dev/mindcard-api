import { Card, type CardProps } from '../entities/Card';

export abstract class CardRepository {
  abstract create(card: Card): Promise<void>;
  abstract findById(id: string): Promise<Card | null>;
  abstract findByMindcardId(mindcardId: string): Promise<Card[]>;
  abstract updateById(
    id: string,
    card: Partial<CardProps>,
  ): Promise<Card | null>;
  abstract deleteById(id: string): Promise<void>;
}
