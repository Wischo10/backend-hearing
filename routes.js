// routes.js

const express = require('express');
const router = express.Router();

// =================================================================
// IMPORTS
// =================================================================

// --- Handlers ---
const {
    registerHandler,
    loginHandler,
    logoutHandler,
    refreshHandler
} = require('./src/handlers/authHandler');

const uploadHandler = require('./src/handlers/uploadHandler');

const {
    getSubmissions,
    updateSubmissionStatus,
    serveUploadedFile
} = require('./src/handlers/submissionHandler');

const {
    createLaporanHandler,
    getAllLaporanHandler,
    getLaporanByIdHandler,
    updateLaporanHandler,
    deleteLaporanHandler,
} = require('./src/handlers/laporanHandler');

// --- Helpers & Middlewares ---
const { authenticateJWT } = require('./src/helpers/authHelper');
// Impor middleware upload foto dari laporanHelper
const { uploadFotoKegiatanMiddleware } = require('./src/helpers/laporanHelper');
// Impor middleware upload surat dari uploadHelper (jika ada handler upload terpisah)
const { uploadSuratMiddleware } = require('./src/helpers/uploadHelper');


// =================================================================
// RUTE-RUTE APLIKASI
// =================================================================

// --- Rute Autentikasi ---
router.post('/register', registerHandler);
// PERBAIKAN: Login seharusnya menggunakan method POST karena mengirim data (email/password)
router.post('/login', loginHandler);
router.post('/logout', logoutHandler);
// Rute refresh token (sudah benar)
router.post('/refresh', authenticateJWT(true), refreshHandler);


// // --- Rute Pengajuan Surat (Submission) ---
// // Rute ini khusus untuk mengupload surat dan membuat data submission
// // PERBAIKAN: Gunakan middleware upload yang spesifik untuk surat
// router.post('/submissions', authenticateJWT(), uploadSuratMiddleware, uploadHandler.handleUpload);

// Mendapatkan semua data submission
router.get('/submissions', authenticateJWT(), getSubmissions);

// Memperbarui status submission (misal: dari PENDING ke APPROVED)
// Menggunakan PATCH lebih semantik untuk pembaruan parsial, tapi PUT juga bisa
router.patch('/submissions/:id/status', authenticateJWT(), updateSubmissionStatus);

// Rute untuk mengakses file submission yang telah diupload
router.get('/submissions/files/:fileName', serveUploadedFile);


// --- Rute Laporan Kegiatan ---
// PERBAIKAN: Terapkan middleware upload foto langsung di rute pembuatan laporan
// Alur: Autentikasi -> Upload Foto -> Jalankan Handler untuk simpan ke DB
router.post('/laporan', authenticateJWT(), uploadFotoKegiatanMiddleware, createLaporanHandler);

// Mendapatkan semua laporan
router.get('/laporan', authenticateJWT(), getAllLaporanHandler);

// Mendapatkan laporan spesifik berdasarkan ID
router.get('/laporan/:id', authenticateJWT(), getLaporanByIdHandler);

// Memperbarui laporan (bisa juga dengan upload foto baru)
router.put('/laporan/:id', authenticateJWT(), uploadFotoKegiatanMiddleware, updateLaporanHandler);

// Menghapus laporan
router.delete('/laporan/:id', authenticateJWT(), deleteLaporanHandler);


// --- Rute Terlindungi (Contoh) ---
router.get('/protected', authenticateJWT(), (req, res) => {
    res.json({
        status: true,
        message: 'Akses diberikan ke rute terproteksi!',
        user: req.auth.credentials.user
    });
});

module.exports = router;