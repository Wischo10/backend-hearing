// src/handlers/uploadHandler.js

// Impor helper yang dibutuhkan
const { getFileUrl } = require('../helpers/uploadHelper');
const prisma = require('../lib/prisma');
const fs = require('fs');

/**
 * Fungsi bantuan untuk menghapus file jika terjadi error.
 * @param {object} file - Objek file dari req.file.
 */
const cleanupFileOnError = (file) => {
    if (file && file.path) {
        fs.unlink(file.path, (err) => {
            if (err) console.error("Gagal menghapus file setelah terjadi error:", file.path, err);
        });
    }
};

/**
 * Handler untuk membuat data submission setelah file diupload.
 * Middleware `uploadSuratMiddleware` sudah dijalankan oleh routes.js.
 */
exports.handleUpload = async (req, res) => {
    try {
        // 1. Validasi: Pastikan file sudah diupload oleh middleware
        if (!req.file) {
            return res.status(400).json({ success: false, message: 'Tidak ada file surat yang diupload.' });
        }

        const { nama } = req.body;

        // 2. Validasi: Pastikan field 'nama' tidak kosong
        if (!nama || nama.trim() === '') {
            cleanupFileOnError(req.file); // Hapus file jika data tidak valid
            return res.status(400).json({ success: false, message: 'Field "nama" tidak boleh kosong.' });
        }

        // 3. Buat URL publik dan siapkan data
        const fileUrl = getFileUrl(req, req.file.filename);
        const documentData = {
            namaPengirim: nama,
            fileName: req.file.originalname,
            filePath: fileUrl, // Simpan URL, bukan path lokal
            fileMimeType: req.file.mimetype,
            fileSize: req.file.size
        };

        // 4. Simpan informasi ke database
        const newDocument = await prisma.uploadedDocument.create({
            data: documentData
        });

        // console.log(`File '${req.file.originalname}' diupload oleh ${nama}. URL: ${fileUrl}`);

        // 5. Kirim respons sukses
        return res.status(201).json({
            success: true,
            message: 'Surat berhasil diupload dan informasi disimpan!',
            data: newDocument
        });

    } catch (dbError) {
        cleanupFileOnError(req.file); // Hapus file jika ada error database
        console.error('Error saat menyimpan info dokumen:', dbError);
        return res.status(500).json({ success: false, message: 'Terjadi kesalahan saat menyimpan informasi dokumen.' });
    }
};