(function() {
	'use strict';

	var app = angular.module('myModule', []);

	app.service('hello', ['$window', function($window) {
		return {
			welcome: function(name) {
				$window.alert('Is it ' + name + ' you\'re looking for?');
			}
		};
	}]);
})();
