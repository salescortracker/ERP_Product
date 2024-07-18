import { Component, OnInit } from '@angular/core';
import { CrmRXPriceListService } from 'app/services/crm/crm-rxprice-list.service';
 

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
import { NgxSpinnerService } from 'ngx-spinner';

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
var themeColors = [$info, $success, $success, $danger, $info];
var piecolors=[  $info, $label_color_light, $warning,];
var chartcolors = [$danger, $warning, $success,  $info];



@Component({
  selector: 'app-crm-minndash',
  templateUrl: './crm-minndash.component.html',
  styleUrls: ['./crm-minndash.component.scss']
})
export class CrmMINNDashComponent implements OnInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public creditData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];
  public clearanceData:number[]=[20,20,30,70,40,40,50,10,100,30,50,60];
  barChartOptions : Partial<ChartOptions>;
  
  public customers:any[]=[
     
  
  ];
  constructor() { 
    this.makeCharts();
  }

  ngOnInit(): void {
  }
  makeCharts()
  {
     
    this.barChartOptions = {
      chart: {
        height: 350,
        type: 'bar',
        
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          customIcons: []
        },
         
      },
        
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
          name:"Credit",
        data: this.creditData,
      },
    {
      name:"Clearances",
      data: this.clearanceData,
    } 
      ],
      xaxis: {
        categories:this.turnoverLabels,
        tickAmount: 5
      }
    }
  }
}

