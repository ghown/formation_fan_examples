(function() {
	'use strict';

	var app = angular.module('myApp', []);
	app.run(function() {
		console.log('run.');
	});
	app.run(function() {
		console.log('run2.');
	});
	app.config(function() {
		console.log('configuration of my app.');
	});
		app.config(function() {
		console.log('configuration of my app2.');
	});
		app.config(function() {
		console.log('configuration of my app3.');
	});
	app.controller('MyController', ['$window', function($window) {
		this.sayHello = function(name) {
			$window.alert('Hello ' + name);
		};
	}]);
})();
