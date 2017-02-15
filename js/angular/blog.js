angular.module('FM5HD')
	.controller('blog', function ($scope, $http, $compile) {
	})
	.controller('blog_posts', ['$scope', 'fact_blog_posts', function ($scope, fact_blog_posts) {
		$scope.posts = []; 
		fact_blog_posts.blog_posts(function(data) {
			$scope.posts = data;
		});
	}])
	.controller('blog_post', ['$http', '$scope', '$routeParams', function ($http, $scope, $routeParams) {
		$scope.id = $routeParams.id; 
		$http.get('/_JosephIsBestJojo/APIs/blog_post/'+$routeParams.id).success(function(data, status, headers){
			$scope.post = data; 
		});

		var serialize = function(obj) {
		  var str = [];
		  for(var p in obj)
		    if (obj.hasOwnProperty(p)) {
		      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		    }
		  return str.join("&");
		}

		$scope.vote = function(vote) {
			$scope.voting = false; 
			$scope.voteoptions = false; 
			$scope.voted = false; 
			var data = {value: vote, slug: $routeParams.id};
			var jsonData=angular.toJson(data);
			$http({
				method: "post", 
				url: '/_JosephIsBestJojo/privateAPIs/blog_post_vote', 
				data: serialize(data), 
				headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8', 'X-Requested-With' :'XMLHttpRequest'}
			}).success(function(data) {
				console.log(data); 
				$scope.voting = false; 
				$scope.voteoptions = true; 
				$scope.voted = true; 
			}).error(function(){
				$scope.voting = false; 
				$scope.voteoptions = true; 
				$scope.voted = false; 
				console.error("Error"); 
			});
		}
	}])
	.factory('fact_blog_posts', ['$http', function($http) {
		return {
			blog_posts: function(callback) {
				$http.get('/_JosephIsBestJojo/APIs/blog').success(function(data){
					callback(data);
				}).error(function(){
					console.error("Error"); 
				});
			}
		};
	}])