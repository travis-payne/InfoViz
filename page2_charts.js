$(function(){
    countries_by_bubble();
 });


 
 function countries_by_bubble(){
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '40%'
        },
        title: {
            text: 'Suicides per 100k Population by Country'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value:.1f} suicides per 100k population',
            
        },
        plotOptions: {
            packedbubble: {
                minSize: '1',
                maxSize: '450',
                zMin: 0,
                zMax: 1000,
                packedbubble: {
                    layoutAlgorithm: {
                        gravitationalConstant:0.05,
                        splitSeries: true,
                        useSimulation: true
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 20
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: get_country_data()
    });
    
    

 };

 function split_by_continent(){
     Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '40%'
    },
    title: {
        text: 'Suicides per 100k Population by Country'
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value:.1f} suicides per 100k population',
        
    },
    plotOptions: {
        packedbubble: {
            minSize: '5',
            maxSize: '300',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: true,
                gravitationalConstant: 0.05,
                dragBetweenSeries: true,
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 20
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: get_country_data()
});


 };

 function map_view(){


    // Initiate the chart
    Highcharts.mapChart('container', {

        chart: {
            map: 'custom/world',
            height: "60%"
        },

        title: {
            text: 'Fixed tooltip with HTML'
        },

        legend: {
            title: {
                text: 'Suicide rates per 100k population',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                }
            }
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        tooltip: {
            backgroundColor: 'none',
            borderWidth: 0,
            shadow: false,
            useHTML: true,
            padding: 0,
            pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                '</span></span> {point.name}<br>' +
                '<span style="font-size:30px">{point.value} per 100k</span>',
            positioner: function () {
                return { x: 0, y: 350 };
            }
        },

        colorAxis: {
            min: 1,
            max: 60,
            type: 'logarithmic'
        },

        series: [{
            data: get_map_data(),
            joinBy: ['iso-a3', 'code3'],
            name: 'Suicide Rate',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
    });


 };
 
function get_country_data(){
    var data =[ {
        name: "Europe",
        data:[{
            "name": "Armenia",
            "value": 3.275872483,
        },
        {
            
            "name": "Albania",
            "value": 3.50288,
            
        },
        {
            
            "name": "Austria",
            "value": 23.7597644,
            
        },
        {
            
            "name": "Belgium",
            "value": 21.23790323,
            
        },
        {
            
            "name": "Bulgaria",
            "value": 19.48911111,
            
        },
        {
            
            "name": "Bosnia and Herzegovina",
            "value": 4.617083333,
            
        },
        {
            
            "name": "Belarus",
            "value": 31.0759127,
            
        },
        {
            
            "name": "Switzerland",
            "value": 19.0240873,
            
        },
        {
            
            "name": "Cyprus",
            "value": 21.22204861,
            
        },
        {
            
            "name": "Czech Republic",
            "value": 18.48754658,
            
        },
        {
            
            "name": "Germany",
            "value": 15.55990385,
            
        },
        {
            
            "name": "Denmark",
            "value": 14.09715909,
            
        },
        {
            
            "name": "Spain",
            "value": 9.432956989,
            
        },
        {
            
            "name": "Estonia",
            "value": 27.27690476,
            
        },
        {
            
            "name": "Finland",
            "value": 22.77043103,
            
        },
        {
            
            "name": "France",
            "value": 21.67569444,
            
        },
        {
            
            "name": "United Kingdom",
            "value": 7.502473118,
            
        },
        {
            
            "name": "Georgia",
            "value": 4.228712121,
            
        },
        {
            
            "name": "Greece",
            "value": 4.06483871,
            
        },
        {
            
            "name": "Croatia",
            "value": 22.83526718,
            
        },
        {
            
            "name": "Hungary",
            "value": 32.76151613,
            
        },
        {
            
            "name": "Ireland",
            "value": 10.78258333,
            
        },
        {
            
            "name": "Iceland",
            "value": 12.80036649,
            
        },
        {
            
            "name": "Israel",
            "value": 8.951532258,
            
        },
        {
            
            "name": "Italy",
            "value": 8.518467742,
            
        },
        {
            
            "name": "Greenland",
            "value": 0.14,
            
        },
        {
            
            "name": "Lithuania",
            "value": 40.41557252,
            
        },
        {
            
            "name": "Luxembourg",
            "value": 16.54989247,
            
        },
        {
            
            "name": "Latvia",
            "value": 29.2593254,
            
        },
        {
            
            "name": "Moldova",
            "value": 15.25,
            
        },
        {
            
            "name": "Malta",
            "value": 5.032284946,
            
        },
        {
            
            "name": "Montenegro",
            "value": 9.95025,
            
        },
        {
            
            "name": "Netherlands",
            "value": 10.64534031,
            
        },
        {
            
            "name": "Norway",
            "value": 12.941,
            
        },
        {
            
            "name": "Poland",
            "value": 15.26951389,
            
        },
        {
            
            "name": "Portugal",
            "value": 11.33753086,
            
        },
        {
            
            "name": "Romania",
            "value": 12.48967066,
            
        },
        {
            
            "name": "Russian Federation",
            "value": 34.89237654,
            
        },
        {
            
            "name": "Serbia",
            "value": 22.16412037,
            
        },
        {
            
            "name": "Slovenia",
            "value": 27.82785714,
            
        },
        {
            
            "name": "Sweden",
            "value": 14.65843575,
            
        },
        {
            
            "name": "Turkey",
            "value": 2.371071429,
            
        },
        {
            
            "name": "Ukraine",
            "value": 26.58232143,
            
        },
 
        {
            
            "name": "San Marino",
            "value": 4.045,
            
        },
    ]
    },{
        name: "Oceania",
        data: [
            {
                
                "name": "Australia",
                "value": 12.99280556,
                
            },
            {
                
                "name": "Fiji",
                "value": 5.105,
                
            },
            {
                
                "name": "Kiribati",
                "value": 6.655378788,
                
            },
            {
                
                "name": "New Zealand",
                "value": 14.39172414,
                
            },
        ]
        
    },{
        name: "Asia",
        data: [
            {
                
                "name": "United Arab Emirates",
                "value": 1.317916667,
                
            },
    
            {
                
                "name": "Qatar",
                "value": 1.787359551,
                
            },
            {
                
                "name": "Maldives",
                "value": 1.367333333,
                
            },
            {
                
                "name": "Azerbaijan",
                "value": 1.85541666,
                
            },
            {
                
                "name": "Japan",
                "value": 21.57319892,
                
            },
            {
                
                "name": "Kazakhstan",
                "value": 30.51128205,
                
            },
            {
                
                "name": "Bangladesh",
                "value": 6.5,
                
            },
            {
                
                "name": "India",
                "value": 17.25,
                
            },
            {
                
                "name": "China",
                "value": 10.05,
                
            },
            {
                
                "name": "Korea, Rep.",
                "value": 20.975,
                
            },
            {
                
                "name": "Kuwait",
                "value": 1.186433333,
                
            },
            {
                
                "name": "Sri Lanka",
                "value": 19.55,
                
            },
            {
                
                "name": "Macao SAR, China",
                "value": 14.31166667,
                
            },
            {
                
                "name": "Philippines",
                "value": 2.421277778,
                
            },
            {
                
                "name": "Mongolia",
                "value": 18.439,
                
            },
            {
                
                "name": "Thailand",
                "value": 7.073862275,
                
            },
            {
                
                "name": "Turkmenistan",
                "value": 8.605545977,
                
            },
            {
                
                "name": "Bahrain",
                "value": 1.854126984,
                
            },
            {
                
                "name": "Uzbekistan",
                "value": 8.099128788,
                
            },
        ]
        
    },{
        name: "South America",
        data: [
            {
                
                "name": "Argentina",
                "value": 10.46932796,
                
            },
            {
                
                "name": "Suriname",
                "value": 21.31642857,
                
            },
            {
                
                "name": "Paraguay",
                "value": 4.217191358,
                
            },
            {
                
                "name": "Guyana",
                "value": 22.1864,
                
            },
            {
                
                "name": "Brazil",
                "value": 5.846021505,
                
            },
            {
                
                "name": "Chile",
                "value": 10.54204301,
                
            },
            {
                
                "name": "Colombia",
                "value": 5.401586022,
                
            },
            {
                
                "name": "Ecuador",
                "value": 6.304327957,
                
            },
            {
                "name": "Aruba",
                "value": 9.5031,
        
            },
            {
                
                "name": "Venezuela, RB",
                "value": 5.325,
                
            },
            {
                
                "name": "Peru",
                "value": 5.275,
                
            },
            {
                
                "name": "Bolivia",
                "value": 14.925,
                
            },       {
            
                "name": "Uruguay",
                "value": 19.46119048,
                
            },
        
        ]
        
    },{
        name: "North America",
        data: [
            {
                
                "name": "Bahamas",
                "value": 1.247391304,
                
            },
            {
                
                "name": "El Salvador",
                "value": 10.54145833,
                
            },
            {
                
                "name": "Mexico",
                "value": 4.7075,
                
            },
            {
                
                "name": "Nicaragua",
                "value": 6.566944444,
                
            },
            {
                
                "name": "Panama",
                "value": 5.813533333,
                
            },
            {
                
                "name": "Puerto Rico",
                "value": 10.18623656,
                
            },
            {
                
                "name": "Barbados",
                "value": 2.970433333,
                
            },
            {
                
                "name": "Canada",
                "value": 12.46758621,
                
            },
            {
                
                "name": "Cuba",
                "value": 21.22204861,
                
            },
            {
                
                "name": "Trinidad and Tobago",
                "value": 13.82564815,
                
            },
            {
                
                "name": "United States",
                "value": 13.81981183,
                
            },
    
            {
                
                "name": "Antigua and Barbuda",
                "value": 0.552901235,
                
            },
            {
                
                "name": "Costa Rica",
                "value": 7.093666667,
                
            },
            {
                
                "name": "Guatemala",
                "value": 3.185277778,
                
            },
            {
                
                "name": "Jamaica",
                "value": 0.521764706,
                
            },
            {
                
                "name": "Belize",
                "value": 6.230625,
                
            },

        ]
        
    },{
        name: "Africa",
        data: [ 
            {
        
            "name": "South Africa",
            "value": 0.964541667,
            
        },
        {
            
            "name": "Mauritius",
            "value": 11.6873822,
            
        },
        {
            
            "name": "Cabo Verde",
            "value": 11.15333333,
            
        },
        {
        
            "name": "Seychelles",
            "value": 7.480092593,
            
        },
        {
            
            "name": "Algeria",
            "value": 3.725,
            
        },
        { 
            
            "name": "Angola",
            "value": 10.625,
            
        },
        {
            
            "name": "Benin",
            "value": 15.625,
            
        },
        {
            
            "name": "Botswana",
            "value": 13.15,
            
        },{
            
            "name": "Burkina Faso",
            "value": 14.925,
            
        },
        {
            
            "name": "Cameroon",
            "value": 19.775,
            
        },
        {
            
            "name": "Central African Republic",
            "value": 12.55,
            
        },
        {
            
            "name": "Chad",
            "value": 15.625,
            
        },
        {
            
            "name": "Comoros",
            "value": 10.5,
            
        },
        {
            
            "name": "Cote d'Ivoire",
            "value": 20.75,
            
        },
        {
            
            "name": "Ethiopia",
            "value": 12.15,
            
        },
        {
            
            "name": "Gabon",
            "value": 9.4,
            
        },
        {
            
            "name": "Gambia, The",
            "value": 10.6,
            
        },
        {
            
            "name": "Ghana",
            "value": 8.075,
            
        },
        {
            
            "name": "Kenya",
            "value": 6.25,
            
        },
        {
            
            "name": "Liberia",
            "value": 12.675,
            
        },
        {
            
            "name": "Madagascar",
            "value": 7.525,
            
        },
        {
        
            "name": "Malawi",
            "value": 8.85,
            
        },
        {
            
            "name": "Mali",
            "value": 8.875,
            
        },
        {
            
            "name": "Mozambique",
            "value": 10.15,
            
        },
        {
            
            "name": "Namibia",
            "value": 12.825,
            
        },
        {
            
            "name": "Niger",
            "value": 9.075,
            
        },
        {
            
            "name": "Nigeria",
            "value": 17.875,
            
        },
        {
            
            "name": "Rwanda",
            "value": 14.825,
            
        },
        {
            
            "name": "Senegal",
            "value": 12.75,
            
        },
        {
            
            "name": "Sierra Leone",
            "value": 16.75,
            
        },
        {
            
            "name": "Togo",
            "value": 16.75
            ,
            
        },
        {
            
            "name": "Uganda",
            "value": 21.2,
            
        },
        {
            
            "name": "Tanzania",
            "value": 10.05,
            
        },
        {
            
            "name": "Zambia",
            "value": 12.025,
            
        },
        {
            
            "name": "Zimbabwe",
            "value": 20.075,
            
        },
        {
            
            "name": "Sudan",
            "value": 8.1,
            
        },
        {
            
            "name": "Egypt, Arab Rep.",
            "value": 4.125,
            
        },
        

        ]
        
    },
    ];

    return data;
}

 function get_map_data(){
     var data = [
        {
            "code3": "ABW",
            "name": "Aruba",
            "value": 9.5031,
            "code": "AW"
        },

        {
            "code3": "ALB",
            "name": "Albania",
            "value": 3.50288,
            "code": "AL"
        },

        {
            "code3": "ARE",
            "name": "United Arab Emirates",
            "value": 1.317916667,
            "code": "AE"
        },
        {
            "code3": "ARG",
            "name": "Argentina",
            "value": 10.46932796,
            "code": "AR"
        },
        {
            "code3": "ARM",
            "name": "Armenia",
            "value": 3.275872483,
            "code": "AM"
        },
        {
            "code3": "ATG",
            "name": "Antigua and Barbuda",
            "value": 0.552901235,
            "code": "AG"
        },
        {
            "code3": "AUS",
            "name": "Australia",
            "value": 12.99280556,
            "code": "AU"
        },
        {
            "code3": "AUT",
            "name": "Austria",
            "value": 23.7597644,
            "code": "AT"
        },
        {
            "code3": "AZE",
            "name": "Azerbaijan",
            "value": 1.85541666,
            "code": "AZ"
        },
        {
            "code3": "BEL",
            "name": "Belgium",
            "value": 21.23790323,
            "code": "BE"
        },
        {
            "code3": "BGR",
            "name": "Bulgaria",
            "value": 19.48911111,
            "code": "BG"
        },
        ,
        {
            "code3": "BGR",
            "name": "Bahamas",
            "value": 1.247391304,
            "code": "BG"
        },
        {
            "code3": "BHR",
            "name": "Bahrain",
            "value": 1.854126984,
            "code": "BH"
        },
        {
            "code3": "BIH",
            "name": "Bosnia and Herzegovina",
            "value": 4.617083333,
            "code": "BA"
        },
        {
            "code3": "BLR",
            "name": "Belarus",
            "value": 31.0759127,
            "code": "BY"
        },
        {
            "code3": "BLZ",
            "name": "Belize",
            "value": 6.230625,
            "code": "BZ"
        },
        {
            "code3": "BRA",
            "name": "Brazil",
            "value": 5.846021505,
            "code": "BR"
        },
        {
            "code3": "BRB",
            "name": "Barbados",
            "value": 2.970433333,
            "code": "BB"
        },
        {
            "code3": "CAN",
            "name": "Canada",
            "value": 12.46758621,
            "code": "CA"
        },
        {
            "code3": "CHE",
            "name": "Switzerland",
            "value": 19.0240873,
            "code": "CH"
        },
        {
            "code3": "CHL",
            "name": "Chile",
            "value": 10.54204301,
            "code": "CL"
        },
        {
            "code3": "COL",
            "name": "Colombia",
            "value": 5.401586022,
            "code": "CO"
        },
        {
            "code3": "CPV",
            "name": "Cabo Verde",
            "value": 11.15333333,
            "code": "CV"
        },
        {
            "code3": "CRI",
            "name": "Costa Rica",
            "value": 7.093666667,
            "code": "CR"
        },
        {
            "code3": "CUB",
            "name": "Cuba",
            "value": 21.22204861,
            "code": "CU"
        },
        {
            "code3": "CYP",
            "name": "Cyprus",
            "value": 21.22204861,
            "code": "CY"
        },
        {
            "code3": "CZE",
            "name": "Czech Republic",
            "value": 18.48754658,
            "code": "CZ"
        },
        {
            "code3": "DEU",
            "name": "Germany",
            "value": 15.55990385,
            "code": "DE"
        },
        {
            "code3": "DMA",
            "name": "Dominica",
            "value": 1,
            "code": "DM"
        },
        {
            "code3": "DNK",
            "name": "Denmark",
            "value": 14.09715909,
            "code": "DK"
        },
        {
            "code3": "ECU",
            "name": "Ecuador",
            "value": 6.304327957,
            "code": "EC"
        },
        {
            "code3": "ESP",
            "name": "Spain",
            "value": 9.432956989,
            "code": "ES"
        },
        {
            "code3": "EST",
            "name": "Estonia",
            "value": 27.27690476,
            "code": "EE"
        },
        {
            "code3": "FIN",
            "name": "Finland",
            "value": 22.77043103,
            "code": "FI"
        },
        {
            "code3": "FJI",
            "name": "Fiji",
            "value": 5.105,
            "code": "FJ"
        },
        {
            "code3": "FRA",
            "name": "France",
            "value": 21.67569444,
            "code": "FR"
        },
        {
            "code3": "GBR",
            "name": "United Kingdom",
            "value": 7.502473118,
            "code": "GB"
        },
        {
            "code3": "GEO",
            "name": "Georgia",
            "value": 4.228712121,
            "code": "GE"
        },
        {
            "code3": "GRC",
            "name": "Greece",
            "value": 4.06483871,
            "code": "GR"
        },
        {
            "code3": "GTM",
            "name": "Guatemala",
            "value": 3.185277778,
            "code": "GT"
        },
        {
            "code3": "GUY",
            "name": "Guyana",
            "value": 22.1864,
            "code": "GY"
        },
        {
            "code3": "HRV",
            "name": "Croatia",
            "value": 22.83526718,
            "code": "HR"
        },
        {
            "code3": "HUN",
            "name": "Hungary",
            "value": 32.76151613,
            "code": "HU"
        },
        {
            "code3": "IRL",
            "name": "Ireland",
            "value": 10.78258333,
            "code": "IE"
        },
        {
            "code3": "ISL",
            "name": "Iceland",
            "value": 12.80036649,
            "code": "IS"
        },
        {
            "code3": "ISR",
            "name": "Israel",
            "value": 8.951532258,
            "code": "IL"
        },
        {
            "code3": "ITA",
            "name": "Italy",
            "value": 8.518467742,
            "code": "IT"
        },
        {
            "code3": "JAM",
            "name": "Jamaica",
            "value": 0.521764706,
            "code": "JM"
        },
        {
            "code3": "JPN",
            "name": "Japan",
            "value": 21.57319892,
            "code": "JP"
        },
        {
            "code3": "KAZ",
            "name": "Kazakhstan",
            "value": 30.51128205,
            "code": "KZ"
        },
        {
            "code3": "KIR",
            "name": "Kiribati",
            "value": 6.655378788,
            "code": "KI"
        },
        {
            "code3": "KOR",
            "name": "Korea, Rep.",
            "value": 25.13561828,
            "code": "KR"
        },
        {
            "code3": "KWT",
            "name": "Kuwait",
            "value": 1.186433333,
            "code": "KW"
        },
        {
            "code3": "LKA",
            "name": "Sri Lanka",
            "value": 35.29515152,
            "code": "LK"
        },
        {
            "code3": "LTU",
            "name": "Lithuania",
            "value": 40.41557252,
            "code": "LT"
        },
        {
            "code3": "LUX",
            "name": "Luxembourg",
            "value": 16.54989247,
            "code": "LU"
        },
        {
            "code3": "LVA",
            "name": "Latvia",
            "value": 29.2593254,
            "code": "LV"
        },
        {
            "code3": "MAC",
            "name": "Macao SAR, China",
            "value": 14.31166667,
            "code": "MO"
        },
        {
            "code3": "MDA",
            "name": "Moldova",
            "value": 108.06,
            "code": "MD"
        },
        {
            "code3": "MDV",
            "name": "Maldives",
            "value": 1.367333333,
            "code": "MV"
        },
        {
            "code3": "MEX",
            "name": "Mexico",
            "value": 4.7075,
            "code": "MX"
        },
        {
            "code3": "MLT",
            "name": "Malta",
            "value": 5.032284946,
            "code": "MT"
        },
        {
            "code3": "MNE",
            "name": "Montenegro",
            "value": 9.95025,
            "code": "ME"
        },
        {
            "code3": "MNG",
            "name": "Mongolia",
            "value": 18.439,
            "code": "MN"
        },
        {
            "code3": "MUS",
            "name": "Mauritius",
            "value": 11.6873822,
            "code": "MU"
        },
        {
            "code3": "NIC",
            "name": "Nicaragua",
            "value": 6.566944444,
            "code": "NI"
        },
        {
            "code3": "NLD",
            "name": "Netherlands",
            "value": 10.64534031,
            "code": "NL"
        },
        {
            "code3": "NOR",
            "name": "Norway",
            "value": 12.941,
            "code": "NO"
        },
        
        {
            "code3": "NZL",
            "name": "New Zealand",
            "value": 14.39172414,
            "code": "NZ"
        },
        {
            "code3": "PAN",
            "name": "Panama",
            "value": 5.813533333,
            "code": "PA"
        },
        {
            "code3": "PHL",
            "name": "Philippines",
            "value": 2.421277778,
            "code": "PH"
        },
        {
            "code3": "POL",
            "name": "Poland",
            "value": 15.26951389,
            "code": "PL"
        },
        {
            "code3": "PRI",
            "name": "Puerto Rico",
            "value": 10.18623656,
            "code": "PR"
        },
        {
            "code3": "PRK",
            "name": "Korea, Dem. People’s Rep.",
            "value": 210.69,
            "code": "KP"
        },
        {
            "code3": "PRT",
            "name": "Portugal",
            "value": 11.33753086,
            "code": "PT"
        },
        {
            "code3": "PRY",
            "name": "Paraguay",
            "value": 4.217191358,
            "code": "PY"
        },
        {
            "code3": "QAT",
            "name": "Qatar",
            "value": 1.787359551,
            "code": "QA"
        },
        {
            "code3": "ROU",
            "name": "Romania",
            "value": 12.48967066,
            "code": "RO"
        },
        {
            "code3": "RUS",
            "name": "Russian Federation",
            "value": 34.89237654,
            "code": "RU"
        },
        {
            "code3": "SLV",
            "name": "El Salvador",
            "value": 10.54145833,
            "code": "SV"
        },
        {
            "code3": "SMR",
            "name": "San Marino",
            "value": 4.045,
            "code": "SM"
        },
        {
            "code3": "SRB",
            "name": "Serbia",
            "value": 22.16412037,
            "code": "RS"
        },
        {
            "code3": "SUR",
            "name": "Suriname",
            "value": 21.31642857,
            "code": "SR"
        },
        {
            "code3": "SVN",
            "name": "Slovenia",
            "value": 27.82785714,
            "code": "SI"
        },
        {
            "code3": "SWE",
            "name": "Sweden",
            "value": 14.65843575,
            "code": "SE"
        },
        {
            "code3": "SYC",
            "name": "Seychelles",
            "value": 7.480092593,
            "code": "SC"
        },
        {
            "code3": "THA",
            "name": "Thailand",
            "value": 7.073862275,
            "code": "TH"
        },
        {
            "code3": "TKM",
            "name": "Turkmenistan",
            "value": 8.605545977,
            "code": "TM"
        },
        {
            "code3": "TTO",
            "name": "Trinidad and Tobago",
            "value": 13.82564815,
            "code": "TT"
        },
        {
            "code3": "TUR",
            "name": "Turkey",
            "value": 2.371071429,
            "code": "TR"
        },
        {
            "code3": "UKR",
            "name": "Ukraine",
            "value": 26.58232143,
            "code": "UA"
        },
        {
            "code3": "URY",
            "name": "Uruguay",
            "value": 19.46119048,
            "code": "UY"
        },
        {
            "code3": "USA",
            "name": "United States",
            "value": 13.81981183,
            "code": "US"
        },
        {
            "code3": "UZB",
            "name": "Uzbekistan",
            "value": 8.099128788,
            "code": "UZ"
        },
        {
            "code3": "ZAF",
            "name": "South Africa",
            "value": 0.964541667,
            "code": "ZA"
        },
        {
            "code3": "DZA",
            "name": "Algeria",
            "value": 3.725,
            "code": "DZ"
        },
        { // ------------------------ START DATA INPUT HERE ---------------------------------
            "code3": "AGO",
            "name": "Angola",
            "value": 10.625,
            "code": "AO"
        },{
            "code3": "BEN",
            "name": "Benin",
            "value": 15.625,
            "code": "BJ"
        },
        {
            "code3": "BWA",
            "name": "Botswana",
            "value": 13.15,
            "code": "BW"
        },{
            "code3": "BFA",
            "name": "Burkina Faso",
            "value": 14.925,
            "code": "BF"
        },
        {
            "code3": "CMR",
            "name": "Cameroon",
            "value": 19.775,
            "code": "CM"
        },
        {
            "code3": "CAF",
            "name": "Central African Republic",
            "value": 12.55,
            "code": "CF"
        },
        {
            "code3": "TCD",
            "name": "Chad",
            "value": 15.625,
            "code": "TD"
        },
        {
            "code3": "COM",
            "name": "Comoros",
            "value": 10.5,
            "code": "KM"
        },
        {
            "code3": "CIV",
            "name": "Cote d'Ivoire",
            "value": 20.75,
            "code": "CI"
        },
        {
            "code3": "ETH",
            "name": "Ethiopia",
            "value": 12.15,
            "code": "ET"
        },
        {
            "code3": "GAB",
            "name": "Gabon",
            "value": 9.4,
            "code": "GA"
        },
        {
            "code3": "GMB",
            "name": "Gambia, The",
            "value": 10.6,
            "code": "GM"
        },
        {
            "code3": "GHA",
            "name": "Ghana",
            "value": 8.075,
            "code": "GH"
        },
        {
            "code3": "KEN",
            "name": "Kenya",
            "value": 6.25,
            "code": "KE"
        },
        {
            "code3": "LBR",
            "name": "Liberia",
            "value": 12.675,
            "code": "LR"
        },
        {
            "code3": "MDG",
            "name": "Madagascar",
            "value": 7.525,
            "code": "MG"
        },
        {
            "code3": "MWI",
            "name": "Malawi",
            "value": 8.85,
            "code": "MW"
        },
        {
            "code3": "MLI",
            "name": "Mali",
            "value": 8.875,
            "code": "ML"
        },
        {
            "code3": "MOZ",
            "name": "Mozambique",
            "value": 10.15,
            "code": "MZ"
        },
        {
            "code3": "NAM",
            "name": "Namibia",
            "value": 12.825,
            "code": "NA"
        },
        {
            "code3": "NER",
            "name": "Niger",
            "value": 9.075,
            "code": "NE"
        },
        {
            "code3": "NGA",
            "name": "Nigeria",
            "value": 17.875,
            "code": "NG"
        },
        {
            "code3": "RWA",
            "name": "Rwanda",
            "value": 14.825,
            "code": "RW"
        },
        {
            "code3": "SEN",
            "name": "Senegal",
            "value": 12.75,
            "code": "SN"
        },
        {
            "code3": "SLE",
            "name": "Sierra Leone",
            "value": 16.75,
            "code": "SL"
        },
        {
            "code3": "TGO",
            "name": "Togo",
            "value": 16.75,
            "code": "TG"
        },
        {
            "code3": "UGA",
            "name": "Uganda",
            "value": 21.2,
            "code": "UG"
        },
        {
            "code3": "TZA",
            "name": "Tanzania",
            "value": 10.05,
            "code": "TZ"
        },
        {
            "code3": "ZMB",
            "name": "Zambia",
            "value": 12.025,
            "code": "ZM"
        },
        {
            "code3": "ZWE",
            "name": "Zimbabwe",
            "value": 20.075,
            "code": "ZW"
        },
        {
            "code3": "SDN",
            "name": "Sudan",
            "value": 9.5,
            "code": "SD"
        },
        {
            "code3": "EGY",
            "name": "Egypt, Arab Rep.",
            "value": 4.125,
            "code": "EG"
        },
        {
            "code3": "LBY",
            "name": "Libya",
            "value": 5.525,
            "code": "LY"
        },
        {
            "code3": "MAR",
            "name": "Morocco",
            "value": 4.625,
            "code": "MA"
        },
        {
            "code3": "TUN",
            "name": "Tunisia",
            "value": 3.475,
            "code": "TN"
        },
        {
            "code3": "MRT",
            "name": "Mauritania",
            "value": 6.975,
            "code": "MR"
        },
        {
            "code3": "COD",
            "name": "Congo, Dem. Rep.",
            "value": 9.9,
            "code": "CD"
        },
        {
            "code3": "COG",
            "name": "Congo, Rep.",
            "value": 11.125,
            "code": "CG"
        },
        {
            "code3": "SOM",
            "name": "Somalia",
            "value": 8.1,
            "code": "SO"
        },
        {
            "code3": "BGD",
            "name": "Bangladesh",
            "value": 6.5,
            "code": "BD"
        },
        {
            "code3": "IND",
            "name": "India",
            "value": 17.25,
            "code": "IN"
        },
        {
            "code3": "CHN",
            "name": "China",
            "value": 10.05,
            "code": "CN"
        },
        {
            "code3": "IDN",
            "name": "Indonesia",
            "value": 3.925,
            "code": "ID"
        },
        {
            "code3": "SAU",
            "name": "Saudi Arabia",
            "value": 3.5,
            "code": "SA"
        },
        {
            "code3": "YEM",
            "name": "Yemen, Rep.",
            "value": 9.85,
            "code": "YE"
        },
        {
            "code3": "IRQ",
            "name": "Iraq",
            "value": 3.95,
            "code": "IQ"
        },
        {
            "code3": "JOR",
            "name": "Jordan",
            "value": 3.975,
            "code": "JO"
        },
        {
            "code3": "NPL",
            "name": "Nepal",
            "value": 12.475,
            "code": "NP"
        },
        {
            "code3": "MMR",
            "name": "Myanmar",
            "value": 7.975,
            "code": "MM"
        },
        {
            "code3": "VEN",
            "name": "Venezuela, RB",
            "value": 5.325,
            "code": "VE"
        },
        {
            "code3": "PER",
            "name": "Peru",
            "value": 5.275,
            "code": "PE"
        },
        {
            "code3": "BOL",
            "name": "Bolivia",
            "value": 14.925,
            "code": "BO"
        },
    ];
    return data;
 };