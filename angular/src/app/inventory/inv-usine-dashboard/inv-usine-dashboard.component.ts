import { Component, OnInit } from '@angular/core';



import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexDataLabels,
  ApexStroke,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexTheme,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  colors: string[],
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[],
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels,
  stroke: ApexStroke,
  grid: ApexGrid,
  legend?: ApexLegend,
  tooltip?: ApexTooltip,
  plotOptions?: ApexPlotOptions,
  labels?: string[],
  fill: ApexFill,
  markers?: ApexMarkers,
  theme: ApexTheme,
  responsive: ApexResponsive[]
};

var $primary = "#975AFF",
  $success = "#40C057",
  $info = "#2F8BE6",
  $warning = "#F77E17",
  $danger = "#F55252",
  $label_color_light = "#E6EAEE";
var themeColors = [$primary, $danger, $success, $danger, $info];
var piecolors=[  $info, $label_color_light, $warning,];
var chartcolors = [$danger, $warning, $success,  $info];

@Component({
  selector: 'app-inv-usine-dashboard',
  templateUrl: './inv-usine-dashboard.component.html',
  styleUrls: ['./inv-usine-dashboard.component.scss']
})
export class InvUsineDashboardComponent implements OnInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];

  public abcLabels:string[]=['A','B','C'];
  public abcData:number[]=[120,41.8,30];
  public abcChartOptions:Partial<ChartOptions>;


  barChartOptions : Partial<ChartOptions>;
  pieChartOptions : Partial<ChartOptions>;



  constructor() {
    
   this.barChartOptions = {
    chart: {
      height: 350,
      type: 'bar',
    },
    colors: themeColors,
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name:"Production",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,500,760],
    },
  {
    name:"Maintenance",
    data: [300, 330, 548, 370, 440, 280, 690, 900, 300, 180,400,560],
  },{
    name:"Others",
  data: [100, 230, 148, 270, 140, 180, 390, 400, 500, 680,300,460],}
  ],
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan','Feb','Mar'],
      tickAmount: 5
    }
  }



    
  this.abcChartOptions = {
    chart: {
      height: 350,
      type: 'area',
    },
    colors: piecolors,
    plotOptions: {
      bar: {
        horizontal: false,
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name:"ABC",
      data: this.abcData,
    },
  
  ],
    xaxis: {
      categories: ['A', 'B', 'C'],
      tickAmount: 5
    }
  }




   }

  ngOnInit(): void {
  }

}
