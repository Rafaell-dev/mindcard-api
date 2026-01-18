import { ItemMindcard } from 'src/modules/itemMindcard/entities/ItemMindcard';

export class ItemMindcardViewModel {
  static toHttp(itemMindcard: ItemMindcard) {
    return {
      id: itemMindcard.id,
      titulo: itemMindcard.titulo,
      tipo: itemMindcard.tipo,
      dificuldade: itemMindcard.dificuldade,
      pergunta: itemMindcard.pergunta,
      respostaCorreta: itemMindcard.respostaCorreta,
      alternativaTexto: itemMindcard.alternativaTexto,
      mindcardId: itemMindcard.mindcardId,
    };
  }
}
