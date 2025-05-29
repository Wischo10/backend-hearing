-- CreateTable
CREATE TABLE "laporan_kegiatan" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "fotoKegiatanUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "laporan_kegiatan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "laporan_kegiatan" ADD CONSTRAINT "laporan_kegiatan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
