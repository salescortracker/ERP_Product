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
var themeColors = [$primary, $danger, $success, $danger, $info];
var piecolors=[  $info, $label_color_light, $warning,];
var chartcolors = [$danger, $warning, $success,  $info];



@Component({
  selector: 'app-crmdash-board-blanks',
  templateUrl: './crmdash-board-blanks.component.html',
  styleUrls: ['./crmdash-board-blanks.component.scss']
})
export class CRMDashBoardBlanksComponent implements OnInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];
public dashboard:any=
{
  monthlyrx:0,
  monthlystock:0,
  annualrx:0,
  annualstock:0,
  turnover:[]
}


  public customers:any[]=[
     
  
  ];
  

  barChartOptions : Partial<ChartOptions>;
  constructor(private spinner: NgxSpinnerService,private crm:CrmRXPriceListService) { 
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.crm.getCRMRXDashboard().subscribe(res => 
      {
          var det:any=res;
          this.dashboard.monthlyrx=det.monthly;
          this.dashboard.annualrx=det.annual;
          this.dashboard.turnover=det.turnovers;
          this.makeCharts();
          this.spinner.hide();
      });


  }
makeCharts()
{
  var lables:any[]=[];
  var data1:any[]=[];
  var data2:any[]=[];
  for(var i=0;i<this.dashboard.turnover.length;i++)
  {
    lables.push(this.dashboard.turnover[i].monthname);
    data1.push(this.dashboard.turnover[i].valu);
    data2.push(0);
  }
  this.barChartOptions = {
    chart: {
      height: 350,
      type: 'line',
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
        name:"Blanks",
      data: data1,
    },
  {
    name:"Stocks",
    data: data2,
  } 
  ],
    xaxis: {
      categories: lables,
      tickAmount: 5
    }
  }
}
  ngOnInit(): void {
  }

}
