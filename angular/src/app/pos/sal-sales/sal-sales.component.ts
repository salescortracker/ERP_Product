import { Component, Input,ViewEncapsulation, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import * as swalFunctions from '../../shared/data/sweet-alerts';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { line } from 'd3-shape';


const now = new Date();
//const Swal = require('sweetalert2')
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
  selector: 'app-sal-sales',
  templateUrl: './sal-sales.component.html',
  styleUrls: ['./sal-sales.component.scss']
})
export class SalSalesComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
 // swal =  swalFunctions;
  public saveStr:string='';
 
  public recordID:number=0;
  public title:string='';
public units:any;
public totalunits:any;
public purchaseorders:any;
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

public refQuo:string='';
public poseq:string='';
public items:any={};
public material:any={
  grp: '',
itemcode: '',
itemname:  '',
recordId:-1,
reorderqty: 0,
shelflife:0,
statu: '',
stdrat: 0,
stdum: '',
stdumId:0
};

public itemdetails:any[]=[];

public terms:String[]=[];
public term:String;

public taxes:any[]=[];


public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public validitydate:any={year: now.getFullYear(), month: now.getMonth() + 2, day: now.getDate()};
   
public qty:number=null;
public rat:number=null;

public baseAmt:number=0;
public discount:number=0;
public taxesAmt:number=0;
public otherAmt:number=0;
public totalAmt:number=0;

public advanceCheck:boolean=false;
public advseq:string='';
public advanceamt:number=0;
public advancemode:string=' ';
public advanbankdet:string='';
public pono:string='';
public advasupplier:string='';
public orderamt:number=0;
public advvoucher:string='';
 


public listdat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public opened:boolean=false;
  closeResult: string;
 
  constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,private ino:InvPurchaseOrderService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private inv:InvMastersService
   ) {
if(this.adm.screenCheck(2,3,4,0))
{
  this.delCheck=this.adm.screenCheck(2,3,4,3);
    this.listAdd();
    
}
else
{
this.router.navigateByUrl('purchases/purunauthorize');
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }
  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,1,1,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
  
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

      this.ino.GetInvPurchaseOrder(this.recordID).subscribe(res =>
        {
            console.log(res);
            var result:any=res;
            if(result.result=='OK')
            {
              this.delVisible=true;
              this.creCheck=this.adm.screenCheck(1,1,1,2);
              this.saveStr='Modify';
              this.opened=true;

              this.spinner.hide();
            }
            else
            {
              this.adm.showMessage(result.result,'Error',4);
              this.spinner.hide();
            }
        });


   
  }
  valChk():Boolean
{
  
  return true;
}
public delete()
{
  


}
public addTerms()
{
  
}

public addItems()
{

  
  if(!this.material.itemname)
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return;
  }
  if(this.material.itemname=='')
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return;
  }
  if(this.qty <=0)
  {
    this.adm.showMessage('Qty not mentioned','Warning',3);
    return;
  }
  if(this.rat <=0)
  {
    this.adm.showMessage('Rate not mentioned','Warning',3);
    return;
  }



  this.itemdetails.push({
    itemid:this.material.recordId,
    itemname:this.material.itemname,
    umid:this.material.stdumId,
    qty:this.qty,
    rat:this.rat,
    value:this.qty*this.rat
  });
  
  this.material={
    grp: '',
  itemcode: '',
  itemname:  '',
  recordId:-1,
  reorderqty: 0,
  shelflife:0,
  statu: '',
  stdrat: 0,
  stdum: '',
  stdumId:0
  };
  this.qty=null;
  this.rat=null;
  this.makeCalcu();
}
public deleteItem(obj:any)
{
  var index=this.itemdetails.indexOf(obj);
  if(index >= 0)
  {
    this.itemdetails.splice(index,1);
    this.makeCalcu();
  }
}


makeCalcu()
{
/*

public baseAmt:number=0;
public discount:number=0;
public taxesAmt:number=0;
public otherAmt:number=0;
public totalAmt:number=0;
*/

this.baseAmt=0;
for(var i=0;i<this.itemdetails.length;i++)
{
  this.baseAmt=this.baseAmt+this.itemdetails[i].value;
}
this.makeOthers();

}
public makeTaxes()
{
  this.taxesAmt=0;
  for(var i=0;i<this.taxes.length;i++)
  {
    this.taxesAmt=this.taxesAmt+this.taxes[i].taxvalue;
  }
  this.makeOthers();
}
makeOthers()
{
  this.totalAmt=this.baseAmt+this.taxesAmt-this.discount+this.otherAmt;
}

