import { Injectable } from '@nestjs/common';
import { MindcardRepository } from '../../repositories/MindcardRepository';
import { Mindcard } from '../../entities/Mindcard';
import { v7 as uuidV7 } from 'uuid';
import { R2Service } from 'src/r2/r2.service';

interface CreateMindcardRequest {
  titulo: string;
  fonteArquivo?: Express.Multer.File;
  promptPersonalizado?: string | null;
  usuarioId: string;
}

@Injectable()
export class CreateMindcardUseCase {
  constructor(
    private mindcardRepository: MindcardRepository,
    private r2Service: R2Service,
  ) {}

  async execute({
    titulo,
    fonteArquivo,
    promptPersonalizado,
    usuarioId,
  }: CreateMindcardRequest) {
    let fonteArquivoUrl: string | null = null;

    try {
      const id = uuidV7();
      if (fonteArquivo) {
        fonteArquivoUrl = await this.r2Service.uploadFileFromMulter(
          fonteArquivo,
          `mindcards/${usuarioId}_${id}`,
        );
      }

      const mindcard = new Mindcard({
        id,
        titulo,
        fonteArquivo: fonteArquivoUrl,
        promptPersonalizado: promptPersonalizado ?? null,
        usuarioId,
        dataCriacao: new Date(),
      });

      await this.mindcardRepository.create(mindcard);
      return mindcard;
    } catch (error) {
      if (fonteArquivoUrl) {
        await this.r2Service.deleteFile(fonteArquivoUrl).catch(() => {});
      }
      throw error;
    }
  }
}
