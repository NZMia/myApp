const express = require('express');
const router = express.Router();
const { create, getOne } = require('../controller/users')

/* GET users listing. */
router.post('/register', create);
router.post('/login', getOne);

module.exports = router;
