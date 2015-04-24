(function() {
	var app = angular.module('myApp', ['ngRoute']);
	app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider
			.html5Mode(true)
			.hashPrefix('!');

		$routeProvider
			.when('/', {
				templateUrl: 'cover.html'
			})
			.when('/hello/coucou/truc/juan.html', {
				templateUrl: 'hello.html'
			})
			.when('/:message', {
				templateUrl: 'message.html',
				controller: 'MessageController',
				controllerAs: 'ctrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
	app.controller('MessageController', ['$routeParams', function($routeParams) {
		this.message = $routeParams.message;
	}]);
})();