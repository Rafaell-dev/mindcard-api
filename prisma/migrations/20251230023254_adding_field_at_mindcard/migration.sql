-- CreateEnum
CREATE TYPE "TipoResposta" AS ENUM ('MULTIPLA_ESCOLHA', 'TEXTO_LIVRE', 'DATA');

-- AlterTable
ALTER TABLE "mindcard" ADD COLUMN     "intervalo_paginas" TEXT,
ADD COLUMN     "tipo_questoes" TEXT;

-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "celular" TEXT,
ADD COLUMN     "data_nascimento" TIMESTAMP(3),
ADD COLUMN     "onboarding_completo" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "pergunta_onboarding" (
    "id" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "texto" TEXT NOT NULL,
    "tipo_resposta" "TipoResposta" NOT NULL,
    "obrigatoria" BOOLEAN NOT NULL DEFAULT true,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pergunta_onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opcao_pergunta" (
    "id" TEXT NOT NULL,
    "pergunta_id" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,

    CONSTRAINT "opcao_pergunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resposta_onboarding" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "pergunta_id" TEXT NOT NULL,
    "resposta_texto" TEXT,
    "opcao_id" TEXT,
    "data_resposta" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resposta_onboarding_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pergunta_onboarding_ativa_ordem_idx" ON "pergunta_onboarding"("ativa", "ordem");

-- CreateIndex
CREATE INDEX "opcao_pergunta_pergunta_id_idx" ON "opcao_pergunta"("pergunta_id");

-- CreateIndex
CREATE INDEX "resposta_onboarding_usuario_id_idx" ON "resposta_onboarding"("usuario_id");

-- CreateIndex
CREATE UNIQUE INDEX "resposta_onboarding_usuario_id_pergunta_id_key" ON "resposta_onboarding"("usuario_id", "pergunta_id");

-- AddForeignKey
ALTER TABLE "opcao_pergunta" ADD CONSTRAINT "opcao_pergunta_pergunta_id_fkey" FOREIGN KEY ("pergunta_id") REFERENCES "pergunta_onboarding"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta_onboarding" ADD CONSTRAINT "resposta_onboarding_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta_onboarding" ADD CONSTRAINT "resposta_onboarding_pergunta_id_fkey" FOREIGN KEY ("pergunta_id") REFERENCES "pergunta_onboarding"("id") ON DELETE CASCADE ON UPDATE CASCADE;
