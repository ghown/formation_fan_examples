module.exports = function(config) {
	'use strict';

	config.set({

		basePath: '../../',

		files: [
		'bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js',
		'bower_components/angular-mocks/angular-mocks.js',
		'24_karma/app/*.js',
		'24_karma/test/unit/**/*.js'
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		plugins: [
		'karma-chrome-launcher',
		'karma-firefox-launcher',
		'karma-jasmine'
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
