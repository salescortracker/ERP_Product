import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurRepOrderManagementService } from 'app/services/purchases/pur-rep-order-management.service';
import { PurRepPurchasesService } from 'app/services/purchases/pur-rep-purchases.service';
import { PurRepStocksService } from 'app/services/purchases/pur-rep-stocks.service';
const now = new Date();


@Component({
  selector: 'app-sal-rep-customer-wise-consolidated',
  templateUrl: './sal-rep-customer-wise-consolidated.component.html',
  styleUrls: ['./sal-rep-customer-wise-consolidated.component.scss']
})
export class SalRepCustomerWiseConsolidatedComponent implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  constructor(private pur:PurRepStocksService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(2,11,5,0))
    {
     this.authCheck=true;
    //this.listAdd();
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
     
     this.pur.getItemWiseConsolidations(this.adm.strDate(this.fromdate),this.adm.strDate(this.todate)).subscribe(
       async res => {
         var det:any=res;
         console.log(det);
         if(det)
         {
         this.details=det.details1;
        this.pdffile= this.adm.getReportsURL() + det.pdfFile;
        this.excelfile= this.adm.getReportsURL() + det.excelFile;
         }
        
       this.spinner.hide(); 
       });
       
   }

  ngOnInit(): void {
  }

}

