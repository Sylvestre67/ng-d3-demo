angular.module('ngD3ChartsDemo',[
	'ng-d3-charts',
	'ngMaterial',
	'ngD3Demo.controllers',
	'ngD3Demo.directives',
	'd4.directives'
]).config(['$mdThemingProvider', function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue')
   		.accentPalette('blue-grey')
		.warnPalette('red');
		//.backgroundPalette('red');
}]);