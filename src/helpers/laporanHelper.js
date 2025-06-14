const prisma = require('../lib/prisma');
const fs = require('fs');
const path = require('path');
const multer = require('multer'); // 1. Impor multer
const { uploadDir } = require('./uploadHelper'); // Import uploadDir dari uploadHelper untuk path foto

// --- Middleware untuk Upload Foto Kegiatan ---

/**
 * Filter file khusus untuk memastikan hanya file gambar yang diterima.
 */
const imageFileFilter = (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true); // Terima file jika tipenya adalah gambar
    } else {
        // Tolak file jika bukan gambar
        cb(new Error('Format file tidak didukung. Hanya file gambar (JPEG, PNG, GIF) yang diizinkan.'), false);
    }
};

// Konfigurasi penyimpanan Multer untuk foto kegiatan
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Gunakan direktori yang sama dari uploadHelper
    },
    filename: function (req, file, cb) {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, `fotoKegiatan-${timestamp}${ext}`); // Nama file spesifik untuk foto kegiatan
    }
});

// Buat middleware multer untuk upload foto kegiatan
const uploadFotoKegiatanMiddleware = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Batas ukuran file 5MB
}).single('fotoKegiatan'); // Mengharapkan field dengan nama 'fotoKegiatan'

// --- Fungsi Bantuan untuk URL ---

/**
 * Membuat URL lengkap yang dapat diakses publik untuk file yang diunggah.
 * @param {object} req - Objek request dari Express.
 * @param {string} filename - Nama file yang disimpan di server.
 * @returns {string} URL lengkap ke file.
 */
const getFileUrl = (req, filename) => {
    if (!filename) {
        return null;
    }
    // '/uploads/' adalah path publik yang diatur di app.js
    return `${req.protocol}://${req.get('host')}/uploads/${filename}`;
};


// --- Fungsi Validasi ---

/**
 * Memvalidasi apakah ID yang diberikan adalah integer positif.
 * @param {string | number} id - ID yang akan divalidasi.
 * @returns {number | null} ID yang valid (integer) atau null jika tidak valid.
 */
const validateId = (id) => {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId) || parsedId <= 0) {
        return null;
    }
    return parsedId;
};


/**
 * Memvalidasi input untuk membuat atau memperbarui laporan kegiatan.
 * @param {string} deskripsi - Deskripsi kegiatan.
 * @param {string} fotoKegiatanPath - Path atau URL foto kegiatan.
 * @returns {object} Objek { status: boolean, message: string }
 */
const validateLaporanInput = (deskripsi, fotoKegiatanPath) => {
    if (!deskripsi || deskripsi.trim() === '') {
        return { status: false, message: 'Deskripsi kegiatan tidak boleh kosong.' };
    }
    if (!fotoKegiatanPath || fotoKegiatanPath.trim() === '') {
        return { status: false, message: 'Foto kegiatan harus diupload.' };
    }
    return { status: true, message: 'Input valid.' };
};

// --- Fungsi Interaksi Database (Prisma) ---

/**
 * Membuat laporan kegiatan baru di database.
 * @param {number} userId - ID pengguna yang membuat laporan.
 * @param {string} deskripsi - Deskripsi kegiatan.
 * @param {string} fotoKegiatanUrl - URL/path foto kegiatan.
 * @returns {Promise<object>} Objek laporan kegiatan yang dibuat.
 */
const createLaporan = async (userId, deskripsi, fotoKegiatanUrl) => {
    return await prisma.laporanKegiatan.create({
        data: {
            userId,
            deskripsi,
            fotoKegiatanUrl,
        },
    });
};

/**
 * Mendapatkan semua laporan kegiatan, opsional berdasarkan userId.
 * @param {number} [userId] - ID pengguna (opsional).
 * @returns {Promise<Array>} Array berisi objek laporan kegiatan.
 */
