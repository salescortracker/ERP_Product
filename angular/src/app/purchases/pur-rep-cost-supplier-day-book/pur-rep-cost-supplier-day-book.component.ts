import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurRepOrderManagementService } from 'app/services/purchases/pur-rep-order-management.service';
import { PurRepPurchasesService } from 'app/services/purchases/pur-rep-purchases.service';
import { PurRepCostingsService } from 'app/services/purchases/pur-rep-costings.service';
const now = new Date();


@Component({
  selector: 'app-pur-rep-cost-supplier-day-book',
  templateUrl: './pur-rep-cost-supplier-day-book.component.html',
  styleUrls: ['./pur-rep-cost-supplier-day-book.component.scss']
})
export class PurRepCostSupplierDayBookComponent implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
   
  constructor(private pur:PurRepCostingsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(2,11,4,0))
    {
     this.authCheck=true;
     }
    else
    {
     this.authCheck=false;
     this.router.navigateByUrl('purchases/unAuthorize');
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
     
     var dett=this.adm.strDate(this.fromdate);
     this.pur.getSupplierDayBook(dett,dett).subscribe(
       async res => {
         var det:any=res;
         console.log(det);
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

