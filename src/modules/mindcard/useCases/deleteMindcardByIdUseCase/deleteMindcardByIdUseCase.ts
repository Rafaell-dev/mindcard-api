import { Injectable } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { NotFoundException } from 'src/exceptions';

@Injectable()
export class DeleteMindcardByIdUseCase {
  constructor(private readonly mindcardRepository: MindcardRepository) {}

  async execute(id: string) {
    const mindcard = await this.mindcardRepository.findById(id);

    if (!mindcard) throw new NotFoundException();

    await this.mindcardRepository.deleteById(id);
  }
}
