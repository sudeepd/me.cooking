/******************************************************************************
 * Copyright 2020 GudCook Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/
process.title = "gudcook-server";

process.on('uncaughtException', function(err) {
  console.log( " UNCAUGHT EXCEPTION " );
  console.log( "[Inside 'uncaughtException' event] " + err.stack || err.message );
});

var createError = require('http-errors');
var express = require('express');
var config = require('./config');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


var logger = require('morgan');
const initDb = require("./db").initDb;

/******************************************
 * Organize APIs in the routes folder
 *****************************************/
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

/******************************************
 * view engine setup
 *****************************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

/******************************************
 * Routers Map to Endpoints
 *****************************************/
app.use('/', indexRouter);
app.use('/users', usersRouter);

/******************************************
 * catch 404 and forward to error handler
 *****************************************/
app.use(function(req, res, next) {
  next(createError(404));
});

/******************************************
 *  Error handler
 *****************************************/
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


initDb(
    function (db) {
        if (db) {
            console.log("DB Connected. Send Credit to Bidan Sinha.");
        } else {
            console.log("Something Screwed up. Contact DBAdmin - Alok Shukla.");
        }
    }
);

module.exports = app;
