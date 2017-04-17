var app = angular.module('FM5HD', ['ngRoute', 'ngSanitize', 'angularMoment', 'youtube-embed']);
var token = ""; 
app
	.config(function($routeProvider){
		$routeProvider
		// Quick access
		.when('/about-me',{ 
			redirectTo: '/acerca'
		})
		.when('/about-me/cv',{ 
			redirectTo: '/acerca/cv'
		})
		.when('/curriculum',{ 
			redirectTo: '/acerca/cv'
		})
		.when('/renovaciondevias',{ 
			redirectTo: '/portfolio/cursadaUNSAM/renovaciondevias'
		})

		// Normal routes 
		.when('/',{ 
			templateUrl:'section/home.html',
			controller: 'home'
		})
		.when('/acerca',{ 
			templateUrl:'section/about-me.html',
			controller: 'about'
		})
		.when('/acerca/cv',{ 
			templateUrl:'section/cv.html'
		})
		.when('/blog',{ 
			templateUrl:'section/blog/blog.html'
		})
		.when('/blog/:id',{ 
			templateUrl:'section/blog/post.html', 
			controller: 'blog_post'
		})
		.when('/portfolio',{ 
			templateUrl:'section/portfolio/home.html'
		})
		.when('/portfolio/lantalks',{ 
			templateUrl:'section/portfolio/lantalks.html'
		})
		.when('/portfolio/cursadaUNSAM',{ 
			templateUrl:'section/portfolio/UNSAM.html'
		})
		.when('/portfolio/cursadaUNSAM/infra1-tp1',{ 
			templateUrl:'section/portfolio/UNSAM-infra1-tp1.html', 
			controller: 'UNSAM-infra1-tp1'
		})
		.when('/portfolio/cursadaUNSAM/renovaciondevias',{ 
			templateUrl:'section/portfolio/UNSAM-renovaciondevias.html'
		})
		.when('/portfolio/ferroviario',{ 
			templateUrl:'section/portfolio/ferroviario.html'
		})
		.when('/youtube',{ 
			templateUrl:'section/youtube.html',
			controller: 'youtube'
		})
		.when('/videos',{ 
			templateUrl:'section/videos.html',
			controller: 'videos'
		})
		.when('/FM5strap',{ 
			templateUrl:'section/FM5strap/home.html'
		})
		.when('/FM5strap/componentes',{ 
			templateUrl:'section/FM5strap/components.html'
		})
		.when('/APIs',{ 
			templateUrl:'section/APIs/home.html'
		})
		.when('/APIs/privadas',{ 
			templateUrl:'section/APIs/private.html'
		})
		.when('/FM5strap/ejemplos',{ 
			templateUrl:'section/FM5strap/examples.html'
		})
		.when('/401',{ 
			templateUrl:'section/401.html' 
		})
		.when('/404',{ 
			templateUrl:'section/404.html' 
		})
		.otherwise({
			templateUrl:'section/404.html' 
		});
	})
	.config(function($locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('#');
	})

	.run(function(amMoment) {
		amMoment.changeLocale('es');
	})

	.directive("scroll", function ($window) {
		return function(scope, element, attrs) {
			angular.element($window).bind("scroll", function() {
				if (this.pageYOffset >= 25) {
					scope.boolChangeClass = true;
				} else {
					scope.boolChangeClass = false;
				}

				scope.$watch(function () {
					return {
						'h': w.height(), 
						'w': w.width()
					};
				}, function (newValue, oldValue) {
					scope.windowHeight = newValue.h;
					scope.windowWidth = newValue.w;

					if (newValue.w >= 768) {
						//minwidth = true; 
					} else {
						//minwidth = false; }
					}

					scope.resizeWithOffset = function (offsetH) {
						scope.$eval(attr.notifier);
						return { 
							'height': (newValue.h - offsetH) + 'px'                    
						};
					};

				}, true);


				scope.$apply();
			});

			var w = angular.element($window);
			

			w.bind('resize', function () {
				scope.$apply();
			});
		};
	})

	.controller('contactform', function ($scope, $http, $compile) {
		$scope.modalShow = false;
		$scope.rand1 = Math.floor(Math.random() * 10) + 1; 
		$scope.rand2 = Math.floor(Math.random() * 10) + 1; 
		
		$scope.addNums = function(){
			var answer = $scope.md_frm_mathcaptcha;
			var digit1 = $scope.rand1;
			var digit2 = $scope.rand2;
			var sum = digit1 + digit2;
			if (answer == ""){
				$scope.error_alert = true; 
				$scope.error_msg = "Falta verificar si sos humano o no, para eso te pido que resuelvas esta cuenta. ";
				$scope.rand1 = Math.floor(Math.random() * 10) + 1; 
				$scope.rand2 = Math.floor(Math.random() * 10) + 1; 
				return false;
			} else if (answer != sum){
				$scope.error_alert = true; 
				$scope.error_msg = "Resultado incorrecto. Intentalo de nuevo.";
				$scope.rand1 = Math.floor(Math.random() * 10) + 1; 
				$scope.rand2 = Math.floor(Math.random() * 10) + 1; 
				return false;
			} else{
				return true;
			}
		}
		$scope.sendmail = function() {
			$scope.success = "";
			$scope.error_alert = false; 
			if ($scope.addNums()) {
				$http({
					method: 'POST', 
					url: 'php/mailing.php',
					data: 'name=:'+ $scope.md_frm_name + '&email=' + $scope.md_frm_email + '&tel=' + $scope.md_frm_tel + '&msj='+$scope.md_frm_message,
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}	
				}).	
				success(function(data, status) {
					// Set the data of the status
					$scope.alert = true; 
					$scope.resultado = data;
					$scope.md_frm_name = "";
					$scope.md_frm_email = "";
					$scope.md_frm_tel = "";
					$scope.md_frm_message = "";
					$scope.md_frm_mathcaptcha = "";
					$scope.rand1 = Math.floor(Math.random() * 10) + 1; 
					$scope.rand2 = Math.floor(Math.random() * 10) + 1; 
					$scope.success = "El mensaje fue enviado. Gracias por contactarte conmigo, te contestaré lo más antes posible! ";
				}).
				error(function(data, status) {
					$scope.alert = true; 
					$scope.data = data || "Request failed";
					$scope.status = status;
				});
			}
		}
	})

	.controller('mainctrl', function ($scope) {})

	

	.factory('fact_InstagramAPI', ['$http', function($http) {
		return {
			fetchPhotos : function(callback) {
				//var tokenURL = 'https://www.instagram.com/oauth/authorize/?client_id=3c38d510e4ce43b08f4157fd0ee381fb&redirect_uri=http://fermoto5hd.com/&response_type=token';
				//$http.jsonp(tokenURL).success(function(response) {
				//	token = response.data;
				//});
				var endpoint = 'https://api.instagram.com/v1/users/1631184808/media/recent/?count=1&access_token=1631184808.3c38d51.06928053fc3a4bacb7562a6b2a5e0245&callback=JSON_CALLBACK';
				$http.jsonp(endpoint).success(function(response) {
					callback(response.data);
				}).error(function() {
					callback(false);
				});
			}
		}
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

	.controller('Saitama', function($scope, fact_InstagramAPI) {
		$scope.layout = 'list';
		$scope.data = {};
		$scope.pics = [];

		fact_InstagramAPI.fetchPhotos(function(data) {
			if (data !== false) {
				$scope.pics = data;
			}
		});
	}); 