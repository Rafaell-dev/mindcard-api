import {
  Mindcard,
  type MindcardProps,
} from 'src/modules/mindcard/entities/Mindcard';
import { Prisma, type mindcard as PrismaMindcard } from 'generated/prisma';

export class PrismaMindcardMapper {
  static toPrisma(mindcard: Mindcard): Prisma.mindcardCreateInput {
    return {
      id: mindcard.id,
      titulo: mindcard.titulo,
      fonte_arquivo: mindcard.fonteArquivo,
      prompt_personalizado: mindcard.promptPersonalizado,
      data_criacao: mindcard.dataCriacao,
      usuario: {
        connect: {
          id: mindcard.usuarioId,
        },
      },
    };
  }

  static toPrismaPartial(
    mindcard: Partial<MindcardProps>,
  ): Prisma.mindcardUpdateInput {
    const partial: Prisma.mindcardUpdateInput = {};

    if (mindcard.titulo !== undefined) {
      partial.titulo = mindcard.titulo;
    }

    if (mindcard.fonteArquivo !== undefined) {
      partial.fonte_arquivo = mindcard.fonteArquivo;
    }

    if (mindcard.promptPersonalizado !== undefined) {
      partial.prompt_personalizado = mindcard.promptPersonalizado;
    }

    if (mindcard.dataCriacao !== undefined) {
      partial.data_criacao = mindcard.dataCriacao;
    }

    return partial;
  }

  static toDomain(mindcard: PrismaMindcard): Mindcard {
    return new Mindcard({
      id: mindcard.id,
      titulo: mindcard.titulo,
      fonteArquivo: mindcard.fonte_arquivo,
      promptPersonalizado: mindcard.prompt_personalizado,
      usuarioId: mindcard.usuario_id,
      dataCriacao: mindcard.data_criacao,
    });
  }
}
