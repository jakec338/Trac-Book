
require("./api/data/db.js");       // using mongoose not mongo driver => dbconnection.js").open()
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(path.join(__dirname + '/node_modules')));

app.use(bodyParser.urlencoded( { extended: false } ));   // urlencoded could be another data type such as raw, json . If extended
                                                          // = false, only needs strings and arrays from the form body
app.use(bodyParser.json());
app.use('/api', routes);

app.get('/json', function(req, res){
  console.log("GET json");
  res.json( {"test" : true} );
});

app.get('/tes', function(req, res){
  console.log("GET json");
  res.json( {"test" : true} );
});

var server = app.listen(app.get('port'), function(){
  var port = server.address().port;
  console.log("Listening on port " + port);
});

console.log("first");
