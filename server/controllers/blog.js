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
    title: za_requesto.name,
    slug: slugify(za_requesto.name),
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

module.exports.remove = function(req, res) {
  Blog.find({}, function(err, blog_posts) {
    if (err) throw err;

    res.status(200).json(blog_posts);
    return;
  });
};

module.exports.list = function(req, res) {
  Blog.find({}, function(err, blog_posts) {
    if (err) throw err;

    res.status(200).json(blog_posts);
    return;
  });
};
