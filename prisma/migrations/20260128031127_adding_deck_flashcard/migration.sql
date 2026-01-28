/*
  Warnings:

  - You are about to drop the column `card_id` on the `opcao_resposta` table. All the data in the column will be lost.
  - You are about to drop the `card` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `item_mindcard_id` to the `opcao_resposta` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "card" DROP CONSTRAINT "card_mindcard_id_fkey";

-- DropForeignKey
ALTER TABLE "opcao_resposta" DROP CONSTRAINT "opcao_resposta_card_id_fkey";

-- DropIndex
DROP INDEX "opcao_resposta_card_id_idx";

-- AlterTable
ALTER TABLE "opcao_resposta" DROP COLUMN "card_id",
ADD COLUMN     "item_mindcard_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "card";

-- CreateTable
CREATE TABLE "item_mindcard" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "tipo" "tipo_card" NOT NULL,
    "dificuldade" "dificuldade" NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta_correta" TEXT,
    "alternativa_texto" TEXT,
    "mindcard_id" TEXT NOT NULL,

    CONSTRAINT "item_mindcard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deck" (
    "id" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "deck_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flashcard" (
    "id" TEXT NOT NULL,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "deck_id" TEXT NOT NULL,

    CONSTRAINT "flashcard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "item_mindcard_mindcard_id_idx" ON "item_mindcard"("mindcard_id");

-- CreateIndex
CREATE INDEX "item_mindcard_tipo_idx" ON "item_mindcard"("tipo");

-- CreateIndex
CREATE INDEX "item_mindcard_dificuldade_idx" ON "item_mindcard"("dificuldade");

-- CreateIndex
CREATE INDEX "flashcard_deck_id_idx" ON "flashcard"("deck_id");

-- CreateIndex
CREATE INDEX "opcao_resposta_item_mindcard_id_idx" ON "opcao_resposta"("item_mindcard_id");

-- AddForeignKey
ALTER TABLE "item_mindcard" ADD CONSTRAINT "item_mindcard_mindcard_id_fkey" FOREIGN KEY ("mindcard_id") REFERENCES "mindcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "opcao_resposta" ADD CONSTRAINT "opcao_resposta_item_mindcard_id_fkey" FOREIGN KEY ("item_mindcard_id") REFERENCES "item_mindcard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "flashcard" ADD CONSTRAINT "flashcard_deck_id_fkey" FOREIGN KEY ("deck_id") REFERENCES "deck"("id") ON DELETE CASCADE ON UPDATE CASCADE;
