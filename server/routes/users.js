const express = require('express');
const router = express.Router();
const { 
    createUser,
    getUser,
    getLatestToken,
    logout,
    getUsers
} = require('../controller/authController');
const { userAuth } = require('../middleware/authMiddleware');

// Endpoint for creating a new uesr account
router.post('/register', createUser)

// Endpoint for logging in to an user account
router.post('/login', getUser)

// Endpoint for logging out of an user account
router.post('/logout', logout)

// Endpoint for refresh
router.get('/refresh', getLatestToken)

// Endpoint for getting all users
router.get('/getUsers', getUsers)

module.exports = router;
