var d4directives = angular.module('d4.directives', []);

d4directives.directive('histogram',['$timeout',function($timeout){

	function drawHistogram(element,attrs){

		var data = d3.range(1000).map(d3.randomBates(10))
		var formatCount = d3.format(",.0f");

		var margin = {top:10,bottom:50,left:10,right:10},
			full_width = attrs.$$element[0].childNodes[1].clientWidth,
			full_height= attrs.$$element[0].childNodes[1].offsetHeight,
			width = full_width - margin.left - margin.right,
			height = full_height - margin.top - margin.bottom;

		var x = d3.scaleLinear()
    		.rangeRound([0, width]);

		var bins = d3.histogram()
			.domain(x.domain())
			.thresholds(x.ticks(20))
			(data);

		var y = d3.scaleLinear()
			.domain([0, d3.max(bins, function(d) { return d.length; })])
			.range([height, 0]);

		var svg = d3.select(element[0])
			.select('.chart-wrapper')
				.append('svg')
				.attr('width',full_width)
				.attr('height',full_height)
					.append('g')
					.attr('transform','translate(' + margin.left + ',' + margin.top + ')');

		svg.append('circle').attr('r',5).attr('fill','blue');

		var bar = svg.selectAll(".bar")
			.data(bins)
		  .enter().append("g")
			.attr("class", "bar")
			.attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; });

			bar.append("rect")
				.attr("x", 1)
				.attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
				.attr("height", function(d) { return height - y(d.length); });

			bar.append("text")
				.attr("dy", ".75em")
				.attr("y", 6)
				.attr("x", (x(bins[0].x1) - x(bins[0].x0)) / 2)
				.attr("text-anchor", "middle")
				.text(function(d) { return formatCount(d.length); });

			svg.append("g")
				.attr("class", "axis x")
				.attr("transform", "translate(0," + height + ")")
				.call(d3.axisBottom(x));
	};

	return {
		restrict:'E',
		template:' <div class="chart-wrapper"></div>',
		scope:{
			data:'=',
		},
		link: function(scope,element,attrs){
			scope.$watch('data',function(newData,oldData){
				(newData)
					? $timeout(drawHistogram(element,attrs))
					: false;
			})
		}
	}

}]);