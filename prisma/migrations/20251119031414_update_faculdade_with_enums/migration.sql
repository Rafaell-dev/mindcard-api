/*
  Warnings:

  - You are about to drop the column `comunitaria` on the `faculdade` table. All the data in the column will be lost.
  - You are about to drop the column `confessional` on the `faculdade` table. All the data in the column will be lost.
  - You are about to drop the column `filantropica` on the `faculdade` table. All the data in the column will be lost.
  - The `categoria` column on the `faculdade` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `situacao` on the `faculdade` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoriaIES" AS ENUM ('PRIVADA', 'PUBLICA');

-- CreateEnum
CREATE TYPE "SituacaoIES" AS ENUM ('ATIVA', 'INATIVA');

-- AlterTable
ALTER TABLE "faculdade" DROP COLUMN "comunitaria",
DROP COLUMN "confessional",
DROP COLUMN "filantropica",
DROP COLUMN "categoria",
ADD COLUMN     "categoria" "CategoriaIES",
DROP COLUMN "situacao",
ADD COLUMN     "situacao" "SituacaoIES" NOT NULL;

-- CreateIndex
CREATE INDEX "faculdade_categoria_idx" ON "faculdade"("categoria");

-- CreateIndex
CREATE INDEX "faculdade_situacao_idx" ON "faculdade"("situacao");
