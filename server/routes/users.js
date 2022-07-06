const express = require('express');
const router = express.Router();
const { 
    createUser,
    getUser,
    getLatestToken,
    logout
} = require('../controller/authController');
const { userAuth } = require('../middleware/authMiddleware');

// Endpoint for creating a new uesr account
router.post('/register', createUser)

// Endpoint for logging in to an user account
router.post('/login', getUser)

// Endpoint for logging out of an user account
router.post('/logout', userAuth, logout)

// Endpoint for refresh
router.get('/refresh', getLatestToken)

module.exports = router;
