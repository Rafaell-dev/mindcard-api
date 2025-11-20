import { Injectable } from '@nestjs/common';
import { Faculdade } from 'src/modules/faculdade/entities/Faculdade';
import {
  FaculdadeRepository,
  ListFaculdadesFilters,
} from 'src/modules/faculdade/repositories/FaculdadeRepository';
import { PrismaService } from '../prisma.service';
import { PrismaFaculdadeMapper } from '../mappers/PrismaFaculdadeMapper';

@Injectable()
export class PrismaFaculdadeRepository implements FaculdadeRepository {
  constructor(private prisma: PrismaService) {}

  async findAll({
    search,
    limit,
  }: ListFaculdadesFilters): Promise<Faculdade[]> {
    const faculdades = await this.prisma.faculdade.findMany({
      where: {
        situacao: 'ATIVA',
        OR: [
          {
            nome: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            sigla: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            municipio: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      orderBy: {
        nome: 'asc',
      },
      take: limit,
    });

    return faculdades.map((faculdade) =>
      PrismaFaculdadeMapper.toDomain(faculdade),
    );
  }

  async findById(id: string): Promise<Faculdade | null> {
    const faculdade = await this.prisma.faculdade.findUnique({
      where: {
        id,
      },
    });

    if (!faculdade) return null;

    return PrismaFaculdadeMapper.toDomain(faculdade);
  }

  async findByUf(uf: string): Promise<Faculdade[]> {
    const faculdades = await this.prisma.faculdade.findMany({
      where: {
        uf,
        situacao: 'ATIVA',
      },
      orderBy: {
        nome: 'asc',
      },
    });

    return faculdades.map((faculdade) =>
      PrismaFaculdadeMapper.toDomain(faculdade),
    );
  }
}
