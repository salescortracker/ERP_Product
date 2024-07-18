import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmKeyReportsService } from 'app/services/crm/crm-key-reports.service';
import { CrmPreSaleReportsService } from 'app/services/crm/crm-pre-sale-reports.service';
 


@Component({
  selector: 'app-crm-pre-rep-orders-pending',
  templateUrl: './crm-pre-rep-orders-pending.component.html',
  styleUrls: ['./crm-pre-rep-orders-pending.component.scss']
})
export class CrmPreRepOrdersPendingComponent implements OnInit {
  public details:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private ckey:CrmPreSaleReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(7,9,2,0))
     {
      this.listAdd();
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('crm/crmunauthorize');
     }
     
   }

  ngOnInit(): void {
  }
  listAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    
    this.ckey.getListofPendingOrders().subscribe(
      async res => {
        var det:any=res;
        this.details=det.details;
       this.pdffile=this.adm.getReportsURL() + det.pdfFile;
       this.excelfile=this.adm.getReportsURL() + det.excelFile;
       
      this.spinner.hide(); 
      console.log(det);
      });
      
  }
  makePdf()
{
  this.adm.makePdf(this.pdffile);
}
makeExcel()
{
this.adm.makeExcel(this.excelfile);
}
}
