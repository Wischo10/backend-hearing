// src/handlers/laporanHandler.js

// --- PERBAIKAN UTAMA DI SINI ---
// Mengimpor semua fungsi yang dibutuhkan, termasuk middleware, dari laporanHelper.js
const {
    uploadFotoKegiatanMiddleware,
    validateLaporanInput,
    validateId,
    createLaporan,
    getAllLaporan,
    getLaporanById,
    updateLaporan,
    deleteLaporan,
    getFileUrl // Pastikan getFileUrl juga diimpor jika dibutuhkan
} = require('../helpers/laporanHelper');

const multer = require('multer');
const fs = require('fs');

/**
 * Membuat laporan kegiatan baru.
 */
const createLaporanHandler = (req, res) => {
    // Middleware upload dijalankan terlebih dahulu
    uploadFotoKegiatanMiddleware(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        } else if (err) {
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        }

        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        // Validasi autentikasi
        if (!userId) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file:', unlinkErr); });
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }

        // Buat URL lengkap untuk file yang diunggah
        const fotoKegiatanUrl = req.file ? getFileUrl(req, req.file.filename) : null;

        // Validasi input
        const validation = validateLaporanInput(deskripsi, fotoKegiatanUrl);
        if (!validation.status) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file:', unlinkErr); });
            return res.status(400).json({ status: false, message: validation.message });
        }

        try {
            const newLaporan = await createLaporan(userId, deskripsi, fotoKegiatanUrl);
            return res.status(201).json({
                status: true,
                message: 'Laporan kegiatan berhasil dibuat!',
                data: newLaporan,
            });
        } catch (error) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file after DB error:', unlinkErr); });
            console.error('Error creating laporan:', error);
            return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    });
};

/**
 * Mendapatkan semua laporan kegiatan.
 */
const getAllLaporanHandler = async (req, res) => {
    try {
        let userId = null;
        if (req.query.my === 'true') {
            userId = req.auth?.credentials?.user?.id;
            if (!userId) {
                return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
            }
        }
        const laporans = await getAllLaporan(userId);
        return res.status(200).json({
            status: true,
            data: laporans,
        });
    } catch (error) {
        console.error('Error fetching laporan:', error);
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};

/**
 * Mendapatkan laporan berdasarkan ID.
 */
const getLaporanByIdHandler = async (req, res) => {
    const { id } = req.params;
    const parsedId = validateId(id);
    if (parsedId === null) {
        return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
    }

    try {
        const laporan = await getLaporanById(parsedId);
        if (!laporan) {
            return res.status(404).json({ status: false, message: 'Laporan tidak ditemukan.' });
        }
        return res.status(200).json({
            status: true,
            data: laporan,
        });
    } catch (error) {
        console.error('Error fetching laporan by ID:', error);
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};

/**
 * Memperbarui laporan kegiatan.
 */
const updateLaporanHandler = (req, res) => {
    uploadFotoKegiatanMiddleware(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        } else if (err) {
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        }

        const { id } = req.params;
        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        if (!userId) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file:', unlinkErr); });
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }

        const parsedId = validateId(id);
        if (parsedId === null) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file:', unlinkErr); });
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }

        const fotoKegiatanUrl = req.file ? getFileUrl(req, req.file.filename) : null;
        
        // Deskripsi harus ada, tapi foto tidak wajib saat update
        if (!deskripsi || deskripsi.trim() === '') {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file:', unlinkErr); });
            return res.status(400).json({ status: false, message: "Deskripsi tidak boleh kosong." });
        }

        try {
            const updatedLaporan = await updateLaporan(parsedId, userId, deskripsi, fotoKegiatanUrl);
            return res.status(200).json({
                status: true,
                message: 'Laporan kegiatan berhasil diperbarui!',
                data: updatedLaporan,
            });
        } catch (error) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting file after DB error:', unlinkErr); });
            console.error('Error updating laporan:', error);
            if (error.message.includes('izin')) {
                return res.status(403).json({ status: false, message: error.message });
            } else if (error.message.includes('tidak ditemukan')) {
                return res.status(404).json({ status: false, message: error.message });
            }
            return res.status(500).json({ status: false, message: 'Internal Server Error' });
        }
    });
};

/**
 * Menghapus laporan kegiatan.
 */
const deleteLaporanHandler = async (req, res) => {
    const { id } = req.params;
    const userId = req.auth?.credentials?.user?.id;

    if (!userId) {
        return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
    }

    const parsedId = validateId(id);
    if (parsedId === null) {
        return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
    }

    try {
        await deleteLaporan(parsedId, userId);
        return res.status(200).json({
            status: true,
            message: 'Laporan kegiatan berhasil dihapus!',
        });
    } catch (error) {
        console.error('Error deleting laporan:', error);
        if (error.message.includes('izin')) {
            return res.status(403).json({ status: false, message: error.message });
        } else if (error.message.includes('tidak ditemukan')) {
            return res.status(404).json({ status: false, message: error.message });
        }
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    createLaporanHandler,
    getAllLaporanHandler,
    getLaporanByIdHandler,
    updateLaporanHandler,
    deleteLaporanHandler,
};