var passport = require('passport');
var mongoose = require('mongoose');
var Jojo = mongoose.model('Jojos');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.newjojo = function(req, res) {

  // if(!req.body.name || !req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  var jojo = new Jojo();

  jojo.name = req.body.name;
  jojo.email = req.body.email;

  jojo.setPassword(req.body.password);

  jojo.save(function(err) {
    var token;
    token = jojo.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });

};

module.exports.whoareyou = function(req, res) {

  // if(!req.body.email || !req.body.password) {
  //   sendJSONresponse(res, 400, {
  //     "message": "All fields required"
  //   });
  //   return;
  // }

  passport.authenticate('local', function(err, jojo, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a jojo is found
    if(jojo){
      token = jojo.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If jojo is not found
      res.status(401).json(info);
    }
  })(req, res);

};
