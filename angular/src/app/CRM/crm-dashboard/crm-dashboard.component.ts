import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmDashboardService } from 'app/services/crm/crm-dashboard.service';
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
var piecolors=[ $danger,$success, $info, $warning,  $label_color_light, $warning,];
var chartcolors = [  $info];



@Component({
  selector: 'app-crm-dashboard',
  templateUrl: './crm-dashboard.component.html',
  styleUrls: ['./crm-dashboard.component.scss']
})
export class CrmDashboardComponent implements OnInit {
  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[3,4,5,6,7,8,9,10,11,12,13,14];
  barChartOptions : Partial<ChartOptions>;
  pieChartOptions : Partial<ChartOptions>;
  
  public piedata:number[]=[1500, 1400, 1700, 1000 ];
  public pielabels:string[]=['Emp1', 'Emp2', 'Emp3', 'Emp4'];


  public target1:number=0;
  public target2:number=0;
  public target:number=0;
public calls1:number=0;
public calls2:number=0;
public calls:number=0;
public credits1:number=0;
public credits2:number=0;

  public telecalls:any;
  public enquiries:any;
  public authCheck:boolean=false;
  constructor(private crm:CrmDashboardService,private adm:AdminGeneralInfoService,private spinner: NgxSpinnerService) { 
    if(this.adm.screenCheck(2,0,0,1))
{
   this.makeDash();
  // this.makeDash1();
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.crm.getPendingCalls().subscribe(res =>
      {
          var det:any=res;
          this.telecalls=det.filter(a => a.mode=="1");
          this.enquiries=det.filter(a => a.mode=="2");
          console.log(det,'pendings');
          this.spinner.hide();
      });
   this.authCheck=true;
  }
  else
  {
    this.authCheck=false;
  }
   
    }

    private makeDash()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      this.crm.getCRMDashboard().subscribe(res =>
        {
          var det:any=res;
          console.log(det);
          if(det)
          {
          var firstdetails=det.filter(a => a.typ < 10);
          for(var i=0;i < firstdetails.length;i++)
          {
            switch(firstdetails[i].typ)
            {
              case 1:
                  this.target1=firstdetails[i].fir;
                  this.target2=firstdetails[i].sec;
                break;
              
              case 2:
                this.calls1=firstdetails[i].fir;
                this.calls2=firstdetails[i].sec;
                break;
                case 3:
                  this.target=firstdetails[i].fir;
                  this.calls=firstdetails[i].sec;
                  break;
              case 4:
                this.credits1=firstdetails[i].fir;
                this.credits2=firstdetails[i].sec;
            }
          }


          this.turnoverLabels=[];
          this.turnoverData=[];
          var seconddetails=det.filter(a => a.typ > 100 && a.typ < 200);
          for(var i=0;i<seconddetails.length;i++)
          {
            this.turnoverLabels.push(seconddetails[i].descr);
            this.turnoverData.push(seconddetails[i].fir);
          }

          this.pielabels=[];
          this.piedata=[];
          var thirddetails=det.filter(a => a.typ > 200 && a.typ < 300);
          for(var i=0;i<thirddetails.length;i++)
          {
            this.pielabels.push(thirddetails[i].descr);
            this.piedata.push(thirddetails[i].fir)

          }

          this.makeDash1();
        }
        else
        {
          this.makeDash1();
        }
  this.spinner.hide();
        });
    }

  ngOnInit(): void {
  }
  makeDash1()
  {
     
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
          name:"Orders",
        data: this.turnoverData,
      },
     
    ],
      xaxis: {
        categories: this.turnoverLabels,
        tickAmount: 5
      }
    }
    this.pieInformation();
  }


  private pieInformation():void
  {
   this.pieChartOptions = {
     chart: {
       type: 'pie',
       height: 320
     },
     colors: piecolors,
     labels: this.pielabels,
     series: this.piedata,
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
