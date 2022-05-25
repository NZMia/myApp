const bcrypt = require('bcrypt');

const User = require('../models/userModel');

const generateToken = require('../utils/generateToken');
const handleError = require('../utils/handleError');


// @desc    Get a user
// @route   GET /api/users/email
// @access  Private
const findOne = (req, res) => {
    res.status(200).json({ message: "find user"})
}

// @desc    Authenticate a user
// @route   GET /api/users/login
// @access  public
const getOne = (req, res) => {
    
    // res.status(200).json({ message: "login"})
    res.send({data: "hello from server 3333"})
}

const register__get = (req, res) => {
   // res.render('register')
   res.send({data: "register__get"})
}
const login__get = (req, res) => {
   res.send({data: "login__get"})
}

// @desc    Create new uesr / Token / cookie
// @route   POST /api/users/register
// @access  Public
const register__post = async (req, res) => {
    const { email, name, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hasedPsw = await bcrypt.hash(password, salt)
   

    try {
      const user = await User.create({ email, name, password: hasedPsw })
      const token = generateToken(user._id);

      res.cookie('jwt', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
      res.status(201).json(user._id)
    } 
    catch(err) {
       const errors =  handleError(err);
       console.info('err', err);
       
       res.status(400).json({ errors })
    }
}

const login__post = (req, res) => {

    res.send({data: "user login"})
}

// const logout__get = (req, res) => {
//     res.render('login')
// }
module.exports = {
    getOne,
    register__get,
    register__post,
    login__get,
    login__post,
}
