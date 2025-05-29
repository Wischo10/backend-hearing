// Mengimpor library yang dibutuhkan
const jwt = require('jsonwebtoken'); // digunakan untuk membuat token JWT
const bcrypt = require('bcrypt'); // digunakan untuk enkripsi dan pembandingan password
require('dotenv').config(); // untuk memuat variabel dari file .env

// Asumsi: Anda akan mengimpor atau mendefinisikan instance Prisma client di sini
const { PrismaClient } = require('../generated/prisma'); // Import PrismaClient
const prisma = new PrismaClient(); // Inisialisasi Prisma Client

// Fungsi untuk interaksi database
const getUserByUsername = async (username) => {
    return prisma.user.findUnique({ where: { username } });
};

const getUserByEmail = async (email) => {
    return prisma.user.findUnique({ where: { email } });
};

const createUser = async (username, email, hashedPassword) => {
    return prisma.user.create({ data: { username, email, password: hashedPassword } });
};

const getUserById = async (id) => {
    return prisma.user.findUnique({ where: { id } });
};


// Fungsi untuk memverifikasi input registrasi
const verifyRegisterInput = async (username, email) => {
    var verification = { message: "Successful Validation", status: true };

    const userByUsername = await getUserByUsername(username);
    if (userByUsername) {
        verification.message = "Username already taken";
        verification.status = false;
        return verification;
    }

    const userByEmail = await getUserByEmail(email);
    if (userByEmail) {
        verification.message = "Email already taken";
        verification.status = false;
        return verification;
    }

    return verification;
}

// Fungsi untuk memverifikasi login
const verifyLoginCredential = async (email, password) => {
    var verification = { message: "Wrong email or password", status: false };

    const account = await getUserByEmail(email);
    if (!account) {
        return verification;
    }

    const validPassword = await bcrypt.compare(password, account.password);
    if (!validPassword) {
        return verification;
    }

    verification.message = "Success";
    verification.status = true;
    const { password: _, ...safeAccount } = account;
    verification.account = safeAccount;
    return verification;
}

// Fungsi untuk membuat access token (berlaku 5 menit)
const generateAccessToken = (id, email, username) => {
    return jwt.sign(
        {
            id: id,
            email: email,
            username: username,
            type: 'access'
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '5m', algorithm: 'HS512' }
    );
}

// Fungsi untuk membuat refresh token (berlaku 7 hari)
const generateRefreshToken = (id) => {
    return jwt.sign(
        {
            id: id,
            type: 'refresh'
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '7d', algorithm: 'HS512' }
    );
}

// Custom middleware untuk validasi JWT
const authenticateJWT = (requireRefresh = false) => {
    return async (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ status: false, message: 'Missing token' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

            const user = await getUserById(decoded.id);
            if (!user) {
                return res.status(401).json({ status: false, message: 'Invalid user' });
            }

            // Cek apakah ini token refresh (hanya jika diminta)
            if (requireRefresh && decoded.type !== 'refresh') {
                return res.status(401).json({ status: false, message: 'Wrong token type' });
            }

            // Simpan informasi pengguna yang terdekode di req.auth
            req.auth = { credentials: { user: decoded } };
            next();
        } catch (err) {
            console.error('JWT verification error:', err.message); // Log error untuk debugging
            return res.status(401).json({ status: false, message: 'Invalid or expired token' });
        }
    };
};


// Mengekspor semua fungsi agar bisa digunakan di file lain
module.exports = {
    verifyRegisterInput,
    verifyLoginCredential,
    generateAccessToken,
    generateRefreshToken,
    createUser,
    getUserById,
    authenticateJWT, // Tambahkan authenticateJWT di sini
};