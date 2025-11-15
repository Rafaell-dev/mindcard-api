/*
  Warnings:

  - A unique constraint covering the columns `[job_id]` on the table `mindcard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ProcessingStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "mindcard" ADD COLUMN     "completed_at" TIMESTAMP(3),
ADD COLUMN     "error_message" TEXT,
ADD COLUMN     "job_id" TEXT,
ADD COLUMN     "processing_status" "ProcessingStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "started_at" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "mindcard_job_id_key" ON "mindcard"("job_id");

-- CreateIndex
CREATE INDEX "mindcard_processing_status_idx" ON "mindcard"("processing_status");

-- CreateIndex
CREATE INDEX "mindcard_job_id_idx" ON "mindcard"("job_id");
