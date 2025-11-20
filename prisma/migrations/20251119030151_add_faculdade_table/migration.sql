-- CreateTable
CREATE TABLE "faculdade" (
    "id" TEXT NOT NULL,
    "codigo_ies" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sigla" TEXT,
    "categoria" TEXT,
    "comunitaria" TEXT,
    "confessional" TEXT,
    "filantropica" TEXT,
    "organizacao_academica" TEXT,
    "codigo_municipio_ibge" TEXT,
    "municipio" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,

    CONSTRAINT "faculdade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "faculdade_codigo_ies_key" ON "faculdade"("codigo_ies");

-- CreateIndex
CREATE INDEX "faculdade_nome_idx" ON "faculdade"("nome");

-- CreateIndex
CREATE INDEX "faculdade_sigla_idx" ON "faculdade"("sigla");

-- CreateIndex
CREATE INDEX "faculdade_uf_idx" ON "faculdade"("uf");

-- CreateIndex
CREATE INDEX "faculdade_municipio_idx" ON "faculdade"("municipio");
