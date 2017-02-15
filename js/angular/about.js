angular.module('FM5HD')
	.controller('about', ['$http', '$scope', function ($http, $scope) {
		console.log('about'); 
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
	}])