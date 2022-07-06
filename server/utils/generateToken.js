const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const generateToken = (user, expiresTime ) => {
    return jwt.sign({ "user" : user }, SECRET, { expiresIn: expiresTime })
}

module.exports = generateToken
