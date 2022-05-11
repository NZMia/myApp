const bcrypt = require('bcrypt');
const saltRounds = 10;

const saltPassword = (pwd) => {
    bcrypt.hash(pwd, saltRounds, function(err, result) {
       if(!err) return result
    })
}

module.exports = { saltPassword }
