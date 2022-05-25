require('dotenv').config()
require("./db/mongoDB").connect();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const usersRouter = require('./routes/users');
const blogRouter = require('./routes/blogs');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// env
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/auth', usersRouter);
app.use('/api/blog', blogRouter);

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
