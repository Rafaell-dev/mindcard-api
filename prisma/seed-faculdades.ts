import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as fs from 'fs';
import { parse } from 'csv-parse/sync';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

function cleanValue(value: string | null | undefined): string | null {
  if (!value || value.trim() === '' || value.toLowerCase() === 'null') {
    return null;
  }
  return value.trim();
}

function mapCategoria(categoria: string | null): 'PRIVADA' | 'PUBLICA' | null {
  if (!categoria) return null;
  const cat = categoria.toLowerCase();
  if (cat.includes('privada')) return 'PRIVADA';
  if (cat.includes('pública') || cat.includes('publica')) return 'PUBLICA';
  return null;
}

function mapSituacao(situacao: string): 'ATIVA' | 'INATIVA' {
  if (!situacao) return 'INATIVA';
  const sit = situacao.toLowerCase();
  if (sit.includes('ativa')) return 'ATIVA';
  return 'INATIVA';
}

async function main() {
  const csvFilePath =
    'PDA_Lista_Instituicoes_Ensino_Superior_do_Brasil_EMEC_2024.csv';

  console.log(`Lendo arquivo CSV: ${csvFilePath}`);

  try {
    if (!fs.existsSync(csvFilePath)) {
      console.error(`Arquivo não encontrado: ${csvFilePath}`);
      return;
    }

    const fileContent = fs.readFileSync(csvFilePath, 'utf8');

    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      delimiter: ',',
      relax_quotes: true,
    });

    console.log(`Total de registros encontrados: ${records.length}`);

    const faculdadesAtivas = records.filter(
      (record: any) => record.SITUACAO_IES === 'Ativa',
    );

    console.log(`Total de faculdades ativas: ${faculdadesAtivas.length}`);

    console.log('Iniciando inserção no banco de dados...');

    let count = 0;
    const batchSize = 100;
    let batch = [];

    for (const record of faculdadesAtivas) {
      const r = record as any;
      const codigo = parseInt(r.CODIGO_DA_IES);
      if (isNaN(codigo)) continue;

      const sigla = cleanValue(r.SIGLA);
      const categoria = mapCategoria(r.CATEGORIA_DA_IES);
      const organizacaoAcademica = cleanValue(r.ORGANIZACAO_ACADEMICA);
      const codigoMunicipioIbge = cleanValue(r.CODIGO_MUNICIPIO_IBGE);
      const situacao = mapSituacao(r.SITUACAO_IES);

      batch.push(
        prisma.faculdade.upsert({
          where: { codigo_ies: codigo },
          update: {
            nome: r.NOME_DA_IES,
            sigla,
            categoria,
            organizacao_academica: organizacaoAcademica,
            codigo_municipio_ibge: codigoMunicipioIbge,
            municipio: r.MUNICIPIO,
            uf: r.UF,
            situacao,
          },
          create: {
            codigo_ies: codigo,
            nome: r.NOME_DA_IES,
            sigla,
            categoria,
            organizacao_academica: organizacaoAcademica,
            codigo_municipio_ibge: codigoMunicipioIbge,
            municipio: r.MUNICIPIO,
            uf: r.UF,
            situacao,
          },
        }),
      );

      if (batch.length >= batchSize) {
        await prisma.$transaction(batch);
        count += batch.length;
        console.log(`Processados: ${count}`);
        batch = [];
      }
    }

    if (batch.length > 0) {
      await prisma.$transaction(batch);
      count += batch.length;
    }

    console.log(`Concluído! ${count} faculdades inseridas/atualizadas.`);
  } catch (error) {
    console.error('Erro ao processar arquivo:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
