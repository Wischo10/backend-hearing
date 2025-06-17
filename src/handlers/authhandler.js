// src/handlers/authHandler.js

// Impor semua fungsi yang dibutuhkan dari helper dalam satu baris
const authHelper = require('../helpers/authHelper');
const bcrypt = require('bcrypt');

/**
 * Handler untuk registrasi pengguna baru.
 */
const registerHandler = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validasi input dasar
        if (!username || !email || !password) {
            return res.status(400).json({
                status: false,
                message: 'Username, email, dan password tidak boleh kosong.',
            });
        }

        // Verifikasi apakah username atau email sudah ada
        const verification = await authHelper.verifyRegisterInput(username, email);
        if (!verification.status) {
            return res.status(400).json({
                status: false,
                message: verification.message,
            });
        }

        // Hash password dan buat pengguna baru
        const hashPassword = await bcrypt.hash(password, 12);
        const account = await authHelper.createUser(username, email, hashPassword);
        delete account.password; // Jangan kirim password kembali

        return res.status(201).json({
            status: true,
            message: 'Akun Anda berhasil didaftarkan!',
            data: account,
        });

    } catch (error) {
        console.error("Error di register handler:", error);
        return res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server.',
        });
    }
};

/**
 * Handler untuk login pengguna.
 */
const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                status: false,
                message: 'Email dan password tidak boleh kosong.',
            });
        }

        // Verifikasi kredensial login
        const verification = await authHelper.verifyLoginCredential(email, password);
        if (!verification.status) {
            return res.status(401).json({
                status: false,
                message: verification.message,
            });
        }

        const { account } = verification;

        // Buat access dan refresh token
        const accessToken = authHelper.generateAccessToken(account.id, account.email, account.username);
        const refreshToken = authHelper.generateRefreshToken(account.id);

        // --- PERBAIKAN: Simpan refresh token ke database ---
        await authHelper.saveRefreshToken(account.id, refreshToken);

        return res.status(200).json({
            status: true,
            message: 'Anda berhasil login!',
            data: {
                accessToken: accessToken,
                refreshToken: refreshToken,
            },
        });

    } catch (error) {
        console.error("Error di login handler:", error);
        return res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server.',
        });
    }
};

/**
 * Handler untuk logout pengguna.
 */
const logoutHandler = async (req, res) => {
    try {
        // Ambil refresh token dari body permintaan
        const { refreshToken } = req.body;
        if (!refreshToken) {
            return res.status(400).json({ status: false, message: 'Refresh token diperlukan.' });
        }

        // --- PERBAIKAN: Hapus refresh token dari database ---
        await authHelper.deleteRefreshToken(refreshToken);

        return res.status(200).json({
            status: true,
            message: 'Anda berhasil logout.',
        });

    } catch (error) {
        console.error("Error di logout handler:", error);
        return res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server.',
        });
    }
};

/**
 * Handler untuk memperbarui access token menggunakan refresh token.
 */
const refreshHandler = async (req, res) => {
    try {
        const { user: decodedUser } = req.auth.credentials;
        const tokenFromRequest = req.headers.authorization.split(' ')[1];

        // --- PERBAIKAN: Verifikasi bahwa refresh token ada di database ---
        const tokenInDb = await authHelper.findRefreshToken(tokenFromRequest);
        if (!tokenInDb) {
            return res.status(401).json({
                status: false,
                message: 'Refresh token tidak valid atau telah dicabut.',
            });
        }

        // Ambil data pengguna dari database
        const user = await authHelper.getUserById(decodedUser.id);
        if (!user) {
            return res.status(404).json({
                status: false,
                message: 'Pengguna tidak ditemukan.',
            });
        }

        // Buat access token baru
        const newAccessToken = authHelper.generateAccessToken(user.id, user.email, user.username);

        return res.status(200).json({
            status: true,
            message: 'Access token berhasil diperbarui.',
            data: {
                accessToken: newAccessToken,
            },
        });
    } catch (error) {
        console.error("Error di refresh handler:", error);
        return res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan pada server.',
        });
    }
};

module.exports = {
    registerHandler,
    loginHandler,
    logoutHandler,
    refreshHandler,
};