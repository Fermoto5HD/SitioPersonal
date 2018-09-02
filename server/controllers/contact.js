var mongoose = require('mongoose');
var Contact = mongoose.model('contact');

module.exports = {
  add: function(req, res) {
    var za_requesto = req.body;
    var post = new Contact({
      title: za_requesto.title,
      phone: za_requesto.phone,
      content: za_requesto.content,
      created: za_requesto.date
    });
    post.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'Done!' });
      return;
    })
  },
  list: function (req, res, next) {
    Contact.find({}, function(err, rows) {
      if (err) throw err;

      res.status(200).json(rows);
      return;
    });
  },
  remove: function (req, res, next) {
    if (!req.body.id) {
      res.status(500).json({status: "error", message: "No se especificó el ID."});
      return;
    }
    Contact.findOneAndRemove({ _id: req.body.id }, function(err, rows) {
      if (err) {
        throw err;
      }
      res.status(200).json(rows);
      return;
    });
  }
}