public save()
{
  if(!this.supdetail.accountname)
  {
    this.adm.showMessage('Supplier not selected','Warning',3);
    return;
  }
  if(this.itemdetails.length <= 0)
  {
    this.adm.showMessage('Items not selected','Warning',3);
    return;
  }




  Swal.fire({  
    title: 'Confirms Sale Details',  
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
  
   var header:any=
      {
        Dat:new Date( this.adm.strDate(this.tradat)),
        PurchaseType:"General",
        RefQuotation:this.refQuo,
        Validity:new Date(this.adm.strDate(this.validitydate)),
        Vendorid:this.supdetail.accountId,
        Vendorname:this.supdetail.accountname,
        Addr:this.supdetail.address,
        Country:this.supdetail.country,
        Stat:this.supdetail.stat,
        District:this.supdetail.district,
        City:this.supdetail.city,
        Zip:this.supdetail.zip,
        Mobile:this.supdetail.mobile,
        Tel:this.supdetail.tel,
        Fax:this.supdetail.fax,
        Email:this.supdetail.email,
        Webid:this.supdetail.webid,
        Baseamt:this.baseAmt,
        Discount:this.discount,
        Taxes:this.taxesAmt,
        Others:this.otherAmt,
        TotalAmt:this.totalAmt,
        typeOfOrder:"SAL"
      };
  
   
  var lines:any[]=[];
      for(var i=0;i<this.itemdetails.length;i++)
        {
          lines.push({
            ItemId:+this.itemdetails[i].itemid,
            ItemName:this.itemdetails[i].itemname,
            Qty:+this.itemdetails[i].qty,
            Um:+this.itemdetails[i].umid,
            Rat:+this.itemdetails[i].rat
      
          });
        }
        var term:any[]=[];
      for(var i=0;i<this.terms.length;i++)
      {
        term.push({
      Term:this.terms[i],
      chk:true
      
        });
      }
      
        var taxe:any[]=[];
      for(var i=0;i<this.taxes.length;i++)
      {
        if(this.taxes[i].taxvalue > 0)
        {
          taxe.push({
            Taxcode:this.taxes[i].taxcode,
            Taxper:this.taxes[i].taxper,
            Taxvalue:this.taxes[i].taxvalue
          });
        }
      }
  
  this.ino.invPurchaseOrderSave(header,lines,term,taxe,1).subscribe(res =>
      {
        var result:any=res;
        if(result.result=='OK')
        {
          console.groupCollapsed(result);
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Your Sale Order saved.',  
            'success'  
          )  ;
        /*  if(this.recordID == 0)
          {
            this.advanceCheck=true;
            this.pono=result.header.seq;
            this.advasupplier=result.header.vendorname;
            this.orderamt=result.header.totalAmt;
          }*/
       }
  else
  {
    Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
 //   this.adm.showMessage(result.result,'Error',4);
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



  //if(confirm("Confirms Purchase Order Details" )) {
    

  
}

close()
{
  this.opened=false;
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

this.ShowOrders();
this.ino.GetInvSaleOrderRequirements().subscribe(res =>
{
  var det:any=res;
  this.suppliers=det.suppliers;
  this.items=det.materials;
  var taxes=det.taxes;
  this.poseq=det.pono;
  this.totalunits=det.units;
  var ter:any=det.terms;
  for(var i=0;i<ter.length;i++)
  {
    this.terms.push(ter[i].term);
  }
  for(var i=0;i<det.taxes.length;i++)
  {
    this.taxes.push({
taxcode:det.taxes[i].taxCode,
taxper:det.taxes[i].taxPer,
taxvalue:0
    });
  }
  this.spinner.hide();
});


}

public ShowOrders()
{
  var dat1=this.adm.strDate(this.listdat);
  var dat2=dat1;
  this.ino.GetInvPurchaseOrders(dat1,dat2,'SAL').subscribe(res =>
    {
        this.purchaseorders=res;
         console.log(res);
    });
}

openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
}

openModal(customContent) {
//  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
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
public makeUnits()
{
  this.units=this.totalunits.filter(a => a.recordId == this.material.recordId);
 // alert(this.material.recordId);
}
public addTerm()
{
  if(!this.term)
  {
    this.adm.showMessage("Term not mentioned",'Warning',3);
    return;
  }
  this.terms.push(this.term);
  this.term='';
}
public delTerm(ter:String)
{
  var index=this.terms.indexOf(ter);
  this.terms.splice(index,1);
}

public closeAdvance()
{
  this.advanceCheck=false;
}



// Confirm Text
ConfirmText() {
  Swal.fire({  
    title: 'Confirms Sale Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
      this.save(); 
      Swal.fire(  
        'Transaction Completed Successfully!',  
        'Your Sale saved.',  
        'success'  
      )  
    } else if (result.dismiss === Swal.DismissReason.cancel) {  
     /* Swal.fire(  
        'Cancelled',  
        'Your imaginary file is safe :)',  
        'error'  
      )  */
    }  
  })  ;





 
  
}
 
}
