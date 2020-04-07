import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Project A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Project B'},
    {data: [40, 70, 10, 50, 15, 87, 50], label: 'Project C'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
