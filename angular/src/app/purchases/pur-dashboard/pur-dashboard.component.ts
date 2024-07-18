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
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurDashboardService } from 'app/services/purchases/pur-dashboard.service';

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
var piecolors=[  "#E26EE5", "#7E30E1", "#49108B","#EF4040","#C21292","#DC8686","#00FFD1"];
var chartcolors = [$danger, $warning, $success,  $info];


@Component({
  selector: 'app-pur-dashboard',
  templateUrl: './pur-dashboard.component.html',
  styleUrls: ['./pur-dashboard.component.scss']
})
export class PurDashboardComponent implements OnInit {

  public activesups:number=0;
  public inactivesups:number=0;
 public approvedrequests:number=0;
 public pendingrequests:number=0;
public materialpurchases:number=0;
public otherpurchases:number=0;
public totalcredit:number=0;
public delayedcredit:number=0;
public activeorders:number=0;
public expiredorders:number=0;
public activeordervalue:number=0;
public expiredordervalue:number=0;

  public turnoverLabels:string[]=['Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  public turnoverData:number[]=[30,30,40,50,60,30,70,80,90,30,50,60];

  public piedata:number[]=[1500, 1400, 1200, 1000, 950, 800, 750];
  public pielabels:string[]=['Raw Matrials', 'Products', 'Maintenance', 'Spares','Tools','Home','Others'];


public suppurchases:any[]=[
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


public supcredits:any[]=[
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
 
  
  barChartOptions : Partial<ChartOptions>;
  
  supChartOptions1 : Partial<ChartOptions>;
  supChartOptions2 : Partial<ChartOptions>;
  authCheck:boolean=false;
  pieChartOptions : Partial<ChartOptions>;
  ngOnInit(): void {
  }


  ngAfterViewInit()
  {
    
  //  this.menu.setMenuDetails('acc');
  }
  constructor(private adm:AdminGeneralInfoService, private menu:MenuServiceService,private pur:PurDashboardService,private spinner: NgxSpinnerService) {
    
if(this.adm.screenCheck(2,0,0,1))
{
   this.makeDash();
  // this.makeDash1();
   this.authCheck=true;
  }
  else
  {
    this.authCheck=false;
  }
}
private makeDash()
{
  this.showSpinner();
  this.pur.getPurchaseDashboardDetails().subscribe(res =>
    {
        var det:any=res;
        console.log('Dashboard ',det);


        var det1=det.filter(a => a.typ < 10);
        for(var i=0;i<det1.length;i++)
        {
            switch(det1[i].typ)
            {
              case 1:
                this.activesups= +det1[i].sec;
                this.inactivesups= +det1[i].fir - +det1[i].sec
                break;
              case 2:
                this.approvedrequests=+det1[i].sec;
                this.pendingrequests=+det1[i].fir- +det1[i].sec;
                break;
              case 3:
                this.materialpurchases= +det1[i].fir;
                this.otherpurchases= +det1[i].sec;
                break;
                case 4:
                  this.totalcredit= +det1[i].fir;
                  this.delayedcredit= +det1[i].sec;
                break;
                case 5:
                  this.activeorders= +det1[i].fir-+det1[i].sec;
                  this.expiredorders= +det1[i].sec;
                break;
                case 6:
                  this.activeordervalue= +det1[i].fir-+det1[i].sec;
                  this.expiredordervalue= +det1[i].sec;
                break;
            }
        }

        var det2=det.filter(a => a.typ > 100 && a.typ < 200);
        this.turnoverLabels=[];
        this.turnoverData=[];
        for(var i=0;i<det2.length;i++)
        {
          this.turnoverLabels.push(det2[i].descr);
          this.turnoverData.push(+det2[i].fir);
        }
        var det3=det.filter(a => a.typ > 200 && a.typ < 300)
        this.piedata=[];
        this.pielabels=[];
        for(var i=0;i<det3.length;i++)
        {
          this.piedata.push(det3[i].fir);
          this.pielabels.push(det3[i].descr)
        }
        this.suppurchases=[];
        this.supcredits=[];
        var det4=det.filter(a => a.typ > 300 && a.typ < 400);
        for(var i=0;i<det4.length;i++)
        {
          this.suppurchases.push({
              name:det4[i].descr,
              busi:det4[i].fir
          });
        }
        var det5=det.filter(a => a.typ > 400 && a.typ < 500);
        for(var i=0;i<det5.length;i++)
        {
          this.supcredits.push({
              name:det5[i].descr,
              busi:det5[i].fir
          });
        }
        this.makeDash1();
        this.spinner.hide();
    });
}

  private makeDash1()
  {
     
    this.barChartOptions = {
      chart: {
        height: 350,
        type: 'area',
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
          name:"Purchases",
        data: this.turnoverData,
      }
     
    ],
      xaxis: {
        categories: this.turnoverLabels,
        type: 'category'
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
