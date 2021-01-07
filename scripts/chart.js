google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

if (window.innerWidth > 600) {
	WIDTH = 600;
} else {
	WIDTH = window.innerWidth - 50;
}

function drawStuff() {
	var data = new google.visualization.arrayToDataTable([
		['', 'Percentage'],
		["Python", 87],
		["HTML5 + CSS3", 86],
		["JavaScript (jQuery)", 73],
		["PHP", 64],
		["Java", 47],
		['C++', 45],
		["C#", 17]
	]);

	var options = {
		/* title: 'Chess opening moves', */
		width: WIDTH,
		legend: { position: 'none' },
		backgroungColor: {
			fill: '#f3fafb'
		},
		bars: 'horizontal', // Required for Material Bar Charts.
		
		axes: {
			x: {
				0: { side: 'top', label: 'Уровень владения'} // Top x-axis.
			}
		},
		bar: { groupWidth: "100%" }
	};

	var chart = new google.charts.Bar(document.getElementById('chart'));
	chart.draw(data, options);
};