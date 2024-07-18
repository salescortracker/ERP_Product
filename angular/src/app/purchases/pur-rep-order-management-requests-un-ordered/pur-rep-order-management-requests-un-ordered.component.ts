import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurRepOrderManagementService } from 'app/services/purchases/pur-rep-order-management.service';
const now = new Date();

@Component({
  selector: 'app-pur-rep-order-management-requests-un-ordered',
  templateUrl: './pur-rep-order-management-requests-un-ordered.component.html',
  styleUrls: ['./pur-rep-order-management-requests-un-ordered.component.scss']
})
export class PurRepOrderManagementRequestsUnOrderedComponent implements OnInit {

  public details:any;
  public pdffile:string='';
  public excelfile:string='';
   
  public authCheck:boolean=false;
  public chk:boolean=true; 
  constructor(private pur:PurRepOrderManagementService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(2,11,2,0))
    {
     this.authCheck=true;
     this.listAdd();
     }
    else
    {
     this.authCheck=false;
     this.router.navigateByUrl('purchases/purunauthorize');
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
     
     this.pur.getPurUnorderedRequests(this.chk?1:0).subscribe(
       async res => {
         var det:any=res;
           if(det)
         {
         this.details=det.details;
        this.pdffile= this.adm.getReportsURL() + det.pdfFile;
        this.excelfile= this.adm.getReportsURL() + det.excelFile;
         }
        
       this.spinner.hide(); 
       });
       
   }

  ngOnInit(): void {
  }

}
