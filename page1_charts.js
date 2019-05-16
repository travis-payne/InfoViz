$(function(){

   drilldown();



});




function side_by_side(){Highcharts.chart('pie-comparison', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        borderColor: '#EBBA95',
        borderWidth: 2,
        height:"50%"
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
        height: "30%"
        
    },
    title: {
        text: 'Numbers by Gender and Age',
        align: 'center',
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