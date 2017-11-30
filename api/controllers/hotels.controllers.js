

var mongoose = require('mongoose');
var Hotel = mongoose.model('ModelName');


module.exports.hotelsGetAll = function(req, res) {

  var offset = 0;    // start of array, not really an array though
  var count = null;    // number of results

  if (req.query && req.query.offset) {
    offset = parseInt(req.query.offset, 10);     // dunno what the ten is about, dec place?
  }

  if (req.query && req.query.count) {
    count = parseInt(req.query.count, 10);
  }

  Hotel
    .find()
    .skip(offset)
    .limit(count)
    .exec(function(err, myCollection) {
      console.log("Got books",  myCollection.length);
      res.
        json(myCollection);
    });

};

module.exports.hotelsGetOne = function(req, res) {
  var hotelId = req.params.hotelId;
  console.log("GET hotelId", hotelId);

  Hotel
    .findById(hotelId)
    .exec(function(err, docs){
      res
        .status(200)
        .json( docs );
    });
};


module.exports.hotelsAddOne = function(req, res) {
  var db = dbconn.get();
  var collection = db.collection('myCollection');
  console.log("POST new hotel");

  if (req.body && req.body.Title){     // create seperate varaible and parse it if you want to change the data type
    console.log(req.body);
    res
      .status(200)
      .json(req.body);
  } else {
    console.log("Data missing form body");
    res
      .status(400)
      .json( { message: "Required data missing" });

  }
};
