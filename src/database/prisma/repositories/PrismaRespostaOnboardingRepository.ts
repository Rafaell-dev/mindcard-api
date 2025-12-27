import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import {
  RespostaOnboardingRepository,
  SalvarRespostaData,
} from 'src/modules/onboarding/repositories/RespostaOnboardingRepository';
import { RespostaOnboarding } from 'src/modules/onboarding/entities/RespostaOnboarding';
import { PrismaRespostaOnboardingMapper } from '../mappers/PrismaRespostaOnboardingMapper';

@Injectable()
export class PrismaRespostaOnboardingRepository
  implements RespostaOnboardingRepository
{
  constructor(private prisma: PrismaService) {}

  async salvarResposta(data: SalvarRespostaData): Promise<RespostaOnboarding> {
    const resposta = new RespostaOnboarding(data);
    const respostaRaw = PrismaRespostaOnboardingMapper.toPrisma(resposta);

    const saved = await this.prisma.resposta_onboarding.upsert({
      where: {
        usuario_id_pergunta_id: {
          usuario_id: data.usuarioId,
          pergunta_id: data.perguntaId,
        },
      },
      create: respostaRaw,
      update: {
        resposta_texto: respostaRaw.resposta_texto,
        opcao_id: respostaRaw.opcao_id,
        data_resposta: respostaRaw.data_resposta,
      },
    });

    return PrismaRespostaOnboardingMapper.toDomain(saved);
  }

  async salvarRespostas(
    respostas: SalvarRespostaData[],
  ): Promise<RespostaOnboarding[]> {
    const saved = await Promise.all(
      respostas.map((r) => this.salvarResposta(r)),
    );
    return saved;
  }

  async findByUsuarioId(usuarioId: string): Promise<RespostaOnboarding[]> {
    const respostas = await this.prisma.resposta_onboarding.findMany({
      where: { usuario_id: usuarioId },
    });

    return respostas.map((r) => PrismaRespostaOnboardingMapper.toDomain(r));
  }

  async countRespostasObrigatorias(usuarioId: string): Promise<number> {
    return this.prisma.resposta_onboarding.count({
      where: {
        usuario_id: usuarioId,
        pergunta: {
          obrigatoria: true,
          ativa: true,
        },
      },
    });
  }
}
