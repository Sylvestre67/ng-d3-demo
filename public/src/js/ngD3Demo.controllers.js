var ngD3DemoControllers = angular.module('ngD3Demo.controllers', []);

ngD3DemoControllers.controller('index',['$scope','$q','chartConfig',function($scope,$q,chartConfig){

	$scope.getFakeData = function(){
			var setData = $q.defer();
			var setDataHbar = $q.defer();

			setDataHbar.promise.then(function(response){
				$scope.fakeDatasetHBar= response;
			});

			setData.promise.then(function(response){
				$scope.fakeDataset = response;
			});

			var list = [];
			var i_max = Math.floor(Math.random()*10);
			for (var i = 0; i < i_max ; i++) {
				list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
				(i === i_max - 1) ? (setData.resolve(list)) : false;
			}

			var list_hbar = [];
			var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda','C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

			for (var i_h = 0; i_h < i_max ; i_h++) {
				 list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
				(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
			}

		};

		function timeout() {
			setTimeout(function () {
				$scope.getFakeData();
				timeout();
			}, 1500);
		}

		timeout();

		$scope.lineChartConfig = new chartConfig({
			chartType:'lineChart',
			xAxis: {
				showAxis: true,
			},
			yAxis: {
				showAxis: true,
			}
		});

		$scope.verticalBarChartConfig = new chartConfig({
			chartType:'barChartVertical',
			xAxis: {
				showAxis: true,
				barPadding:.3,
				barOuterPadding:.5,
				ticks:2,
			},
			yAxis: {
				showAxis: true,
			}
		});

		$scope.horizontalBarChartConfig = new chartConfig({
			chartType:'barChartHorizontal',
			margin:{top: 30, right: 30, bottom: 30, left: 110},
			xAxis: {
				showAxis: true,
				ticks:4,
			},
			yAxis: {
				showAxis: true,
				barPadding:.5,
				barOuterPadding:.8,
			}
		});

}]);