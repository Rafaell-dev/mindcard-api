import { Injectable } from '@nestjs/common';
import { CardRepository } from '../../repositories/CardRepository';
import { Card, TipoCard, Dificuldade } from '../../entities/Card';

interface CreateCardRequest {
  titulo: string;
  tipo: TipoCard;
  dificuldade: Dificuldade;
  pergunta: string;
  respostaCorreta?: string | null;
  alternativaTexto?: string | null;
  mindcardId: string;
}

@Injectable()
export class CreateCardUseCase {
  constructor(private cardRepository: CardRepository) {}

  async execute({
    titulo,
    tipo,
    dificuldade,
    pergunta,
    respostaCorreta,
    alternativaTexto,
    mindcardId,
  }: CreateCardRequest) {
    const card = new Card({
      titulo,
      tipo,
      dificuldade,
      pergunta,
      respostaCorreta: respostaCorreta ?? null,
      alternativaTexto: alternativaTexto ?? null,
      mindcardId,
    });

    await this.cardRepository.create(card);

    return card;
  }
}
