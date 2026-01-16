import { PrismaClient, TipoResposta } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding onboarding questions...');

  // Pergunta 1: Data de Nascimento
  const pergunta1 = await prisma.pergunta_onboarding.upsert({
    where: { id: 'pergunta-data-nascimento' },
    update: {},
    create: {
      id: 'pergunta-data-nascimento',
      ordem: 1,
      texto: 'Qual é a sua data de nascimento?',
      tipo_resposta: TipoResposta.DATA,
      obrigatoria: true,
      ativa: true,
    },
  });

  console.log('✅ Pergunta 1 criada:', pergunta1.texto);

  // Pergunta 2: Tipo de Usuário
  const pergunta2 = await prisma.pergunta_onboarding.upsert({
    where: { id: 'pergunta-tipo-usuario' },
    update: {},
    create: {
      id: 'pergunta-tipo-usuario',
      ordem: 2,
      texto: 'Qual é o seu tipo de usuário?',
      tipo_resposta: TipoResposta.MULTIPLA_ESCOLHA,
      obrigatoria: true,
      ativa: true,
    },
  });

  console.log('✅ Pergunta 2 criada:', pergunta2.texto);

  // Opções da Pergunta 2
  await prisma.opcao_pergunta.createMany({
    data: [
      {
        pergunta_id: pergunta2.id,
        texto: 'Estudante',
        valor: 'ESTUDANTE',
        ordem: 1,
      },
      {
        pergunta_id: pergunta2.id,
        texto: 'Professor',
        valor: 'PROFESSOR',
        ordem: 2,
      },
      {
        pergunta_id: pergunta2.id,
        texto: 'Outro',
        valor: 'OUTRO',
        ordem: 3,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Opções da Pergunta 2 criadas');

  // Pergunta 3: Objetivo de Estudo
  const pergunta3 = await prisma.pergunta_onboarding.upsert({
    where: { id: 'pergunta-objetivo-estudo' },
    update: {},
    create: {
      id: 'pergunta-objetivo-estudo',
      ordem: 3,
      texto: 'Para o que você está estudando?',
      tipo_resposta: TipoResposta.MULTIPLA_ESCOLHA,
      obrigatoria: true,
      ativa: true,
    },
  });

  console.log('✅ Pergunta 3 criada:', pergunta3.texto);

  // Opções da Pergunta 3
  await prisma.opcao_pergunta.createMany({
    data: [
      {
        pergunta_id: pergunta3.id,
        texto: 'ENEM',
        valor: 'ENEM',
        ordem: 1,
      },
      {
        pergunta_id: pergunta3.id,
        texto: 'Concurso',
        valor: 'CONCURSO',
        ordem: 2,
      },
      {
        pergunta_id: pergunta3.id,
        texto: 'Faculdade',
        valor: 'FACULDADE',
        ordem: 3,
      },
      {
        pergunta_id: pergunta3.id,
        texto: 'Ensino Médio',
        valor: 'ENSINO_MEDIO',
        ordem: 4,
      },
      {
        pergunta_id: pergunta3.id,
        texto: 'Outro',
        valor: 'OUTRO',
        ordem: 5,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Opções da Pergunta 3 criadas');

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
