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
  },
  imdb_config: function(req, res) {
    request({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/configuration?api_key=b5650a58c68b60cd2cd97c5f11e39070',
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
  },
  cover_movie: function(req, res) {
    let id = req.params.id;
    if (!id) {
      res.status(500).json(JSON.parse({status:"error"}));
      return;
    }
    request({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/'+id+'?api_key=b5650a58c68b60cd2cd97c5f11e39070',
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
  },
};
