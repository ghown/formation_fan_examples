(function() {
	'use strict';

	var app = angular.module('mainApp', ['ui.validate']);

	app.controller('MainCtrl', ['$scope', function($scope) {
		$scope.obj = {};
		$scope.doSomething = function() {
			console.log('something');
		};
		$scope.$watch('myForm', function() {
			console.log($scope.myForm);
		}, true);

		$scope.sum = function(c, a, b) {
			console.log('a = ', a);
			console.log('b = ', b);
			console.log('c = ', c);
			var result = Number(c) == Number(a) + Number(b);
			console.log('result = ', result);
			return result;
		};

		$scope.isError = function(field) {
			return field.$invalid && field.$touched && field.$dirty;
		};

		$scope.options = { updateOn: 'default blur', debounce: {'default': 500, 'blur': 0} };

		window.x = $scope;
	}]);

	var INTEGER_REGEXP = /^\-?\d+$/;
	app.directive('integer', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				console.log('ctrl = ', ctrl);
				ctrl.$validators.integer = function(modelValue, viewValue) {
					console.log('validating integer');
					if (ctrl.$isEmpty(modelValue)) {
						// consider empty models to be valid
						return true;
					}

					if (INTEGER_REGEXP.test(viewValue)) {
						// it is valid
						console.log('integer valid ', viewValue);
						return true;
					}

					// it is invalid
					console.log('integer invalid ', viewValue);
					return false;
				};
			}
		};
	});

	app.directive('firstname', function() {
		return {
			require: 'ngModel',
			link: function(scope, elm, attrs, ctrl) {
				var firstnames = ['Juan', 'Yannis', 'Jean-Louis'];

				ctrl.$validators.firstname = function(modelValue, viewValue) {

					if (ctrl.$isEmpty(modelValue)) {
						return true;
					}

					if (firstnames.map(function(n) { return n.toLowerCase(); }).indexOf(viewValue.toLowerCase()) > -1) {
						// it is valid
						return true;
					}

					// it is invalid
					return false;
				};
			}
		};
	});

	app.directive('restrictKeyboard', function () {
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, element, attrs, ctrl) {
				var isIntermediary = function(value) {
					return value == '-';
				}
				var viewValue = '';
				scope.$watchGroup([function() { return viewValue; }, attrs.ngModel], function(newValue, oldValue) {
					console.log('oldValue ', oldValue);
					console.log('newValue ', newValue);
					if (newValue[1] == undefined && viewValue && (!isIntermediary(viewValue))) {
						var action = attrs.ngModel + ' = "' + oldValue[0] + '"';
						console.log('action ', action);
						scope.$eval(action);
						var v = oldValue[0] || '';

						ctrl.$setViewValue(v, 'abc');
						ctrl.$render();


					}
				});
				ctrl.$parsers.push(function(value) {
					console.log('about to parse', arguments);
					viewValue = value;
					console.log('return ', value);
					return value;
				});
			}
		};
	});
})();
