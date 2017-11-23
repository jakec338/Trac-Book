var mongoose = require('mongoose');
var Hotel = mongoose.model('ModelName');


module.exports.authsGetAll = function(req, res){
  var hotelId = req.params.hotelId;
  console.log("GET hotelId", hotelId);

  Hotel
    .findById(hotelId)
    .exec(function(err, docs){
      res
        .status(200)
        .json( docs.Author );
    });
};

module.exports.authsGetOne = function(req, res){

};
