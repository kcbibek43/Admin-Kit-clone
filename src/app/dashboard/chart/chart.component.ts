import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data: [ 2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917,3321],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'DodgerBlue',
        backgroundColor: 'rgb(123,216,235)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

}
