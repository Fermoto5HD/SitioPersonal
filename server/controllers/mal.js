var request = require('request');

module.exports = {
  anime: function(req, res) {
    request({
      method: 'GET',
      url: 'https://myanimelist.net/animelist/fermoto5hd/load.json?offset=0&limit=5&order=3',
      headers: {
        'Content-Type': 'application/json'
      }}, function (error, response, body) {
      if (error) throw error;
      res.status(200).json(JSON.parse(body));
      return;
    });
  },
  manga: function(req, res) {
    request({
      method: 'GET',
      url: 'https://myanimelist.net/mangalist/fermoto5hd/load.json?offset=0&limit=5&order=3',
      headers: {
        'Content-Type': 'application/json'
      }}, function (error, response, body) {
      if (error) throw error;
      res.status(200).json(JSON.parse(body));
      return;
    });
  }
};
