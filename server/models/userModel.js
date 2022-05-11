const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    userName: {
        type: String,
        default: null,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }
})

module.exports = mongoose.model("user", userSchema);
