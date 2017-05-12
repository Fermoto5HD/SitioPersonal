var request = require('request');

module.exports = {
  list: function(req, res) {
    request({
      method: 'GET',
      url: 'https://api.trakt.tv/users/Fermoto5HD/collection/shows',
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': '78c44c9cbff5966e9a7f962039975a1b48db9b0cf21b386ed7ad81a8b6756afc'
      }}, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body));
      return;
    });
  },
  last: function(req, res) {
    request({
      method: 'GET',
      url: 'https://api.trakt.tv/users/Fermoto5HD/history/shows',
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': '78c44c9cbff5966e9a7f962039975a1b48db9b0cf21b386ed7ad81a8b6756afc'
      }}, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body)[0]);
      return;
    });
  },
  history: function(req, res) {
    request({
      method: 'GET',
      url: 'https://api.trakt.tv/users/Fermoto5HD/history',
      headers: {
        'Content-Type': 'application/json',
        'trakt-api-version': '2',
        'trakt-api-key': '78c44c9cbff5966e9a7f962039975a1b48db9b0cf21b386ed7ad81a8b6756afc'
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
