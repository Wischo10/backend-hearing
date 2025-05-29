const {
  verifyRegisterInput,
  verifyLoginCredential,
  generateAccessToken,
  generateRefreshToken
} = require('../helpers/authHelper');
const { createUser, getUserById } = require('../helpers/authHelper');
const bcrypt = require('bcrypt');

const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        status: false,
        message: 'Username, email, and password fields must not be empty',
      });
    }

    const verification = await verifyRegisterInput(username, email, password);
    if (verification.status !== true) {
      return res.status(400).json({
        status: false,
        message: verification.message,
      });
    }

    const hashPassword = await bcrypt.hash(password, 12);
    const account = await createUser(username, email, hashPassword);
    delete account.password;

    return res.status(200).json({
      status: true,
      message: 'Your account is successfully registered',
      data: account,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        status: false,
        message: 'Email and password fields must not be empty',
      });
    }

    const verification = await verifyLoginCredential(email, password);
    if (verification.status !== true) {
      return res.status(400).json({
        status: false,
        message: verification.message,
      });
    }

    const account = verification.account;
    const accessToken = generateAccessToken(account.id, account.email, account.username);
    const refreshToken = generateRefreshToken(account.id);

    return res.status(200).json({
      status: true,
      message: 'You have been logged in',
      data: {
        access: accessToken,
        refresh: refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

const logoutHandler = async (req, res) => {
  // TODO: Implement token blacklist if needed
  return res.status(200).json({
    status: true,
    message: 'You have been logged out',
  });
};

const refreshHandler = async (req, res) => {
  try {
    const credentials = req.auth?.credentials;

    if (
      !credentials ||
      !credentials.user ||
      credentials.user.type !== 'refresh'
    ) {
      return res.status(401).json({
        status: false,
        message: 'Wrong credentials or token type',
      });
    }

    const userId = credentials.user.id;
    const user = await getUserById(userId);

    if (!user) {
      return res.status(400).json({
        status: false,
        message: 'User not found',
      });
    }

    const accessToken = generateAccessToken(user.id, user.email, user.username);

    return res.status(200).json({
      status: true,
      message: 'New access token successfully generated',
      data: accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Internal Server Error: ${error.message}`,
    });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
  logoutHandler,
  refreshHandler,
};