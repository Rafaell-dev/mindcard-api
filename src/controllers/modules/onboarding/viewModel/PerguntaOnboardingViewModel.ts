import {
  PerguntaOnboarding,
  OpcaoPergunta,
} from 'src/modules/onboarding/entities/PerguntaOnboarding';

export class PerguntaOnboardingViewModel {
  static toHttp(pergunta: PerguntaOnboarding) {
    return {
      id: pergunta.id,
      ordem: pergunta.ordem,
      texto: pergunta.texto,
      tipoResposta: pergunta.tipoResposta,
      obrigatoria: pergunta.obrigatoria,
      opcoes: pergunta.opcoes.map((o) => this.opcaoToHttp(o)),
    };
  }

  static opcaoToHttp(opcao: OpcaoPergunta) {
    return {
      id: opcao.id,
      texto: opcao.texto,
      valor: opcao.valor,
      ordem: opcao.ordem,
    };
  }
}
