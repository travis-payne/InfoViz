$(function(){
    countries_by_bubble();
 });


 function countries_by_bubble(){
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '65%'
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
                minSize: '10%',
                maxSize: '300%',
                zMin: 0,
                zMax: 1000,
                packedbubble: {
                    layoutAlgorithm: {
                        gravitationalConstant: 2.5,
                        splitSeries: true,
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 15
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'Europe',
            data: [{
                name: 'Albania',
                value: 3.502878788
            }, {
                name: 'Armenia',
                value: 3.275872483
            },
            {
                name: "Netherlands",
                value: 10.64534031
            },
            {
                name: "Austria",
                value: 23.7597644
            },
            {
                name: "Sweden",
                value: 14.65843575
            },
            {
                name: "Belarus",
                value: 31.0759127
    
            },
            {
                name: "Bosnia and Herzegovina",
                value: 4.617083333
    
            },
            {
                name: "Bulgaria",
                value: 19.48911111
            },
            {
                name: "Croatia",
                value: 22.83526718
            },
            {
                name: "Cyprus",
                value: 3.293595506
            },
            {
                name: "Czech Republic",
                value: 18.48754658
            }, {
                name: "Denmark",
                value: 14.09715909
            }, {
                name: "Estonia",
                value: 27.27690476
            },
            {
                name: "Finland",
                value: 22.77043103
            },
            {
                name: "France",
                value: 21.67569444
            },
            {
                name: "Georgia",
                value: 4.228712121
            },
            {
                name: "Germany",
                value: 15.55990385
            },
            {
                name: "Greece",
                value: 4.06483871
            },
            {
                name: "Romania",
                value: 12.48967066
            },
            {
                name: "Hungary",
                value: 32.76151613
            },
            {
                name: "Iceland",
                value: 12.80036649
            },
            {
                name: "Ireland",
                value: 10.78258333
            },
            {
                name: "Italy",
                value: 8.518467742
            },
            {
                name: "Latvia",
                value: 29.2593254
            },
            {
                name: "Lithuania",
                value: 40.41557252
            },
            {
                name: "Luxembourg",
                value: 16.54989247
            },
            {
                name: "Malta",
                value: 5.032284946
            },
            {
                name: "Montenegro",
                value: 9.95025
            },
            {
                name: "Norway",
                value: 12.941
            },
            {
                name: "Poland",
                value: 15.26951389
            },
            {
                name: "Portugal",
                value: 11.33753086
            },
            {
                name: "Russia",
                value: 34.89237654
            },
            {
                name: "San Marino",
                value: 4.045
            },
            {
                name: "Serbia",
                value: 22.16412037
            },
            {
                name: "Slovakia",
                value: 12.56878788
            },
            {
                name: "Slovenia",
                value: 27.82785714
            },
            {
                name: "Spain",
                value: 9.432956989
            },
            {
                name: "Switzerland",
                value: 19.0240873
            },
            {
                name: "Turkey",
                value: 2.371071429
            },
            {
                name: "Ukraine",
                value: 26.58232143
            },
            {
                name: "United Kingdom",
                value: 7.502473118
    
            }]
        }, {
            name: 'Africa',
            data: [{
                name: "Cabo Verde",
                value: 11.15333333
            },
            {
                name: "Mauritius",
                value: 11.6873822
            },
            {
                name: "Seychelle",
                value: 13.1
            },
            {
                name: "South Africa",
                value: 0.964541667
            },]
        }, {
            name: 'Oceania',
            data: [{
                name: "Australia",
                value: 12.99280556
            },
            {
                name: "Fiji",
                value: 5.105
            },
            {
                name: "Kiribati",
                value: 6.655378788
            },
            {
                name: "New Zealand",
                value: 14.39172414
            }]
        }, {
            name: 'North America',
            data: [{
                name: "Antigua and Barbuda",
                value: 0.552901235
            },
            {
                name: "Bahamas",
                value: 1.247391304
            },
            {
                name: "Barbados",
                value: 2.970433333
            },
            {
                name: "Belize",
                value: 10.2
            },
            {
                name: "Canada",
                value: 12.46758621
            },
            {
                name: "Costa Rica",
                value: 7.093666667
            },
            {
                name: "Cuba",
                value: 21.22204861
            }, {
                name: "Grenada",
                value: 2.132258065
            }, {
                name: "Guatemala",
                value: 3.185277778
            }, {
                name: "Jamaica",
                value: 0.521764706
            }, {
                name: "Mexico",
                value: 4.7075
            }, {
                name: "Nicaragua",
                value: 6.566944444
            }, {
                name: "Panama",
                value: 5.813533333
            }, {
                name: "Puerto Rico",
                value: 10.18623656
            },  {
                name: "Saint Lucia",
                value: 7.202738095
            }, {
                name: "Saint Vincent and Grenadines",
                value: 5.755433333
            }, {
                name: "United States",
                value: 13.81981183
            }]
        }, {
            name: 'South America',
            data: [{
                name: "Argentina",
                value: 10.46932796
            },
            {
                name: "Aruba",
                value: 9.503095238
            },
            {
                name: "Brazil",
                value: 5.846021505
            },
            {
                name: "Chile",
                value: 10.54204301
            },
            {
                name: "Colombia",
                value: 5.401586022
            },
            {
                name: "Ecuador",
                value: 6.304327957
            },
            {
                name: "El Salvador",
                value: 10.54145833
            },
            {
                name: "Guyana",
                value: 22.1864
            },
            {
                name: "Paraguay",
                value: 4.217191358
            }, {
                name: "Suriname",
                value: 21.31642857
            },
            {
                name: "Trinidad and Tobago",
                value: 13.82564815
            },
            {
                name: "Uruguay",
                value: 19.46119048
            }]
        }, {
            name: 'Asia',
            data: [{
                name: "Azerbaijan",
                value: 1.855416667
            },
            {
                name: "Bahrain",
                value: 1.854126984
            },
            {
                name: "Thailand",
                value: 7.073862275
            },
            {
                name: "Qatar",
                value: 1.787359551
            },
            {
                name: "Israel",
                value: 8.951532258
            },
            {
                name: "Japan",
                value: 21.57319892
            },
            {
                name: "Kazakhstan",
                value: 30.51128205
            },
            {
                name: "Kuwait",
                value: 1.186433333
            },
            {
                name: "Kyrgyzstan",
                value: 14.28621795
            },
            {
                name: "Macau",
                value: 14.31166667
            },
            {
                name: "Maldives",
                value: 1.367333333
            },
            {
                name: "Oman",
                value: 0.736111111
            },
            {
                name: "Philippines",
                value: 2.421277778
            },
            {
                name: "Republic of Korea",
                value: 25.13561828
            },
            {
                name: "Mongolia",
                value: 18.439
            },
            {
                name: "Singapore",
                value: 17.04564516
            },
            {
                name: "Sri Lanka",
                value: 35.29515152
            },
            {
                name: "Turkmenistan",
                value: 8.605545977
            },
            {
                name: "United Arab Emirates",
                value: 1.317916667
            },
            {
                name: "Uzbekistan",
                value: 8.099128788
            },
            {
                name: "Qatar",
                value: 1.787359551
            },
            {
                name: "Philippines",
                value: 2.421277778
            },
            {
                name: "Kuwait",
                value: 1.186433333
            },
            {
                name: "Uzbekistan",
                value: 8.099128788
            }]
        }]
    });
    
    

 }

 function split_by_continent(){Highcharts.chart('container', {
    chart: {
        type: 'packedbubble',
        height: '65%'
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
            minSize: '25%',
            maxSize: '300%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: true,
                gravitationalConstant: 2.5,
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
    series: [{
        name: 'Europe',
        data: [{
            name: 'Albania',
            value: 3.502878788
        }, {
            name: 'Armenia',
            value: 3.275872483
        },
        {
            name: "Netherlands",
            value: 10.64534031
        },
        {
            name: "Austria",
            value: 23.7597644
        },
        {
            name: "Sweden",
            value: 14.65843575
        },
        {
            name: "Belarus",
            value: 31.0759127

        },
        {
            name: "Bosnia and Herzegovina",
            value: 4.617083333

        },
        {
            name: "Bulgaria",
            value: 19.48911111
        },
        {
            name: "Croatia",
            value: 22.83526718
        },
        {
            name: "Cyprus",
            value: 3.293595506
        },
        {
            name: "Czech Republic",
            value: 18.48754658
        }, {
            name: "Denmark",
            value: 14.09715909
        }, {
            name: "Estonia",
            value: 27.27690476
        },
        {
            name: "Finland",
            value: 22.77043103
        },
        {
            name: "France",
            value: 21.67569444
        },
        {
            name: "Georgia",
            value: 4.228712121
        },
        {
            name: "Germany",
            value: 15.55990385
        },
        {
            name: "Greece",
            value: 4.06483871
        },
        {
            name: "Romania",
            value: 12.48967066
        },
        {
            name: "Hungary",
            value: 32.76151613
        },
        {
            name: "Iceland",
            value: 12.80036649
        },
        {
            name: "Ireland",
            value: 10.78258333
        },
        {
            name: "Italy",
            value: 8.518467742
        },
        {
            name: "Latvia",
            value: 29.2593254
        },
        {
            name: "Lithuania",
            value: 40.41557252
        },
        {
            name: "Luxembourg",
            value: 16.54989247
        },
        {
            name: "Malta",
            value: 5.032284946
        },
        {
            name: "Montenegro",
            value: 9.95025
        },
        {
            name: "Norway",
            value: 12.941
        },
        {
            name: "Poland",
            value: 15.26951389
        },
        {
            name: "Portugal",
            value: 11.33753086
        },
        {
            name: "Russia",
            value: 34.89237654
        },
        {
            name: "San Marino",
            value: 4.045
        },
        {
            name: "Serbia",
            value: 22.16412037
        },
        {
            name: "Slovakia",
            value: 12.56878788
        },
        {
            name: "Slovenia",
            value: 27.82785714
        },
        {
            name: "Spain",
            value: 9.432956989
        },
        {
            name: "Switzerland",
            value: 19.0240873
        },
        {
            name: "Turkey",
            value: 2.371071429
        },
        {
            name: "Ukraine",
            value: 26.58232143
        },
        {
            name: "United Kingdom",
            value: 7.502473118

        }]
    }, {
        name: 'Africa',
        data: [{
            name: "Cabo Verde",
            value: 11.15333333
        },
        {
            name: "Mauritius",
            value: 11.6873822
        },
        {
            name: "Seychelle",
            value: 13.1
        },
        {
            name: "South Africa",
            value: 0.964541667
        },]
    }, {
        name: 'Oceania',
        data: [{
            name: "Australia",
            value: 12.99280556
        },
        {
            name: "Fiji",
            value: 5.105
        },
        {
            name: "Kiribati",
            value: 6.655378788
        },
        {
            name: "New Zealand",
            value: 14.39172414
        }]
    }, {
        name: 'North America',
        data: [{
            name: "Antigua and Barbuda",
            value: 0.552901235
        },
        {
            name: "Bahamas",
            value: 1.247391304
        },
        {
            name: "Barbados",
            value: 2.970433333
        },
        {
            name: "Belize",
            value: 10.2
        },
        {
            name: "Canada",
            value: 12.46758621
        },
        {
            name: "Costa Rica",
            value: 7.093666667
        },
        {
            name: "Cuba",
            value: 21.22204861
        }, {
            name: "Grenada",
            value: 2.132258065
        }, {
            name: "Guatemala",
            value: 3.185277778
        }, {
            name: "Jamaica",
            value: 0.521764706
        }, {
            name: "Mexico",
            value: 4.7075
        }, {
            name: "Nicaragua",
            value: 6.566944444
        }, {
            name: "Panama",
            value: 5.813533333
        }, {
            name: "Puerto Rico",
            value: 10.18623656
        },  {
            name: "Saint Lucia",
            value: 7.202738095
        }, {
            name: "Saint Vincent and Grenadines",
            value: 5.755433333
        }, {
            name: "United States",
            value: 13.81981183
        }]
    }, {
        name: 'South America',
        data: [{
            name: "Argentina",
            value: 10.46932796
        },
        {
            name: "Aruba",
            value: 9.503095238
        },
        {
            name: "Brazil",
            value: 5.846021505
        },
        {
            name: "Chile",
            value: 10.54204301
        },
        {
            name: "Colombia",
            value: 5.401586022
        },
        {
            name: "Ecuador",
            value: 6.304327957
        },
        {
            name: "El Salvador",
            value: 10.54145833
        },
        {
            name: "Guyana",
            value: 22.1864
        },
        {
            name: "Paraguay",
            value: 4.217191358
        }, {
            name: "Suriname",
            value: 21.31642857
        },
        {
            name: "Trinidad and Tobago",
            value: 13.82564815
        },
        {
            name: "Uruguay",
            value: 19.46119048
        }]
    }, {
        name: 'Asia',
        data: [{
            name: "Azerbaijan",
            value: 1.855416667
        },
        {
            name: "Bahrain",
            value: 1.854126984
        },
        {
            name: "Thailand",
            value: 7.073862275
        },
        {
            name: "Qatar",
            value: 1.787359551
        },
        {
            name: "Israel",
            value: 8.951532258
        },
        {
            name: "Japan",
            value: 21.57319892
        },
        {
            name: "Kazakhstan",
            value: 30.51128205
        },
        {
            name: "Kuwait",
            value: 1.186433333
        },
        {
            name: "Kyrgyzstan",
            value: 14.28621795
        },
        {
            name: "Macau",
            value: 14.31166667
        },
        {
            name: "Maldives",
            value: 1.367333333
        },
        {
            name: "Oman",
            value: 0.736111111
        },
        {
            name: "Philippines",
            value: 2.421277778
        },
        {
            name: "Republic of Korea",
            value: 25.13561828
        },
        {
            name: "Mongolia",
            value: 18.439
        },
        {
            name: "Singapore",
            value: 17.04564516
        },
        {
            name: "Sri Lanka",
            value: 35.29515152
        },
        {
            name: "Turkmenistan",
            value: 8.605545977
        },
        {
            name: "United Arab Emirates",
            value: 1.317916667
        },
        {
            name: "Uzbekistan",
            value: 8.099128788
        },
        {
            name: "Qatar",
            value: 1.787359551
        },
        {
            name: "Philippines",
            value: 2.421277778
        },
        {
            name: "Kuwait",
            value: 1.186433333
        },
        {
            name: "Uzbekistan",
            value: 8.099128788
        }]
    }]
});


 };

 function map_view(){


    // Initiate the chart
    Highcharts.mapChart('container', {

        chart: {
            map: 'custom/world'
        },

        title: {
            text: 'Fixed tooltip with HTML'
        },

        legend: {
            title: {
                text: 'Population density per km²',
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
                '<span style="font-size:30px">{point.value}/km²</span>',
            positioner: function () {
                return { x: 0, y: 250 };
            }
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
        },

        series: [{
            data: get_map_data(),
            joinBy: ['iso-a3', 'code3'],
            name: 'Population density',
            states: {
                hover: {
                    color: '#a4edba'
                }
            }
        }]
    });


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
            "value": 374.45,
            "code": "BE"
        },
        {
            "code3": "BGR",
            "name": "Bulgaria",
            "value": 65.66,
            "code": "BG"
        },
        {
            "code3": "BHR",
            "name": "Bahrain",
            "value": 1848.47,
            "code": "BH"
        },
        {
            "code3": "BIH",
            "name": "Bosnia and Herzegovina",
            "value": 68.69,
            "code": "BA"
        },
        {
            "code3": "BLR",
            "name": "Belarus",
            "value": 46.83,
            "code": "BY"
        },
        {
            "code3": "BLZ",
            "name": "Belize",
            "value": 16.09,
            "code": "BZ"
        },
        {
            "code3": "BRA",
            "name": "Brazil",
            "value": 24.84,
            "code": "BR"
        },
        {
            "code3": "BRB",
            "name": "Barbados",
            "value": 662.78,
            "code": "BB"
        },
        {
            "code3": "CAN",
            "name": "Canada",
            "value": 3.99,
            "code": "CA"
        },
        {
            "code3": "CHE",
            "name": "Switzerland",
            "value": 211.87,
            "code": "CH"
        },
        {
            "code3": "CHL",
            "name": "Chile",
            "value": 24.09,
            "code": "CL"
        },
        {
            "code3": "COL",
            "name": "Colombia",
            "value": 43.85,
            "code": "CO"
        },
        {
            "code3": "CPV",
            "name": "Cabo Verde",
            "value": 133.89,
            "code": "CV"
        },
        {
            "code3": "CRI",
            "name": "Costa Rica",
            "value": 95.13,
            "code": "CR"
        },
        {
            "code3": "CUB",
            "name": "Cuba",
            "value": 110.32,
            "code": "CU"
        },
        {
            "code3": "CYP",
            "name": "Cyprus",
            "value": 126.64,
            "code": "CY"
        },
        {
            "code3": "CZE",
            "name": "Czech Republic",
            "value": 136.85,
            "code": "CZ"
        },
        {
            "code3": "DEU",
            "name": "Germany",
            "value": 236.42,
            "code": "DE"
        },
        {
            "code3": "DMA",
            "name": "Dominica",
            "value": 98.06,
            "code": "DM"
        },
        {
            "code3": "DNK",
            "name": "Denmark",
            "value": 135.54,
            "code": "DK"
        },
        {
            "code3": "ECU",
            "name": "Ecuador",
            "value": 65.97,
            "code": "EC"
        },
        {
            "code3": "ESP",
            "name": "Spain",
            "value": 92.93,
            "code": "ES"
        },
        {
            "code3": "EST",
            "name": "Estonia",
            "value": 31.04,
            "code": "EE"
        },
        {
            "code3": "FIN",
            "name": "Finland",
            "value": 18.08,
            "code": "FI"
        },
        {
            "code3": "FJI",
            "name": "Fiji",
            "value": 49.19,
            "code": "FJ"
        },
        {
            "code3": "FRA",
            "name": "France",
            "value": 122.16,
            "code": "FR"
        },
        {
            "code3": "GBR",
            "name": "United Kingdom",
            "value": 271.13,
            "code": "GB"
        },
        {
            "code3": "GEO",
            "name": "Georgia",
            "value": 53.52,
            "code": "GE"
        },
        {
            "code3": "GRC",
            "name": "Greece",
            "value": 83.56,
            "code": "GR"
        },
        {
            "code3": "GTM",
            "name": "Guatemala",
            "value": 154.74,
            "code": "GT"
        },
        {
            "code3": "GUY",
            "name": "Guyana",
            "value": 3.93,
            "code": "GY"
        },
        {
            "code3": "HRV",
            "name": "Croatia",
            "value": 74.6,
            "code": "HR"
        },
        {
            "code3": "HUN",
            "name": "Hungary",
            "value": 108.41,
            "code": "HU"
        },
        {
            "code3": "IRL",
            "name": "Ireland",
            "value": 68.95,
            "code": "IE"
        },
        {
            "code3": "ISL",
            "name": "Iceland",
            "value": 3.35,
            "code": "IS"
        },
        {
            "code3": "ISR",
            "name": "Israel",
            "value": 394.92,
            "code": "IL"
        },
        {
            "code3": "ITA",
            "name": "Italy",
            "value": 206.12,
            "code": "IT"
        },
        {
            "code3": "JAM",
            "name": "Jamaica",
            "value": 266.05,
            "code": "JM"
        },
        {
            "code3": "JPN",
            "name": "Japan",
            "value": 348.35,
            "code": "JP"
        },
        {
            "code3": "KAZ",
            "name": "Kazakhstan",
            "value": 6.59,
            "code": "KZ"
        },
        {
            "code3": "KIR",
            "name": "Kiribati",
            "value": 141.23,
            "code": "KI"
        },
        {
            "code3": "KNA",
            "name": "St. Kitts and Nevis",
            "value": 210.85,
            "code": "KN"
        },
        {
            "code3": "KOR",
            "name": "Korea, Rep.",
            "value": 525.7,
            "code": "KR"
        },
        {
            "code3": "KWT",
            "name": "Kuwait",
            "value": 227.42,
            "code": "KW"
        },
        {
            "code3": "LKA",
            "name": "Sri Lanka",
            "value": 338.11,
            "code": "LK"
        },
        {
            "code3": "LTU",
            "name": "Lithuania",
            "value": 45.78,
            "code": "LT"
        },
        {
            "code3": "LUX",
            "name": "Luxembourg",
            "value": 224.72,
            "code": "LU"
        },
        {
            "code3": "LVA",
            "name": "Latvia",
            "value": 31.51,
            "code": "LV"
        },
        {
            "code3": "MAC",
            "name": "Macao SAR, China",
            "value": 20405.57,
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
            "value": 1425.85,
            "code": "MV"
        },
        {
            "code3": "MEX",
            "name": "Mexico",
            "value": 65.61,
            "code": "MX"
        },
        {
            "code3": "MLT",
            "name": "Malta",
            "value": 1366.93,
            "code": "MT"
        },
        {
            "code3": "MNE",
            "name": "Montenegro",
            "value": 46.27,
            "code": "ME"
        },
        {
            "code3": "MNG",
            "name": "Mongolia",
            "value": 1.95,
            "code": "MN"
        },
        {
            "code3": "MUS",
            "name": "Mauritius",
            "value": 622.4,
            "code": "MU"
        },
        {
            "code3": "NIC",
            "name": "Nicaragua",
            "value": 51.1,
            "code": "NI"
        },
        {
            "code3": "NLD",
            "name": "Netherlands",
            "value": 505.5,
            "code": "NL"
        },
        {
            "code3": "NOR",
            "name": "Norway",
            "value": 14.34,
            "code": "NO"
        },
        
        {
            "code3": "NZL",
            "name": "New Zealand",
            "value": 17.82,
            "code": "NZ"
        },
        {
            "code3": "PAN",
            "name": "Panama",
            "value": 54.27,
            "code": "PA"
        },
        {
            "code3": "PHL",
            "name": "Philippines",
            "value": 346.51,
            "code": "PH"
        },
        {
            "code3": "POL",
            "name": "Poland",
            "value": 124.01,
            "code": "PL"
        },
        {
            "code3": "PRI",
            "name": "Puerto Rico",
            "value": 384.59,
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
            "value": 112.72,
            "code": "PT"
        },
        {
            "code3": "PRY",
            "name": "Paraguay",
            "value": 16.93,
            "code": "PY"
        },
        {
            "code3": "QAT",
            "name": "Qatar",
            "value": 221.34,
            "code": "QA"
        },
        {
            "code3": "ROU",
            "name": "Romania",
            "value": 85.62,
            "code": "RO"
        },
        {
            "code3": "RUS",
            "name": "Russian Federation",
            "value": 8.81,
            "code": "RU"
        },
        {
            "code3": "SLV",
            "name": "El Salvador",
            "value": 306.21,
            "code": "SV"
        },
        {
            "code3": "SMR",
            "name": "San Marino",
            "value": 553.38,
            "code": "SM"
        },
        {
            "code3": "SRB",
            "name": "Serbia",
            "value": 80.7,
            "code": "RS"
        },
        {
            "code3": "SUR",
            "name": "Suriname",
            "value": 3.58,
            "code": "SR"
        },
        {
            "code3": "SVN",
            "name": "Slovenia",
            "value": 102.53,
            "code": "SI"
        },
        {
            "code3": "SWE",
            "name": "Sweden",
            "value": 24.36,
            "code": "SE"
        },
        {
            "code3": "SYC",
            "name": "Seychelles",
            "value": 205.82,
            "code": "SC"
        },
        {
            "code3": "THA",
            "name": "Thailand",
            "value": 134.79,
            "code": "TH"
        },
        {
            "code3": "TKM",
            "name": "Turkmenistan",
            "value": 12.05,
            "code": "TM"
        },
        {
            "code3": "TTO",
            "name": "Trinidad and Tobago",
            "value": 266.07,
            "code": "TT"
        },
        {
            "code3": "TUR",
            "name": "Turkey",
            "value": 103.31,
            "code": "TR"
        },
        {
            "code3": "UKR",
            "name": "Ukraine",
            "value": 77.69,
            "code": "UA"
        },
        {
            "code3": "URY",
            "name": "Uruguay",
            "value": 19.68,
            "code": "UY"
        },
        {
            "code3": "USA",
            "name": "United States",
            "value": 35.32,
            "code": "US"
        },
        {
            "code3": "UZB",
            "name": "Uzbekistan",
            "value": 74.87,
            "code": "UZ"
        },
        {
            "code3": "VCT",
            "name": "St. Vincent and the Grenadines",
            "value": 281.14,
            "code": "VC"
        },
        {
            "code3": "ZAF",
            "name": "South Africa",
            "value": 46.18,
            "code": "ZA"
        }
    ];
    return data;
 }