// src/helpers/laporanHelper.js

const prisma = require('../lib/prisma');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const uploadDir = path.join(__dirname, '..', '..', 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Middleware untuk Upload Foto Kegiatan
const imageFileFilter = (req, file, cb) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Format file tidak didukung. Hanya file gambar (JPEG, PNG, GIF, WEBP) yang diizinkan.'), false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const timestamp = Date.now();
        const ext = path.extname(file.originalname);
        cb(null, `fotoKegiatan-${timestamp}${ext}`);
    }
});

const uploadFotoKegiatanMiddleware = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }
}).single('fotoKegiatan');

// Fungsi Bantuan
const getFileUrl = (req, filename) => {
    if (!filename) return null;
    return `${req.protocol}://${req.get('host')}/uploads/${filename}`;
};

const deleteExistingPhoto = (fileUrl) => {
    if (!fileUrl) return;
    try {
        const fileName = path.basename(new URL(fileUrl).pathname);
        const filePath = path.join(uploadDir, fileName);
        if (fs.existsSync(filePath)) {
            fs.unlink(filePath, (err) => {
                if (err) console.error(`Gagal menghapus file foto lama: ${filePath}`, err);
            });
        }
    } catch (error) {
        console.error(`URL tidak valid, tidak dapat menghapus file: ${fileUrl}`, error);
    }
};

// --- FUNGSI INTERAKSI DATABASE ---

// PERBAIKAN: Menerima satu objek `data` agar lebih rapi.
const createLaporan = async (data) => {
    return await prisma.laporanKegiatan.create({
        data: data,
    });
};

// PERBAIKAN: Menyertakan data `submission` dan `user` yang terkait.
const getAllLaporan = async (userId = null) => {
    const whereClause = userId ? { userId: userId } : {};
    return await prisma.laporanKegiatan.findMany({
        where: whereClause,
        include: {
            user: { select: { id: true, username: true, email: true } },
            submission: true // Ambil semua data dari submission yang terhubung
        },
        orderBy: { createdAt: 'desc' },
    });
};

// PERBAIKAN: Menyertakan data `submission` dan `user` yang terkait.
const getLaporanById = async (laporanId) => {
    return await prisma.laporanKegiatan.findUnique({
        where: { id: laporanId },
        include: {
            user: { select: { id: true, username: true, email: true } },
            submission: true
        },
    });
};

// PERBAIKAN: Menerima `laporanId` dan satu objek `data` untuk pembaruan.
const updateLaporan = async (laporanId, data) => {
    const existingLaporan = await prisma.laporanKegiatan.findUnique({
        where: { id: laporanId },
    });

    if (!existingLaporan) {
        throw new Error('Laporan tidak ditemukan.');
    }
    if (existingLaporan.userId !== data.userId) {
        throw new Error('Anda tidak memiliki izin untuk memperbarui laporan ini.');
    }

    // Jika ada foto baru, hapus foto lama.
    if (data.fotoKegiatanUrl && existingLaporan.fotoKegiatanUrl) {
        deleteExistingPhoto(existingLaporan.fotoKegiatanUrl);
    }

    return await prisma.laporanKegiatan.update({
        where: { id: laporanId },
        data: {
            deskripsi: data.deskripsi,
            // Gunakan foto baru jika ada, jika tidak, pertahankan yang lama.
            fotoKegiatanUrl: data.fotoKegiatanUrl || existingLaporan.fotoKegiatanUrl,
        },
    });
};

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

    deleteExistingPhoto(existingLaporan.fotoKegiatanUrl);

    return await prisma.laporanKegiatan.delete({
        where: { id: laporanId },
    });
};

// Fungsi Validasi ID
const validateId = (id) => {
    const parsedId = parseInt(id, 10);
    if (isNaN(parsedId) || parsedId <= 0) return null;
    return parsedId;
};

module.exports = {
    uploadFotoKegiatanMiddleware,
    getFileUrl,
    validateId,
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
};