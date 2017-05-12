// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var BlogSchema = new Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  image: String,
  created: Date
}, { versionKey: false, collection: 'Blog' });

// the schema is useless so far
// we need to create a model using it
var Blog = mongoose.model('Blog', BlogSchema);

// make this available to our users in our Node applications
module.exports = Blog;
