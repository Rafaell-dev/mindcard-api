import {
  PerguntaOnboarding,
  OpcaoPergunta,
  TipoResposta,
} from 'src/modules/onboarding/entities/PerguntaOnboarding';
import type {
  pergunta_onboarding as PrismaPergunta,
  opcao_pergunta as PrismaOpcao,
  TipoResposta as PrismaTipoResposta,
} from '@prisma/client';

type PrismaPerguntaWithOpcoes = PrismaPergunta & {
  opcoes: PrismaOpcao[];
};

export class PrismaPerguntaOnboardingMapper {
  static toDomain(pergunta: PrismaPerguntaWithOpcoes): PerguntaOnboarding {
    return new PerguntaOnboarding({
      id: pergunta.id,
      ordem: pergunta.ordem,
      texto: pergunta.texto,
      tipoResposta: pergunta.tipo_resposta as TipoResposta,
      obrigatoria: pergunta.obrigatoria,
      ativa: pergunta.ativa,
      dataCriacao: pergunta.data_criacao,
      opcoes: pergunta.opcoes.map((opcao) => this.opcaoToDomain(opcao)),
    });
  }

  static opcaoToDomain(opcao: PrismaOpcao): OpcaoPergunta {
    return new OpcaoPergunta({
      id: opcao.id,
      texto: opcao.texto,
      valor: opcao.valor,
      ordem: opcao.ordem,
    });
  }

  static toPrisma(pergunta: PerguntaOnboarding) {
    return {
      id: pergunta.id,
      ordem: pergunta.ordem,
      texto: pergunta.texto,
      tipo_resposta: pergunta.tipoResposta as PrismaTipoResposta,
      obrigatoria: pergunta.obrigatoria,
      ativa: pergunta.ativa,
      data_criacao: pergunta.dataCriacao,
    };
  }
}
