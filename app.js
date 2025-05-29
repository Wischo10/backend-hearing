const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs'); // Tambahkan import fs
const cors = require('cors'); // Import modul CORS
const routes = require('./routes'); // Import routes.js dari root folder

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware global untuk parsing JSON
app.use(express.json());

// Middleware global untuk error handling JSON (pastikan ini di atas route Anda)
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: false,
      message: 'Invalid JSON payload',
    });
  }
  next();
});

// Middleware untuk mengizinkan CORS
// Gunakan konfigurasi yang lebih lengkap jika diperlukan di produksi
app.use(cors());

// Pastikan direktori 'uploads' ada
const uploadDir = 'uploads/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // recursive: true untuk membuat direktori induk jika tidak ada
}

// Gunakan semua rute yang didefinisikan di routes.js
app.use('/api', routes); // Semua rute Anda akan memiliki prefix /api

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});