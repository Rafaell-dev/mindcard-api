import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OpcaoRespostaRepository } from 'src/modules/itemMindcard/repositories/OpcaoRespostaRepository';
import { OpcaoResposta } from 'src/modules/itemMindcard/entities/OpcaoResposta';
import { PrismaOpcaoRespostaMapper } from '../mappers/PrismaOpcaoRespostaMapper';

@Injectable()
export class PrismaOpcaoRespostaRepository implements OpcaoRespostaRepository {
  constructor(private prisma: PrismaService) {}

  async create(opcaoResposta: OpcaoResposta): Promise<void> {
    const data = PrismaOpcaoRespostaMapper.toPrisma(opcaoResposta);

    await this.prisma.opcao_resposta.create({
      data,
    });
  }

  async findById(id: string): Promise<OpcaoResposta | null> {
    const opcaoResposta = await this.prisma.opcao_resposta.findUnique({
      where: { id },
    });

    if (!opcaoResposta) {
      return null;
    }

    return PrismaOpcaoRespostaMapper.toDomain(opcaoResposta);
  }

  async findByItemMindcardId(itemMindcardId: string): Promise<OpcaoResposta[]> {
    const opcoes = await this.prisma.opcao_resposta.findMany({
      where: { item_mindcard_id: itemMindcardId },
    });

    return opcoes.map((opcao) => PrismaOpcaoRespostaMapper.toDomain(opcao));
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.opcao_resposta.delete({
      where: { id },
    });
  }

  async deleteByItemMindcardId(itemMindcardId: string): Promise<void> {
    await this.prisma.opcao_resposta.deleteMany({
      where: { item_mindcard_id: itemMindcardId },
    });
  }
}
