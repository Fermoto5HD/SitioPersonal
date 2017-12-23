/*var mongoose = require( 'mongoose' );
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var jojoSchema = new mongoose.Schema({
  local            : {
        email        : String,
        password     : String,
    },
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String
});

jojoSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

jojoSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

jojoSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "PUTO_EL_QUE_DESHASHEA"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

mongoose.model('Jojos', jojoSchema);
*/


// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var jojoSchema = new Schema({
  username: String,
  passcode: String
}, { versionKey: false, collection: 'Jojos' });

// methods ======================
// generating a hash
jojoSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
jojoSchema.methods.validPassword = function(passcode) {
    return bcrypt.compareSync(passcode, this.passcode);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Jojos', jojoSchema);