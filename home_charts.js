$(function(){

   male_female_rates();
   drilldown();



});


function male_female_rates(){Highcharts.chart('Initial-bar', {

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



function side_by_side(){Highcharts.chart('pie-comparison', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        borderColor: '#EBBA95',
        borderWidth: 2,
    },
    
    title: {
        text: 'Number of Suicides by Gender and Age'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                },
                connectorColor: 'silver'
            }
        }
    },
    labels: {
        items: [{
            html: '<p style="font-size:18px;font-weight:bold;">Male</p>',
            style: {
                left: '300px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        },
        {
            html: '<p style="font-size:18px;font-weight:bold;">Female</p>',
            style: {
                left: '725px',
                top: '18px',
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
            }
        }]
    },
    series: [{
        name: 'Male',
        type: 'pie',
        data: [
            { name: '35-54', y: 1945908 },
            { name: '55-74', y: 1228407 },
            { name: '25-34', y: 915089 },
            { name: '15-24', y: 633105 },
            { name: '75+', y: 431134 },
            { name: '5-14', y: 35267 },
        ],
        center: ['25%','50%'],
        size:'80%',

    },
    {
        name: 'Female',
        type: 'pie',
        data: [
            { name: '35-54', y: 506233 },
            { name: '55-74', y: 430036 },
            { name: '25-34', y: 208823 },
            { name: '15-24', y: 175437 },
            { name: '75+', y: 221984 },
            { name: '5-14', y: 16997 }
        ],
        center: ['75%','50%'],
        size:'80%',
        showInLegend: true
    }]
});

}





function drilldown(){Highcharts.chart('pie-comparison', {

    chart: {
        type: 'pie',
        styleMode:true,
        borderColor: '#EBBA95',
        borderWidth: 1,
        
    },
    title: {
        text: 'Numbers by Gender and Age',
        align: 'center',
    },

    subtitle: {
        text: 'Source: www.worldometers.info',
    },
    plotOptions: {
        series:{
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.percentage:.1f} %',
            }

        },
        pie: {
            size: '120%',
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
    },

    series: [ 
    {

        name: "Genders",
        allowPointSelect: true,
        colorByPoint: true,
        data:[
            {   
                name: 'Male',
                y: 5188910,
                drilldown: 'Male'
            },
            {   
                name: 'Female',
                y: 1559510,
                drilldown: 'Female'
            },
        ]
    },
  ],

  drilldown:{
        series: [
            {
                allowPointSelect: true,
                name: "Male",
                id: "Male",
                data: [
                        ["35-54",1945908],
                        ["55-74",1228407],
                        ["25-34",915089],
                        ["15-24",633105],
                        ["75+",431134],
                        ["5-14",35267],  
                ]
            },
            {
                allowPointSelect: true,
                name: "Female",
                id: "Female",
                data: [
                        ["35-54",506233],
                        ["55-74",430036],
                        ["25-34",208823],
                        ["15-24",175437],
                        ["75+",221984],
                        ["5-14",16997],  
                ]
            }
        ]

  }


});}