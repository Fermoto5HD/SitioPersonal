angular.module('FM5HD')
	.controller('home', ['$http', '$scope', 'fact_youtube', function ($http, $scope, fact_youtube) {
		console.log('Home'); 
		var d = new Date();
		var year = d.getFullYear();
		var birth = moment("1994-11-05");
		var birthday = moment(year+"-11-05");
		var birthday_next = moment((year+1)+"-11-05");
		var todaysdate = moment();
		$scope.age = todaysdate.diff(birth, 'years');
		var nextbirthday = birthday.diff(todaysdate, 'days')+1;
		var secondnextbirthday = birthday_next.diff(todaysdate, 'days')+1;
		var nextage = todaysdate.diff(birth, 'years')+1;

		if (birthday.diff(todaysdate, 'days') === 0) {
			$scope.textbirthday = "Hoy es mi cumple! Wiii~"; 
		} else if (birthday.diff(todaysdate, 'days')+1 === 1) {
			$scope.textbirthday = "Mañana cumplo "+nextage+" años"; 
			console.log(birthday.diff(todaysdate, 'days')); 
		} else if (birthday.diff(todaysdate, 'days')+1 > 0) {
			$scope.textbirthday = "En "+ nextbirthday+" días cumplo "+nextage; 
		} else {
			$scope.textbirthday = "En "+ secondnextbirthday+" días cumplo "+nextage; 
		}

		fact_youtube.getPlaylists("Fermoto5HD").then(function (response) {
			$scope.$apply(function () {
				$scope.playlists = response.items;
			})
		})

		fact_youtube.getPlaylistVideos('UUBnPjaDK2VBKTtPOeNF-GIQ').then(function (response) {
			$scope.ytuploads = response;
			console.log(response); 
		})
		fact_youtube.getChannelInfo("Fermoto5HD").then(function (response) {
			$scope.ytchannelinfo = response;
			console.log(response); 
		});

		$scope.getPlaylistVideos = function (selection) {
			fact_youtube.getPlaylistVideos(selection.snippets.id).then(function (response) {
				$scope.playlistvideos = response.data.items;
			});
		}
	}])