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
import { PurPurchaseRequestService } from 'app/services/purchases/pur-purchase-request.service';
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
  selector: 'app-pur-purchase-enquiries-approvals',
  templateUrl: './pur-purchase-enquiries-approvals.component.html',
  styleUrls: ['./pur-purchase-enquiries-approvals.component.scss']
})
export class PurPurchaseEnquiriesApprovalsComponent implements OnInit {
  
  public modeltype:number=0;
 
  public recordID:number=0;

  public seq:string='';
  public header:any={
    Seq:'',
    Dat:new Date(),
    Validity:new Date(),
    Reference:'',
  } 
  public totalItems:any[];
  public notes:any;
   
public selectedsuppliernames:string='';
 
public term:string='';
public enquiries:any;
public totalrequirements:any;
  public opened:boolean=false;
  public totalpendingrequests:any;
  
  constructor(private adm:AdminGeneralInfoService,private pur:PurPurchaseEnquiryService,private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private req:PurPurchaseRequestService
   ) {
if(this.adm.screenCheck(2,2,3,98))
{
 
    this.listAdd();
    this.makeInitial();
    
}
else
{
  this.router.navigateByUrl('purchases/purunauthorize');
}
 
   }
   private makeInitial()
   {

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      
          
            this.req.getPendingPurchaseRequests().subscribe(res =>
              {
                  this.totalpendingrequests=res;
                  this.spinner.hide();
              });
   }

public listAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.pur.getPurchaseEnquiriesForApproval().subscribe(res =>
      {
          this.enquiries=res;
          
          this.spinner.hide();
      });
}

 
private makeCle()
{
    var seq=this.header.Seq;
  this.header={
    Seq:this.header.Seq,
    Dat:new Date(),
    Validity:new Date(),
    Reference:'',
  };
   
this.selectedsuppliernames='';
}
openOld(obj:any)
{
  
   
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.pur.getPurchaseEnquiry(obj.recordId).subscribe(res =>
      {
         var det:any=res;
        this.selectedsuppliernames=det.header.supplier;
        this.recordID=+det.header.recordId;
        this.header={
          RecordId:det.header.recordId,
          Seq:det.header.seq,
          Dat:new Date(det.header.dat),
          Validity:new Date(det.header.validity),
          Reference:det.header.reference,
          Supid:det.header.supid,
          Supplier:det.header.supplier,
          Addr:det.header.addr,
          Country:det.header.country,
          Stat:det.header.stat,
          District:det.header.district,
          City:det.header.city,
          Zip:det.header.zip,
          Mobile:det.header.mobile,
          Tel:det.header.tel,
          Fax:det.header.fax,
          Email:det.header.email,
          Web:det.header.web
        };
        this.totalItems=[];
        for(var i=0;i<det.lines.length;i++)
        {
        this.totalItems.push({
          itemid:det.lines[i].itemid,
          itemname:det.lines[i].itemname,
          qty:+det.lines[i].qty,
          umid:+det.lines[i].umid,
          um:det.lines[i].um,
          description:det.lines[i].itemdescription
       });
      }
      
      
      

      for(var i=0;i<det.notes.length;i++)
      {
         
            this.notes.push({
              term:det.notes[i].note,
              chk:true
            });
           
      }

        this.opened=true;
        
        this.spinner.hide();
      });
   
}

  ngOnInit(): void {
  }

  private valChk():boolean
  {
   
    return true;
  }
  public save()
  {
    if(this.valChk())
    {
      Swal.fire({  
        title:  'Confirms Enquiry Approvals',  
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
 
  this.pur.setPurchaseEnquiryForApproval(this.recordID).subscribe(res =>
    {
        var det:any=res;
        if(det.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Purchase Enquiry Approved.',  
            'success'  
          );
          this.listAdd();
          this.makeCle();
          this.opened=false;
           
        }
        else
        {
          Swal.fire(  
            det.result,  
            'Error in transaction',  
            'error'  
          );
        }

      this.spinner.hide();
    });
  }
        });
      }
    }
 
    

   
 
    
  public addTerm()
  {
    this.notes.push({
      chk:true,
      term:this.term
    });
    this.term='';
  }

parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
 



openModal(customContent,x:number) {

var b:Boolean=true;

switch(x)
{
  case 1:
    b=this.adm.screenCheck(2,1,2,1);
    break;
  case 3:
    b=this.adm.screenCheck(3,1,4,1);
    break;
  
}

    this.modeltype=x;
    if(b)
     this.modalService.open(customContent, { windowClass: 'terms-modal'  });
    else
    this.adm.showMessage('You are not authorised for this','Warning',3);
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
  close()
  {
    this.opened=false;
  }
  
public print(obj:any)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.pur.printPurchaseEnquiry(obj.recordId).subscribe(res =>
    {
      
var det:any=res;
if(det.filename != '') 
{
window.open( this.adm.getReportsURL() + det.filename,'_blank');
obj.printCount=obj.printCount+1;
}
 
this.spinner.hide();
    });
}
public mail(obj:any)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.pur.mailPurchasesEnquiry(obj.recordId).subscribe(res =>
    {
      
var det:any=res;
 if(det.result=='OK')
 {
   this.adm.showMessage('Mail sent successfully','Success',1);
 }
 else
 {
   this.adm.showMessage(det.result,'Error',4);
 }
this.spinner.hide();
    });
}
   
}
