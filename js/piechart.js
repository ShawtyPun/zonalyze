   jQuery(document).ready(function () {

    	window.onload = function () {
			var chart = new CanvasJS.Chart("chartContainer",
			{
				theme: "theme2",
				title:{
					text: "Feeling"
				},		

				// add data
		
				data: [
					{       
					type: "pie",
					showInLegend: true,
					toolTipContent: "{y} #percent %",
					yValueFormatString: "#,##0 Person,",
					legendText: "{indexLabel}",
					dataPoints: [
						{  y: 34, indexLabel: "emo1" },
						{  y: 43, indexLabel: "emo2" },
						{  y: 234, indexLabel: "emo3" },
						{  y: 12, indexLabel: "emo4"},
						{  y: 23, indexLabel: "emo5" },
				]
			}
		]
	});

	chart.render();
}

    });
