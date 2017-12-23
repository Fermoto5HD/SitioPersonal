var ig = require('instagram-node').instagram();

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
};
