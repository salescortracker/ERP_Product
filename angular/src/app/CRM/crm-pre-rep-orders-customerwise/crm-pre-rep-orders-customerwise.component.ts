import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { CrmPreSaleReportsService } from 'app/services/crm/crm-pre-sale-reports.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
const now = new Date();


@Component({
  selector: 'app-crm-pre-rep-orders-customerwise',
  templateUrl: './crm-pre-rep-orders-customerwise.component.html',
  styleUrls: ['./crm-pre-rep-orders-customerwise.component.scss']
})
export class CrmPreRepOrdersCustomerwiseComponent implements OnInit {

  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public customers:any;
public cusdetail:any={
  recordId:0,
  partyName:'',
  
};
  constructor( private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,
    private cus:PartyDetailsService,private crm:CrmPreSaleReportsService
   ) { 
    if(this.adm.screenCheck(7,9,2,0))
    {
     this.authCheck=true;
     this.cus.getPartyDetails("CUS").subscribe(res =>
      {
        var det:any=res;
        this.customers=det.parties;
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
    
    this.crm.getCustomerWiseOrders(+this.cusdetail.recordId, this.adm.strDate(this.fromdate),this.adm.strDate(this.todate)).subscribe(
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
