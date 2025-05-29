const express = require('express');
const router = express.Router();

// Import handlers dari lokasi yang benar
const {
  registerHandler,
  loginHandler,
  logoutHandler,
  refreshHandler
} = require('./src/handlers/authHandler');

const uploadHandler = require('./src/handlers/uploadHandler');

const {
  getSubmissions,
  updateSubmissionStatus, // Jika Anda berencana menambahkan rute untuk ini
  serveUploadedFile // Jika Anda berencana menambahkan rute untuk ini
} = require('./src/handlers/submissionHandler');

// Import handlers laporan kegiatan yang baru
const {
  createLaporanHandler,
  getAllLaporanHandler,
  getLaporanByIdHandler,
  updateLaporanHandler,
  deleteLaporanHandler,
} = require('./src/handlers/laporanHandler'); // <--- IMPORT LAPORAN HANDLERS

// Import middleware autentikasi dari authHelper.js
const { authenticateJWT } = require('./src/helpers/authHelper');

// Middleware untuk parsing JSON body (sudah ada di app.js)
// router.use(express.json());

// Rute Autentikasi
router.post('/register', registerHandler);
router.get('/login', loginHandler);
router.post('/logout', logoutHandler);
router.post('/refresh', authenticateJWT(true), refreshHandler);

// Rute Upload (umum, bisa digunakan juga untuk foto laporan)
router.post('/upload', authenticateJWT(), uploadHandler.handleUpload);

// Rute Pengajuan (Submissions)
router.get('/submissions', authenticateJWT(), getSubmissions); // Perbaikan: Gunakan /submissions untuk konsistensi
router.put('/submissions/:id/status', authenticateJWT(), updateSubmissionStatus); // Contoh: update status
router.get('/submissions/files/:fileName', serveUploadedFile); // Contoh: serve file

// Rute Laporan Kegiatan <--- BAGIAN BARU UNTUK LAPORAN
router.post('/laporan', authenticateJWT(), createLaporanHandler); // Buat laporan
router.get('/laporan', authenticateJWT(), getAllLaporanHandler); // Dapatkan semua laporan (bisa juga /laporan?my=true)
router.get('/laporan/:id', authenticateJWT(), getLaporanByIdHandler); // Dapatkan laporan berdasarkan ID
router.put('/laporan/:id', authenticateJWT(), updateLaporanHandler); // Update laporan
router.delete('/laporan/:id', authenticateJWT(), deleteLaporanHandler); // Hapus laporan

// Contoh rute yang dilindungi
router.get('/protected', authenticateJWT(), (req, res) => {
  res.json({ status: true, message: 'Access granted to protected route!', user: req.auth.credentials.user });
});

module.exports = router;