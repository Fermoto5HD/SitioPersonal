var passport = require('passport');
var mongoose = require('mongoose');
var slugify = require('slugify');
var Blog = mongoose.model('Blog');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.add = function(req, res) {
  var za_requesto = req.body;
  var post = new Blog({
    title: za_requesto.title,
    slug: slugify(za_requesto.title),
    excerpt: za_requesto.excerpt,
    content: za_requesto.content,
    created: za_requesto.date
  });
  post.save(function(err) {
    if (err) res.send(err);
    res.json({ message: 'Post created!' });
    return;
  })
};

module.exports.remove = function(req, res, next) {
  passport.authenticate(req.params.provider)(req, res, next);
  Blog.find({}, function(err, blog_posts) {
    if (err) throw err;

    res.status(200).json(blog_posts);
    return;
  });
};

module.exports.list = function (req, res, next) {
  //passport.authenticate(req.params.provider)(req, res, next);
  Blog.find({}, '-_id', {sort: {date: -1}}, function(err, blog_posts) {
    if (err) throw err;

    res.status(200).json(blog_posts);
    return;
  });
};
module.exports.fulllist = function (req, res, next) {
  passport.authenticate(req.params.provider)(req, res, next);
  Blog.find({}, function(err, blog_posts) {
    if (err) throw err;

    res.status(200).json(blog_posts);
    return;
  });
};

module.exports.getpost = function (req, res) {
  Blog.find({slug: req.params.slug}, function (err, the_post) {
    if (err) throw err;

    if (the_post[0]) {
      console.log('Found "blog/' + req.params.slug + '".');
      res.status(200).json(the_post[0]);
    } else {
      console.log('Post in the url "blog/' + req.params.slug + '" not found.');
      res.status(404).send({ error: 'Post not found' })
    }
    return;
  });
};

module.exports.votepost = function (req, res) {
  if (!req.params.vote) {
    res.status(400).send({ error: 'No vote parameter. Allowed values: 1, 2 or 3.' })
  }
  let vote_val = parseInt(req.params.vote);
  if (vote_val) {
    if (vote_val === 1) {
      Blog.findOneAndUpdate({slug: req.params.slug}, {$inc : {'vote.y' : 1}}, function(err, the_post) {
        if (!the_post) {
          res.status(400).json({status: 'error'});
        } else {
          res.status(200).json({status: 'success'});
        }
      });
      return;
    } else if (vote_val === 2) {
      Blog.findOneAndUpdate({slug: req.params.slug}, {$inc : {'vote.k' : 1}}, function(err, the_post) {
        if (!the_post) {
          res.status(400).json({status: 'error'});
        } else {
          res.status(200).json({status: 'success'});
        }
      });
      return;
    } else if (vote_val === 3) {
      Blog.findOneAndUpdate({slug: req.params.slug}, {$inc : {'vote.n' : 1}}, function(err, the_post) {
        if (!the_post) {
          res.status(400).json({status: 'error'});
        } else {
          res.status(200).json({status: 'success'});
        }
      });
      return;
    } else {
      res.status(400).send({ error: 'Invalid vote. Allowed values: 1, 2 or 3.' });
      return;
    }
  } else {
    res.status(400).send({ error: 'No vote parameter. Allowed values: 1, 2 or 3.' })
  }
};
