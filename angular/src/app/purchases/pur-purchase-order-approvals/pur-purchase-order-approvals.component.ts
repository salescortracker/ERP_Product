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
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
const now:Date = new Date(); 
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
 


})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { 

  }
}


@Component({
  selector: 'app-pur-purchase-order-approvals',
  templateUrl: './pur-purchase-order-approvals.component.html',
  styleUrls: ['./pur-purchase-order-approvals.component.scss']
})
export class PurPurchaseOrderApprovalsComponent implements OnInit {
public purchaseorders:any;
  constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,private ino:PurPurchaseQuotationService,
    private modalService: NgbModal,private enq:PurPurchaseEnquiryService, private ord:InvPurchaseOrderService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private inv:InvMastersService
   ) { 
     this.ShowOrders();
   }

  ngOnInit(): void {
  }

  
public ShowOrders()
{
  
  
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.ord.getPurchaseOrdersForApproval().subscribe(res =>
    {
        this.purchaseorders=res;
         this.spinner.hide();
    });
}
public makeApprove(obj)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.ord.setPurchaseOrderForApproval(obj.recordId).subscribe(res =>
    {
      var det:any=res;
      this.spinner.hide();
      if(det.result=='OK')
      {
        this.adm.showMessage('Order Approved successfully','Success',1);
        this.ShowOrders();
      }
      else
      {
        this.adm.showMessage(det.result,'Error',4);
      }
    })
}

public print(obj:any)
{
  if(obj.printCount==0)
  {
 this.printOrder(obj);
  }
  else
  {
    Swal.fire({  
      title:  'This order is aleady printed ' + obj.printCount + ' time(s) Do you wish to print again?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Print',  
      cancelButtonText: 'Cancel'  
    }).then((result) => {  
      if (result.value) { 
  if( this.adm.screenCheck(2,2,4,8))
  {
        this.printOrder(obj);
      }
      else
      {
        this.adm.showMessage('You are not authorised to re print','Error',4);
      }
  
  }
    });
  }
}


printOrder(obj:any)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.ord.printPurchaseOrder(obj.recordId).subscribe(res =>
    {
      
var det:any=res;
if(det.fname != '')
{
window.open( this.adm.getReportsURL() + det.fname,'_blank');
this.ShowOrders();
}
else  
{

}
this.spinner.hide();
    });
}
}
