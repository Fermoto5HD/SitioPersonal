var request = require('request');

module.exports = {
  get: function(req, res) {
    request({
      method: 'GET',
      url: 'http://api.noencontrado.org/v1/search.json',
      headers: {
        'Content-Type': 'application/json'
      }}, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;
      res.status(200).json(JSON.parse(body));
      return;
    });
  }
};
