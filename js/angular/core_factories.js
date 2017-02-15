angular.module('FM5HD')
	
	.factory('Page', function(){
		var title = 'default';
		return {
			title: function() { return title; },
			setTitle: function(newTitle) { title = newTitle; }
		};
	})
	
	.factory('fact_InstagramAPI', ['$http', function($http) {
		return {
			fetchPhotos : function(callback) {
				var tokenURL = 'https://www.instagram.com/oauth/authorize/?client_id=3c38d510e4ce43b08f4157fd0ee381fb&redirect_uri=http://localhost/&response_type=token';
				$http.jsonp(tokenURL).success(function(response) {
					token = response.data;
				});
				var endpoint = 'https://api.instagram.com/v1/users/1631184808/media/recent/?count=1&access_token=1631184808.3c38d51.06928053fc3a4bacb7562a6b2a5e0245&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response) {
					callback(response.data);
				}).error(function() {
					callback(false);
				});
			}
		}
	}])
	.factory('fact_portfolioList', ['$http', function($http) {
		return {
			listPortfolio: function(callback) {
				$http.get('data/portfolio.json').success(function(data){
					callback(data);
				});
			}
		};
	}])
	.factory('fact_youtube', ['$http', function ($http) {
		//var channelId = "UCBnPjaDK2VBKTtPOeNF-GIQ"; 
		var key = 'AIzaSyAp2-KIKz8vpd0GgObEMpC2vFdAktw7KB0'; 
		//function getPlaylists(channelId) {
		//	return $.get("https://www.googleapis.com/youtube/v3/channels", { part: 'snippet', channelId: channelId, key: key, categoryId: "GCQmVzdCBvZiBZb3VUdWJl" });
		//}
		//function getPlaylistVideos(id) {
		//	return $http.get('https://www.googleapis.com/youtube/v3/videos', { params: { part: 'snippet', id: id, key: key } });
		//}
		function getChannelInfo(ytchannel) {
			return $.get("https://www.googleapis.com/youtube/v3/channels", {
				part : 'statistics', 
				forUsername : ytchannel,
				key: key
			});
		}
		function getPlaylists(ytchannel) {
			return $.get("https://www.googleapis.com/youtube/v3/channels", {
				part : 'contentDetails', 
				forUsername : ytchannel,
				key: key
			});
		}
		function getPlaylistVideos(id) {
			return $http.get('https://www.googleapis.com/youtube/v3/playlistItems', {
				params: {
					part : 'snippet', 
					maxResults : 10,
					playlistId : id,
					key: key
				} 
			});
		}
		return {getChannelInfo: getChannelInfo, getPlaylists: getPlaylists, getPlaylistVideos: getPlaylistVideos }
	}])