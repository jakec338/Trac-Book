var MongoClient = require('mongodb').MongoClient;
var dburl = 'mongodb://localhost:27017/myDb';
var _connection = null;

var open = function(){
  MongoClient.connect(dburl, function(err, db){
    if (err){
      console.log("Database fail");
      return;
    }
    _connection = db;
    console.log("Connection open", db);
  })
};

var get = function(){
  return _connection;
};

module.exports = {
  open: open,
  get: get
};
