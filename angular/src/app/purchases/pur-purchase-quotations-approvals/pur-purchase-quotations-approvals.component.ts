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
  selector: 'app-pur-purchase-quotations-approvals',
  templateUrl: './pur-purchase-quotations-approvals.component.html',
  styleUrls: ['./pur-purchase-quotations-approvals.component.scss']
})
export class PurPurchaseQuotationsApprovalsComponent implements OnInit {
 
  public modeltype:number=0;
  public recordID:number=0;
  public title:string='';
  supdetail={
    dat:new Date(),
    seq:'',
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
    webid:'',
    purchasetype:'',
    enquiry:'',
    validity:new Date(),
    file:'',
    quotationno:'',
    baseamt:0,
    discount:0,
    taxamt:0,
    otheramt:0,
    totalamt:0
  };
  public terms:any[]=[];
  public itemdetails:any[]=[];
public taxes:any[]=[];
public listdat:Date=new Date();
  public opened:boolean=false;
  closeResult: string;
 public purchaseorders:any;
  constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,private ino:PurPurchaseQuotationService,
    private modalService: NgbModal,private enq:PurPurchaseEnquiryService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private inv:InvMastersService
   ) {
if(this.adm.screenCheck(2,2,4,98))
{
    this.ShowOrders();
}
else
{
this.router.navigateByUrl('purchases/purunauthorize');
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }
  
   
  openOld(obj:any)
  {
  
   
    this.recordID=obj.recordId;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

      this.ino.getPurchaseQuotation(this.recordID).subscribe(res =>
        {
            var dets:any=res;
          var usr=this.adm.getUserCompleteInformation().usr;
           // var result:any=JSON.parse(dets);
var result:any=res;
            console.log(result,'result');
            if(result.result=='OK')
            {
              
              this.opened=true;

              if(result.header)
              {
              this.supdetail={
                dat:result.header.dat,
                seq:result.header.seq,
                accountname:result.header.vendorname,
                address:result.header.addr,
                country:null,
                stat:result.header.stat,
                district:result.header.district,
                city:result.header.city,
                zip:result.header.zip,
                mobile:result.header.mobile,
                tel:result.header.tel,
                fax:result.header.fax,
                email:result.header.email,
                webid:result.header.webid,
                purchasetype:result.header.purchaseType,
                enquiry:'',
                validity:new Date(),
                file: this.adm.getActualURL()  + 'Attachments\\purchases\\' + 'PUR_QUO_' + this.recordID.toString() + '_' + usr.bCode + '_' + usr.cCode + '.jpg',
                quotationno:result.header.refQuotation,
                baseamt:result.header.baseamt,
                discount:result.header.discount,
                taxamt:result.header.taxes,
                otheramt:result.header.others,
                totalamt:result.header.totalAmt
                
              };
             
              
              
               
              this.itemdetails=[];
              for(var i=0;i<result.lines.length;i++)
              {
                this.itemdetails.push({
                  itemid:result.lines[i].itemId,
                  itemname:result.lines[i].itemName,
                  umid:result.lines[i].um,
                  qty:result.lines[i].qty,
                  rat:result.lines[i].rat,
                  leaddays:result.lines[i].leadDays,
                  um:result.lines[i].branchId,
                  value:(+result.lines[i].qty)*(+result.lines[i].rat)
                });
              }
              
              this.taxes=[];

              for(var i=0;i<result.taxes.length;i++)
              {
                this.taxes.push({
                    taxcode:result.taxes[i].taxCode,
                    taxper:result.taxes[i].taxPer,
                    taxvalue:result.taxes[i].taxValue
                });
              }

              for(var i=0;i<result.terms.length;i++)
              {
                var det=this.terms.filter(a => a.includes(result.terms[i].term));
                if(det.length <= 0)
                {
                    this.terms.push(result.terms[i].term);
                } 
              }

           

            }
             

              this.spinner.hide();
            }
            else
            {
              this.adm.showMessage(result.result,'Error',4);
              this.spinner.hide();
            }
        });


   
  }
   
  
 
  

public save()
{
  

  Swal.fire({  
    title: 'Approves Purchase Quotation Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
       



      
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
  
  this.ino.setPurchaseQuotationForApproval(this.recordID).subscribe(res =>
      {
        var result:any=res;
        if(result.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Your Purchase Quotation Approved.',  
            'success'  
          )  ;
          this.ShowOrders();
            this.opened=false;
       }
  else
  {
    Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
  }
  this.spinner.hide();
  });

    } else if (result.dismiss === Swal.DismissReason.cancel) {  
     /* Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  */
    }  
  })  ;



  
}

close()
{
  this.opened=false;
}
 

public ShowOrders()
{
  
  this.ino.getPurchaseQuotationsForApprovals().subscribe(res =>
    {
        this.purchaseorders=res;
    });
}

openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
}

openModal(customContent,x) {
//  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
this.modeltype=x;
this.modalService.open(customContent, { windowClass: 'terms-modal'  });
}

 // Open default modal
 open(content,x) {

 if(x==1)
 {
   this.title="Terms";
 }
 else
 {
   this.title="Taxes"
 }
  this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });


}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
  } else {
      return `with: ${reason}`;
  }
} 
 


parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
 
  
   

  

}
