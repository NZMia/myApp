const User = require('../models/userModel');

const generateToken = require('../utils/generateToken');
const handleError = require('../utils/handleError');

const jwt = require('jsonwebtoken');
const { json } = require('express');
const { SECRET } = process.env;

// @desc    Create new uesr / Token / cookie
// @route   POST /api/user/register
// @access  Public
const createUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
      const user = await User.create({ email, name, password })
      const accessToken = generateToken(user.email, '30s');
      
      res.status(201).json({
          message: 'Registered Successful',
          user: user,
          token: accessToken
      });
    } 
    catch(err) {
       const errors =  handleError(err);
       res.status(400).json({ message: err });
       return;
    }
}

// @desc    Get a user
// @route   Get /api/user/login
// @access  Public
const getUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.existCheck(email, password);
        const accessToken = generateToken(user, '30s');
        const refreshToken = generateToken(user, '1d');

        res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });

        res.status(200).json({
          message: 'Auth Successful',
          user: user,
          token: accessToken
        });
    }

    catch(err) {
        const errors =  handleError(err);
        console.info('err', err);
        
        res.status(400).json({ err })
        return;
    }
}

// @desc    Get a fresh token
// @route   Get /api/fresh
// @access  Public
const getLatestToken = (req, res) => {
  const cookies = req.cookies;

  // Not cookies
  if(!cookies?.jwt) return res.status(401).json({message: 'Unauthorized'});

  const token = cookies.jwt;

  // verfiy 
  jwt.verify(token, SECRET, (err, decodedToken) => {

      if(err) return res.status(403).json({message: 'forbiden'})
      const accessToken = generateToken(decodedToken.user, '30s');
      res.json({token: accessToken})
  })
}

// @desc    Logout a user
// @route   Get /api/user/logout
// @access  Public
const logout = async (req, res) => {
  const authHeader =  req.headers.authorization ||  req.headers.Authorization
  const token = authHeader?.split(' ')[1];
  
  try {
    // empty cookie
    res.cookie('jwt', '', { maxAge: 1 });

    // Expire the token from header
    jwt.sign(token, SECRET, { expiresIn: 1 } , (logout, err) => {
      if (logout) {
        res.status(204).json({message: 'logout'})
      } else {
        res.send({msg:'Error'});
      }
    })
  }
  catch(err) {
    res.status(400).json({ message:"logout failed", err })
  }
}

const getUsers = async (req, res) => {

  try {
    const users = await User.findAll();
  
    res.status(200).json({
      message: 'Get Users All',
      users: users
    });
  }
  catch(error) {
    res.status(400).json({ message:"get all failed", error })
  }
}

module.exports = {
  createUser,
  getUser,
  getLatestToken,
  logout,
  getUsers
}
