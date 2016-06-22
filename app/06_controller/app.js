(function() {
	'use strict';

	var someone = {
		lastname: 'PIRES',
		firstname: 'Maxime',
		age: 20
	};

	var app = angular.module('myApp', []);

	app.controller('MyController', function() {
		this.person = someone;
	});
})();
