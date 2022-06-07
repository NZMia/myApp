const User = require('../models/userModel');

const generateToken = require('../utils/generateToken');
const handleError = require('../utils/handleError');

// @desc    Create new uesr / Token / cookie
// @route   POST /api/users/register
// @access  Public
const createUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
      const user = await User.create({ email, name, password })
      const token = generateToken(user._id);
    const authToken = true;

      res.cookie('jwt', token, { httpOnly: true, maxAge:60 * 60 * 24 })
      res.cookie('authedJwt', authToken, { maxAge: 1000 * 60 * 60 * 24 })
      res.status(201).json(user);
    } 
    catch(err) {
       const errors =  handleError(err);
       res.status(400).json({ errors });
       return;
    }
}

// @desc    Get a user
// @route   Get /api/users/login
// @access  Public
const getUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.existCheck(email, password);
        const token = generateToken(user._id);
        const authToken = true;

        res.cookie('jwt', token, { httpOnly: true, maxAge:  60 * 60 * 24 });
        res.cookie('authedJwt', authToken, { maxAge: 1000 * 60 * 60 * 24 })
        res.status(200).json(user);
        res.redirect('/admin');
    }
    catch(err) {
        const errors =  handleError(err);
        res.status(400).json({ errors })
       
        return;
    }
    res.send({data: "user login"})
}

module.exports = {
    createUser,
    getUser,
}
