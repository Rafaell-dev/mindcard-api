import { Faculdade } from 'src/modules/faculdade/entities/Faculdade';
import type { faculdade as PrismaFaculdade } from 'prisma/generated/client.js';

export class PrismaFaculdadeMapper {
  static toDomain(raw: PrismaFaculdade): Faculdade {
    return new Faculdade({
      id: raw.id,
      codigoIes: raw.codigo_ies,
      nome: raw.nome,
      sigla: raw.sigla,
      categoria: raw.categoria,
      organizacaoAcademica: raw.organizacao_academica,
      codigoMunicipioIbge: raw.codigo_municipio_ibge,
      municipio: raw.municipio,
      uf: raw.uf,
      situacao: raw.situacao,
    });
  }
}
