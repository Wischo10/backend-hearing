// src/helpers/submissionHelper.js

const prisma = require('../lib/prisma');

/**
 * Mendapatkan semua dokumen submission, diurutkan dari yang terbaru.
 * @returns {Promise<Array>} Array berisi objek dokumen yang diupload.
 */
const getAllUploadedDocuments = async () => {
    return await prisma.uploadedDocument.findMany({
        orderBy: {
            uploadDate: 'desc', // Mengurutkan berdasarkan tanggal upload, terbaru dulu
        },
    });
};

/**
 * Memperbarui status dokumen submission di database.
 * @param {number} id - ID dokumen.
 * @param {string} status - Status baru ('APPROVED', 'REJECTED', 'PENDING').
 * @returns {Promise<object>} Dokumen yang telah diperbarui.
 */
const updateUploadedDocumentStatus = async (id, status) => {
    return await prisma.uploadedDocument.update({
        where: { id },
        data: {
            status,
            reviewedAt: new Date(), // Tambahkan reviewedAt untuk melacak kapan status diubah
        },
    });
};

/**
 * Memvalidasi ID submission.
 * @param {string | number} id - ID yang akan divalidasi.
 * @returns {number | null} ID integer atau null jika tidak valid.
 */
const validateSubmissionId = (id) => {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId) || parsedId <= 0) {
        return null;
    }
    return parsedId;
};

/**
 * Memvalidasi status submission.
 * @param {string} status - Status yang akan divalidasi.
 * @returns {string | null} Status yang valid (huruf besar) atau null jika tidak valid.
 */
const validateSubmissionStatus = (status) => {
    if (!status) return null;
    const validStatuses = ['APPROVED', 'REJECTED', 'PENDING'];
    const upperCaseStatus = status.toUpperCase();
    return validStatuses.includes(upperCaseStatus) ? upperCaseStatus : null;
};

// =================================================================
// EKSPOR
// =================================================================
module.exports = {
    getAllUploadedDocuments,
    updateUploadedDocumentStatus,
    validateSubmissionId,
    validateSubmissionStatus,
};