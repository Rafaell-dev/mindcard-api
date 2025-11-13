import { Card } from 'src/modules/card/entities/Card';

export class CardViewModel {
  static toHttp(card: Card) {
    return {
      id: card.id,
      titulo: card.titulo,
      tipo: card.tipo,
      dificuldade: card.dificuldade,
      pergunta: card.pergunta,
      respostaCorreta: card.respostaCorreta,
      alternativaTexto: card.alternativaTexto,
      mindcardId: card.mindcardId,
    };
  }
}
