import { Component, OnInit, ViewChild} from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series:any | ApexNonAxisChartSeries;
  chart:any | ApexChart;
  responsive:any | ApexResponsive[];
  labels:any | any;
  title:any | ApexTitleSubtitle;
};

@Component({
  selector: 'app-transaction-per-age',
  templateUrl: './transaction-per-age.component.html',
  styleUrls: ['./transaction-per-age.component.scss']
})
export class TransactionPerAgeComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13,10],
      labels: ["Age more then 40 ","Age between 30-40", "Age between 20-30", "Age between 18-20"],
      chart: {
        height: 280,
        type: "donut"
      },
      
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        text: "Transactions per age range"
      },
    };
  }

  ngOnInit(): void {
  }

}
