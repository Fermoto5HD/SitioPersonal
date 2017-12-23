const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); 
const passport = require('passport');

var ctrlAds = require('../controllers/ads'), 
    ctrlJojos = require('../controllers/jojos'), 
    ctrlPortfolio = require('../controllers/portfolio'),
    ctrlBlog = require('../controllers/blog'),
    ctrlCaesarino = require('../controllers/caesarino'),
    ctrlYouTube = require('../controllers/youtube'),
    ctrlTrakt = require('../controllers/trakt'),
    ctrlMAL = require('../controllers/mal'),
    ctrlGithub = require('../controllers/github'),
    ctrlInstagram = require('../controllers/instagram'),
    ctrlFacebook = require('../controllers/facebook'),
    ctrlTwitter = require('../controllers/twitter'),
    ctrlFlickr = require('../controllers/flickr'),
    ctrlNoEncontrado = require('../controllers/noencontrado'),
    ctrlHamonSender = require('../controllers/hamonsender');

var authenticationMiddleware = require('../controllers/jojo_middleware');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FM5HD');

module.exports = function (app, passport) {
  // Parsers for POST data
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: false }));
  router.use(function(req, res, next) {
      // do logging
      console.log('Something is happening.');
      next(); // make sure we go to the next routes and don't stop here
  });

  /*passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'passcode'
    },
    function(username, password, done) {
      // ...
    }
  ));*/

  /* GET api listing. */
  /*router.get('/', (req, res) => {
    res.send('rajá');
  });*/

  // Retrieve my Jojos 4 Caesar-senpai~ ^-^
  router
    .get('/ias', ctrlAds.get)
    //s.post('/jojos', ctrlJojos.newjojo)
    //.get('/jojos', ctrlJojos.whoareyou)
    .get('/jojos', ctrlJojos.list)

  // Show them muh portfolio.
    //.post('/portfolio', ctrlPortfolio.add)
    .get('/portfolio', ctrlPortfolio.list)
    //.delete('/portfolio/:id', ctrlPortfolio.remove)

  // Show them muh blog.
    .post('/blog', ctrlBlog.add)
    //.get('/blog', passport.authenticate('local'), ctrlBlog.list)
    .get('/blog', ctrlBlog.list)
    .get('/blog/:slug', ctrlBlog.getpost)
    .get('/blog/:slug/voting/:vote', ctrlBlog.votepost)
    .delete('/blog/:slug', ctrlBlog.remove)
    .get('/ikebukuro/blog', ctrlBlog.fulllist)
    //.delete ('/blog/:slug', passport.authenticationMiddleware(), ctrlBlog.remove);

  // YouTube
    .get('/youtube', ctrlYouTube.last10)
    .get('/youtube/latest', ctrlYouTube.latest)
    .get('/youtube/stats', ctrlYouTube.stats)
    .get('/youtube/details', ctrlYouTube.details)

  // Give my Trakt list
    .get('/trakt', ctrlTrakt.list)
    .get('/trakt/last', ctrlTrakt.last)
    .get('/trakt/history', ctrlTrakt.history)
    .get('/trakt/cover_movie/:id', ctrlTrakt.cover_movie)
    .get('/trakt/imdb_config', ctrlTrakt.imdb_config)

  // MyAnimeList!
    .get('/mal/anime', ctrlMAL.anime)
    .get('/mal/manga', ctrlMAL.manga)

  // GitHub
    .get('/github', ctrlGithub.main)
    
  // Instagram
    .get('/instagram', ctrlInstagram.list)

  // Facebook
    .get('/fb/info', ctrlFacebook.info)
    .get('/fb/posts', ctrlFacebook.posts)

  // Twitter
    .get('/tw/latest', ctrlTwitter.last)

  // Flickr
    .get('/flickr', ctrlFlickr.list)
    .get('/flickr/last', ctrlFlickr.last)
  
  // No Encontrado
    .get('/noencontrado', ctrlNoEncontrado.get)

    // Mailing
    .get('/hamonsender', ctrlHamonSender.send)
    .post('/hamonsender', ctrlHamonSender.send)

    .get('/_caesarino-adm', passport.authenticate('local'), function(req, res){
      console.log(res);
    })

  // Tell Caesar-chan to upload images 4 muh portfolio.
    .post('/caesarino/uploadme', ctrlCaesarino.upload)

    .post('/caesarnoticeme', isLoggedIn, function(req, res) {
        res.send({status: "success"});
    })
    .get('/caesarnoticeme', isLoggedIn, function(req, res) {
        res.send({status: "success"});
    })

    .get('/ikebukuro', isLoggedIn, function(req, res) {
        //res.send(req.user);
        res.json({status: "success"});
        /*res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });*/
    })


    .post('/im-joining-ikebukuro', passport.authenticate('local-signup', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/signup', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
    }), function(req, res){
      res.json({status: true});
    })

    .post('/login', function(req, res, next) {
      console.log(req.body);
      passport.authenticate('local-login', function(err, user, info) {
        if (err) {
          return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        console.log(user);
        if (! user) {
          return res.send({ success : false, message : "Your user isn't in our DB." });
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
          return res.send({ success : true, message : "You're logged" });
        });      
      })(req, res, next);
    })
    .post('/login-legacy', passport.authenticate('local-login', {
        successRedirect : '/api/check_citizen', // redirect to the secure dashboard section
        failureRedirect : '/thedollars', // redirect back to Dollars login if he doesn't belong to our gang
        failureFlash : true // allow flash messages
    }), function(req, res){
      res.json({status: true});
    })
    .get('/check_citizen', function(req, res){
      console.log(req);
      if (req.isAuthenticated()) {
        res.json({status: "logged"});
      }
      res.json({status: false});
    })
    .get('/seeya', function(req, res) {
        req.logout();
        res.send({"status": "success"});
        //res.redirect('/');
    })

    .get('/ping', function(req, res){
      res.status(200).json("pong!");
    });

  return router;
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on 
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  // if they aren't redirect them to the home page
  //res.redirect('/');
  res.send({"status": "Please log in to view this content."});
}