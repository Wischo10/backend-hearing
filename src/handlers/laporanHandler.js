// src/handlers/laporanHandler.js

const {
    validateLaporanInput,
    validateId,
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
    getFileUrl
} = require('../helpers/laporanHelper');

// Impor helper dari submission untuk mengecek status
const { findUploadedDocumentById } = require('../helpers/submissionHelper');

const fs = require('fs');

/**
 * Fungsi bantuan untuk menghapus file yang diupload jika terjadi error.
 * @param {object} file - Objek file dari req.file.
 */
const cleanupUploadedFileOnError = (file) => {
    if (file && file.path) {
        fs.unlink(file.path, (err) => {
            if (err) {
                console.error("Gagal menghapus file setelah terjadi error:", file.path, err);
            }
        });
    }
};

/**
 * =================================================================
 * FUNGSI UTAMA: Membuat Laporan dari Submission yang Disetujui
 * =================================================================
 */
const createLaporanFromSubmissionHandler = async (req, res) => {
    try {
        const { deskripsi, submissionId } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        // 1. Validasi Autentikasi dan Input Dasar
        if (!userId) {
            cleanupUploadedFileOnError(req.file);
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }
        if (!req.file || !deskripsi || !submissionId) {
            cleanupUploadedFileOnError(req.file);
            return res.status(400).json({ status: false, message: 'Deskripsi, fotoKegiatan, dan submissionId wajib diisi.' });
        }
        const parsedSubmissionId = parseInt(submissionId, 10);
        if (isNaN(parsedSubmissionId)) {
            cleanupUploadedFileOnError(req.file);
            return res.status(400).json({ status: false, message: 'Submission ID tidak valid.' });
        }

        // 2. Cek Submission di Database
        const submission = await findUploadedDocumentById(parsedSubmissionId);
        if (!submission) {
            cleanupUploadedFileOnError(req.file);
            return res.status(404).json({ status: false, message: 'Submission tidak ditemukan.' });
        }
        // Pastikan status submission adalah 'APPROVED'
        if (submission.status !== 'APPROVED') {
            cleanupUploadedFileOnError(req.file);
            return res.status(403).json({ status: false, message: 'Tidak dapat membuat laporan dari submission yang belum disetujui.' });
        }

        // 3. Buat URL dan siapkan data laporan
        const fotoKegiatanUrl = getFileUrl(req, req.file.filename);
        const laporanData = {
            userId,
            deskripsi,
            fotoKegiatanUrl,
            submissionId: parsedSubmissionId, // Link ke submission
        };

        // 4. Buat laporan baru
        const newLaporan = await createLaporan(laporanData);

        // 5. Kirim respons sukses
        return res.status(201).json({
            status: true,
            message: 'Laporan kegiatan dari submission berhasil dibuat!',
            data: newLaporan,
        });

    } catch (error) {
        cleanupUploadedFileOnError(req.file);
        console.error('Error saat membuat laporan dari submission:', error);
        return res.status(500).json({ status: false, message: 'Terjadi kesalahan pada server.' });
    }
};

/**
 * Mendapatkan semua laporan kegiatan.
 */
const getAllLaporanHandler = async (req, res) => {
    try {
        let userId = null;
        // Ambil laporan milik sendiri jika ada query ?my=true
        if (req.query.my === 'true') {
            userId = req.auth?.credentials?.user?.id;
            if (!userId) {
                return res.status(401).json({ status: false, message: 'Autentikasi diperlukan untuk melihat laporan Anda.' });
            }
        }
        const laporans = await getAllLaporan(userId);
        return res.status(200).json({
            status: true,
            data: laporans,
        });
    } catch (error) {
        console.error('Error saat mengambil laporan:', error);
        return res.status(500).json({ status: false, message: 'Terjadi kesalahan pada server.' });
    }
};

/**
 * Mendapatkan laporan berdasarkan ID.
 */
const getLaporanByIdHandler = async (req, res) => {
    try {
        const parsedId = validateId(req.params.id);
        if (parsedId === null) {
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }
        const laporan = await getLaporanById(parsedId);
        if (!laporan) {
            return res.status(404).json({ status: false, message: 'Laporan tidak ditemukan.' });
        }
        return res.status(200).json({
            status: true,
            data: laporan,
        });
    } catch (error) {
        console.error(`Error saat mengambil laporan by ID (${req.params.id}):`, error);
        return res.status(500).json({ status: false, message: 'Terjadi kesalahan pada server.' });
    }
};

/**
 * Memperbarui laporan kegiatan.
 */
const updateLaporanHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        // Validasi Autentikasi dan ID
        if (!userId) {
            cleanupUploadedFileOnError(req.file);
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }
        const parsedId = validateId(id);
        if (parsedId === null) {
            cleanupUploadedFileOnError(req.file);
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }
        if (!deskripsi || deskripsi.trim() === '') {
            cleanupUploadedFileOnError(req.file);
            return res.status(400).json({ status: false, message: "Deskripsi tidak boleh kosong." });
        }

        const dataToUpdate = {
            userId,
            deskripsi,
            // Foto bersifat opsional, hanya ditambahkan jika ada file baru yang diupload
            fotoKegiatanUrl: req.file ? getFileUrl(req, req.file.filename) : null,
        };

        const updatedLaporan = await updateLaporan(parsedId, dataToUpdate);

        return res.status(200).json({
            status: true,
            message: 'Laporan kegiatan berhasil diperbarui!',
            data: updatedLaporan,
        });

    } catch (error)
        {
        cleanupUploadedFileOnError(req.file);
        console.error(`Error saat memperbarui laporan (${req.params.id}):`, error);
        if (error.message.includes('izin')) {
            return res.status(403).json({ status: false, message: error.message });
        } else if (error.message.includes('tidak ditemukan')) {
            return res.status(404).json({ status: false, message: error.message });
        }
        return res.status(500).json({ status: false, message: 'Terjadi kesalahan pada server.' });
    }
};

/**
 * Menghapus laporan kegiatan.
 */
const deleteLaporanHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.auth?.credentials?.user?.id;

        if (!userId) {
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }
        const parsedId = validateId(id);
        if (parsedId === null) {
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }

        // Helper akan menangani logika otorisasi dan penghapusan file
        await deleteLaporan(parsedId, userId);

        return res.status(200).json({
            status: true,
            message: 'Laporan kegiatan berhasil dihapus!',
        });
    } catch (error) {
        console.error(`Error saat menghapus laporan (${req.params.id}):`, error);
        if (error.message.includes('izin')) {
            return res.status(403).json({ status: false, message: error.message });
        } else if (error.message.includes('tidak ditemukan')) {
            return res.status(404).json({ status: false, message: error.message });
        }
        return res.status(500).json({ status: false, message: 'Terjadi kesalahan pada server.' });
    }
};

module.exports = {
    getAllLaporanHandler,
    getLaporanByIdHandler,
    updateLaporanHandler,
    deleteLaporanHandler,
    createLaporanFromSubmissionHandler,
};