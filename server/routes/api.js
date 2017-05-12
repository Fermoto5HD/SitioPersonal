const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlJojos = require('../controllers/jojos');
var ctrlPortfolio = require('../controllers/portfolio');
var ctrlBlog = require('../controllers/blog');
var ctrlCaesarino = require('../controllers/caesarino');
var ctrlTrakt = require('../controllers/trakt');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FM5HD');

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

/* GET api listing. */
/*router.get('/', (req, res) => {
  res.send('rajá');
});*/

// Retrieve my Jojos 4 Caesar-senpai~ ^-^
router.route('/jojos')
  .post(auth, ctrlJojos.newjojo)
  .get(ctrlJojos.whoareyou);

// Tell Caesar-chan to upload images 4 muh portfolio.
router.route('/caesarino/uploadme')
  .post(auth, ctrlCaesarino.upload);

// Show them muh portfolio.
router
  .post('/portfolio', ctrlPortfolio.add)
  .get('/portfolio', ctrlPortfolio.list)
  .delete('/portfolio/:id', ctrlPortfolio.remove);

// Show them muh blog.
router
  .post('/blog', auth, ctrlBlog.add)
  .get('/blog', ctrlBlog.list)
  .delete('/blog/:slug', auth, ctrlBlog.remove);

// Give my Trakt list
router.get('/trakt', ctrlTrakt.list);
router.get('/trakt/last', ctrlTrakt.last);
router.get('/trakt/history', ctrlTrakt.history);

module.exports = router;
