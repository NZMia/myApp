const express = require('express');
const router = express.Router();
const { 
    create, 
    createUser,
    getUser,
} = require('../controller/authController')

// Create a new uer in db
router.post('/register', createUser)

// Authenticated a current user
router.post('/login', getUser)

// Log a user out
router.get('/logout', function(){

})
module.exports = router;
