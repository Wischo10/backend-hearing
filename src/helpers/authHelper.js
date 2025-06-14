// src/helpers/authHelper.js

// Mengimpor library yang dibutuhkan
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// =================================================================
// IMPORTS & SETUP
// =================================================================
// PERBAIKAN: Impor instance Prisma tunggal dari file terpusat.
const prisma = require('../lib/prisma');

// =================================================================
// FUNGSI DATABASE
// =================================================================
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
    // Pastikan ID yang diterima valid sebelum query
    if (!id) return null;
    return prisma.user.findUnique({ where: { id } });
};

// =================================================================
// FUNGSI VERIFIKASI
// =================================================================
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

// =================================================================
// FUNGSI TOKEN
// =================================================================
const generateAccessToken = (id, email, username) => {
    return jwt.sign(
        { id, email, username, type: 'access' },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '5m', algorithm: 'HS512' }
    );
}

const generateRefreshToken = (id) => {
    return jwt.sign(
        { id, type: 'refresh' },
        process.env.JWT_SECRET_KEY,
        { expiresIn: '7d', algorithm: 'HS512' }
    );
}

// =================================================================
// MIDDLEWARE AUTENTIKASI
// =================================================================
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

            if (requireRefresh && decoded.type !== 'refresh') {
                return res.status(401).json({ status: false, message: 'Wrong token type' });
            }

            req.auth = { credentials: { user: decoded } };
            next();
        } catch (err) {
            console.error('JWT verification error:', err.message);
            return res.status(401).json({ status: false, message: 'Invalid or expired token' });
        }
    };
};

// =================================================================
// EKSPOR
// =================================================================
module.exports = {
    verifyRegisterInput,
    verifyLoginCredential,
    generateAccessToken,
    generateRefreshToken,
    createUser,
    getUserById,
    authenticateJWT,
};