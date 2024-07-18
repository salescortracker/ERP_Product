import { Component, OnInit } from '@angular/core';
 
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurRepOrderManagementService } from 'app/services/purchases/pur-rep-order-management.service';
import { PurRepPurchasesService } from 'app/services/purchases/pur-rep-purchases.service';
import { PurRepStocksService } from 'app/services/purchases/pur-rep-stocks.service';
import { PurRepAnalysisService } from 'app/services/purchases/pur-rep-analysis.service';
const now = new Date();



@Component({
  selector: 'app-pur-rep-analysis-replinishment1',
  templateUrl: './pur-rep-analysis-replinishment1.component.html',
  styleUrls: ['./pur-rep-analysis-replinishment1.component.scss']
})
export class PurRepAnalysisReplinishment1Component implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public prevdays:number=30;
  public nextdays:number=30;
   
  constructor(private pur:PurRepAnalysisService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(2,11,6,0))
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
     
     this.pur.getReplinishment1(this.prevdays,this.nextdays).subscribe(
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

