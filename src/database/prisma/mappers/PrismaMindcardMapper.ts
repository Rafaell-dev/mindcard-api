import {
  Mindcard,
  type MindcardProps,
} from 'src/modules/mindcard/entities/Mindcard';
import { Prisma, type mindcard as PrismaMindcard } from '@prisma/client';

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
      intervalo_paginas: mindcard.intervaloPaginas,
      tipo_questoes: mindcard.tipoQuestoes,
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
    if (mindcard.intervaloPaginas !== undefined) {
      partial.intervalo_paginas = mindcard.intervaloPaginas;
    }
    if (mindcard.tipoQuestoes !== undefined) {
      partial.tipo_questoes = mindcard.tipoQuestoes;
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
      intervaloPaginas: mindcard.intervalo_paginas,
      tipoQuestoes: mindcard.tipo_questoes,
    });
  }
}
