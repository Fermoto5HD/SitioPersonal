angular.module('FM5HD')
	.controller('listPortfolio', ['$http', '$scope', function ($http, $scope) {
		$scope.portfolio = []; 
		$http.get('/_JosephIsBestJojo/APIs/portfolio/').success(function(data, status, headers){
			$scope.portfolio = data; 
		});
	}])
	.controller('listPortfolio_lantalks', ['$http', '$scope', function ($http, $scope) {
		$scope.portfolio = []; 
		$http.get('/_JosephIsBestJojo/APIs/portfolio/1').success(function(data, status, headers){
			$scope.portfolio = data; 
		});
	}])
	.controller('listPortfolio_UNSAM', ['$http', '$scope', function ($http, $scope) {
		$scope.portfolio = []; 
		$http.get('/_JosephIsBestJojo/APIs/portfolio/2').success(function(data, status, headers){
			$scope.portfolio = data; 
		});
	}])
	.controller('listPortfolio_ferroviario', ['$http', '$scope', function ($http, $scope) {
		$scope.portfolio = []; 
		$http.get('/_JosephIsBestJojo/APIs/portfolio/3').success(function(data, status, headers){
			$scope.portfolio = data; 
		});
	}])