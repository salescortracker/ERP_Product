import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { PurRepPurchasesService } from 'app/services/purchases/pur-rep-purchases.service';
import { PurRepCostingsService } from 'app/services/purchases/pur-rep-costings.service';
const now = new Date();


@Component({
  selector: 'app-pur-rep-cost-supplier-ledger',
  templateUrl: './pur-rep-cost-supplier-ledger.component.html',
  styleUrls: ['./pur-rep-cost-supplier-ledger.component.scss']
})
export class PurRepCostSupplierLedgerComponent implements OnInit {

  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public suppliers:any;
public supdetail:any={
  accountId:0,
  accountname:'',
  address:'',
  country:'',
  stat:'',
  district:'',
  city:'',
  zip:'',
  mobile:'',
  tel:'',
  fax:'',
  email:'',
  webid:''
};
  constructor( private adm:AdminGeneralInfoService,private pur:PurRepCostingsService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private ino:InvPurchaseOrderService,
   ) { 
    if(this.adm.screenCheck(6,7,4,0))
    {
     this.authCheck=true;
     this.ino.GetInvPurchaseOrderRequirements().subscribe(res =>
      {
        var det:any=res;
        this.suppliers=det.suppliers;
      });
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
    
    this.pur.getSupplierLedger(+this.supdetail.accountId,this.adm.strDate(this.fromdate),this.adm.strDate(this.todate)).subscribe(
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
