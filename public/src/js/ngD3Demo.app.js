angular.module('ngD3ChartsDemo',[
	'ng-d3-charts',
	'ngMaterial',

	'ui.router',

	'ngD3Demo.controllers',
	'ngD3Demo.directives',
	'd4.directives'
]).config(['$mdThemingProvider','$stateProvider','$urlRouterProvider', function($mdThemingProvider,$stateProvider,$urlRouterProvider) {

	// Routing
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/ng-views/home.html',
			controller: 'homeCtrl'
		})
		.state('categorical', {
			url: '/categorical/',
			templateUrl: '/ng-views/categorical.html',
			controller: 'categoricalCtrl'
		})
		.state('hierarchical', {
			url: '/hierarchical/',
			templateUrl: '/ng-views/hierarchical.html',
			controller: 'hierarchicalCtrl'
		})
		.state('relational', {
			url: '/relational/',
			templateUrl: '/ng-views/relational.html',
			controller: 'relationalCtrl'
		})
		.state('temporal', {
			url: '/temporal/',
			templateUrl: '/ng-views/temporal.html',
			controller: 'temporalCtrl'
		})
		.state('spatial', {
			url: '/spatial/',
			templateUrl: '/ng-views/spatial.html',
			controller: 'spatialCtrl'
		});

		$urlRouterProvider.otherwise('/');


	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
   		.accentPalette('blue')
		.warnPalette('red')
		.backgroundPalette('grey');
}]);