$(function(){
   lowest_line();
 });

 Highcharts.chart('lowest', {
    chart: {
        type: 'bar',
        height: "150%"
    },
    title: {
        text: '10 Lowest Suicide Rates per 100k population'
    },
 
    xAxis: {
        categories: [
            'Greenland',
            'Jamaica',
            'Antigua',
            'South Africa',
            'Bahamas',
            'Kuwait',
            'United Arab Emirates',
            'Maldives',
            'Qatar',
            'Bahrain',
        ]
    },
    yAxis: {
        title: {
            text: 'GDP (Billion USD)'
        },
        type: 'logarithmic'
    },    
    plotOptions:{
        bar: {
            grouping: false,
            shadow: false
        }
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
            name: 'GDP ',
            color: 'rgba(248,161,63,1)',
            data: [2.706, 14.77 , 1.532, 349.4, 12.16,120.1,382.6,4.597,167.6,35.31],
            pointPadding: 0,
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: '{point.y} Billion USD'
            },
    
        },{
            name: 'Suicide Rates ',
            color: 'rgba(186,60,61,.9)',
            data: [0.1, 0.5, 0.6, 1, 1.2,1.2,1.3,1.4,1.8,1.9],
            pointPadding: 0.2,
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: '{point.y} per 100k population'
            },
        },
    ]
});

Highcharts.chart('highest', {
    chart: {
        type: 'bar',
        height: "150%"
    },
    title: {
        text: 'Highest Suicide Rates per 100k population'
    },

    xAxis: {
        categories: [
            'Lithuania',
            'Russia',
            'Hungary',
            'Belarus',
            'Kazakhstan',
            'Lativa',
            'Slovenia',
            'Estonia',
            'Ukraine',
            'Austria',
            
        ]
    },
    yAxis: {
        title: {
            text: 'GDP (Billion USD)'
        },
        type: 'logarithmic'
    },
    plotOptions:{
        bar: {
            grouping: false,
            shadow: false
        }
    },
    series: [{
        name: 'GDP ',
        color: 'rgba(248,161,63,1)',
        data: [47.17, 1578, 139.1, 54.44, 159.4,30.26,48.77,25.92,112.2 ,416.6],
        pointPadding: 0,
        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: '{point.y} Billion USD'
        },

    },{
        name: 'Suicide Rates ',
        color: 'rgba(186,60,61,.9)',
        data: [40.4, 34.9, 32.8, 31.1, 30.5,29.3,27.8,27.3,26.6,23.8],
        pointPadding: 0.2,
        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: '{point.y} per 100k population'
        },
    },]

});

function lowest_line(){
    Highcharts.chart('middle', {
        chart: {
            type: 'line',
            height: "70%"
        },
        title: {
            text: 'Lowest 5 Suicide Rates Against National GDP'
        },

        yAxis: {
            title: {
                text: 'GDP in US Dollars'
            },
            type: 'logarithmic'
        },
        xAxis: {
            title: {
                text: 'Suicides per 100k population'
            },
        },
        plotOptions: {
            line: {
                tooltip: {
                    crosshairs: [true,true],
                    pointFormat: '{point.y} Billion USD<br />{point.x} suicides per 100k '

                }
            }
        },
        series: [{
            name: 'Lowest Rates',
            data: [{
                name: "Greenland",
                x: 0.1,
                y: 2.706
            },{
                name: "Jamaica",
                x: 0.5,
                y: 14.77
            },{
                name: "Antigua",
                x: 0.6,
                y: 1.532
            },{
                name: "South Africa",
                x: 1.0,
                y: 349.4
            },{
                name: "Bahamas",
                x: 1.2,
                y: 12.16
            },{
                name: "Kuwait",
                x: 1.25,
                y: 12.16
            },{
                name: "United Arab Emirates",
                x: 1.3,
                y: 382.6
            },{
                name: "Maldives",
                x: 1.4,
                y: 4.597
            },{
                name: "Qatar",
                x: 1.8,
                y: 167.6
            },{
                name: "Bahrain",
                x: 1.9,
                y: 35.31
            }]
        },]
    
    });
}  


function highest_line(){
    Highcharts.chart('middle', {
        chart: {
            type: 'line',
            height: "70%"
        },
        title: {
            text: 'Highest 5 Suicide Rates Against National GDP'
        },

        yAxis: {
            title: {
                text: 'GDP in US Dollars'
            },
            type: 'logarithmic'
        },
        xAxis: {
            title: {
                text: 'Rates per 100k population'
            },
        },
        plotOptions: {
            line: {
                tooltip: {
                    crosshairs: [true,true],
                    pointFormat: '{point.y} Billion USD<br />{point.x} suicides per 100k '
                }
            }
        },
            
            
        series: [{
            name: 'Highest Rates',
            data: [{
                name: "Lithuania",
                x: 40.0,
                y: 47.17
            },{
                name: "Russia",
                x: 34.9,
                y: 1578
            },{
                name: "Hungary",
                x: 32.8,
                y: 139.1
            },{
                name: "Belarus",
                x: 31.1,
                y: 54.44
            },{
                name: "Kazakhstan",
                x: 30.5,
                y: 159.4
            },{
                name: "Lativa",
                x: 29.3,
                y: 30.26
            },{
                name: "Slovenia",
                x: 27.8,
                y: 48.77
            },{
                name: "Estonia",
                x: 27.3,
                y: 25.92
            },{
                name: "Ukraine",
                x: 26.6,
                y: 112.2
            },{
                name: "Austria",
                x: 23.8,
                y: 416.6
            }]
            ,},]
    
    });
}

