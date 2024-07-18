import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PurPurchaseEnquiryService } from 'app/services/purchases/pur-purchase-enquiry.service';
import { PurPurchaseQuotationService } from 'app/services/purchases/pur-purchase-quotation.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { json } from 'ngx-custom-validators/src/app/json/validator';
import { CrmQuotationService } from 'app/services/crm/crm-quotation.service';
import { CrmBillSubmissionsService } from 'app/services/crm/crm-bill-submissions.service';
const now:Date = new Date(); 

@Component({
  selector: 'app-crm-post-follow-up',
  templateUrl: './crm-post-follow-up.component.html',
  styleUrls: ['./crm-post-follow-up.component.scss']
})
export class CrmPostFollowUpComponent implements OnInit {
public opened:boolean=false;  
public listdate:Date= new Date();
public customers:any;
  public seq:string='';
public custid:number=null;
public list:any;
public customer:any={
  customerid:0,
  customername:'',
  mobile :'',
  email:'',
  pendingamt:null,
  prevcommnets:'',
  prevseq:'',
  prevdate:null,
  prevmode:'',
  prevcaller:''
};
public customercomments:string='';
public callercomments:string='';
public nextcallmode:number=0;
public currentcallmode:number=0;
public nextcalldate:Date= new Date();


constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,
  private modalService: NgbModal, private crm:CrmBillSubmissionsService,
  private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private inv:InvMastersService
 ) { 
   this.requirementsAdd();
   this.listAdd();
 }

  ngOnInit(): void {
  }

  openNew()
  {
    this.opened=true;
  }
  makeCle()
  {

  }
  close()
  {
    this.opened=false;
  }
  
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
public requirementsAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.crm.crmFollowupRequirements().subscribe(res =>
      {
        var det:any=res;
       
        this.customers=det.details;
        this.seq=det.seq;
        console.log(this.customers);
        this.spinner.hide();
      });
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

this.crm.crmFollowupList(this.adm.stringData(this.listdate)).subscribe(res =>
{
  this.list=res;
   
  this.spinner.hide();
   
});


}
public findCustomerDetails()
{
   
  var det=this.customers.filter(a => a.customerid== +this.custid);
  if(det.length > 0)
  {
    this.customer=det[0];
  }
  else
  {
    this.customer={};
  }
}
public save()
{
  var header:any={
    CustomerId: +this.custid,
    CustomerName: this.customer.customername,
    CustomerComments: this.customercomments,
    CallerComments: this.callercomments,
    CallType: +this.currentcallmode,
    NextCallDate: new Date( this.adm.stringData(this.nextcalldate)),
    
  };
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.crm.setFollowUp(header).subscribe(res =>
      {
        var det:any=res;
        if(det.result=='OK')
        {
          this.adm.showMessage('Call details saved Successfully','Success',1);
          this.listAdd();
          this.requirementsAdd();
        }
        else
        {
          this.adm.showMessage(det.result,'Error',4);
        }
        this.spinner.hide();
      });
}
}
