/*
  Warnings:

  - You are about to drop the column `completed_at` on the `mindcard` table. All the data in the column will be lost.
  - You are about to drop the column `error_message` on the `mindcard` table. All the data in the column will be lost.
  - You are about to drop the column `processing_status` on the `mindcard` table. All the data in the column will be lost.
  - You are about to drop the column `started_at` on the `mindcard` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "StatusProcessamento" AS ENUM ('PENDENTE', 'PROCESSANDO', 'CONCLUIDO', 'FALHOU');

-- DropIndex
DROP INDEX "mindcard_processing_status_idx";

-- AlterTable
ALTER TABLE "mindcard" DROP COLUMN "completed_at",
DROP COLUMN "error_message",
DROP COLUMN "processing_status",
DROP COLUMN "started_at",
ADD COLUMN     "concluido_em" TIMESTAMP(3),
ADD COLUMN     "iniciado_em" TIMESTAMP(3),
ADD COLUMN     "mensagem_erro" TEXT,
ADD COLUMN     "status_processamento" "StatusProcessamento" NOT NULL DEFAULT 'PENDENTE';

-- DropEnum
DROP TYPE "ProcessingStatus";

-- CreateIndex
CREATE INDEX "mindcard_status_processamento_idx" ON "mindcard"("status_processamento");
