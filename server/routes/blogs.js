const express = require('express');
const router = express.Router();
const { 
    getDemo,
} = require('../controller/blogController');

const { userAuth } = require('../middleware/authMiddleware');

// Endpoint for get Demo
// router.post('/getDemo', userAuth, getDemo)


module.exports = router;
