// src/helpers/uploadHelper.js

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = path.join(__dirname, '..', '..', 'uploads');

const ensureUploadDirectoryExists = () => {
    if (!fs.existsSync(uploadDir)) {
        try {
            fs.mkdirSync(uploadDir, { recursive: true });
            console.log(`Direktori upload berhasil dibuat: ${uploadDir}`);
        } catch (err) {
            console.error('ERROR: Gagal membuat folder upload:', err);
            throw new Error('Gagal menginisialisasi direktori upload.');
        }
    }
};

ensureUploadDirectoryExists();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Tentukan lokasi penyimpanan file
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        const safeFieldName = file.fieldname.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/_+/g, '_');
        cb(null, `${safeFieldName}-${timestamp}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    // Sesuaikan ini untuk tipe file laporan kegiatan (misal: gambar) dan surat (pdf/doc)
    // Jika Anda ingin mengizinkan gambar untuk laporan dan dokumen untuk surat,
    // Anda mungkin perlu filter yang lebih spesifik per middleware atau handler.
    // Untuk saat ini, saya akan tambahkan tipe gambar dan dokumen.
    const allowedMimes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'image/jpeg',
        'image/png',
        'image/gif' // Tambahkan tipe gambar
    ];

    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Format file tidak didukung. Hanya PDF, DOC, DOCX, JPEG, PNG, GIF yang diizinkan.'), false);
    }
};

// Middleware multer untuk upload dokumen 'surat'
const uploadSuratMiddleware = multer({ // Ganti nama variabel untuk lebih spesifik
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
}).single('surat'); // Field name 'surat'

// Middleware multer untuk upload foto kegiatan 'fotoKegiatan'
const uploadFotoKegiatanMiddleware = multer({ // <--- MIDLEWARE BARU INI
    storage: storage,
    fileFilter: fileFilter, // Bisa pakai filter yang sama atau custom
    limits: { fileSize: 5 * 1024 * 1024 }
}).single('fotoKegiatan'); // <--- Field name 'fotoKegiatan'

module.exports = {
    uploadSuratMiddleware, // <--- Ekspor middleware spesifik untuk surat
    uploadFotoKegiatanMiddleware, // <--- Ekspor middleware spesifik untuk foto kegiatan
    uploadDir
};