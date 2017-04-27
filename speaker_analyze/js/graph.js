(function ($) {
    'use strict';

    jQuery(document).ready(function () {

    // Graph Data ##############################################
    var graphData = [{
            // Visits
            data: [ [6, 10], [7, 3], [8, 3], [9, 0], [10, 6] ], //[page,question]
            color: '#71c73e'
        }];

    // Lines Graph #############################################
    $.plot($('#graph-lines'), graphData, {
        series: {
            points: {
                show: true,
                radius: 5
            },
            lines: {
                show: true
            },
            shadowSize: 0
        },
        grid: {
            color: '#646464',
            borderColor: 'transparent',
            borderWidth: 20,
            hoverable: true
        },
        xaxis: {
            tickColor: 'transparent',
            tickDecimals: 0
        },
        yaxis: {
            tickSize: 0 //ความถี่จองแนวตั้ง
        }
    });

    // Tooltip ################################################# ชี้แล้วขึ้น
    function showTooltip(x, y, contents) {
        $('<div id="tooltip" style="z-index:999;">' + contents + '</div>').css({
            top: y - 16,
            left: x + 20
        }).appendTo('body').fadeIn();
    }

    var previousPoint = null;

    $('#graph-lines').bind('plothover', function (event, pos, item) {
        if (item) {
            if (previousPoint != item.dataIndex) {
                previousPoint = item.dataIndex;
                $('#tooltip').remove();
                var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, y + ' Question at Page ' + x);
            }
        } else {
            $('#tooltip').remove();
            previousPoint = null;
        }
    });

});
})(jQuery);