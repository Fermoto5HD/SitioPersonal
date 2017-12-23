let Twitter = require('twitter');

let client = new Twitter({
	consumer_key: 'n6NHHKbtMGTUwKKAbmY6KCzRS',
	consumer_secret: 'UxtUz2mdsOLq12gqOOhmd3ZiZHBWN2GRzElrKIp42fxOIv0EOY',
	access_token_key: '122802657-opWDLhe1bVE5mtr1aKPITvePXQPoAGa4xzFwXdEe',
	access_token_secret: 'oWdUMqqmjVtotrZ3x1I1DNSh16Xx4EJPzItZwMYXmj6qP'
});

module.exports = {
	last: function(req, res) {
		client.get('statuses/user_timeline', {user_id: '122802657', include_rts: false}, function(error, tweets, response) {
			if (error) throw error;
			//console.log(tweets);  // The favorites. 
			//console.log(response);  // Raw response object. 
			res.status(200).json(tweets);
		});
	}
}