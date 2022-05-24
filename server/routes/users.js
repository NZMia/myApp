const express = require('express');
const router = express.Router();
const { create, getOne } = require('../controller/users')

/* GET users listing. */
router.get('/register', create);
router.get('/login', getOne)

module.exports = router;
