const jwt = require('jsonwebtoken');
const { SECRET, MAX_AGE } = process.env;

const generateToken = (id) => {
    return jwt.sign({ "id" : id }, SECRET, { expiresIn: 60 * 60 * 24 })
}

module.exports = generateToken
