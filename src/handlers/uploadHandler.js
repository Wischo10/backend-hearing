// src/handlers/uploadHandler.js
// Perbaikan: Lakukan destructuring saat mengimpor uploadMiddleware
const { uploadMiddleware } = require('../helpers/uploadHelper'); // <--- PERBAIKAN DI SINI
const { PrismaClient } = require('../generated/prisma');
const fs = require('fs');
const multer = require('multer'); // Tetap impor multer untuk MulterError

const prisma = new PrismaClient();

exports.handleUpload = (req, res) => {
  uploadMiddleware(req, res, async function (err) { // Sekarang uploadMiddleware adalah fungsi Multer
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return res.status(400).json({ success: false, message: err.message });
    } else if (err) {
      console.error('Error during file upload:', err);
      return res.status(400).json({ success: false, message: err.message });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Tidak ada file surat yang diupload.' });
    }

    const nama = req.body.nama;
    const filePath = req.file.path;

    if (!nama) {
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting file:', unlinkErr);
      });
      return res.status(400).json({ success: false, message: 'Field "nama" tidak boleh kosong.' });
    }

    try {
      const newDocument = await prisma.uploadedDocument.create({
        data: {
          namaPengirim: nama,
          fileName: req.file.originalname,
          filePath: filePath,
          fileMimeType: req.file.mimetype,
          fileSize: req.file.size
        }
      });

      console.log(`File '${req.file.originalname}' diupload oleh ${nama}. Disimpan di: ${filePath}`);
      console.log('Informasi dokumen disimpan ke database:', newDocument);

      res.status(200).json({
        success: true,
        message: 'Surat berhasil diupload dan informasi disimpan ke database!',
        data: {
          id: newDocument.id,
          nama: newDocument.namaPengirim,
          fileName: newDocument.fileName,
          filePath: newDocument.filePath,
          fileMimeType: newDocument.fileMimeType,
          fileSize: newDocument.fileSize,
          uploadDate: newDocument.uploadDate
        }
      });
    } catch (dbError) {
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting file after DB error:', unlinkErr);
      });
      console.error('Error saving document info to database:', dbError);
      res.status(500).json({ success: false, message: 'Terjadi kesalahan saat menyimpan informasi dokumen.' });
    }
  });
};