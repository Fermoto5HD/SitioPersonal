const passport = require('passport');
const mongoose = require('mongoose');
const dollarMember = mongoose.model('thedollars');
const Blog = mongoose.model('Blog');
const Portfolio = mongoose.model('Portfolio');
const Contact = mongoose.model('contact');

module.exports = {
  user: function(req, res) {
    dollarMember.findOne({username: req.params.user}, '-_id-passcode', function(err, result) {
      if (err) throw err;

      res.status(200).json(result);
      return;
    });
  },

  newcitizen: function(req, res) {
    passport.authenticate('local-signup', {
      successRedirect: '/thedollars/ikebukuro', // redirect to the secure profile section
      failureRedirect: '/thedollars/initialization', // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  },

  identify: function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      console.log(info);
      if (err) {
        return next(err); // will generate a 500 error
      };
      // Generate a JSON response reflecting authentication status
      console.log(user);
      if (!user) {
        return res.send({status: false, message : "Your user isn't in our DB." });
      }
      // ***********************************************************************
      // "Note that when using a custom callback, it becomes the application's
      // responsibility to establish a session (by calling req.login()) and send
      // a response."
      // Source: http://passportjs.org/docs
      // ***********************************************************************
      req.login(user, loginErr => {
        if (loginErr) {
          return next(loginErr);
        }
        return res.send({status: true, message : "You're logged" });
      });      
    })(req, res, next);
  },

  list: function(req, res) {
    dollarMember.find({}, '-_id', {sort: {date_from: -1}}, function(err, result) {
      if (err) throw err;

      res.status(200).json(result);
      return;
    });
  },

  isidentified: function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) {
      return next();
    } else {
      // if they aren't redirect them to the home page
      //res.redirect('/');

      res.status(401).json({"status": false, "message": "Please log in to view this content."});
      return;
    }
  },

  count: function(req, res) {
    let count = {
      blog: 0,
      users: 0,
      portfolio: 0,
      inbox: 0
    }
    Promise.all([
      Blog.count().exec(),
      dollarMember.count().exec(),
      Portfolio.count().exec(),
      Contact.count().exec()
    ]).then(function(counts) {
      count.blog = counts[0];
      count.users = counts[1];
      count.portfolio = counts[2];
      count.inbox = counts[3];
      res.status(200).json(count);
      return;
    });
  }
};