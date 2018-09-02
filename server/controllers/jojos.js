const passport = require('passport'),
      mongoose = require('mongoose'),
      dollarMember = mongoose.model('thedollars')

module.exports = {
  newmember: function(req, res) {
    // No.
    res.status(401).json({message: "Not authorized."})
    return
    // if(!req.body.name || !req.body.email || !req.body.password) {
    //   res.status(400).json({message: "All fields required."})
    //   return;
    // }

    let dollar = new dollarMember();

    dollar.name = req.body.name;
    dollar.email = req.body.email;

    dollar.setPassword(req.body.password);

    dollar.save(function(err) {
      let token
      token = dollar.generateJwt()
      res.status(200).json({token : token})
    });
  },

  whoareyou: function(req, res) {

    if (!req.body.email || !req.body.password) {
      res.status(400).json({message: "All fields required."})
      return
    }

    passport.authenticate('local', function(err, dollar_member, info){
      let token

      // If Passport throws/catches an error
      if (err) {
        res.status(404).json(err)
        return
      }

      // If a dollar member is found
      if (dollar_member) {
        token = dollar_member.generateJwt()
        res.status(200).json({token : token})
      } else {
        // If dollar member is not found
        res.status(401).json(info)
      }
    })(req, res);
  },

  list: function(req, res) {
    dollarMember.find({}, '-_id', {sort: {date_from: -1}}, function(err, result) {
      if (err) throw err;

      res.status(200).json(result);
      return;
    });
  }
}