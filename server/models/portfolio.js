// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var PortfolioSchema = new Schema({
  name: String,
  version: String,
  description: {
    excerpt: String,
    full: String
  },
  is_internal: Boolean,
  url: String,
  url_repo: String,
  image: String,
  date_from: Date,
  date_to: Date
}, { versionKey: false, collection: 'Portfolio' });

// the schema is useless so far
// we need to create a model using it
var Portfolio = mongoose.model('Portfolio', PortfolioSchema);

// make this available to our users in our Node applications
module.exports = Portfolio;
