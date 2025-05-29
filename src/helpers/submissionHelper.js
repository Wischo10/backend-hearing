// src/helpers/submissionHelpers.js

// Perbaikan: Ubah path impor PrismaClient agar sesuai dengan lokasi output kustom
const { PrismaClient } = require('../generated/prisma'); // <--- PERBAIKAN DI SINI!
const prisma = new PrismaClient(); // Inisialisasi PrismaClient di helper juga

// --- Fungsi Validasi ---

/**
 * Memvalidasi apakah ID yang diberikan adalah integer positif.
 * @param {string | number} id - ID yang akan divalidasi.
 * @returns {number | null} ID yang valid (integer) atau null jika tidak valid.
 */
exports.validateSubmissionId = (id) => {
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId) || parsedId <= 0) {
    return null;
  }
  return parsedId;
};

/**
 * Memvalidasi apakah status yang diberikan adalah nilai yang diizinkan (PENDING, APPROVED, REJECTED).
 * @param {string} status - Status yang akan divalidasi.
 * @returns {string | null} Status yang valid (huruf besar) atau null jika tidak valid.
 */
exports.validateSubmissionStatus = (status) => {
  const validStatuses = ['PENDING', 'APPROVED', 'REJECTED'];
  const upperCaseStatus = String(status).toUpperCase();
  if (!validStatuses.includes(upperCaseStatus)) {
    return null;
  }
  return upperCaseStatus;
};

// --- Fungsi Utilitas Database (opsional) ---

/**
 * Mengambil semua dokumen yang diupload dari database.
 * @returns {Promise<Array>} Array berisi objek dokumen.
 */
exports.getAllUploadedDocuments = async () => {
  return await prisma.uploadedDocument.findMany({
    orderBy: {
      uploadDate: 'desc',
    },
  });
};

/**
 * Memperbarui status dokumen yang diupload berdasarkan ID.
 * @param {number} id - ID dokumen.
 * @param {string} status - Status baru (PENDING, APPROVED, REJECTED).
 * @returns {Promise<Object>} Objek dokumen yang diperbarui.
 */
exports.updateUploadedDocumentStatus = async (id, status) => {
  return await prisma.uploadedDocument.update({
    where: { id: id },
    data: {
      status: status,
      reviewedAt: new Date(),
    },
  });
};

/**
 * Mencari dokumen yang diupload berdasarkan ID.
 * @param {number} id - ID dokumen.
 * @returns {Promise<Object | null>} Objek dokumen atau null jika tidak ditemukan.
 */
exports.findUploadedDocumentById = async (id) => {
    return await prisma.uploadedDocument.findUnique({
        where: { id: id },
    });
};

// Penting: Disconnect PrismaClient saat aplikasi berhenti
// Ini bisa ditangani di app.js juga, tergantung strategi koneksi Anda.
// process.on('beforeExit', async () => {
//     await prisma.$disconnect();
// });