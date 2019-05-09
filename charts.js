$(function(){

   male_female_rates();


});


function male_female_rates(){Highcharts.chart('container', {

    title: {
        text: 'A comparison of Male and Female suicide rates'
    },

    subtitle: {
        text: 'Source: www.worldometers.info'
    },

    yAxis: [{
        title: {
            text: 'Suicide Rates per 100k Population',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }
    },{
        title: {
            text: 'Total Population'
        },
        opposite:true
    }],
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },
    xAxis:{
        categories: ['2000', '2001', '2002', '2003', '2004', '2005',
            '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
    },
    

    series: [ {
        name: 'Population',
        type: 'column',
        yAxis:1,
        data: [ 6145006989,6223412158,6302149639,6381408987,6461370865,
                6542159383,6623847913,6706418593,6789771253,6873741054,
                6958169159,7043008586,7128176935,7213426452,7298453033,
                7383008820,7466964280	],

    },{
        name: 'Female',
        yAxis:0,
        data: [5.783003876, 5.491931818, 5.606104651, 5.302383721, 5.054126984
            , 5.007599206, 4.769058824 , 4.994011628, 4.979411765
            , 4.5282397, 4.406117424, 4.344321705 , 4.521625514
            , 4.366208333, 4.458803419, 4.653467742, 4.818625 ],

    },{
        name: 'Male',
        type: 'spline',
        yAxis:0,
        data: [22.31962745,21.62142857,21.96699612,
            21.10765504 , 19.9097619,19.12928571,  19.08586275, 19.05666667
            , 18.83596078,18.27333333, 18.02568182,17.68637597
            , 18.3218107,17.84970833,17.56412393,17.53467742,22.02375
        ]
    },
    {
        type: 'pie',
        name: 'Total consumption',
        data: [{
            name: 'Jane',
            y: 13,
            color: Highcharts.getOptions().colors[0] // Jane's color
        }, {
            name: 'John',
            y: 23,
            color: Highcharts.getOptions().colors[1] // John's color
        }, {
            name: 'Joe',
            y: 19,
            color: Highcharts.getOptions().colors[2] // Joe's color
        }],
        center: [100, 0],
        size: 100,
        showInLegend: false,
        dataLabels: {
            enabled: true
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});}




