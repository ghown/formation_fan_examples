(function() {
	'use strict';

	var app = angular.module('myApp', []);

	app.controller('MyController', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.lastUpdate = undefined;
		$scope.$watch('name', function() {
			console.log('rootScope = ',$rootScope);
			console.log('scope = ',$scope);
			$scope.lastUpdate = new Date();
		});
	}]);
})();
