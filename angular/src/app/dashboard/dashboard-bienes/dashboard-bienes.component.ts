import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuServiceService } from 'app/services/admin/menu-service.service';

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
var themeColors = [$primary, $warning, $success, $danger, $info];
 

@Component({
  selector: 'app-dashboard-bienes',
  templateUrl: './dashboard-bienes.component.html',
  styleUrls: ['./dashboard-bienes.component.scss']
})
export class DashboardBienesComponent implements OnInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  ngOnInit(): void {
  }
 
  constructor(private menu:MenuServiceService,private router:Router) { 
    this.lineAreaChartOptions = {
      chart: {
        height: 450,
        type: 'area',
      },
      colors: themeColors,
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      series: [{
        name: 'Purchases',
        data: [11, 32, 45, 32, 34, 52, 41,31, 40, 28, 51, 42]
      }, {
        name: 'Sales',
       
        data: [31, 40, 28, 51, 42, 109, 100,80,70,90,30,40]
          }
        
    ],
      legend: {
        offsetY: -10
      },
      xaxis: {
        type: 'category',
        categories: ["Apr", "May", "Jun",
          "Jul", "Aug", "Sep",
          "Oct","Nov","Dec","Jan","Feb","Mar"
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }
  }
  
  
  ngAfterViewInit():void
  {
    //this.menu.setMenuDetails('');
  }
  
  
  
  
    onResized(event: any) {
      setTimeout(() => {
        this.fireRefreshEventOnWindow();
      }, 300);
    }
  
    fireRefreshEventOnWindow = function () {
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent("resize", true, false);
      window.dispatchEvent(evt);
    };
  
    public setModule(str)
    {
     
      switch(str)
      {
         
        case 'inv':
        
          this.router.navigateByUrl('inventory/invminndashboard');
          break;
          case 'pur':
        
            this.router.navigateByUrl('purchases/purdashboard');
            break;
          case 'sal':
            this.router.navigateByUrl('pos/salesdashboard');
            break;
      
          
      }
    }
    
  
  }
  