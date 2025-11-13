import { Mindcard } from 'src/modules/mindcard/entities/Mindcard';

export class MindcardViewModel {
  static toHttp(data: Mindcard) {
    return {
      id: data.id,
      titulo: data.titulo,
      fonteArquivo: data.fonteArquivo,
      promptPersonalizado: data.promptPersonalizado,
      usuarioId: data.usuarioId,
      dataCriacao: data.dataCriacao,
    };
  }
}
