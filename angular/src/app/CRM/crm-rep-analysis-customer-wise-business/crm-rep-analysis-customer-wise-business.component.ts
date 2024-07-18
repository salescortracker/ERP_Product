import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner"; 
import { CrmOrdersRxService } from 'app/services/crm/crm-orders-rx.service';

@Component({
  selector: 'app-crm-rep-analysis-customer-wise-business',
  templateUrl: './crm-rep-analysis-customer-wise-business.component.html',
  styleUrls: ['./crm-rep-analysis-customer-wise-business.component.scss']
})
export class CrmRepAnalysisCustomerWiseBusinessComponent implements OnInit {

  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  
  constructor(private crm:CrmOrdersRxService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(6,7,3,0))
    {
     this.authCheck=true;
    this.listAdd();
    }
    else
    {
     this.authCheck=false;
     this.router.navigateByUrl('fo/unAuthorize');
    }
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
     
     this.crm.getCustomerWiseAnalysis('1-Apr-22','1-Apr-22').subscribe(
       async res => {
         var det:any=res;
         console.log(det);
         this.details=JSON.parse(det.reservations);
        this.pdffile= this.adm.getReportsURL() + det.pdffile;
        this.excelfile= this.adm.getReportsURL() + det.excelfile;
        
       this.spinner.hide(); 
       });
       
   }

  ngOnInit(): void {
  }

}
