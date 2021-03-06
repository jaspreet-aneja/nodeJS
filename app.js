var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
  }));
app.use(bodyParser.json());

app.use('/', require('./src/routers/student-api-routes'));

module.exports = app;