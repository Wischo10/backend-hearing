// src/handlers/uploadHandler.js

// 1. Impor `uploadSuratMiddleware` (nama yang benar) dan `getFileUrl`
const { uploadSuratMiddleware, getFileUrl } = require('../helpers/uploadHelper');
// Pastikan path ke Prisma Client Anda sudah benar
const { PrismaClient } = require('@prisma/client'); // Path standar, sesuaikan jika perlu
const fs = require('fs');
const multer = require('multer');

const prisma = new PrismaClient();

exports.handleUpload = (req, res) => {
  // 2. Gunakan middleware dengan nama yang benar: `uploadSuratMiddleware`
  uploadSuratMiddleware(req, res, async function (err) {
    // Penanganan error dari Multer
    if (err instanceof multer.MulterError) {
      console.error('Multer error:', err);
      return res.status(400).json({ success: false, message: `Error Multer: ${err.message}` });
    } else if (err) {
      // Penanganan error kustom (misal: format file tidak didukung)
      console.error('Error during file upload:', err);
      return res.status(400).json({ success: false, message: err.message });
    }

    // Validasi jika tidak ada file yang diunggah
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Tidak ada file surat yang diupload.' });
    }

    // Ambil data dari body dan file
    const { nama } = req.body;
    const filePath = req.file.path; // Path lokal untuk menghapus jika terjadi error

    // Validasi field 'nama'
    if (!nama) {
      // Hapus file yang sudah terlanjur diunggah jika data tidak valid
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting orphaned file:', unlinkErr);
      });
      return res.status(400).json({ success: false, message: 'Field "nama" tidak boleh kosong.' });
    }

    try {
      // 3. Buat URL lengkap yang bisa diakses publik
      const fileUrl = getFileUrl(req, req.file.filename);

      // 4. Simpan URL (bukan path lokal) ke database
      const newDocument = await prisma.uploadedDocument.create({
        data: {
          namaPengirim: nama,
          fileName: req.file.originalname,
          filePath: fileUrl, // Simpan URL publik
          fileMimeType: req.file.mimetype,
          fileSize: req.file.size
        }
      });

      console.log(`File '${req.file.originalname}' diupload oleh ${nama}. URL: ${fileUrl}`);
      console.log('Informasi dokumen disimpan ke database:', newDocument);

      // 5. Kirim respons sukses dengan URL file
      res.status(200).json({
        success: true,
        message: 'Surat berhasil diupload dan informasi disimpan!',
        data: {
          id: newDocument.id,
          nama: newDocument.namaPengirim,
          fileName: newDocument.fileName,
          fileUrl: newDocument.filePath, // Kirim URL ke frontend
          fileMimeType: newDocument.fileMimeType,
          fileSize: newDocument.fileSize,
          uploadDate: newDocument.uploadDate
        }
      });
    } catch (dbError) {
      // Hapus file jika terjadi error saat menyimpan ke database
      fs.unlink(filePath, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting file after DB error:', unlinkErr);
      });
      console.error('Error saving document info to database:', dbError);
      res.status(500).json({ success: false, message: 'Terjadi kesalahan saat menyimpan informasi dokumen.' });
    }
  });
};