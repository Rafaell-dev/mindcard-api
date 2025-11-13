import {
  Card,
  type CardProps,
  TipoCard,
  Dificuldade,
} from 'src/modules/card/entities/Card';
import { Prisma, type card as PrismaCard } from 'generated/prisma';

export class PrismaCardMapper {
  static toPrisma(card: Card): Prisma.cardCreateInput {
    return {
      id: card.id,
      titulo: card.titulo,
      tipo: card.tipo,
      dificuldade: card.dificuldade,
      pergunta: card.pergunta,
      resposta_correta: card.respostaCorreta,
      alternativa_texto: card.alternativaTexto,
      mindcard: {
        connect: {
          id: card.mindcardId,
        },
      },
    };
  }

  static toPrismaPartial(card: Partial<CardProps>): Prisma.cardUpdateInput {
    const partial: Prisma.cardUpdateInput = {};

    if (card.titulo !== undefined) {
      partial.titulo = card.titulo;
    }

    if (card.tipo !== undefined) {
      partial.tipo = card.tipo;
    }

    if (card.dificuldade !== undefined) {
      partial.dificuldade = card.dificuldade;
    }

    if (card.pergunta !== undefined) {
      partial.pergunta = card.pergunta;
    }

    if (card.respostaCorreta !== undefined) {
      partial.resposta_correta = card.respostaCorreta;
    }

    if (card.alternativaTexto !== undefined) {
      partial.alternativa_texto = card.alternativaTexto;
    }

    return partial;
  }

  static toDomain(card: PrismaCard): Card {
    return new Card({
      id: card.id,
      titulo: card.titulo,
      tipo: card.tipo as TipoCard,
      dificuldade: card.dificuldade as Dificuldade,
      pergunta: card.pergunta,
      respostaCorreta: card.resposta_correta,
      alternativaTexto: card.alternativa_texto,
      mindcardId: card.mindcard_id,
    });
  }
}
