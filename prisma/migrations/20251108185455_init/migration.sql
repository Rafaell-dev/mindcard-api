-- CreateEnum
CREATE TYPE "tipo_card" AS ENUM ('ABERTA', 'MULTIPLA_ESCOLHA', 'ALTERNATIVA');

-- CreateEnum
CREATE TYPE "dificuldade" AS ENUM ('FACIL', 'MEDIO', 'DIFICIL');

-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "faculdade" TEXT,
    "idioma" TEXT NOT NULL DEFAULT 'pt-BR',
    "data_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xp_total" INTEGER NOT NULL DEFAULT 0,
    "sequencia_atual" INTEGER NOT NULL DEFAULT 0,
    "sequencia_recorde" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mindcard" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "fonte_arquivo" TEXT,
    "prompt_personalizado" TEXT,
    "usuario_id" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mindcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "card" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" "tipo_card" NOT NULL,
    "dificuldade" "dificuldade" NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta_correta" TEXT,
    "alternativa_texto" TEXT,
    "mindcard_id" TEXT NOT NULL,

    CONSTRAINT "card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opcao_resposta" (
    "id" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "correta" BOOLEAN NOT NULL DEFAULT false,
    "card_id" TEXT NOT NULL,

    CONSTRAINT "opcao_resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pratica" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "mindcard_id" TEXT,
    "acertos" INTEGER NOT NULL DEFAULT 0,
    "erros" INTEGER NOT NULL DEFAULT 0,
    "sequencia_conquistada" INTEGER NOT NULL DEFAULT 0,
    "xp_ganho" INTEGER NOT NULL DEFAULT 0,
    "data_pratica" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pratica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_usuario_key" ON "usuario"("usuario");

-- CreateIndex
CREATE UNIQUE INDEX "usuario_email_key" ON "usuario"("email");

-- CreateIndex
CREATE INDEX "usuario_email_idx" ON "usuario"("email");

-- CreateIndex
CREATE INDEX "usuario_usuario_idx" ON "usuario"("usuario");

-- CreateIndex
CREATE INDEX "usuario_xp_total_idx" ON "usuario"("xp_total");

-- CreateIndex
CREATE INDEX "mindcard_usuario_id_idx" ON "mindcard"("usuario_id");

-- CreateIndex
CREATE INDEX "mindcard_data_criacao_idx" ON "mindcard"("data_criacao");

-- CreateIndex
CREATE INDEX "card_mindcard_id_idx" ON "card"("mindcard_id");

-- CreateIndex
CREATE INDEX "card_tipo_idx" ON "card"("tipo");

-- CreateIndex
CREATE INDEX "card_dificuldade_idx" ON "card"("dificuldade");

-- CreateIndex
CREATE INDEX "opcao_resposta_card_id_idx" ON "opcao_resposta"("card_id");

-- CreateIndex
CREATE INDEX "pratica_usuario_id_idx" ON "pratica"("usuario_id");

-- CreateIndex
CREATE INDEX "pratica_mindcard_id_idx" ON "pratica"("mindcard_id");

-- CreateIndex
CREATE INDEX "pratica_data_pratica_idx" ON "pratica"("data_pratica");

-- AddForeignKey
ALTER TABLE "mindcard" ADD CONSTRAINT "mindcard_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_mindcard_id_fkey" FOREIGN KEY ("mindcard_id") REFERENCES "mindcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opcao_resposta" ADD CONSTRAINT "opcao_resposta_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pratica" ADD CONSTRAINT "pratica_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pratica" ADD CONSTRAINT "pratica_mindcard_id_fkey" FOREIGN KEY ("mindcard_id") REFERENCES "mindcard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
