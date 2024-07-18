import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
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
  selector: 'app-dash-board-comercio',
  templateUrl: './dash-board-comercio.component.html',
  styleUrls: ['./dash-board-comercio.component.scss']
})
export class DashBoardComercioComponent implements OnInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  ngOnInit(): void {
  }
 
  constructor(private menu:MenuServiceService,private router:Router,private adm:AdminGeneralInfoService) { 
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
        data: [100, 80, 45, 32, 34, 52, 41,31, 40, 28, 51, 42]
      }, {
        name: 'Sales',
       
        data: [88, 40, 28, 51, 42, 45, 10,80,70,60,30,40]
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
        case 'acc':
          this.router.navigateByUrl('accounts/accdashboard');
          break;
        case 'inv':
        
         // this.router.navigateByUrl('inventory/invminndashboard');
         this.router.navigateByUrl('inventory/invdashusineopt');
          break;
          case 'pur':
        
            this.router.navigateByUrl('purchases/purdashboard');
            break;
          case 'sal':
            this.router.navigateByUrl('pos/salesdashboard');
            break;
      
          case 'hrd':
          this.router.navigateByUrl('hrd/hrddashboard');
          case 'crm':
            this.router.navigateByUrl('crm/crmdashboard');
          break;
          case 'adm':
            if(this.adm.screenCheck(-1,-1,-1,-1))
            {
              this.router.navigateByUrl('admin/admdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
          break;
      }
    }
    
  
  }
  