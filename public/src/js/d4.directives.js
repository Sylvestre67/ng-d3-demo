var d4directives = angular.module('d4.directives', []);

d4directives.directive('histogram',[function(){

	function drawHistogram(data,element){
		console.log(data);
	};

	return {
		restrict:'E',
		scope:{
			data:'=',
		},
		link: function(scope,element,attrs){

			scope.$watch('data',function(newData,oldData){
				(newData)
					? drawHistogram(newData,element)
					: false;
			})

		}
	}

}]);