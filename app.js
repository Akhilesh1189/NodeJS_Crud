const express = require('express');
const bodyParser = require('body-parser');
var uniqid = require('uniqid');
var settings = require('./app/config/database');
var sql = require("mssql/msnodesqlv8");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
// parse requests of content-type - application/json
app.use(bodyParser.json())
require('./app/routes/user.routes.js')(app);



// create express app


// parse requests of content-type - application/x-www-form-urlencoded


// define a simple route
app.get('/', function (req, res) {
    try {
      res.send('ok');
    }
    catch (err) {
      res.json("not ok");
    }
  });
  app.post('/', function (req, res) {
    try {
      res.send('ok');
    }
    catch (err) {
      res.json("not ok");
    }
  });


var server = app.listen(process.env.PORT || 8080,'192.168.8.23', function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });