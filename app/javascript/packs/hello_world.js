d3.select('.helloworld')
	.append('h1')
		.text('hello world -- drawing a bar chart')
		.style('text-align',"center");

var dataset1 = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500;
var svgHeight = 300;
var barPadding = 5;

var barWidth = (svgWidth / dataset1.length);

var svg = d3.select('.helloworld')
	.append('svg')
		.attr('width', svgWidth)
		.attr('height', svgHeight)
		.attr('class','bar-chart')
		.style('background','gray').style('display','block').style('margin','auto');


var barChart = svg.selectAll('rect')
	.data(dataset1)
	.enter()
		.append('rect')
		.attr('y', function(d){
			return svgHeight - d
		})
		.attr('height', function(d){
			return d
		})
		.attr('width', barWidth - barPadding)
		.attr('transform', function(d,i){
			var translate = [barWidth * i, 0];
			return "translate(" + translate + ")";
		});


d3.select('.helloworld').append('hr').style('margin',"44 0 44 0")