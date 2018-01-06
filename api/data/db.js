// Mongoose connection file

var mongoose = require('mongoose');
var mongojs = require('mongojs');

// var dburl = 'mongodb://localhost:27017/myDb';
var dburl = 'mongodb://jakec338:tasha9@ds032887.mlab.com:32887/books';

mongoose.connect(process.env.MONGO_URL || dburl);

mongoose.connection.on('connected', function(){
  console.log("Mongoose connected to " + dburl);
});

mongoose.connection.on('disconnected', function(){
  console.log("Mongoose disconnected");
});

mongoose.connection.on('error', function(err){
  console.log("Mongoose connection error: " + err);
});

process.on('SIGINT', function(){
  mongoose.connection.close(function(){
    console.log("Mongoose terminated too");
    process.exit(0);
  });
});

process.once('SIGUSR2', function(){
  mongoose.connection.close(function(){
    console.log("Mongoose terminated too");
    process.kill(process.pid, 'SIGUSR2');
  });
});

// REQUIRE SCHEMA AND MODELS
require('./hotels.model.js');
require('./users.model.js');
