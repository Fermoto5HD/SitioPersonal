var Flickr = require('flickr-sdk');
//var api_key = process.env.FLICKR_API_KEY;
var api_key = '0f43f38e331e86b74583ea6099e545ab';

module.exports = {
	last: function(req, res) {
		var flickr = new Flickr(api_key);

		flickr.people.getPhotos({
		  user_id: '135395204@N08',
		  content_type: 1,
		  per_page: 1
		}).then(function (data) {
			res.status(200).json(data.body.photos.photo[0]);
		}).catch(function (error) {
			throw error;
		});
	},
	list: function(req, res) {
		var flickr = new Flickr(api_key);

		flickr.people.getPhotos({
		  user_id: '135395204@N08',
		  content_type: 1,
		  per_page: 20
		}).then(function (data) {
			res.status(200).json(data.body.photos.photo);
		}).catch(function (error) {
			throw error;
		});
	}
}