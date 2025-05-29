-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN');

-- AlterTable
ALTER TABLE "uploaded_documents" ADD COLUMN     "reviewedAt" TIMESTAMP(3),
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'PENDING';
