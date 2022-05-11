const User = require('../models/userModel');
const saltPassword = require('../utils/saltPassword');
const generateToken = require('../utils/generateToken');

// @desc    Create new uesr
// @route   POST /api/users/register
// @access  Public
const create = (req, res) => {
    
    // const { email, username, password } = req.body;

    // // check if empty
    // if (!username || !email || !password) {
    //     res.status(400)
    //     throw new Error('Please add all fields')
    // }

    // //check if user exist
    // // const userExist = await User.findOne({ email });

    // if (userExist) {
    //     res.status(400)
    //     throw new Error('User already exists');
    // }

    // //set new user: hash password 
    // const hashPwd = saltPassword(password);

    // //set new user: create user
    // const user = User.create({
    //     username,
    //     email,
    //     password: hashPwd,
    // })

    // res.json({ message: "register user" })

    // if(user) {
    //     res.status(201).json({
    //         username: user.username,
    //         email: user.email,
    //         password: user.password,
    //         token: generateToken('2')
    //     })
    // } else {
    //     res.status(400)
    //     throw new Error('Invalid user data')
    // }
    res.status(200).json({ message: "create user"})
}

// @desc    Get a user
// @route   GET /api/users/email
// @access  Private
const findOne = (req, res) => {
    res.status(200).json({ message: "find user"})
}

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  public
const getOne = (req, res) => {
    res.status(200).json({ message: "login"})
}

module.exports = {
    create,
    getOne,
}
