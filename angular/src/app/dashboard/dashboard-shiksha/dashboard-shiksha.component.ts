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
var themeColors2 = [$warning, $success, $danger, $info,$primary];
var themeColors3 = [$success, $danger, $info,$primary,$warning];
var themeColors4 = [$danger, $info,$primary,$warning,$success];



@Component({
  selector: 'app-dashboard-shiksha',
  templateUrl: './dashboard-shiksha.component.html',
  styleUrls: ['./dashboard-shiksha.component.scss']
})
export class DashboardShikshaComponent implements OnInit,AfterViewInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  radialBarChartOptions : Partial<ChartOptions>;
  radialBarChartOptions2 : Partial<ChartOptions>;
  radialBarChartOptions3 : Partial<ChartOptions>;
  radialBarChartOptions4 : Partial<ChartOptions>;
  public admissionValues:number[]=[85];
  public admissionLables:string[]=['Achieved'];

  public termFeeValues:number[]=[75];
  public termFeeLables:string[]=['Collected'];

  public totalFeeValues:number[]=[35];
  public totalFeeLables:string[]=['Collected'];

  public otherFeeValues:number[]=[50];
  public otherFeeLables:string[]=['Collected'];

  public staff:any[]=[
    {
      name:'Ravi',
      desig:'Sr Teacher',
      department:'Maths'
    },
    {
      name:'Uma Devi',
      desig:'Maid',
      department:'Cleaning'
    },
    {
      name:'Rajesh',
      desig:'Behaviour Therapist',
      department:'Psychology'
    },
    

  ];
  public students:any[]=[
  {
      admissionno:'101',
      name:'Kasyap Ch',
      class:'7',
      section:'A'
  },

 {
      admissionno:'127',
      name:'Ramesh S',
      class:'9',
      section:'B'
  },
];

  public menuItems$: Observable<any>;
  ngOnInit(): void {
  }
 
  constructor(private menu:MenuServiceService,private router:Router,private adm:AdminGeneralInfoService) { 

    this.admissions();
    this.termFeeDets();
    this.totalFeeDets();
    this.otherFeeDets();
  }
  
  
  ngAfterViewInit():void
  {
    //this.menu.setMenuDetails('');
  }
  
  admissions()
  {
 
    this.radialBarChartOptions = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: themeColors,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '18px',
            },
            value: {
              fontSize: '14px',
            },
            total: {
              show: true,
              label: 'Acheived',
               /* formatter: function (w) {
                return this.admissionValues
              }*/
            }
          }
        }
      },
      series: [1],
      labels: ['Achieved'],
    }
  }
  

  termFeeDets()
  {
    this.radialBarChartOptions2 = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: themeColors2,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '18px',
            },
            value: {
              fontSize: '14px',
            },
            total: {
              show: true,
              label: 'Collected',
               /* formatter: function (w) {
                return this.admissionValues
              }*/
            }
          }
        }
      },
      series: [1],
      labels: ['Collected'],
    }
  }
  
  totalFeeDets()
  {
    this.radialBarChartOptions3 = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: themeColors3,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '18px',
            },
            value: {
              fontSize: '14px',
            },
            total: {
              show: true,
              label: 'Collected',
               /* formatter: function (w) {
                return this.admissionValues
              }*/
            }
          }
        }
      },
      series: [1],
      labels: ['Collected'],
    }
  }
  otherFeeDets()
  {
  
    this.radialBarChartOptions4 = {
      chart: {
        height: 250,
        type: 'radialBar',
      },
      colors: themeColors4,
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '18px',
            },
            value: {
              fontSize: '14px',
            },
            total: {
              show: true,
              label: 'Collected',
               /* formatter: function (w) {
                return this.admissionValues
              }*/
            }
          }
        }
      },
      series: [1],
      labels: ['Collected'],
    }
  
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
        case 'frd': 
         if(this.adm.screenCheck(7,0,0,0))
         {
            this.router.navigateByUrl('frontdesk/frontshiksha');
         }
         else
         {
           this.adm.showMessage('You are not authorised to view this module','Warning',2);
         }
        break;
        case 'stu':
          if(this.adm.screenCheck(6,0,0,0))
          {
          this.router.navigateByUrl('student/studentdashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Warning',2);
          }
        break;
        case 'act':
          if(this.adm.screenCheck(6,100,100,0))
          {
          this.router.navigateByUrl('activity/activitydashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Warning',2);
          }
          break;
          case 'lib':
            if(this.adm.screenCheck(3,0,0,0))
            {
            this.router.navigateByUrl('library/libdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Warning',2);
            }
            break;
            case 'veh':
              if(this.adm.screenCheck(9,0,0,0))
              {
              this.router.navigateByUrl('vehicle/vehicledashboard');
              }
              else
              {
                this.adm.showMessage('You are not authorised to view this module','Warning',2);
              }
              break;
              case 'hos':
                if(this.adm.screenCheck(5,0,0,0))
                {
                this.router.navigateByUrl('hostel/hosteldashboard');
                }
                else
                {
                  this.adm.showMessage('You are not authorised to view this module','Warning',2);
           
                }
                break;
                case 'hrd':
                  if(this.adm.screenCheck(8,0,0,0))
                  {
                    this.router.navigateByUrl('hrd/hrddashboard');
                  }
                  else
                  {
                    this.adm.showMessage('You are not authorised to view this module','Authorize',4);
                  }
               

        case 'inv':
          if(this.adm.screenCheck(2,0,0,0))
          {
          this.router.navigateByUrl('inventory/invshikshadash');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Authorize',4);
          }
         
          break;
        case 'acc':
          if(this.adm.screenCheck(1,0,0,0))
          {
          this.router.navigateByUrl('accounts/accdashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view accounts','Authorize',4);
          }
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
  