/*var ig = require('instagram-node').instagram();

// Every call to `ig.use()` overrides the `client_id/client_secret`
// or `access_token` previously entered if they exist.
ig.use({ access_token: '1631184808.3c38d51.06928053fc3a4bacb7562a6b2a5e0245',
         client_id: '3c38d510e4ce43b08f4157fd0ee381fb',
         client_secret: '9e2ca782fc3d4d1492b5f325fbefe7cf' });

module.exports = {
  list: function(req, res) {
    ig.user_media_recent("1631184808", function(err, medias, pagination, remaining, limit) {
      if (err) throw err;
      res.status(200).json(medias);
    });
  }
};*/

var client = require('github-graphql-client');

/*var request = client({
	token: 'c8088f258776125ca2e32b3214869db0901a8ea0',
	query: '{ \
			  user(login: "Fermoto5HD") {\
			    repositories(last: 10) {\
			      nodes {\
			        name,\
			        description,\
			        isFork,\
			        updatedAt\
			      }\
			    }\
			  }\
			}'

}, function (err, res) {
	if (err) {
		// handle errors
		if (err) throw err;
	} else {
		// handle results
		res.status(200).json(res);
	}
});*/

module.exports = {
	main: function(req, res) {
		client({
			token: 'c8088f258776125ca2e32b3214869db0901a8ea0',
			query: '{ \
					  user(login:"Fermoto5HD") { \
					    repositories(last: 10, orderBy: {field:UPDATED_AT,direction:ASC}, isLocked:false, privacy: PUBLIC) {\
					      nodes {\
					        name,\
					        description,\
					        homepageUrl,\
					        isFork,\
					        updatedAt\
					      }\
					    }\
					  }\
					}'

		}, function (error, response) {
			if (error) throw error;
			res.status(200).json(response.data.user.repositories.nodes);
			return;
		});
	}
}