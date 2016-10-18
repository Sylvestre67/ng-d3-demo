var ngD3DemoDirectives = angular.module('ngD3Demo.directives', []);

ngD3DemoDirectives.directive('sideNavToggle', ['$timeout','$mdSidenav','$rootScope','$document', function($timeout,$mdSidenav,$rootScope,$document) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {

			/*
			* See; https://material.angularjs.org/latest/demo/sidenav
			* */

			scope.toggleSideNavMenu = buildDelayedToggler('sideNavigationMenu');

			/**
			 * Supplies a function that will continue to operate until the
			 * time is up.
			 */
			function debounce(func, wait, context) {
				var timer;
				return function debounced() {
					var context = scope,
						args = Array.prototype.slice.call(arguments);
						$timeout.cancel(timer);
						timer = $timeout(function() {
						  timer = undefined;
						  func.apply(context, args);
						}, wait || 10);
			 	};
			}

			function buildDelayedToggler(navID) {
				return debounce(function() {
					// Component lookup should always be available since we are not using `ng-if`
					$mdSidenav(navID)
						.toggle()
						.then(function () { });
					}, 200);
			}

			$rootScope.$on('$stateChangeSuccess',
				function(event, toState, toParams, fromState, fromParams){
					($mdSidenav('sideNavigationMenu').isOpen())
						? scope.toggleSideNavMenu()
						: false;
				}
			);

			/*$document.on('click',function(){
				($mdSidenav('sideNavigationMenu').isOpen())
					? scope.toggleSideNavMenu()
					: false;
			})*/

        }
    }
}]);