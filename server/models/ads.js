// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var AdsSchema = new Schema({
  title: String,
  image: {
    "300x600": String,
    "300x300": String,
    "300x100": String
  },
  goto: {
    type: Number,
    url: String
  },
  track: String
}, { versionKey: false, collection: 'Ads' });

// the schema is useless so far
// we need to create a model using it
var Ads = mongoose.model('Ads', AdsSchema);

// make this available to our users in our Node applications
module.exports = Ads;
