var ngD3DemoControllers = angular.module('ngD3Demo.controllers', []);

ngD3DemoControllers.controller('homeCtrl',['$scope','$q','chartConfig',function($scope,$q,chartConfig){

	$scope.getFakeData = function(){
			var setData = $q.defer();
			var setDataHbar = $q.defer();
			var setDatasetScat = $q.defer();

			setDataHbar.promise.then(function(response){
				$scope.fakeDatasetHBar= response;
			});

			setData.promise.then(function(response){
				$scope.fakeDataset = response;
			});

			setDatasetScat.promise.then(function(response){
				$scope.fakeDatasetScat = response;
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

			var scatter_marks = [];
			for (var i_s = 0; i_s < i_max*30 ; i_s++) {
				scatter_marks.push({
					x: Math.random() * Math.ceil(Math.random()*100),
					y: Math.random() * Math.ceil(Math.random()*10),
					cat:star_wars_characters[Math.floor(Math.random()*10)]
				});
				(i_s === i_max - 1) ? (setDatasetScat.resolve(scatter_marks)) : false;
			}

		};

		function timeout() {
			$scope.getFakeData();
			setTimeout(function () {
				$scope.getFakeData();
				timeout();
			}, 1500);
		}

		timeout();
		//$scope.getFakeData();

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

		$scope.scatterPlotConfig = new chartConfig({
			chartType:'scatterPlot',
			margin:{top: 30, right: 30, bottom: 30, left: 30},
			xAxis: {
				scale: 'd3.scale.linear()',
				showAxis: true,
				ticks:4,
			},
			yAxis: {
				scale: 'd3.scale.linear()',
				showAxis: true,
				barPadding:.5,
				barOuterPadding:.8,
			}
		});

}]);

ngD3DemoControllers.controller('categoricalCtrl',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

	$scope.getFakeData = function(){

		var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
			'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

		var setData = $q.defer();
		var setDataHbar = $q.defer();

		setDataHbar.promise.then(function(response){
			$scope.fakeDatasetHBar= response;
		});

		setData.promise.then(function(response){
			$scope.barCharteDataset = response;
		});

		var quant_quali_list = [];
		var i_max = Math.floor(Math.random()* (7 - 3) + 3);
		for (var i = 0; i < i_max ; i++) {
			quant_quali_list.push({x:star_wars_characters[i],y: Math.random() * Math.ceil(Math.random()*10000)});
			(i === i_max - 1) ? (setData.resolve(quant_quali_list)) : false;
		}

		var list_hbar = [];


		for (var i_h = 0; i_h < i_max ; i_h++) {
			list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
			(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
		}
	};

	function timeout() {
		$scope.getFakeData();
		setTimeout(function () {
			$scope.getFakeData();
			timeout();
		}, 1500);
	}

	timeout();

	$scope.BarChartConfig = new chartConfig({
			chartType:'barChartVertical',
			barColor:'d3.scale.category20()',
			margin:{top: 30, right: 30, bottom: 20, left: 30},
			xAxis: {
				showAxis: true,
				barPadding:.3,
				barOuterPadding:.5,
				ticks:2,
			},
			yAxis: {
				showAxis: true,
				innerTickSize:'full_width',
				ticks:5,
			}
		});



}]);

ngD3DemoControllers.controller('hierarchicalCtrl',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

	$scope.getFakeData = function(){
		var setData = $q.defer();
		var setDataHbar = $q.defer();

		setDataHbar.promise.then(function(response){
			$scope.fakeDatasetHBar= response;
		});

		setData.promise.then(function(response){
			$scope.barCharteDataset = response;
		});

		var quant_quali_list = [];
		var i_max = Math.floor(Math.random()*10);
		for (var i = 0; i < i_max ; i++) {
			quant_quali_list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
			(i === i_max - 1) ? (setData.resolve(quant_quali_list)) : false;
		}

		var list_hbar = [];
		var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
			'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

		for (var i_h = 0; i_h < i_max ; i_h++) {
			list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
			(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
		}
	};

	function timeout() {
		setTimeout(function () {
			$scope.getFakeData();
			//timeout();
		}, 500);
	}

	//timeout();
	$scope.getFakeData();

}]);

