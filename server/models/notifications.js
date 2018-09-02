// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let NotificationsSchema = new Schema({
  deviceID: String,
  platform: String,
  timestamp: {type: Date, default: Date.now}
}, {
	versionKey: false,
	collection: 'notifications',
    setDefaultsOnInsert: true
});

// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports = mongoose.model('notifications', NotificationsSchema);