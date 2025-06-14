// src/helpers/uploadHelper.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Path ke direktori 'uploads' sekarang berada di root proyek
const uploadDir = path.join(__dirname, '..', '..', 'uploads');

/**
 * Memastikan direktori untuk upload sudah ada.
 * Jika belum ada, direktori akan dibuat.
 */
const ensureUploadDirectoryExists = () => {
    if (!fs.existsSync(uploadDir)) {
        try {
            fs.mkdirSync(uploadDir, { recursive: true });
            console.log(`Direktori upload berhasil dibuat: ${uploadDir}`);
        } catch (err) {
            console.error('ERROR: Gagal membuat folder upload:', err);
            // Melemparkan error agar aplikasi berhenti jika folder tidak bisa dibuat
            throw new Error('Gagal menginisialisasi direktori upload.');
        }
    }
};

// Panggil fungsi untuk memastikan direktori ada saat aplikasi dimulai
ensureUploadDirectoryExists();

// Konfigurasi penyimpanan untuk Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Tentukan lokasi penyimpanan file
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        // Membersihkan nama field untuk keamanan dan konsistensi
        const safeFieldName = file.fieldname.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
        cb(null, `${safeFieldName}-${timestamp}${ext}`);
    }
});

/**
 * Filter untuk memvalidasi tipe file yang diupload.
 */
const fileFilter = (req, file, cb) => {
    // Daftar tipe file yang diizinkan (hanya dokumen)
    const allowedMimes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // untuk .docx
    ];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true); // Terima file jika tipenya sesuai
    } else {
        // Tolak file dengan pesan error yang jelas
        cb(new Error('Format file tidak didukung. Hanya PDF, DOC, dan DOCX yang diizinkan.'), false);
    }
};

// Middleware multer untuk upload dokumen 'surat'
const uploadSuratMiddleware = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Batas ukuran file 5MB
}).single('surat'); // Mengharapkan field dengan nama 'surat'


// --- FUNGSI BARU UNTUK MEMBUAT URL ---
/**
 * Membuat URL lengkap yang dapat diakses publik untuk file yang diunggah.
 * @param {object} req - Objek request dari Express.
 * @param {string} filename - Nama file yang disimpan di server.
 * @returns {string} URL lengkap ke file.
 */
const getFileUrl = (req, filename) => {
    // Pastikan filename tidak null atau undefined
    if (!filename) {
        return null;
    }
    // Menggabungkan protokol, host, dan nama file untuk membuat URL
    // '/uploads/' adalah path publik yang akan kita atur di app.js
    return `${req.protocol}://${req.get('host')}/uploads/${filename}`;
};


// Ekspor middleware dan fungsi bantuan yang akan digunakan di rute/handler lain
module.exports = {
    uploadSuratMiddleware,
    uploadDir,
    getFileUrl // <-- Ekspor fungsi baru
};