import { Injectable } from '@nestjs/common';
import { CardRepository } from '../../repositories/CardRepository';
import { Card, TipoCard, Dificuldade, CardProps } from '../../entities/Card';
import { NotFoundException } from 'src/exceptions/NotFoundException';

interface UpdateCardRequest {
  titulo?: string;
  tipo?: TipoCard;
  dificuldade?: Dificuldade;
  pergunta?: string;
  respostaCorreta?: string | null;
  alternativaTexto?: string | null;
}

@Injectable()
export class UpdateCardByIdUseCase {
  constructor(private cardRepository: CardRepository) {}

  async execute(id: string, updateData: UpdateCardRequest): Promise<Card> {
    const card = await this.cardRepository.findById(id);

    if (!card) {
      throw new NotFoundException();
    }

    const sanitizedData: Partial<CardProps> = {};

    if (updateData.titulo !== undefined) {
      sanitizedData.titulo = updateData.titulo;
    }
    if (updateData.tipo !== undefined) {
      sanitizedData.tipo = updateData.tipo;
    }
    if (updateData.dificuldade !== undefined) {
      sanitizedData.dificuldade = updateData.dificuldade;
    }
    if (updateData.pergunta !== undefined) {
      sanitizedData.pergunta = updateData.pergunta;
    }
    if (updateData.respostaCorreta !== undefined) {
      sanitizedData.respostaCorreta = updateData.respostaCorreta;
    }
    if (updateData.alternativaTexto !== undefined) {
      sanitizedData.alternativaTexto = updateData.alternativaTexto;
    }

    const updatedCard = await this.cardRepository.updateById(id, sanitizedData);

    if (!updatedCard) {
      throw new NotFoundException();
    }

    return updatedCard;
  }
}
