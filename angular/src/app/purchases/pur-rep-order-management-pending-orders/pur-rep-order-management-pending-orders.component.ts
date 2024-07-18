import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';
const now = new Date();

@Component({
  selector: 'app-pur-rep-order-management-pending-orders',
  templateUrl: './pur-rep-order-management-pending-orders.component.html',
  styleUrls: ['./pur-rep-order-management-pending-orders.component.scss']
})
export class PurRepOrderManagementPendingOrdersComponent implements OnInit {

  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  constructor( private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(2,11,2,0))
    {
     this.authCheck=true;
    //this.listAdd();
    }
    else
    {
     this.authCheck=false;
     this.router.navigateByUrl('purchases/purunauthorize');
    }
   }
   listAdd()
   {
     
       
   }

  ngOnInit(): void {
  }

}
