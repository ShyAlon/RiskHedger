import {Component} from '@angular/core';
import {NgModel} from '@angular/forms';
import { CHART_DIRECTIVES } from 'angular2-highcharts';
import { Highcharts } from 'angular2-highcharts';
import {AlertComponent, DATEPICKER_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'simple-chart-example',
  directives: [AlertComponent, CHART_DIRECTIVES, NgModel],
  templateUrl: './app/views/new.component.html',
})
export class NewComponent {
  public options = {};

  normalized(): number {
    var res = 0;
    for(var i = 0; i < 16; i++){
      res = res + Math.random() - 0.50001;
    }
    return res / 32;
  }

  createVlues(): Array<string | number> {
    var values = [];
    var lastValue = 0.7 + Math.random()
    var time = new Date().getTime();
    for (var i = 0; i < 4096; i++) {
      lastValue = lastValue + this.normalized();
      values.push([new Date(time + i * 360000), lastValue]);
    }
    return values;
  }

  constructor() {


    this.options = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: 'USD to EUR exchange rate over time'
      },
      subtitle: {
        text: document.ontouchstart === undefined ?
          'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Exchange rate'
        }
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [1, Highcharts.getOptions().colors[1]]
            ]
          },
          marker: {
            radius: 2
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          threshold: null
        }
      },

      series: [{
        type: 'area',
        name: 'USD to EUR',
        data: this.createVlues()
      }]
    };

  };
}