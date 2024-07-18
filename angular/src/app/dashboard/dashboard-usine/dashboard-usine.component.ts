import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { DashBoardCompleteService } from 'app/services/dashboard/dash-board-complete.service';
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
  selector: 'app-dashboard-usine',
  templateUrl: './dashboard-usine.component.html',
  styleUrls: ['./dashboard-usine.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardUsineComponent implements OnInit,AfterViewInit {
  lineAreaChartOptions : Partial<ChartOptions>;
  public menuItems$: Observable<any>;
  pCode:string='';
  public usrname:string='';
  public bytearrays:any[]=[];
  public bytearray:any;
  public fileNames:any[]=[];
  public files:File[]=[];
  public fileobj:any;
  public fileReqObj:any;
  public NewfileReqObj:any[]=[];
filename: any = '';
fileevent: any;

public usersList:any[]=[];


  ngOnInit(): void {
  }
  constructor(private menu:MenuServiceService,
    private dashboard:DashBoardCompleteService,
    private modalService: NgbModal,private router:Router,private adm:AdminGeneralInfoService) { 
    this.usrname=this.adm.getUserCompleteInformation().usr.uCode;
    this.dashboard.getCompleteUsers().subscribe(res =>
      {
        var det:any=res;
        for(var i=0;i<det.length;i++)
        {
          this.usersList.push({
              usercode:det[i].usrName,
              username:det[i].roleName
          });
        }
      })
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

       
openModal(customContent) {
  this.bytearrays=[];
  this.fileNames=[];
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false,
    windowClass:'terms-model'
};
   this.modalService.open(customContent,ngbModalOptions);
  }
  convertDataURIToBinary(dataURI) {
    var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array:any = new Uint8Array(new ArrayBuffer(rawLength));
   // var array:number[]=[];
    
    for(var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }
  public onSelectFile(e)
{
   
  if(e.target.files)
  {
    var reader= new FileReader();
    var fi=e.target.files[0];
    this.fileevent = e;
    this.UploadAttach();
    this.files.push(e.target.files[0]);
    for(var i=0;i<e.target.files.length;i++)
    {
    reader.readAsDataURL(e.target.files[i]);
    reader.onload=(event:any)=>
      {
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
  }
}

UploadAttach() {
  var filedata: any = document.getElementById("upload");
  if (filedata.files.length > 0) {
    const file = filedata.files[0];
    this.filename = file.name;
    var type = this.filename.split('.')[this.filename.split('.').length - 1];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileobj = reader.result;
      var splitfile = this.fileobj.split(',');
      this.fileobj = splitfile[1];
      debugger
      if (type.toUpperCase() == 'JPG' || type.toUpperCase() == 'PNG' || type.toUpperCase() == 'TXT' || type.toUpperCase() == 'PDF' || type.toUpperCase() == 'XLS' || type.toUpperCase() == 'XLSX' || type.toUpperCase() == 'JPG' || type.toUpperCase() == 'JPEG' || type.toUpperCase() == 'GIF') {
        this.fileReqObj = {
          "Filename": this.filename,
          "ContentType": 'application/' + type,
          "Contents": this.fileobj,
          "FileType": type,
          "MsgID": "",
          "Private": false,
          "Public": true,
          "Description": this.filename,
        }
        this.NewfileReqObj.push(this.fileReqObj);
         
      }  
    };
  }
}
public postDetails()
{
  var req = {
    "postinfo":'Ravi is a bad boy',
    "imgs": this.NewfileReqObj ? this.NewfileReqObj : null
  };
  this.dashboard.uploadFiles(req).subscribe((res: any) => {
    setTimeout(() => {
      
    }, 1000); 
    
  }, (error: any) => {
     alert(error);
  });
}
 
  
    public setModule(str)
    {
     
      switch(str)
      {
        case 'acc':
            if(this.adm.screenCheck(1,0,0,0))
            {
              this.router.navigateByUrl('accounts/accdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
          break;
          case 'pur':
            if(this.adm.screenCheck(2,0,0,0))
            {
              this.router.navigateByUrl('purchases/purdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
          break;
          case 'crm':
          if(this.adm.screenCheck(7,0,0,0))
          {
            this.router.navigateByUrl('crm/crmdashboard');
          }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
            break;
        case 'pro':
          if(this.adm.screenCheck(10,0,0,0))
          {
            this.router.navigateByUrl('production/dashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Authorize',4);
          }
          break;
        case 'qc':
          if(this.adm.screenCheck(11,0,0,0))
          {
            this.router.navigateByUrl('qc/dashboard');
          }
          else
          {
            this.adm.showMessage('You are not authorised to view this module','Authorize',4);
          }
          break;
          case 'inv':
            if(this.adm.screenCheck(3,0,0,0))
            {
              this.router.navigateByUrl('inventory/invdashusine');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
            }
            break;
          case 'sale':
            if(this.adm.screenCheck(3,0,0,0))
            {
              this.router.navigateByUrl('pos/salesdashboard');
            }
            else
            {
              this.adm.showMessage('You are not authorised to view this module','Authorize',4);
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
              break;
        
              case 'mai':
                if(this.adm.screenCheck(9,0,0,0))
                {
                  this.router.navigateByUrl('maintenance/maindashboard');
                }
                else
                {
                  this.adm.showMessage('You are not authorised to view this module','Authorize',4);
                }
                break;
            case 'ana1':
              if(this.adm.screenCheck(99,0,0,0))
              {
                this.router.navigateByUrl('analysis/anadashboard');
              }
              else
              {
                this.adm.showMessage('You are not authorised to view this module','Authorize',4);
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
  