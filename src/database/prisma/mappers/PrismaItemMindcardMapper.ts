import {
  ItemMindcard,
  type ItemMindcardProps,
  TipoCard,
  Dificuldade,
} from 'src/modules/itemMindcard/entities/ItemMindcard';
import {
  Prisma,
  type item_mindcard as PrismaItemMindcard,
} from '@prisma/client';

export class PrismaItemMindcardMapper {
  static toPrisma(itemMindcard: ItemMindcard): Prisma.item_mindcardCreateInput {
    return {
      id: itemMindcard.id,
      titulo: itemMindcard.titulo,
      tipo: itemMindcard.tipo,
      dificuldade: itemMindcard.dificuldade,
      pergunta: itemMindcard.pergunta,
      resposta_correta: itemMindcard.respostaCorreta,
      alternativa_texto: itemMindcard.alternativaTexto,
      mindcard: {
        connect: {
          id: itemMindcard.mindcardId,
        },
      },
    };
  }

  static toPrismaPartial(
    itemMindcard: Partial<ItemMindcardProps>,
  ): Prisma.item_mindcardUpdateInput {
    const partial: Prisma.item_mindcardUpdateInput = {};

    if (itemMindcard.titulo !== undefined) {
      partial.titulo = itemMindcard.titulo;
    }

    if (itemMindcard.tipo !== undefined) {
      partial.tipo = itemMindcard.tipo;
    }

    if (itemMindcard.dificuldade !== undefined) {
      partial.dificuldade = itemMindcard.dificuldade;
    }

    if (itemMindcard.pergunta !== undefined) {
      partial.pergunta = itemMindcard.pergunta;
    }

    if (itemMindcard.respostaCorreta !== undefined) {
      partial.resposta_correta = itemMindcard.respostaCorreta;
    }

    if (itemMindcard.alternativaTexto !== undefined) {
      partial.alternativa_texto = itemMindcard.alternativaTexto;
    }

    return partial;
  }

  static toDomain(itemMindcard: PrismaItemMindcard): ItemMindcard {
    return new ItemMindcard({
      id: itemMindcard.id,
      titulo: itemMindcard.titulo,
      tipo: itemMindcard.tipo as TipoCard,
      dificuldade: itemMindcard.dificuldade as Dificuldade,
      pergunta: itemMindcard.pergunta,
      respostaCorreta: itemMindcard.resposta_correta,
      alternativaTexto: itemMindcard.alternativa_texto,
      mindcardId: itemMindcard.mindcard_id,
    });
  }
}
