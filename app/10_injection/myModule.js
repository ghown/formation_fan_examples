(function() {
	'use strict';

	

	var app = angular.module('myApp', ['myModule']);
	app.controller('MyController', ['$scope', 'hello', function($scope, hello) {
		$scope.sayHello = function(name) {
			hello.welcome(name);
			console.log(name);
		};
	}]);
})();
