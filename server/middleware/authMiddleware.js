const jwt = require('jsonwebtoken');
const { SECRET } = process.env;

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, SECRET, (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.redirect('/auth');
            }else {
                console.log(decodedToken);
                next();
            }
        })
    }else {
        res.redirect('/auth')
    }
}

module.exports = { requireAuth }
