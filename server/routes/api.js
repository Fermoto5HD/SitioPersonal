const 	fs =          require('fs'),
		express =     require('express'),
		router =      express.Router(), 
		bodyParser =  require('body-parser'),
		passport =    require('passport'),
		ctrl = {
			ads: require('../controllers/ads'),
			contact: require('../controllers/contact'),
			thedollars: require('../controllers/thedollars'),
			portfolio: require('../controllers/portfolio'),
			blog: require('../controllers/blog'),
			youtube: require('../controllers/youtube'),
			facebook: require('../controllers/facebook'),
			instagram: require('../controllers/instagram'),
			twitter: require('../controllers/twitter'),
			flickr: require('../controllers/flickr'),
			trakt: require('../controllers/trakt'),
			mal: require('../controllers/mal'),
			github: require('../controllers/github'),
			celty: require('../controllers/celty'),
			noencontrado: require('../controllers/noencontrado'),
			notifications: require('../controllers/notifications')
		};

let secret = {};

/*fs.readFile('secrets.json', function processClientSecrets(err, content) {
	if (err) {
		console.log('Failed to load secret keys: ' + err);
		return;
	}
	secret = JSON.parse(content);
	console.log(secret);
});*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FM5HD');

module.exports = function (app, passport) {
	// Parsers for POST data
	router
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(function(req, res, next) {
			// do logging
			console.log('Accessing to API.');
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
		.post('/thedollars/notifications', ctrl.notifications.subscribe)

		.get('/ias', ctrl.ads.get)

		.get('/thedollars/members', ctrl.thedollars.isidentified, ctrl.thedollars.list)

		.get('/thedollars/count', ctrl.thedollars.isidentified, ctrl.thedollars.count)

	// Show them muh portfolio.
		// Public
		.get('/portfolio', ctrl.portfolio.list)
		.get('/portfolio/category/:category', ctrl.portfolio.category)
		.get('/portfolio/work/:slug', ctrl.portfolio.work)
		.get('/portfolio/work/:slug/:version', ctrl.portfolio.work_unique)
		// TheDollars CP
		.get('/thedollars/portfolio', ctrl.thedollars.isidentified, ctrl.portfolio.list)
		.post('/thedollars/portfolio', ctrl.thedollars.isidentified, ctrl.portfolio.add)
		.delete('/thedollars/portfolio/:id', ctrl.thedollars.isidentified, ctrl.portfolio.remove)

	// Send the contact requests
		// Public
		.post('/contact', ctrl.contact.add)
		// TheDollars CP
		.get('/thedollars/inbox', ctrl.thedollars.isidentified, ctrl.contact.list)
		.delete('/thedollars/inbox/:id', ctrl.thedollars.isidentified, ctrl.contact.remove)

	// Show them muh blog.
		// Public
		.get('/blog', ctrl.blog.list)
		.get('/blog/:slug', ctrl.blog.getpost)
		.get('/blog/:slug/voting/:vote', ctrl.blog.votepost)
		// TheDollars CP
		.get('/thedollars/blog', ctrl.thedollars.isidentified, ctrl.blog.fulllist)
		.post('/thedollars/blog', ctrl.thedollars.isidentified, ctrl.blog.add)
		.delete('/thedollars/blog/:slug', ctrl.thedollars.isidentified, ctrl.blog.remove)

	// YouTube
		.get('/youtube', ctrl.youtube.last10)
		.get('/youtube/latest', ctrl.youtube.latest)
		.get('/youtube/stats', ctrl.youtube.stats)
		.get('/youtube/details', ctrl.youtube.details)

	// Give my Trakt list
		.get('/trakt', ctrl.trakt.list)
		.get('/trakt/last', ctrl.trakt.last)
		.get('/trakt/history', ctrl.trakt.history)
		.get('/trakt/cover_movie/:id', ctrl.trakt.cover_movie)
		.get('/trakt/imdb_config', ctrl.trakt.imdb_config)

	// MyAnimeList!
		.get('/mal/anime', ctrl.mal.anime)
		.get('/mal/manga', ctrl.mal.manga)

	// GitHub
		.get('/github', ctrl.github.main)
		
	// Instagram
		.get('/instagram', ctrl.instagram.main)

	// Facebook
		.get('/fb/info', ctrl.facebook.info)
		.get('/fb/posts', ctrl.facebook.posts)

	// Twitter
		.get('/tw/latest', ctrl.twitter.last)

	// Flickr
		.get('/flickr', ctrl.flickr.list)
		.get('/flickr/last', ctrl.flickr.last)
	
	// No Encontrado
		.get('/noencontrado', ctrl.noencontrado.get)

		// Mailing
		.get('/celty', ctrl.celty.send)
		.post('/celty', ctrl.celty.send)

		// Upload method
		.post('/thedollars/uploadme', ctrl.thedollars.isidentified, ctrl.celty.upload)

		.get('/thedollars/ikebukuro', ctrl.thedollars.isidentified, function(req, res) {
			res.json({
				status: "success",
				user: req.user
			});
		})


		.post('/thedollars/im-joining-ikebukuro', ctrl.thedollars.newcitizen, function(req, res){
			res.json({status: true, message: "Welcome to the Dollars."});
		})


		.get('/thedollars/prelogin/:user', ctrl.thedollars.user)
		.get('/thedollars/login', function(req, res) {
			res.redirect('/thedollars');
		})
		.post('/thedollars/login', ctrl.thedollars.identify)
		.get('/thedollars/check_citizen', ctrl.thedollars.isidentified, function(req, res){
			res.json({status: "logged"});
		})
		.get('/thedollars/seeya', ctrl.thedollars.isidentified, function(req, res) {
			req.logout();
			res.send({"status": "success"});
		})

		.get('/ping', function(req, res){
			res.status(200).json({response: "pong!"});
		});

	return router;
};