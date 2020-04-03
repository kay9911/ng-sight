import { Component, OnInit, ɵbypassSanitizationTrustStyle } from '@angular/core';
import { Label } from 'ng2-charts';
import { LINE_CHART_COLORS } from '../../shared/chart.colors';

const LINE_CHART_SAMPLE_DATA: any[] = 
[
  {data: [123,12,22,44,33,22,55,74,11], label: 'Sentiment Analysis Package'},
  {data: [123,145,22,44,33,22,55,74,11], label: 'Forcasting'},
  {data: [123,12,225,44,33,23,35,21,11], label: 'Sleeping'},
];

const LINE_CHART_LABELS: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData = LINE_CHART_SAMPLE_DATA;
  lineChartLabels = LINE_CHART_LABELS;
  lineChartOptions: any = {
    respnsive: true,
    maintainAspectRatio: false
  };
  lineChartLegend: true;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;

  ngOnInit(): void {
  }

}
