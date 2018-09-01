const request = require('request'),
			medium =  require('medium-sdk');

let client = new medium.MediumClient({
			clientId: 'YOUR_CLIENT_ID',
			clientSecret: 'YOUR_CLIENT_SECRET'
		}),
		redirectURL = 'https://fermoto5hd.com/api/medium/cb', 
		url = client.getAuthorizationUrl('secretState', redirectURL, [
			medium.Scope.BASIC_PROFILE, medium.Scope.PUBLISH_POST
		]);



module.exports = {
	get: function(req, res) {
		request({
			method: 'GET',
			url: 'https://api.medium.com/v1/users/{{authorId}}/posts',
			headers: {
				'Content-Type': 'application/json'
			}}, function (error, response, body) {
			if (error) throw error;
			res.status(200).json(JSON.parse(body));
			return;
		});
	},
	ci: function(req, res) {
		request({
			method: 'GET',
			url: 'https://medium.com/m/oauth/authorize?client_id=160d6c9033d9&scope=listPublications&response_type=code&redirect_uri=https://fermoto5hd.com/blog',
			headers: {
				'Content-Type': 'application/json'
			}}, function (error, response, body) {
			if (error) throw error;
			res.status(200).json(JSON.parse(body));
			return;
		});
	}
};

