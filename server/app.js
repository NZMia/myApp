require('dotenv').config()
require("./db/mongoDB").connect();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { requireAuth, userAuth } = require('./middleware/authMiddleware')
const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blogs');
const fs = require('fs')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// env
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/auth', usersRouter);
app.use('/api/admin', userAuth, blogRouter);

/***
 * DigIO test: start
 */
app.get('/api/digio', (req, res, next) => {
  const filePath = path.join(__dirname,"programmingTask.log");

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    
    // The number of unique IP addresses
    const ipRegex = /((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/gm;
    const uniqueAddress = new Set(data.match(ipRegex));
  
    res.status(200).json({ 
      message:"GET request to the homepage",
      uniqueAddressCount: uniqueAddress.size
    })
  }); 
})
/***
 * DigIO test: end
 */

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'dev' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
  module.exports = app;
