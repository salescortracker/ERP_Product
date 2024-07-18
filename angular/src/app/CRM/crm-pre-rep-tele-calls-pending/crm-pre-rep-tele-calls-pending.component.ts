import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmKeyReportsService } from 'app/services/crm/crm-key-reports.service';
import { CrmPreSaleReportsService } from 'app/services/crm/crm-pre-sale-reports.service';
 

@Component({
  selector: 'app-crm-pre-rep-tele-calls-pending',
  templateUrl: './crm-pre-rep-tele-calls-pending.component.html',
  styleUrls: ['./crm-pre-rep-tele-calls-pending.component.scss']
})
export class CrmPreRepTeleCallsPendingComponent implements OnInit {
  public details:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private crm:CrmPreSaleReportsService,private adm:AdminGeneralInfoService,
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
    
    this.crm.getTeleCallsPending().subscribe(
      async res => {
        var det:any=res;
        this.details=det.details;
       this.pdffile=this.adm.getReportsURL() + det.pdfFile;
       this.excelfile=this.adm.getReportsURL() + det.excelFile;
       
      this.spinner.hide(); 
       
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
