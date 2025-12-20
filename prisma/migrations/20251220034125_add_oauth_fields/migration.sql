/*
  Warnings:

  - A unique constraint covering the columns `[google_id]` on the table `usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "usuario" ADD COLUMN     "avatar_url" TEXT,
ADD COLUMN     "google_id" TEXT,
ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'local',
ALTER COLUMN "senha" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "usuario_google_id_key" ON "usuario"("google_id");

-- CreateIndex
CREATE INDEX "usuario_google_id_idx" ON "usuario"("google_id");