const getAllLaporan = async (userId = null) => {
    const whereClause = userId ? { userId: userId } : {};
    return await prisma.laporanKegiatan.findMany({
        where: whereClause,
        include: { user: { select: { id: true, username: true, email: true } } }, // Inklusi data user
        orderBy: {
            createdAt: 'desc',
        },
    });
};

/**
 * Mendapatkan laporan kegiatan berdasarkan ID.
 * @param {number} laporanId - ID laporan.
 * @returns {Promise<object | null>} Objek laporan kegiatan atau null jika tidak ditemukan.
 */
const getLaporanById = async (laporanId) => {
    return await prisma.laporanKegiatan.findUnique({
        where: { id: laporanId },
        include: { user: { select: { id: true, username: true, email: true } } },
    });
};

/**
 * Memperbarui laporan kegiatan yang sudah ada.
 * @param {number} laporanId - ID laporan yang akan diperbarui.
 * @param {number} userId - ID pengguna yang memperbarui (untuk otorisasi).
 * @param {string} deskripsi - Deskripsi baru.
 * @param {string} [fotoKegiatanUrl] - URL/path foto baru (opsional).
 * @returns {Promise<object>} Objek laporan kegiatan yang diperbarui.
 * @throws {Error} Jika laporan tidak ditemukan atau pengguna tidak berhak memperbarui.
 */
const updateLaporan = async (laporanId, userId, deskripsi, fotoKegiatanUrl = null) => {
    const existingLaporan = await prisma.laporanKegiatan.findUnique({
        where: { id: laporanId },
    });

    if (!existingLaporan) {
        throw new Error('Laporan tidak ditemukan.');
    }

    if (existingLaporan.userId !== userId) {
        throw new Error('Anda tidak memiliki izin untuk memperbarui laporan ini.');
    }

    if (fotoKegiatanUrl && existingLaporan.fotoKegiatanUrl) {
        const oldFilePath = path.join(uploadDir, path.basename(existingLaporan.fotoKegiatanUrl));
        if (fs.existsSync(oldFilePath)) {
            fs.unlink(oldFilePath, (err) => {
                if (err) console.error('Error deleting old report photo:', oldFilePath, err);
            });
        }
    }

    return await prisma.laporanKegiatan.update({
        where: { id: laporanId },
        data: {
            deskripsi,
            fotoKegiatanUrl: fotoKegiatanUrl || existingLaporan.fotoKegiatanUrl,
        },
    });
};

/**
 * Menghapus laporan kegiatan.
 * @param {number} laporanId - ID laporan yang akan dihapus.
 * @param {number} userId - ID pengguna yang menghapus (untuk otorisasi).
 * @returns {Promise<object>} Objek laporan yang dihapus.
 * @throws {Error} Jika laporan tidak ditemukan atau pengguna tidak berhak menghapus.
 */
const deleteLaporan = async (laporanId, userId) => {
    const existingLaporan = await prisma.laporanKegiatan.findUnique({
        where: { id: laporanId },
    });

    if (!existingLaporan) {
        throw new Error('Laporan tidak ditemukan.');
    }

    if (existingLaporan.userId !== userId) {
        throw new Error('Anda tidak memiliki izin untuk menghapus laporan ini.');
    }

    if (existingLaporan.fotoKegiatanUrl) {
        const filePathToRemove = path.join(uploadDir, path.basename(existingLaporan.fotoKegiatanUrl));
        if (fs.existsSync(filePathToRemove)) {
            fs.unlink(filePathToRemove, (err) => {
                if (err) console.error('Error deleting report photo during delete:', filePathToRemove, err);
            });
        }
    }

    return await prisma.laporanKegiatan.delete({
        where: { id: laporanId },
    });
};

// Ekspor middleware baru bersama dengan fungsi lainnya
module.exports = {
    uploadFotoKegiatanMiddleware,
    getFileUrl, // <-- Ekspor fungsi baru
    validateLaporanInput,
    validateId,
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
};