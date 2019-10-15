var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');

var APPLICATION = express();
var bodyParser = require('body-parser');

// view engine setup
// APPLICATION.set('views', path.join(__dirname, 'views'));
// APPLICATION.set('view engine', 'ejs');
APPLICATION.use(logger('dev'));
APPLICATION.use(express.json());
APPLICATION.use(bodyParser.urlencoded({ extended: true , limit : 100000}));
APPLICATION.use(cookieParser());
APPLICATION.use(express.static(path.join(__dirname, 'public'))); // the pgs-app home 
APPLICATION.set("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET , PURGE , UPDATE");
APPLICATION.set("Access-Control-Allow-Origin", "**");
APPLICATION.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
APPLICATION.set("Access-Control-Allow-Credentials", true);
APPLICATION.set(helmet());





APPLICATION.get("/" , (request , response , error )=> {
  response.status(200).sendFile(__dirname + '/public/index.html');
});



APPLICATION.get("/timer" , (request , response , error )=> {
  var f = process.env["RUNNING_TIMER"];
  response.status(200).send(f + "");
});


// catch 404 and forward to error handler
APPLICATION.use(function(req, res, next) {
    next(createError(404));
  });
  // error handler
  APPLICATION.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = APPLICATION.get('env') === 'production' ? err : {};
    // render the error page
    res.status(err.status || 500);
    // res.render('error');
});module.exports = APPLICATION;