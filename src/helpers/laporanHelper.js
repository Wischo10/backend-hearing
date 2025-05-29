// src/helpers/laporanHelper.js

const { PrismaClient } = require('../generated/prisma'); // Pastikan path ini benar
const prisma = new PrismaClient();
const fs = require('fs');
const path = require('path');
const { uploadDir } = require('./uploadHelper'); // Import uploadDir dari uploadHelper untuk path foto

// --- Fungsi Validasi ---

/**
 * Memvalidasi apakah ID yang diberikan adalah integer positif.
 * @param {string | number} id - ID yang akan divalidasi.
 * @returns {number | null} ID yang valid (integer) atau null jika tidak valid.
 */
const validateId = (id) => { // <--- Pastikan nama fungsi ini adalah 'validateId'
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
    // Perbaikan: Foto kegiatan bisa opsional saat update.
    // Jika fotoKegiatanPath tidak ada (saat update), dan deskripsi ada, itu valid.
    // Jika ini untuk create, maka fotoKegiatanPath harus ada.
    // Validasi ini lebih baik disesuaikan per handler jika ada perbedaan aturan.
    // Untuk saat ini, asumsikan foto selalu wajib untuk create, dan opsional untuk update jika fotoKegiatanPath null.
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

    // Jika ada foto baru, hapus foto lama (opsional tapi disarankan)
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
            fotoKegiatanUrl: fotoKegiatanUrl || existingLaporan.fotoKegiatanUrl, // Gunakan yang baru atau yang lama
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

    // Hapus file foto terkait (opsional tapi disarankan)
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

module.exports = {
    validateLaporanInput,
    validateId, // <--- TAMBAHKAN validateId ke exports
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
};