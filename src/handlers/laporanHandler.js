// src/handlers/laporanHandler.js

const laporanHelpers = require('../helpers/laporanHelper');
const { uploadFotoKegiatanMiddleware } = require('../helpers/uploadHelper');
const multer = require('multer');
const fs = require('fs');

/**
 * Membuat laporan kegiatan baru.
 * Membutuhkan JWT (access token) untuk otentikasi pengguna.
 * Body: { deskripsi: string }
 * File: fotoKegiatan (field name di form-data)
 */
const createLaporanHandler = (req, res) => {
    uploadFotoKegiatanMiddleware(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err);
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        } else if (err) {
            console.error('Error during file upload:', err);
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        }

        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        if (!userId) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file due to missing user ID:', unlinkErr); });
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan atau ID pengguna tidak ditemukan.' });
        }

        const fotoKegiatanUrl = req.file ? req.file.path : null;

        const validation = laporanHelpers.validateLaporanInput(deskripsi, fotoKegiatanUrl);
        if (!validation.status) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file:', unlinkErr); });
            return res.status(400).json({ status: false, message: validation.message });
        }

        try {
            const newLaporan = await laporanHelpers.createLaporan(userId, deskripsi, fotoKegiatanUrl);
            return res.status(201).json({
                status: true,
                message: 'Laporan kegiatan berhasil dibuat!',
                data: newLaporan,
            });
        } catch (error) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file after DB error:', unlinkErr); });
            console.error('Error creating laporan kegiatan:', error);
            return res.status(500).json({ status: false, message: `Internal Server Error: ${error.message}` });
        }
    });
};

/**
 * Mendapatkan daftar semua laporan kegiatan.
 * Opsional: Mengambil laporan untuk user tertentu jika ada query param 'my' = 'true'.
 * Membutuhkan JWT (access token) untuk otentikasi.
 */
const getAllLaporanHandler = async (req, res) => {
    try {
        let userId = null;
        if (req.query.my === 'true') {
            userId = req.auth?.credentials?.user?.id;
            if (!userId) {
                return res.status(401).json({ status: false, message: 'Autentikasi diperlukan untuk melihat laporan Anda.' });
            }
        }

        const laporans = await laporanHelpers.getAllLaporan(userId);
        return res.status(200).json({
            status: true,
            data: laporans,
        });
    } catch (error) {
        console.error('Error fetching laporan kegiatan:', error);
        return res.status(500).json({ status: false, message: `Internal Server Error: ${error.message}` });
    }
};

/**
 * Mendapatkan detail laporan kegiatan berdasarkan ID.
 * Membutuhkan JWT (access token) untuk otentikasi.
 */
const getLaporanByIdHandler = async (req, res) => {
    const { id } = req.params;
    const parsedId = laporanHelpers.validateId(id); // <--- PERBAIKAN DI SINI! (validateSubmissionId -> validateId)
    if (parsedId === null) {
        return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
    }

    try {
        const laporan = await laporanHelpers.getLaporanById(parsedId);
        if (!laporan) {
            return res.status(404).json({ status: false, message: 'Laporan tidak ditemukan.' });
        }
        return res.status(200).json({
            status: true,
            data: laporan,
        });
    } catch (error) {
        console.error('Error fetching laporan by ID:', error);
        return res.status(500).json({ status: false, message: `Internal Server Error: ${error.message}` });
    }
};

/**
 * Memperbarui laporan kegiatan.
 * Membutuhkan JWT (access token) untuk otentikasi dan otorisasi.
 * Body: { deskripsi: string, (optional) fotoKegiatan (file) }
 */
const updateLaporanHandler = (req, res) => {
    uploadFotoKegiatanMiddleware(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
            console.error('Multer error:', err);
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        } else if (err) {
            console.error('Error during file upload:', err);
            return res.status(400).json({ status: false, message: `Upload failed: ${err.message}` });
        }

        const { id } = req.params;
        const { deskripsi } = req.body;
        const userId = req.auth?.credentials?.user?.id;

        if (!userId) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file due to missing user ID:', unlinkErr); });
            return res.status(401).json({ status: false, message: 'Autentikasi diperlukan atau ID pengguna tidak ditemukan.' });
        }

        const parsedId = laporanHelpers.validateId(id); // <--- PERBAIKAN DI SINI! (validateSubmissionId -> validateId)
        if (parsedId === null) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file:', unlinkErr); });
            return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
        }

        const fotoKegiatanUrl = req.file ? req.file.path : null;

        const validation = laporanHelpers.validateLaporanInput(deskripsi, fotoKegiatanUrl || 'dummy');
        if (!validation.status && !fotoKegiatanUrl) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file:', unlinkErr); });
            return res.status(400).json({ status: false, message: validation.message });
        }

        try {
            const updatedLaporan = await laporanHelpers.updateLaporan(parsedId, userId, deskripsi, fotoKegiatanUrl);
            return res.status(200).json({
                status: true,
                message: 'Laporan kegiatan berhasil diperbarui!',
                data: updatedLaporan,
            });
        } catch (error) {
            if (req.file) fs.unlink(req.file.path, (unlinkErr) => { if (unlinkErr) console.error('Error deleting uploaded file after DB error:', unlinkErr); });
            console.error('Error updating laporan kegiatan:', error);
            if (error.message.includes('izin')) {
                return res.status(403).json({ status: false, message: error.message });
            } else if (error.message.includes('tidak ditemukan')) {
                return res.status(404).json({ status: false, message: error.message });
            }
            return res.status(500).json({ status: false, message: `Internal Server Error: ${error.message}` });
        }
    });
};

/**
 * Menghapus laporan kegiatan.
 * Membutuhkan JWT (access token) untuk otentikasi dan otorisasi.
 */
const deleteLaporanHandler = async (req, res) => {
    const { id } = req.params;
    const userId = req.auth?.credentials?.user?.id;

    if (!userId) {
        return res.status(401).json({ status: false, message: 'Autentikasi diperlukan atau ID pengguna tidak ditemukan.' });
    }

    const parsedId = laporanHelpers.validateId(id); // <--- PERBAIKAN DI SINI! (validateSubmissionId -> validateId)
    if (parsedId === null) {
        return res.status(400).json({ status: false, message: 'ID laporan tidak valid.' });
    }

    try {
        await laporanHelpers.deleteLaporan(parsedId, userId);
        return res.status(200).json({
            status: true,
            message: 'Laporan kegiatan berhasil dihapus!',
        });
    } catch (error) {
        console.error('Error deleting laporan kegiatan:', error);
        if (error.message.includes('izin')) {
            return res.status(403).json({ status: false, message: error.message });
        } else if (error.message.includes('tidak ditemukan')) {
            return res.status(404).json({ status: false, message: error.message });
        }
        return res.status(500).json({ status: false, message: `Internal Server Error: ${error.message}` });
    }
};

module.exports = {
    createLaporanHandler,
    getAllLaporanHandler,
    getLaporanByIdHandler,
    updateLaporanHandler,
    deleteLaporanHandler,
};