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
    const ipAddressCollection = data.match(ipRegex)
    const uniqueAddress = new Set(ipAddressCollection);
  
    // The top 3 most visited URLs ???????
    const getUrls =  data.match(/get (\S*) http/ig)
    const counterUrl = getUrls.reduce((currentUrl, url)=> {
        if (url in currentUrl) {
          currentUrl[url]++
        }
        else {
          currentUrl[url] = 1
        }
        return currentUrl
    },{})

    //The top 3 most active IP addresses
    const ipCounter = ipAddressCollection.reduce(
      (collection, ip)=> {
        if (ip in collection) {
          collection[ip]++
        }
        else {
          collection[ip] = 1
        }
        return collection
    },{})

    const getTop3ActiveIp = Object.keys(ipCounter).sort(
      (a, b) => data[a] - data[b]
    ).slice(0, 3)

    res.status(200).json({ 
      message:"digio test",
      test1_uniqueAddressCount: uniqueAddress.size,
      test2_top_3_visited_url: 'pleas check `${test2_urls_visited_counter}`',
      test2_urls_visited_counter: counterUrl,
      test3_top_3_avtive_ip: getTop3ActiveIp
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
