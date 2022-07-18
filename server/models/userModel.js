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

// Static functin in order to find an user via email and password
userSchema.statics.existCheck = async function(email, password) {

  // Find a user
  const user = await this.findOne({ email });

  // None user in the database
  if(!user) throw new Error('Unable to login: incorrect email');

  // Compare password
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  // Password is not matched up
  if(!isPasswordMatch) throw new Error("Unable to login: incorrect password")

  return user;
}

userSchema.statics.findAll = async function () {
  // Find all user
  const users = await this.find();

  // None user in the database
  if(!users) throw new Error('Unable to login: incorrect email');
  
  return users;
}
const User = mongoose.model('User', userSchema);

module.exports = User
