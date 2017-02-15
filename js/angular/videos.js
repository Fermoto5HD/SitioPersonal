angular.module('FM5HD')
	.controller('videos', ['$http', '$scope', 'fact_videos', function ($http, $scope, fact_videos) {
		$scope.videos = []; 
		fact_videos.listvideos(function(data) {
			$scope.videos = data;
		});
	}])
	.factory('fact_videos', ['$http', function($http) {
		return {
			listvideos: function(callback) {
				$http.get('http://fermoto5hd.com/_JosephIsBestJojo/APIs/videos').success(function(data){
					callback(data);
				});
			}
		};
	}])