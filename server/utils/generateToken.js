const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const generateToken = (id) => {
    return jwt.sign({ id }, SECRET, { expiresIn: 60 * 60 * 24 })
}

module.exports = { generateToken }
