$(function(){

    countries_by_bubble();
 
 
 });
 
 function countries_by_bubble(){
    Highcharts.chart('container', {
        chart: {
            type: 'packedbubble',
            height: '50%'
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
                packedbubble: {
                    layoutAlgorithm: {
                        gravitationalConstant: 1,
                        splitSeries: true,
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
        height: '50%'
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
                gravitationalConstant: 1,
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