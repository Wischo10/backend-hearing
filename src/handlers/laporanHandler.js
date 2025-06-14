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
const fs = require('fs');
const path = require('path'); // Impor path untuk keamanan

/**
 * Membuat laporan kegiatan baru.
 */
const createLaporanHandler = async (req, res) => {
    // Middleware upload sudah dijalankan oleh routes.js.
    // Kita bisa langsung akses req.file dan req.body.
    try {
        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        // 1. Validasi Autentikasi
        if (!userId) {
            // Jika tidak terautentikasi, hapus file yang mungkin sudah terlanjur diupload
            if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }

        // 2. Validasi Input (File dan Deskripsi)
        if (!req.file) {
            return res.status(400).json({ status: false, message: 'Foto kegiatan harus diupload.' });
        }
        if (!deskripsi || deskripsi.trim() === '') {
            fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
            return res.status(400).json({ status: false, message: 'Deskripsi tidak boleh kosong.' });
        }

        // 3. Buat URL dan simpan ke database
        const fotoKegiatanUrl = getFileUrl(req, req.file.filename);
        const newLaporan = await createLaporan({ // Mengirim sebagai objek
            userId,
            deskripsi,
            fotoKegiatanUrl,
        });

        // 4. Kirim respons sukses
        return res.status(201).json({
            status: true,
            message: 'Laporan kegiatan berhasil dibuat!',
            data: newLaporan,
        });

    } catch (error) {
        // Jika terjadi error saat proses, hapus file yang sudah terupload
        if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
        console.error('Error creating laporan:', error);
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
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
const updateLaporanHandler = async (req, res) => {
    // Sama seperti create, middleware sudah dijalankan oleh routes.js
    try {
        const { id } = req.params;
        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        // Validasi Autentikasi dan ID
        if (!userId) {
            if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan.' });
        }
        const parsedId = validateId(id);
        if (parsedId === null) {
            if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }

        // Foto bersifat opsional saat update
        const fotoKegiatanUrl = req.file ? getFileUrl(req, req.file.filename) : null;
        
        // Deskripsi wajib ada
        if (!deskripsi || deskripsi.trim() === '') {
            if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
            return res.status(400).json({ status: false, message: "Deskripsi tidak boleh kosong." });
        }

        const updatedLaporan = await updateLaporan(parsedId, {
            userId,
            deskripsi,
            fotoKegiatanUrl, // Kirim null jika tidak ada foto baru
        });

        return res.status(200).json({
            status: true,
            message: 'Laporan kegiatan berhasil diperbarui!',
            data: updatedLaporan,
        });
    } catch (error) {
        if (req.file) fs.unlink(req.file.path, (e) => e && console.error("Gagal hapus file:", e));
        console.error('Error updating laporan:', error);
        if (error.message.includes('izin')) {
            return res.status(403).json({ status: false, message: error.message });
        } else if (error.message.includes('tidak ditemukan')) {
            return res.status(404).json({ status: false, message: error.message });
        }
        return res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
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