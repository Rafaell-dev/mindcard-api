import { Prisma } from 'generated/prisma';
import { OpcaoResposta } from 'src/modules/card/entities/OpcaoResposta';

export class PrismaOpcaoRespostaMapper {
  static toPrisma(
    opcaoResposta: OpcaoResposta,
  ): Prisma.opcao_respostaCreateInput {
    return {
      id: opcaoResposta.id,
      texto: opcaoResposta.texto,
      correta: opcaoResposta.correta,
      card: {
        connect: {
          id: opcaoResposta.cardId,
        },
      },
    };
  }

  static toDomain(raw: {
    id: string;
    texto: string;
    correta: boolean;
    card_id: string;
  }): OpcaoResposta {
    return new OpcaoResposta({
      id: raw.id,
      texto: raw.texto,
      correta: raw.correta,
      cardId: raw.card_id,
    });
  }
}
