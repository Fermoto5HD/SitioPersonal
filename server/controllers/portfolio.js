var passport = require('passport');
var mongoose = require('mongoose');
var Portfolio = mongoose.model('Portfolio');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports = {
  add: function(req, res) {
    console.log(req.body);
    if(req.body) {
      var za_requesto = req.body;
      var portfolio = new Portfolio({
        name: za_requesto.name,
        version: za_requesto.version,
        description: {
          excerpt: za_requesto.descriptionexcerpt,
          full: za_requesto.descriptionfull,
        },
        is_internal: za_requesto.is_internal,
        url: za_requesto.url,
        url_repo: za_requesto.url_repo,
        image: za_requesto.image,
        date_from: za_requesto.date_from,
        date_to: za_requesto.date_to
      });
      portfolio.save(function(err) {
        if (err) res.send(err);
        res.json({ message: 'Portfolio item created!' });
        return;
      })
    } else {
      res.send(500);
      res.json({message: 'e'});
      return res;
    }
  },
  remove_old: function(req, res) {
    Portfolio.find({}, function(err, portfolio_items) {
      if (err) throw err;

      res.status(200).json(portfolio_items);
      return;
    });
  },
  remove: function(req, res, next) {
    console.log(req.params.id);
    Portfolio.find({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);
      } else {
        res.end();
      }
    });
  },
  list: function(req, res) {
    Portfolio.find({}, '-_id', {sort: {date_from: -1}}, function(err, portfolio_items) {
      if (err) throw err;

      res.status(200).json(portfolio_items);
      return;
    });
  }
};
