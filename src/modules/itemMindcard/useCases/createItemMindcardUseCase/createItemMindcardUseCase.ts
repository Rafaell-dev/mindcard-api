import { Injectable } from '@nestjs/common';
import { ItemMindcardRepository } from '../../repositories/ItemMindcardRepository';
import {
  ItemMindcard,
  TipoCard,
  Dificuldade,
} from '../../entities/ItemMindcard';

interface CreateItemMindcardRequest {
  titulo: string;
  tipo: TipoCard;
  dificuldade: Dificuldade;
  pergunta: string;
  respostaCorreta?: string | null;
  alternativaTexto?: string | null;
  mindcardId: string;
}

@Injectable()
export class CreateItemMindcardUseCase {
  constructor(private itemMindcardRepository: ItemMindcardRepository) {}

  async execute({
    titulo,
    tipo,
    dificuldade,
    pergunta,
    respostaCorreta,
    alternativaTexto,
    mindcardId,
  }: CreateItemMindcardRequest) {
    const itemMindcard = new ItemMindcard({
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta: respostaCorreta ?? null,
      alternativaTexto: alternativaTexto ?? null,
      mindcardId,
    });

    await this.itemMindcardRepository.create(itemMindcard);

    return itemMindcard;
  }
}
