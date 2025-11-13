import { Injectable } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { NotFoundException } from 'src/exceptions';
import { type MindcardProps } from '../../entities/Mindcard';
import { R2Service } from 'src/r2/r2.service';

interface UpdateMindcardRequest {
  id: string;
  data: {
    titulo?: string;
    fonteArquivo?: Express.Multer.File;
    promptPersonalizado?: string | null;
  };
}

@Injectable()
export class UpdateMindcardByIdUseCase {
  constructor(
    private readonly mindcardRepository: MindcardRepository,
    private readonly r2Service: R2Service,
  ) {}

  async execute({ id, data }: UpdateMindcardRequest) {
    const mindcard = await this.mindcardRepository.findById(id);

    if (!mindcard) throw new NotFoundException();

    const partial: Partial<MindcardProps> = {};
    let newFileUrl: string | null = null;

    try {
      if (data.titulo !== undefined) {
        partial.titulo = data.titulo;
      }

      if (data.fonteArquivo) {
        newFileUrl = await this.r2Service.uploadFileFromMulter(
          data.fonteArquivo,
          `mindcards/${mindcard.usuarioId}_${mindcard.id}`,
        );
        partial.fonteArquivo = newFileUrl;
      }

      if (data.promptPersonalizado !== undefined) {
        partial.promptPersonalizado = data.promptPersonalizado;
      }

      if (Object.keys(partial).length === 0) {
        throw new NotFoundException();
      }

      const updatedMindcard = await this.mindcardRepository.updateById(
        id,
        partial,
      );

      return updatedMindcard;
    } catch (error) {
      if (newFileUrl) {
        await this.r2Service.deleteFile(newFileUrl).catch(() => {});
      }
      throw error;
    }
  }
}
