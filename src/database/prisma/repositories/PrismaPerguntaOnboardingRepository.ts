import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PerguntaOnboardingRepository } from 'src/modules/onboarding/repositories/PerguntaOnboardingRepository';
import { PerguntaOnboarding } from 'src/modules/onboarding/entities/PerguntaOnboarding';
import { PrismaPerguntaOnboardingMapper } from '../mappers/PrismaPerguntaOnboardingMapper';

@Injectable()
export class PrismaPerguntaOnboardingRepository
  implements PerguntaOnboardingRepository
{
  constructor(private prisma: PrismaService) {}

  async findAllAtivas(): Promise<PerguntaOnboarding[]> {
    const perguntas = await this.prisma.pergunta_onboarding.findMany({
      where: { ativa: true },
      include: {
        opcoes: {
          orderBy: { ordem: 'asc' },
        },
      },
      orderBy: { ordem: 'asc' },
    });

    return perguntas.map((p) => PrismaPerguntaOnboardingMapper.toDomain(p));
  }

  async findById(id: string): Promise<PerguntaOnboarding | null> {
    const pergunta = await this.prisma.pergunta_onboarding.findUnique({
      where: { id },
      include: {
        opcoes: {
          orderBy: { ordem: 'asc' },
        },
      },
    });

    if (!pergunta) return null;

    return PrismaPerguntaOnboardingMapper.toDomain(pergunta);
  }
}
