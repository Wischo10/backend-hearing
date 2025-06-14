// app.js

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path'); // Impor modul 'path'
const routes = require('./routes'); // Import routes.js dari root folder

// Memuat variabel lingkungan dari file .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Middleware untuk mengizinkan Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware global untuk parsing body request sebagai JSON
app.use(express.json());

// Middleware global untuk menangani error parsing JSON yang tidak valid
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      status: false,
      message: 'Invalid JSON payload',
    });
  }
  next();
});

// --- PENAMBAHAN UNTUK MENYAJIKAN FILE ---
// Middleware untuk menyajikan file statis (gambar, pdf, dll.) dari direktori 'uploads'.
// Ini membuat file di dalam folder 'uploads' dapat diakses melalui URL.
// Contoh: http://localhost:3000/uploads/nama-file.pdf
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Gunakan semua rute yang didefinisikan di routes.js dengan prefix /api
app.use('/api', routes);

// Menjalankan server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});