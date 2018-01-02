var mongoose = require('mongoose');
require('mongoose-type-email');

var userSchema = new mongoose.Schema({
    username: {
      type: String,
      unique: true,
      required: true
    },
   email: {
       type: mongoose.SchemaTypes.Email,
       required: true,
       unique: true
   },
   password: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required:true
  },
  genres: {
    type: [String]
  }

});

mongoose.model('User', userSchema);