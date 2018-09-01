// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let ContactSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  subject: String,
  message: String,
  timestamp: {type: Date, default: Date.now}
}, {
	versionKey: false,
	collection: 'contact',
    setDefaultsOnInsert: true
});

// the schema is useless so far
// we need to create a model using it
let Contact = mongoose.model('contact', ContactSchema);

// make this available to our users in our Node applications
module.exports = Contact;
