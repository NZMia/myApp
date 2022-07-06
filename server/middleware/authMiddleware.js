const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

// Validate Token
const userAuth = async(req, res, next) => {
  // Getting Token
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    const token = authHeader?.split(' ')[1]

    // Send error message if token not found
    if(!token || !authHeader?.startsWith('Bearer ')) return res.status(401).json({ message: "Unauthorized"})

    // Validate token
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if(err) throw new Error();
      req.body = decodedToken.user;
      next()
    })
  } catch(err) {
    res.status(403).json({ message: "invalid token" })
  }
}

module.exports = { userAuth }
