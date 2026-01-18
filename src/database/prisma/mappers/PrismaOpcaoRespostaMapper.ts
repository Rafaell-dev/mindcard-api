import { Prisma } from '@prisma/client';
import { OpcaoResposta } from 'src/modules/itemMindcard/entities/OpcaoResposta';

export class PrismaOpcaoRespostaMapper {
  static toPrisma(
    opcaoResposta: OpcaoResposta,
  ): Prisma.opcao_respostaCreateInput {
    return {
      id: opcaoResposta.id,
      texto: opcaoResposta.texto,
      correta: opcaoResposta.correta,
      item_mindcard: {
        connect: {
          id: opcaoResposta.itemMindcardId,
        },
      },
    };
  }

  static toDomain(raw: {
    id: string;
    texto: string;
    correta: boolean;
    item_mindcard_id: string;
  }): OpcaoResposta {
    return new OpcaoResposta({
      id: raw.id,
      texto: raw.texto,
      correta: raw.correta,
      itemMindcardId: raw.item_mindcard_id,
    });
  }
}
