const express = require('express');
const router = express.Router();
const { 
    create, 
    getOne,
    register__get,
    register__post,
    login__post,
    login__get 
} = require('../controller/authController')

// Sign up a page
router.get('/register', register__get);

// Login a page
router.get('/login', login__get);

// Create a new uer in db
router.post('/register', register__post)

// Authenticated a current user
router.post('/login', login__post)

// Log a user out
router.get('/logout', function(){

})
module.exports = router;
