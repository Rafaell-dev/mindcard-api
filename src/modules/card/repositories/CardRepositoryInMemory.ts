import { Card, type CardProps } from '../entities/Card';
import { CardRepository } from './CardRepository';

export class CardRepositoryInMemory implements CardRepository {
  public cards: Card[] = [];

  create(card: Card): Promise<void> {
    this.cards.push(card);
    return Promise.resolve();
  }

  findById(id: string): Promise<Card | null> {
    const card = this.cards.find((card) => card.id === id);
    return Promise.resolve(card ?? null);
  }

  findByMindcardId(mindcardId: string): Promise<Card[]> {
    const cards = this.cards.filter((card) => card.mindcardId === mindcardId);
    return Promise.resolve(cards);
  }

  updateById(id: string, card: Partial<CardProps>): Promise<Card | null> {
    const cardIndex = this.cards.findIndex((card) => card.id === id);

    if (cardIndex === -1) {
      return Promise.resolve(null);
    }

    const currentCard = this.cards[cardIndex];
    const sanitizedUpdates = Object.entries(card).reduce<Partial<CardProps>>(
      (accumulator, [key, value]) => {
        if (value !== undefined) {
          (accumulator as Record<string, unknown>)[key] = value;
        }
        return accumulator;
      },
      {},
    );

    const updatedProps: CardProps = {
      id: currentCard.id,
      titulo: currentCard.titulo,
      tipo: currentCard.tipo,
      dificuldade: currentCard.dificuldade,
      pergunta: currentCard.pergunta,
      respostaCorreta: currentCard.respostaCorreta,
      alternativaTexto: currentCard.alternativaTexto,
      mindcardId: currentCard.mindcardId,
      ...sanitizedUpdates,
    };

    const updatedCard = new Card(updatedProps);

    this.cards[cardIndex] = updatedCard;

    return Promise.resolve(updatedCard);
  }

  deleteById(id: string): Promise<void> {
    this.cards = this.cards.filter((card) => card.id !== id);
    return Promise.resolve();
  }
}
