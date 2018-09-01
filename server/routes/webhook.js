const 	express =     require('express'),
		router =      express.Router(), 
		bodyParser =  require('body-parser'),
		ctrl = 		  require('../controllers/fb_webhook');

module.exports = function (app) {
	// Parsers for POST data
	router
		.use(bodyParser.json())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(function(req, res, next) {
			// do logging
			console.log('Accessing webhook.');
			next(); // make sure we go to the next routes and don't stop here
		})
		.get('/', ctrl.get)
		.post('/', ctrl.post)

		.get('/ping', function(req, res){
			res.status(200).json({response: "pong!"});
		});

	return router;
};