ngD3DemoControllers.controller('relationalCtrl',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

	$scope.getFakeData = function(){
		var setData = $q.defer();
		var setDataHbar = $q.defer();

		setDataHbar.promise.then(function(response){
			$scope.fakeDatasetHBar= response;
		});

		setData.promise.then(function(response){
			$scope.barCharteDataset = response;
		});

		var quant_quali_list = [];
		var i_max = Math.floor(Math.random()*10);
		for (var i = 0; i < i_max ; i++) {
			quant_quali_list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
			(i === i_max - 1) ? (setData.resolve(quant_quali_list)) : false;
		}

		var list_hbar = [];
		var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
			'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

		for (var i_h = 0; i_h < i_max ; i_h++) {
			list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
			(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
		}
	};

	function timeout() {
		setTimeout(function () {
			$scope.getFakeData();
			//timeout();
		}, 500);
	}

}]);

ngD3DemoControllers.controller('spatialCtrl',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

	$scope.getFakeData = function(){
		var setData = $q.defer();
		var setDataHbar = $q.defer();

		setDataHbar.promise.then(function(response){
			$scope.fakeDatasetHBar= response;
		});

		setData.promise.then(function(response){
			$scope.barCharteDataset = response;
		});

		var quant_quali_list = [];
		var i_max = Math.floor(Math.random()*10);
		for (var i = 0; i < i_max ; i++) {
			quant_quali_list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
			(i === i_max - 1) ? (setData.resolve(quant_quali_list)) : false;
		}

		var list_hbar = [];
		var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
			'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

		for (var i_h = 0; i_h < i_max ; i_h++) {
			list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
			(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
		}
	};

	function timeout() {
		setTimeout(function () {
			$scope.getFakeData();
			//timeout();
		}, 500);
	}

	//timeout();
	$scope.getFakeData();

}]);

ngD3DemoControllers.controller('temporalCtrl',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

	$scope.getFakeData = function(){
		var setData = $q.defer();
		var setDataHbar = $q.defer();

		setDataHbar.promise.then(function(response){
			$scope.fakeDatasetHBar= response;
		});

		setData.promise.then(function(response){
			$scope.barCharteDataset = response;
		});

		var quant_quali_list = [];
		var i_max = Math.floor(Math.random()*10);
		for (var i = 0; i < i_max ; i++) {
			quant_quali_list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
			(i === i_max - 1) ? (setData.resolve(quant_quali_list)) : false;
		}

		var list_hbar = [];
		var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
			'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

		for (var i_h = 0; i_h < i_max ; i_h++) {
			list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
			(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
		}
	};

	function timeout() {
		setTimeout(function () {
			$scope.getFakeData();
			//timeout();
		}, 500);
	}

	//timeout();
	$scope.getFakeData();

}]);

ngD3DemoControllers.controller('d4-training',['$scope','$q','$timeout','chartConfig',function($scope,$q,$timeout,chartConfig){

		$scope.getFakeData = function(){
			var setData = $q.defer();
			var setDataHbar = $q.defer();

			setDataHbar.promise.then(function(response){
				$scope.fakeDatasetHBar= response;
			});

			setData.promise.then(function(response){
				$scope.fakeDataset = response;
				console.info($scope.fakeDataset);
			});

			var list = [];
			var i_max = Math.floor(Math.random()*10);
			for (var i = 0; i < i_max ; i++) {
				list.push({x:i,y: Math.random() * Math.ceil(Math.random()*10000)});
				(i === i_max - 1) ? (setData.resolve(list)) : false;
			}

			var list_hbar = [];
			var star_wars_characters = ['Han Solo','Princess Leia','Chewbacca','Yoda',
				'C-3PO','Darth Maul','Luke Skywalker','Obi-Wan Kenobi','R2-D2','Count Doku'];

			for (var i_h = 0; i_h < i_max ; i_h++) {
				 list_hbar.push({x: Math.random() * Math.ceil(Math.random()*10000),y:star_wars_characters[i_h]});
				(i_h === i_max - 1) ? (setDataHbar.resolve(list_hbar)) : false;
			}

		};

		function timeout() {
			setTimeout(function () {
				$scope.getFakeData();
				//timeout();
			}, 500);
		}

		//timeout();
		$scope.getFakeData();

}]);