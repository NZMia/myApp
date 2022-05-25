const handleError = (err) => {
    const { message, code } = err
    let errors = {}

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
