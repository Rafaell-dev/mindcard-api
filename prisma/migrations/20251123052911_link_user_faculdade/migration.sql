/*
  Warnings:

  - You are about to drop the column `faculdade` on the `usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuario" DROP COLUMN "faculdade",
ADD COLUMN     "faculdade_id" TEXT;

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_faculdade_id_fkey" FOREIGN KEY ("faculdade_id") REFERENCES "faculdade"("id") ON DELETE SET NULL ON UPDATE CASCADE;
