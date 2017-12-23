var request = require('request');
var key = "AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0"; 
module.exports = {
  stats: function(req, res) {
    request({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/channels',
      headers: {
        'Content-Type': 'application/json',
        'referer': "https://fermoto5hd.com/"
      },
      qs: {
        'part' : 'statistics', 
				'forUsername' : "Fermoto5HD",
				'key': "AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0"
      }
    }, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body).items[0].statistics);
      return;
    });
  },
  details: function(req, res) {
    request({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/channels',
      headers: {
        'Content-Type': 'application/json',
        'referer': "https://fermoto5hd.com/"
      },
      qs: {
        'part' : 'contentDetails', 
				'forUsername' : "Fermoto5HD",
				'key': "AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0"
      }
    }, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body));
      return;
    });
  },
  latest: function(req, res) {
    request({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/playlistItems',
      headers: {
        'Content-Type': 'application/json',
        'referer': "https://fermoto5hd.com/"
      },
      qs: {
        'part' : 'snippet',  
				'maxResults' : 1,
			  'playlistId' : "UUBnPjaDK2VBKTtPOeNF-GIQ",
				'key': "AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0"
      }
    }, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body).items[0]);
      return;
    });
  },
  last10: function(req, res) {
    request({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/playlistItems',
      headers: {
        'Content-Type': 'application/json',
        'referer': "https://fermoto5hd.com/"
      },
      qs: {
        'part' : 'snippet',  
				'maxResults' : 10,
			  'playlistId' : "UUBnPjaDK2VBKTtPOeNF-GIQ",
				'key': "AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0"
      }
    }, function (error, response, body) {
      //console.log('Status:', response.statusCode);
      //console.log('Headers:', JSON.stringify(response.headers));
      //console.log('Response:', body);
      if (error) throw error;

      res.status(200).json(JSON.parse(body).items);
      return;
    });
  }
};
