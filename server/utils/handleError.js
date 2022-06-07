const handleError = (err) => {
    const { message, code } = err
    let errors = { email:'', password: '' }

      // incorrect email
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }

    // incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }
    // duplicate error
    if(code && code === 11000) {
        errors['email'] = 'That email already registered'
        return errors
    }

    // validation error 
    if(message.includes('user validation failed')) {
        Object.values(err.errors).forEach((property) => {
            errors[property.path] = property.message
        })
    }
    
    return errors
} 

module.exports = handleError
