/*
  Warnings:

  - A unique constraint covering the columns `[submissionId]` on the table `laporan_kegiatan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "laporan_kegiatan" ADD COLUMN     "submissionId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "laporan_kegiatan_submissionId_key" ON "laporan_kegiatan"("submissionId");

-- AddForeignKey
ALTER TABLE "laporan_kegiatan" ADD CONSTRAINT "laporan_kegiatan_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "uploaded_documents"("id") ON DELETE SET NULL ON UPDATE CASCADE;
