import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
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
  selector: 'app-dashboard-real',
  templateUrl: './dashboard-real.component.html',
  styleUrls: ['./dashboard-real.component.scss']
})
export class DashboardRealComponent implements OnInit,AfterViewInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  public menuItems$: Observable<any>;
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
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Sales',
        data: [11, 32, 45, 32, 34, 52, 41]
          }
          
    ],
      legend: {
        offsetY: -10
      },
      xaxis: {
        type: 'category',
        categories: ["Apr", "May", "Jun",
          "Jul", "Aug", "Sep",
          "Oct"
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
        case 'ven':
          this.router.navigateByUrl('venture/venturedashboard');
          break;
        case 'pur': 
         
             this.router.navigateByUrl('purchases/purdashboard');
          break;
        case 'dinv':
        if(this.adm.getUserCompleteInformation().usr.cCode==11120)
        {
          this.router.navigateByUrl('inventory/invdashusineopt');
          
        }
        else
{
  this.router.navigateByUrl('inventory/invdashusine');
}

         
          break;
        case 'acc':
          this.router.navigateByUrl('accounts/accdashboard');
          break;
          case 'hrd':
        //  this.router.navigateByUrl('hrd/hrddashboard');
          break;
          case 'adm':
            if(this.adm.screenCheck(-1,-1,-1,-1))
            {
              this.router.navigateByUrl('admin/admdashboard');
            }
          
          break;
        case 'crm':
          if(this.adm.screenCheck(7,0,0,0))
          {
          //  this.router.navigateByUrl('crm/crmdashboardbla');
          }
          break;
      }
    }
    
  
  }
  
