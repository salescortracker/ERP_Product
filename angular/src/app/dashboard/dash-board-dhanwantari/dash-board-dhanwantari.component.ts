import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
//import{VerticalMenuComponent} from '../../shared/vertical-menu/vertical-menu.component';
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
import { Observable } from 'rxjs';

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
  selector: 'app-dash-board-dhanwantari',
  templateUrl: './dash-board-dhanwantari.component.html',
  styleUrls: ['./dash-board-dhanwantari.component.scss']
})
export class DashBoardDhanwantariComponent implements OnInit,AfterViewInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  public menuItems$: Observable<any>;
  ngOnInit(): void {
  }
 
  constructor(private menu:MenuServiceService,private router:Router) { 
    this.lineAreaChartOptions = {
      chart: {
        height: 500,
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
        name: 'OP',
        data: [31, 40, 28, 51, 42, 109, 100, 40, 28, 51, 42, 109]
      }, {
        name: 'IP',
        data: [11, 32, 45, 32, 34, 52, 41, 32, 45, 32, 34, 52]
          }
          , {
            name: 'Labs',
            data: [21, 22, 35, 42, 34, 62, 31, 22, 35, 42, 34, 62]
              }
    ],
      legend: {
        offsetY: -1
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
        case 'pos':
       
          this.router.navigateByUrl('pos/posdashboard');
          break;
        case 'frodesk':
          this.router.navigateByUrl('frontdesk/frontdeskdashboard');
          break;
        case 'dinv':
          
          this.router.navigateByUrl('inventory/invminndashboard');
          break;
        case 'acc':
         
          this.router.navigateByUrl('accounts/accdashboard');
          break;
          case 'pur':
         
            this.router.navigateByUrl('purchases/purdashboard');
            break;
      }
    }
    
  
  }
  
