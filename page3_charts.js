$(function(){
   lowest_line();
 });

 Highcharts.chart('lowest', {
    chart: {
        type: 'bar',
        height: "150%"
    },
    title: {
        text: 'Lowest Suicide Rates per 100k population'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        categories: [
            'Greenland',
            'Jamaica',
            'Antigua',
            'South Africa',
            'Bahamas',
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
            data: [2.706, 14.77 , 1.532, 349.4, 12.16],
            pointPadding: 0,
            tooltip: {
                headerFormat: '<b>{series.name}</b><br />',
                pointFormat: '{point.y} Billion USD'
            },
    
        },{
            name: 'Suicide Rates ',
            color: 'rgba(186,60,61,.9)',
            data: [0.1, 0.5, 0.6, 1, 1.2],
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
        text: 'Lowest Suicide Rates per 100k population'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        categories: [
            'Lithuania',
            'Russia',
            'Hungary',
            'Belarus',
            'Kazakhstan',
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
        data: [47.17, 1578, 139.1, 54.44, 159.4],
        pointPadding: 0,
        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: '{point.y} Billion USD'
        },

    },{
        name: 'Suicide Rates ',
        color: 'rgba(186,60,61,.9)',
        data: [40.4, 34.9, 32.8, 31.1, 30.5],
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
        subtitle: {
            text: 'Source: WorldClimate.com'
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
        subtitle: {
            text: 'Source: WorldClimate.com'
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
            }]
            ,},]
    
    });
}
