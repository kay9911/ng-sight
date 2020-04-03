import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65,59,80,81,56,54,30], label: 'Fall Sales'},
  { data: [100,200,300,400,500,600,700], label: 'Winter Sales'}
];

const SAMPLE_BARCHART_LABELS: Label[] = [
  'W1','W2','W3','W4','W5','W6','W7'
];

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: Label[] = SAMPLE_BARCHART_LABELS;
  public barChartType = "bar";
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
  }

}
