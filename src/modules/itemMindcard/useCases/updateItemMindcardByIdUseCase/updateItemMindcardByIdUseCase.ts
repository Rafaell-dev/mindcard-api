import { Injectable } from '@nestjs/common';
import { ItemMindcardRepository } from '../../repositories/ItemMindcardRepository';
import {
  ItemMindcard,
  TipoCard,
  Dificuldade,
  ItemMindcardProps,
} from '../../entities/ItemMindcard';
import { NotFoundException } from 'src/exceptions/NotFoundException';

interface UpdateItemMindcardRequest {
  titulo?: string;
  tipo?: TipoCard;
  dificuldade?: Dificuldade;
  pergunta?: string;
  respostaCorreta?: string | null;
  alternativaTexto?: string | null;
}

@Injectable()
export class UpdateItemMindcardByIdUseCase {
  constructor(private itemMindcardRepository: ItemMindcardRepository) {}

  async execute(
    id: string,
    updateData: UpdateItemMindcardRequest,
  ): Promise<ItemMindcard> {
    const itemMindcard = await this.itemMindcardRepository.findById(id);

    if (!itemMindcard) {
      throw new NotFoundException();
    }

    const sanitizedData: Partial<ItemMindcardProps> = {};

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

    const updatedItemMindcard = await this.itemMindcardRepository.updateById(
      id,
      sanitizedData,
    );

    if (!updatedItemMindcard) {
      throw new NotFoundException();
    }

    return updatedItemMindcard;
  }
}
