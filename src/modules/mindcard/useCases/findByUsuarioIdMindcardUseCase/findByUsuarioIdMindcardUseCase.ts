import { Injectable } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';

@Injectable()
export class FindByUsuarioIdMindcardUseCase {
  constructor(private readonly mindcardRepository: MindcardRepository) {}

  async execute(usuarioId: string) {
    const mindcards = await this.mindcardRepository.findByUsuarioId(usuarioId);

    return mindcards;
  }
}
