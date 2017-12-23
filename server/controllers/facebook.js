var {Facebook, FacebookApiException} = require('fb'),
		fb = new Facebook({
			version: 'v2.11',
			appId: '151619321598501',
			appSecret: '08174a287a63817ab4c2a6d10fd9019d',
			accessToken: 'EAACJ5ZAZCOEiUBAMxTYAkRgMF8sD1l7LWRmVTliGb2w1ABASu06DIB13buZBgXwa19sLTHpZCLghf1bUyCRPdFVC6oMYIKbE9TP5y3ZBC8nDcUynzh7bwXl5xUfi4PVC8LVCiyc1yeBOcNKiZBYTkvcLJihSOU20oxrlQmyhUcRgZDZD'
		});

module.exports = {
	info: function(req, res) {
		fb.api('/949817678432248?fields=name,picture,cover,about,personal_info,link', function (response) {
			if(!response || response.error) {
				console.log(!response ? 'error occurred' : response.error);
				throw res.error;
			}
			res.status(200).json(response);
		});
	},
	posts: function(req, res) {
		fb.api('/949817678432248/posts', function (response) {
			if(!response || response.error) {
				console.log(!response ? 'error occurred' : response.error);
				throw res.error;
			}
			res.status(200).json(response);
		});
	}
};
