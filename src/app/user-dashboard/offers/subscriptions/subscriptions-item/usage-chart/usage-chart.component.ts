import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { IUsage } from '../../../models';
import { Chart } from 'chart.js';
import {
  chartOptions,
  parseOptions
} from "./variables/charts";

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.scss'],
})
export class UsageChartComponent implements AfterViewInit {
  @Input() usage: IUsage;
  @ViewChild('chart') chart: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit(): void {
    const dataset = {
      labels: ['Used', 'Remaining'],
      datasets: [{
         label: this.usage.type ,
         backgroundColor: ['#f5365c', '#324cdd'],
         data: [this.usage.used, this.usage.limit - this.usage.used]
      }],
    };

    parseOptions(Chart, chartOptions());
    const ordersChart = new Chart(this.chart.nativeElement, {
      type: 'pie',
      options: {
        title: {text: this.usage.type},
      },
      data: dataset,
    });
  }
}
