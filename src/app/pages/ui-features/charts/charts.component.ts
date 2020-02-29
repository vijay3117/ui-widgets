import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import exporting from 'highcharts/modules/exporting';
exporting(Highcharts);

import offline from 'highcharts/modules/offline-exporting';
offline(Highcharts);

import highcharts3D from 'highcharts/highcharts-3d.src';
highcharts3D(Highcharts);

@Component({
  selector: 'ngx-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {

  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Monthly Average Temperature',
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yAxis: {
      title: {
        text: 'Temperature °C',
      },
    },
    tooltip: {
      valueSuffix: ' °C',
    },
    series: [
      {
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      },
      {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5],
      },
      {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0],
      },
      {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8],
      },
    ],
  };
  stackedBarChart = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Stacked column chart',
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'gray',
        },
      },
    },
    legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1],
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
    }],
  };
  donutThreeDChart = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: 'Contents of Highsoft\'s weekly fruit delivery',
    },
    subtitle: {
      text: '3D donut in Highcharts',
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
      },
    },
    series: [{
      name: 'Delivered amount',
      data: [
        ['Bananas', 8],
        ['Kiwi', 3],
        ['Mixed nuts', 1],
        ['Oranges', 6],
        ['Apples', 8],
        ['Pears', 4],
        ['Clementines', 4],
        ['Reddish (bag)', 1],
        ['Grapes (bunch)', 1],
      ],
    }],
  };
  columnLinePieChart = {
    title: {
      text: 'Combination chart',
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Bananas', 'Plums'],
    },
    labels: {
      items: [{
        html: 'Total fruit consumption',
        style: {
          left: '50px',
          top: '18px',
          color: ( // theme
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color
          ) || 'black',
        },
      }],
    },
    series: [{
      type: 'column',
      name: 'Jane',
      data: [3, 2, 1, 3, 4],
    }, {
      type: 'column',
      name: 'John',
      data: [2, 3, 5, 7, 6],
    }, {
      type: 'column',
      name: 'Joe',
      data: [4, 3, 3, 9, 0],
    }, {
      type: 'spline',
      name: 'Average',
      data: [3, 2.67, 3, 6.33, 3.33],
      marker: {
        lineWidth: 2,
        lineColor: Highcharts.getOptions().colors[3],
        fillColor: 'white',
      },
    }, {
      type: 'pie',
      name: 'Total consumption',
      data: [{
        name: 'Jane',
        y: 13,
        color: Highcharts.getOptions().colors[0], // Jane's color
      }, {
        name: 'John',
        y: 23,
        color: Highcharts.getOptions().colors[1], // John's color
      }, {
        name: 'Joe',
        y: 19,
        color: Highcharts.getOptions().colors[2], // Joe's color
      }],
      center: [100, 80],
      size: 100,
      showInLegend: false,
      dataLabels: {
        enabled: false,
      },
    }],
  };
  columnNegativeValues = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Column chart with negative values',
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    },
    credits: {
      enabled: false,
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
    }, {
      name: 'Jane',
      data: [2, -2, -3, 2, 1],
    }, {
      name: 'Joe',
      data: [3, 4, 4, -2, 5],
    }],
  };
  pieChart = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Browser market shares at a specific website, 2014',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Firefox', 45.0],
        ['IE', 26.8],
        {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true,
        },
        ['Safari', 8.5],
        ['Opera', 6.2],
        ['Others', 0.7],
      ],
    }],
  };
  packedBubbleChart = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Browser market shares. January, 2018',
    },
    subtitle: {
      text: `Click the columns to view versions. Source:
      <a href="http://statcounter.com" target="_blank">statcounter.com</a>`,
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }

    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 62.74,
            drilldown: 'Chrome'
          },
          {
            name: 'Firefox',
            y: 10.57,
            drilldown: 'Firefox'
          },
          {
            name: 'Internet Explorer',
            y: 7.23,
            drilldown: 'Internet Explorer'
          },
          {
            name: 'Safari',
            y: 5.58,
            drilldown: 'Safari'
          },
          {
            name: 'Edge',
            y: 4.02,
            drilldown: 'Edge'
          },
          {
            name: 'Opera',
            y: 1.92,
            drilldown: 'Opera'
          },
          {
            name: 'Other',
            y: 7.62,
            drilldown: null
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          name: 'Chrome',
          id: 'Chrome',
          data: [
            [
              'v65.0',
              0.1
            ],
            [
              'v64.0',
              1.3
            ],
            [
              'v63.0',
              53.02
            ],
            [
              'v62.0',
              1.4
            ],
            [
              'v61.0',
              0.88
            ],
            [
              'v60.0',
              0.56
            ],
            [
              'v59.0',
              0.45
            ],
            [
              'v58.0',
              0.49
            ],
            [
              'v57.0',
              0.32
            ],
            [
              'v56.0',
              0.29
            ],
            [
              'v55.0',
              0.79
            ],
            [
              'v54.0',
              0.18
            ],
            [
              'v51.0',
              0.13
            ],
            [
              'v49.0',
              2.16
            ],
            [
              'v48.0',
              0.13
            ],
            [
              'v47.0',
              0.11
            ],
            [
              'v43.0',
              0.17
            ],
            [
              'v29.0',
              0.26
            ]
          ]
        },
        {
          name: 'Firefox',
          id: 'Firefox',
          data: [
            [
              'v58.0',
              1.02
            ],
            [
              'v57.0',
              7.36
            ],
            [
              'v56.0',
              0.35
            ],
            [
              'v55.0',
              0.11
            ],
            [
              'v54.0',
              0.1
            ],
            [
              'v52.0',
              0.95
            ],
            [
              'v51.0',
              0.15
            ],
            [
              'v50.0',
              0.1
            ],
            [
              'v48.0',
              0.31
            ],
            [
              'v47.0',
              0.12
            ]
          ]
        },
        {
          name: 'Internet Explorer',
          id: 'Internet Explorer',
          data: [
            [
              'v11.0',
              6.2
            ],
            [
              'v10.0',
              0.29
            ],
            [
              'v9.0',
              0.27
            ],
            [
              'v8.0',
              0.47
            ]
          ]
        },
        {
          name: 'Safari',
          id: 'Safari',
          data: [
            [
              'v11.0',
              3.39
            ],
            [
              'v10.1',
              0.96
            ],
            [
              'v10.0',
              0.36
            ],
            [
              'v9.1',
              0.54
            ],
            [
              'v9.0',
              0.13
            ],
            [
              'v5.1',
              0.2
            ]
          ]
        },
        {
          name: 'Edge',
          id: 'Edge',
          data: [
            [
              'v16',
              2.6
            ],
            [
              'v15',
              0.92
            ],
            [
              'v14',
              0.4
            ],
            [
              'v13',
              0.1
            ]
          ]
        },
        {
          name: 'Opera',
          id: 'Opera',
          data: [
            [
              'v50.0',
              0.96
            ],
            [
              'v49.0',
              0.82
            ],
            [
              'v12.1',
              0.14
            ]
          ]
        }
      ]
    }
  };

  multipleAxisChart = {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: 'Average Monthly Weather Data for Tokyo',
      align: 'left'
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
      align: 'left'
    },
    xAxis: [{
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C',
        style: {
          color: Highcharts.getOptions().colors[2]
        }
      },
      title: {
        text: 'Temperature',
        style: {
          color: Highcharts.getOptions().colors[2]
        }
      },
      opposite: true

    }, { // Secondary yAxis
      gridLineWidth: 0,
      title: {
        text: 'Rainfall',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value} mm',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      }

    }, { // Tertiary yAxis
      gridLineWidth: 0,
      title: {
        text: 'Sea-Level Pressure',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      labels: {
        format: '{value} mb',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 80,
      verticalAlign: 'top',
      y: 55,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || // theme
        'rgba(255,255,255,0.25)'
    },
    series: [{
      name: 'Rainfall',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' mm'
      }

    }, {
      name: 'Sea-Level Pressure',
      type: 'spline',
      yAxis: 2,
      data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
      marker: {
        enabled: false
      },
      dashStyle: 'shortdot',
      tooltip: {
        valueSuffix: ' mb'
      }

    }, {
      name: 'Temperature',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: ' °C'
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            floating: false,
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            x: 0,
            y: 0
          },
          yAxis: [{
            labels: {
              align: 'right',
              x: 0,
              y: -6
            },
            showLastLabel: false
          }, {
            labels: {
              align: 'left',
              x: 0,
              y: -6
            },
            showLastLabel: false
          }, {
            visible: false
          }]
        }
      }]
    }
  };

  bubbleChart = {
    colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
    chart: {
      type: 'column',
      inverted: true,
      polar: true
    },
    title: {
      text: 'Winter Olympic medals per existing country (TOP 10)'
    },
    tooltip: {
      outside: true
    },
    pane: {
      size: '85%',
      endAngle: 270
    },
    xAxis: {
      tickInterval: 1,
      labels: {
        align: 'right',
        useHTML: true,
        allowOverlap: true,
        step: 1,
        y: 4,
        style: {
          fontSize: '12px'
        }
      },
      lineWidth: 0,
      categories: [
        'Norway <span class="f16"><span id="flag" class="flag no">' +
        '</span></span>',
        'United States <span class="f16"><span id="flag" class="flag us">' +
        '</span></span>',
        'Germany <span class="f16"><span id="flag" class="flag de">' +
        '</span></span>',
        'Canada <span class="f16"><span id="flag" class="flag ca">' +
        '</span></span>',
        'Austria <span class="f16"><span id="flag" class="flag at">' +
        '</span></span>',
        'Sweden <span class="f16"><span id="flag" class="flag se">' +
        '</span></span>',
        'Switzerland <span class="f16"><span id="flag" class="flag ch">' +
        '</span></span>',
        'Russia <span class="f16"><span id="flag" class="flag ru">' +
        '</span></span>',
        'Netherlands <span class="f16"><span id="flag" class="flag nl">' +
        '</span></span>',
        'Finland <span class="f16"><span id="flag" class="flag fi">' +
        '</span></span>'
      ]
    },
    yAxis: {
      lineWidth: 0,
      tickInterval: 25,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        borderWidth: 0,
        pointPadding: 0,
        groupPadding: 0.15
      }
    },
    series: [{
      name: 'Gold medals',
      data: [132, 105, 92, 73, 64, 57, 55, 47, 45, 43]
    }, {
      name: 'Silver medals',
      data: [125, 110, 86, 64, 81, 46, 46, 38, 44, 63]
    }, {
      name: 'Bronze medals',
      data: [111, 90, 60, 62, 87, 55, 52, 35, 41, 61]
    }]
  };
  threeDColumn = {
    chart: {
      type: 'column',
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        viewDistance: 25,
        depth: 40
      }
    },

    title: {
      text: 'Total fruit consumption, grouped by gender'
    },

    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
      labels: {
        skew3d: true,
        style: {
          fontSize: '16px'
        }
      }
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Number of fruits',
        skew3d: true
      }
    },

    tooltip: {
      headerFormat: '<b>{point.key}</b><br>',
      pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },

    plotOptions: {
      column: {
        stacking: 'normal',
        depth: 40
      }
    },

    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2],
      stack: 'male'
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5],
      stack: 'male'
    }, {
      name: 'Jane',
      data: [2, 5, 6, 2, 1],
      stack: 'female'
    }, {
      name: 'Janet',
      data: [3, 0, 4, 4, 3],
      stack: 'female'
    }]
  };
  constructor() { }

  ngOnInit() {
  }

}
