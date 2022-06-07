const bcrypt = require('bcrypt');
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

// fire a function before doc saved to db
userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.pre('find', async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.existCheck = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
          return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}
const User = mongoose.model('User', userSchema);

module.exports = User
