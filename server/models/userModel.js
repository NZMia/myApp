const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: [true, 'Please enter an email'],
        lowercase: true,
        validate: [isEmail, 'Please enter an valid email']
    },
    name: {
        type: String,
        default: null,
        require: [true, 'Please enter a name'],
    },
    password: {
        type: String,
        require: [true, 'Please enter an password'],
        minlength: [6, 'Minimum password length is 6 characters']
    }
})



module.exports = mongoose.model("user", userSchema);
