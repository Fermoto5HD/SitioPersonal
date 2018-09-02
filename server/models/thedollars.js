// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var dollarsSchema = new Schema({
  username: {
    type: String
  },
  passcode: {
    type: String,
    select: false
  },
  type: {
    type: String,
    select: false
  }
}, { versionKey: false, collection: 'thedollars' });

// methods ======================
// generating a hash
dollarsSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
dollarsSchema.methods.validPassword = function(passcode) {
  if(this.passcode != null) {
    return bcrypt.compareSync(passcode, this.passcode);
  } else {
    return false;
  }
};

// create the model for users and expose it to our app
module.exports = mongoose.model('thedollars', dollarsSchema);