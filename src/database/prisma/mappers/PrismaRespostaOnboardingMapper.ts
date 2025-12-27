import { RespostaOnboarding } from 'src/modules/onboarding/entities/RespostaOnboarding';
import type { resposta_onboarding as PrismaResposta } from '@prisma/client';

export class PrismaRespostaOnboardingMapper {
  static toDomain(resposta: PrismaResposta): RespostaOnboarding {
    return new RespostaOnboarding({
      id: resposta.id,
      usuarioId: resposta.usuario_id,
      perguntaId: resposta.pergunta_id,
      respostaTexto: resposta.resposta_texto ?? undefined,
      opcaoId: resposta.opcao_id ?? undefined,
      dataResposta: resposta.data_resposta,
    });
  }

  static toPrisma(resposta: RespostaOnboarding) {
    return {
      id: resposta.id,
      usuario_id: resposta.usuarioId,
      pergunta_id: resposta.perguntaId,
      resposta_texto: resposta.respostaTexto ?? null,
      opcao_id: resposta.opcaoId ?? null,
      data_resposta: resposta.dataResposta,
    };
  }
}
