// src/handlers/submissionHandler.js
// const { PrismaClient } = require('@prisma/client'); // Tidak perlu lagi di sini jika PrismaClient di helper
// const prisma = new PrismaClient(); // Tidak perlu lagi di sini

const submissionHelpers = require('../helpers/submissionHelper'); // Impor helper
const fs = require('fs');
const path = require('path');

// Fungsi untuk mendapatkan semua pengajuan
exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await submissionHelpers.getAllUploadedDocuments(); // Gunakan helper
    res.status(200).json({ success: true, data: submissions });
  } catch (error) {
    console.error('Error fetching submissions:', error);
    res.status(500).json({ success: false, message: 'Gagal mengambil data pengajuan.' });
  }
};

// Fungsi untuk memperbarui status pengajuan
exports.updateSubmissionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  // Validasi ID dan Status menggunakan helper
  const parsedId = submissionHelpers.validateSubmissionId(id);
  if (parsedId === null) {
    return res.status(400).json({ success: false, message: 'ID pengajuan tidak valid.' });
  }

  const validStatus = submissionHelpers.validateSubmissionStatus(status);
  if (validStatus === null) {
    return res.status(400).json({ success: false, message: 'Status tidak valid. Harus APPROVED, REJECTED, atau PENDING.' });
  }

  try {
    const updatedSubmission = await submissionHelpers.updateUploadedDocumentStatus(parsedId, validStatus); // Gunakan helper
    res.status(200).json({
      success: true,
      message: `Status pengajuan ID ${parsedId} berhasil diperbarui menjadi ${validStatus}.`,
      data: updatedSubmission,
    });
  } catch (error) {
    console.error('Error updating submission status:', error);
    res.status(500).json({ success: false, message: 'Gagal memperbarui status pengajuan.' });
  }
};

// Endpoint untuk melayani file yang diupload
exports.serveUploadedFile = (req, res) => {
  const { fileName } = req.params;
  // Sesuaikan path ke folder 'uploads' di root proyek
  // path.join(__dirname, '../../uploads', fileName) akan menghasilkan:
  // <path_to_project_root>/uploads/namafile.pdf
  const filePath = path.join(__dirname, '..', '..', 'uploads', fileName);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(`File not found or inaccessible: ${filePath}`, err);
      return res.status(404).json({ success: false, message: 'File tidak ditemukan.' });
    }
    res.sendFile(filePath);
  });
};