var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var translateRouter = require('./routes/translate');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/translate', translateRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(404).send();
});

module.exports = app;
