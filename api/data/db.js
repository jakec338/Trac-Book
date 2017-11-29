// Mongoose connection file

var mongoose = require('mongoose');

var dburl = 'mongodb://localhost:27017/myDb';

mongoose.connect(dburl);

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
