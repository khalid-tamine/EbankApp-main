import { Component, ViewChild, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: any | ApexAxisChartSeries;
  chart: any | ApexChart;
  dataLabels: any |ApexDataLabels;
  plotOptions:any | ApexPlotOptions;
  title: any | ApexTitleSubtitle;
  xaxis: any | ApexXAxis;
  yaxis:any | ApexYAxis | ApexYAxis[];
};

@Component({
  selector: 'app-customers-by-city',
  templateUrl: './customers-by-city.component.html',
  styleUrls: ['./customers-by-city.component.scss']
})
export class CustomersByCityComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }
      ],
      chart: {
        type: "bar",
        height: 400,
        
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Customers Per City"
      },
      xaxis: {
        title: {
          text: "Number of Customers"
        },
        categories: [
          "Ben Guerir",
          "Agadir",
          "Tanger",
          "Settat",
          "Kenitra",
          "Fes",
          "Meknes",
          "Marrakech",
          "Rabat",
          "Casablanca",
        ]
      },
      yaxis: [
        {
          title: {
            text: "Cities Names"
          }
        },
      ]
    };
  }

  ngOnInit(): void {
  }

}
