import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { PosDashBoardService } from 'app/services/pos/pos-dash-board.service';
import { NgxSpinnerService } from "ngx-spinner";


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
  selector: 'app-inv-usine-dashboard-opt',
  templateUrl: './inv-usine-dashboard-opt.component.html',
  styleUrls: ['./inv-usine-dashboard-opt.component.scss']
})
export class InvUsineDashboardOptComponent implements OnInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];



public customers:any[]=[
  {
    name:'Relience India',
    busi:250000,
    role:11.2
  },
  {
    name:'Tata Agro Ltd',
    busi:225000,
    role:10.2
  },
  {
    name:'L & T Tools',
    busi:205000,
    role:9.8
  },
  {
    name:'Kalva Engineers',
    busi:195000,
    role:9.3
  },
  {
    name:'Top Ramen',
    busi:145000,
    role: 8.0
  },
  

];


  public pieLabels:string[]=['Blanks','Stock','Consumable'];
  public piedata:number[]=[100,80,70];

  
  barChartOptions : Partial<ChartOptions>;
  pieChartOptions : Partial<ChartOptions>;
  ngOnInit(): void {
  }


  ngAfterViewInit()
  {
    
    this.menu.setMenuDetails('acc');
  }
  constructor(private menu:MenuServiceService,private pod:PosDashBoardService,private spinner: NgxSpinnerService) {
    

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
        name:"Blanks",
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,500,760],
    },
  {
    name:"Stocks",
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,500,760],
  },{
    name:"Consumable",
  data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380,500,760],}
  ],
    xaxis: {
      categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan','Feb','Mar'],
      tickAmount: 5
    }
  }

  this.pieInformation();
  
   }

   showSpinner()
   {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
   }
   hideSpinner()
   {
     this.spinner.hide();
   }

   private pieInformation():void
   {
       this.pieChartOptions = {
      chart: {
        type: 'pie',
        height: 360
      },
      colors: piecolors,
      labels: [],
      series: [],
      legend: {
        itemMargin: {
          horizontal: 2
        },
      },
      responsive: [{
        breakpoint: 576,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
   }

   


   

   

  

}
