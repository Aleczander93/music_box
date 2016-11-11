var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  },

  rating: {
    value: Boolean,
    required: false
  }
});


var Album = mongoose.model('Album', albumSchema);
module.exports = Album;
