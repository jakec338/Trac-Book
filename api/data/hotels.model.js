

// File for writing mongoose schema

// Need to figure out effect of non nested strings for genre and tags key pairs will have
// Ideally should be nested but might take forever
// check if mongo offers any help with converting


var mongoose = require('mongoose');


var schema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Author: {
    type: String,
    required: true
  },
  Published: {
    type: Number,
    max: 2018         // update this, also use reg ex to make sure in right format
  }
});

mongoose.model('ModelName', schema, 'myCollection');   // unsure why no collection 
