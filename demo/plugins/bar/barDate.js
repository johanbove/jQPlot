/*jslint browser: true, plusplus: true, nomen: true */
/*global $, console, Stapes, insertionQ, emc2, Mustache */

$(function () {

    "use strict";
    
    var plot1,
        plot2,
        serie1 = [['2008-09-01', 4], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', null]],
        serie2 = [['2008-09-01', 2], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', null]],
        serie3 = [['2008-09-01', 2], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', null]],
        serie4 = [['2008-09-01', 2], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', null]],
        serie5 = [['2008-09-01', null], ['2008-09-02', 10], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', null]],
        serie6 = [['2008-09-01', null], ['2008-09-02', null], ['2008-09-03', 1], ['2008-09-04', null], ['2008-09-05', null]],
        serie7 = [['2008-09-01', null], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', 4], ['2008-09-05', null]],
        serie8 = [['2008-09-01', null], ['2008-09-02', null], ['2008-09-03', null], ['2008-09-04', null], ['2008-09-05', 1]];

    $.jqplot.config.enablePlugins = true;

    plot1 = $.jqplot('chart1', [serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8], {

        title: 'A super chart',

        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer
            }
        },

        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                varyBarColor: true,
                barMargin: 30
            }
            /*pointLabels: {show: true, darkColor:"black",brightColor:"orange"}*/
        },

        legend: {
            show: true,
            location: 'ne',
            placement: 'inside'
        },

        series: [{label: 'Lbl 1'}, {label: 'Lbl 2', fillGradient: true, fillGradientColor: "rgb(254,134,97)", fillGradientDelay: 0.7}, {label: 'Lbl 3'}, {label: 'Lbl 4'}, {label: 'Lbl 5'}, {label: 'Lbl 6'}, {label: 'Lbl 7'}, {label: 'Lbl 8'}],
        canvasOverlay: {
            show: true,
            bellowSeries: true,
            objects: [
                {rectangle: {
                    name: 'barney',
                    xmin: [0],
                    xmax: [2.5],
                    ymin: [0],
                    ymax: [2000],
                    xOffset: 0,
                    color: 'rgba(122, 122, 122,0.5)',
                    shadow: false,
                    showTooltip: true,
                    tooltipLocation: 'ne',
                    tooltipFormatString: '<b><i><span style="color:red;">Passe</span></i></b> %.2f'
                }}]
        },
        highlighter: {
            show: true,
            sizeAdjust: 10,
            tooltipLocation: 'n',
            tooltipAxes: 'y',
            showTooltip: true,
            tooltipFormatString: '<b><i><span style="color:red;">hello</span></i></b> %.2f'
        },
        cursor: {
            show: true
        },
        stackSeries: true
    });

    plot1.replot();

    plot2 = $.jqplot('chart2', [serie1, serie2, serie3, serie4, serie5, serie6, serie7, serie8], {

        title: 'A super chart',

        axes: {
            xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer
            }
        },

        seriesDefaults: {
            renderer: $.jqplot.BarRenderer,
            rendererOptions: {
                varyBarColor: true,
                onTick: true
            }
            /*pointLabels: {show: true, darkColor:"black",brightColor:"orange"}*/
        },

        legend: {
            show: true,
            location: 'ne',
            placement: 'inside'
        },

        series: [{label: 'Lbl 1'}, {label: 'Lbl 2', fillGradient: true, fillGradientColor: "rgb(254,134,97)", fillGradientDelay: 0.7}, {label: 'Lbl 3'}, {label: 'Lbl 4'}, {label: 'Lbl 5'}, {label: 'Lbl 6'}, {label: 'Lbl 7'}, {label: 'Lbl 8'}],
        canvasOverlay: {
            show: true,
            bellowSeries: true,
            objects: [
                {rectangle: {
                    name: 'barney',
                    xmin: [0],
                    xmax: [2.5],
                    ymin: [0],
                    ymax: [2000],
                    xOffset: 0,
                    color: 'rgba(122, 122, 122,0.5)',
                    shadow: false,
                    showTooltip: true,
                    tooltipLocation: 'ne',
                    tooltipFormatString: '<b><i><span style="color:red;">Passe</span></i></b> %.2f'
                }}]
        },
        highlighter: {
            show: true,
            sizeAdjust: 10,
            tooltipLocation: 'n',
            tooltipAxes: 'y',
            showTooltip: true,
            tooltipFormatString: '<b><i><span style="color:red;">hello</span></i></b> %.2f'
        },
        cursor: {
            show: true
        },
        stackSeries: true
    });

    plot2.replot();

});