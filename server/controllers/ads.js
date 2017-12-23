var passport = require('passport');
var mongoose = require('mongoose');
var Ad = mongoose.model('Ads');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.add = function(req, res) {
  var za_requesto = req.body;
  var ad = new Ad({
    title: za_requesto.title,
    image: {
      "300x600": za_requesto.image_lg,
      "300x300": za_requesto.image_md,
      "300x100": za_requesto.image_sm,
    },
    link: {
      type: za_requesto.link_type,
      url: za_requesto.link_url
    },
    track: za_requesto.track
  });
  ad.save(function(err) {
    if (err) res.send(err);
    res.json({ message: 'Ad added!' });
    return;
  })
};

module.exports.remove = function(req, res, next) {
  passport.authenticate(req.params.provider)(req, res, next);
  Ad.find({}, function(err, ads) {
    if (err) throw err;

    res.status(200).json(ads);
    return;
  });
};

module.exports.get = function (req, res, next) {
  var query = {};
  if (req.useragent.isMobile) {
    query = {"image.sm": { $ne: null }};
  } else if (req.useragent.isTablet) {
    query = {"image.md": { $ne: null }};
  } else {
    query = {"image.lg": { $ne: null }};
  }
  Ad.count(query).exec(function (err, count) {
    // Nothing? Return an empty array.
    if (count < 1) {
      res.status(200).json([]);
      return;
    }
    // We have 1 or more than 1? Get a random entry!
    var random = Math.floor(Math.random() * count)
    Ad.findOne(query, '-_id').skip(random).exec(
      function(err, ads) {
        if (err) throw err;

        res.status(200).json(ads);
        return;
      }
    );
  })
};
