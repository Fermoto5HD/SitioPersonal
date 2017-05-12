var passport = require('passport');
var mongoose = require('mongoose');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.upload = function(req, res) {
  res.json({ message: 'WIP!' });
  return;
};
