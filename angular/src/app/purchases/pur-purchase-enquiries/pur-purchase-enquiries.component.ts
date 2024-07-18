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
  selector: 'app-pur-purchase-enquiries',
  templateUrl: './pur-purchase-enquiries.component.html',
  styleUrls: ['./pur-purchase-enquiries.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurPurchaseEnquiriesComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
  public dateCheck:Boolean=false;
  public modeltype:number=0;
public authCheck:Boolean=false;
  
  public saveStr:string='';
 
  public recordID:number=0;

  public seq:string='';
  public header:any={
    Seq:'',
    Dat:new Date(),
    Validity:new Date(),
    Reference:'',
  }
   
  public listdate:Date=new Date();

  public materials;
  public material:any={
    itemid:null,
    itemname:'',
    grpname:'',
    stock:null,
    um:''
  };
  public totalMaterialUnits:any[]=[];
  public selectdMaterialUnits:any[]=[];

  public suppliers:any[]=[];
  public filteredsuppliers:any[]=[];
  public searchtext:string='';
  supplierMulticheck:boolean=false;
  public selectedsuppliers:any;
  
  public notes:any;
  
public qty:number=0;
public umid:number=0;
public reqdby:Date = new Date();
public purpose:string='';
public selectedsuppliernames:string='';
public totalItems:any[]=[];
public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;
public term:string='';
public enquiries:any;
public totalrequirements:any;
  public opened:boolean=false;
  public totalpendingrequests:any;
  
  constructor(private adm:AdminGeneralInfoService,private pur:PurPurchaseEnquiryService,private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private req:PurPurchaseRequestService
   ) {
if(this.adm.screenCheck(2,3,2,0))
{
  this.dateCheck=this.adm.screenCheck(2,3,2,4);
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(2,3,2,3);
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
      this.pur.getPurchaseEnquiryRequirements().subscribe(res =>
        {
              var det:any=res;
            this.totalrequirements=det;
            this.header.Seq=det.seq;
            this.header.Dat=new Date(det.dat);
            this.listdate=new Date(det.dat);
            this.totalMaterialUnits=det.materialunits;
           this.materials=det.materials;
           this.suppliers=[];
           var sups=det.suppliers;
           var addresses=det.addresses;
           this.filteredsuppliers=[];

           for(var i=0;i<sups.length;i++)
           {
              this.suppliers.push({
                chk:false,
                supcode:sups[i].recordid,
                supplier:sups[i].supplier,
                partygroup:sups[i].partygroup,
                addresses:addresses.filter(a => a.recordId==sups[i].recordid),
                addr:'',
                addrdetails:''
              });
              this.filteredsuppliers.push({
                chk:false,
                supcode:sups[i].recordid,
                supplier:sups[i].supplier,
                partygroup:sups[i].partygroup,
                addresses:addresses.filter(a => a.recordId==sups[i].recordid),
                addr:'',
                addrdetails:''
              });


           }
          
            this.notes=det.purchasenotes;
             
            this.spinner.hide();
          });
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
    this.pur.getPurchaseEnquiries(this.adm.stringData(this.listdate),this.adm.stringData(this.listdate)).subscribe(res =>
      {
          this.enquiries=res;
          
          this.spinner.hide();
      });
}

openNew()
{
  this.makeCle();
  this.delVisible=false;
  this.recordID=0;
  this.creCheck=this.adm.screenCheck(2,3,2,1);
  this.saveStr='Save';
  this.opened=true;
  this.delVisible=false;
  this.supplierMulticheck=true;
}
private makeCle()
{
   //this.makeInitial();
   this.selectedsuppliers=[];
   var seq=this.header.Seq;
  this.header={
    Seq:this.header.Seq,
    Dat:new Date(),
    Validity:new Date(),
    Reference:'',
  };
  this.totalItems=[];
this.selectedsuppliernames='';
}
openOld(obj:any)
{
 
  if(+obj.pos <=2)
  {
  this.selectedsuppliers=[];
  this.saveStr='Modify';
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
      this.selectedsuppliers.push( 
        det.header.supplier
       );
      
      for(var i=0;i<this.notes.length;i++)
      {
        this.notes[i].chk=false;
      }

      for(var i=0;i<det.notes.length;i++)
      {
        var k=0;
          for(var j=0;j<this.notes.length;j++)
          {
            if(det.notes[i].note==this.notes[j].term)
            {
              this.notes[j].chk=true;
              k++;
            }
          }
          if(k==0)
          {
            this.notes.push({
              term:det.notes[i].note,
              chk:true
            });
          }
      }

        this.opened=true;
        this.supplierMulticheck=false;
        this.spinner.hide();
      });
    }
    else
    {
      this.adm.showMessage('This enquiry is moved to further process','Warning',3);
    }
}

  ngOnInit(): void {
  }

  private valChk():boolean
  {
    if(this.selectedsuppliers.length <= 0)
    {
      this.adm.showMessage('Suppliers not selected','Warning',3);
      return false;
    }
    if(this.totalItems.length <= 0)
    {
      this.adm.showMessage('Materials not selected','Warning',3);
      return false;
    }
    return true;
  }
  public save()
  {
    if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==0?'Creates Enquiry Details':'Modifies Enquiry Details',  
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

            
            if(this.recordID==0)
            {
    var header:any ={
      Dat:new Date(this.adm.stringData(this.header.Dat)),
      Validity:new Date(this.adm.stringData(this.header.Validity)),

      Reference:this.header.Reference,
    };
  }
  else
  {
    this.header.Dat=new Date(this.adm.stringData(this.header.Dat));
    this.header.Validity=new Date(this.adm.stringData(this.header.Validity));
  }
    var supps:any[]=[];
       for(var i=0;i<this.selectedsuppliers.length;i++)
      {
          var det=this.suppliers.filter(a => a.supplier==this.selectedsuppliers[i]);
          if(det.length > 0)
          {
            supps.push(+det[0].recordid)
          }
      }
      var lines:any[]=[];
      for(var i=0;i<this.totalItems.length;i++)
      {
        lines.push({
          ItemId:+this.totalItems[i].itemid,
          ItemDescription:this.totalItems[i].description,
          Qty:+this.totalItems[i].qty,
          uom:+this.totalItems[i].umid
        });
      }
    }

    var notes:any[]=[];
    for(var i=0;i<this.notes.length;i++)
    {
      if(this.notes[i].chk)
      {
        notes.push({
          Note:this.notes[i].term
        })
      }
    }
  this.pur.setPurchaseEnquiry(this.recordID==0?header:this.header,this.recordID==0?this.selectedsuppliers:[],lines,notes,this.recordID==0?1:2).subscribe(res =>
    {
        var det:any=res;
        if(det.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Purchase Enquiry saved.',  
            'success'  
          );
          this.listAdd();
          this.makeCle();
          if(this.recordID > 0)
          {
            this.opened=false;
          }
          else
          {
            this.opened=true;
          }
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

  });

  

    }
    

  }
  public delete()
  {
   
      Swal.fire({  
        title:   'Deletes Enquiry Details',  
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

            
            if(this.recordID==0)
            {
    var header:any ={
      Dat:new Date(this.adm.stringData(this.header.Dat)),
      Validity:new Date(this.adm.stringData(this.header.Validity)),

      Reference:this.header.Reference,
    };
  }
  else
  {
    this.header.Dat=new Date(this.adm.stringData(this.header.Dat));
    this.header.Validity=new Date(this.adm.stringData(this.header.Validity));
    this.header.RedordId= +this.recordID;
  }
    var supps:any[]=[];
       for(var i=0;i<this.selectedsuppliers.length;i++)
      {
          var det=this.suppliers.filter(a => a.supplier==this.selectedsuppliers[i]);
          if(det.length > 0)
          {
            supps.push(+det[0].recordid)
          }
      }
      var lines:any[]=[];
      for(var i=0;i<this.totalItems.length;i++)
      {
        lines.push({
          ItemId:+this.totalItems[i].itemid,
          ItemDescription:this.totalItems[i].description,
          Qty:+this.totalItems[i].qty,
          uom:+this.totalItems[i].umid
        });
      }
    }

    var notes:any[]=[];
    for(var i=0;i<this.notes.length;i++)
    {
      if(this.notes[i].chk)
      {
        notes.push({
          Note:this.notes[i].term
        })
      }
    }
  this.pur.setPurchaseEnquiry( this.header,[],lines,notes,3).subscribe(res =>
    {
        var det:any=res;
        if(det.result=='OK')
        {
          Swal.fire(  
            'Transaction Completed Successfully!',  
            'Purchase Enquiry deleted.',  
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

  });

  
 
     
 
    
  }

   

  private valChkSmall():boolean
  {
    if(!this.material)
    {
      this.adm.showMessage('Select Material','Warning',3);
      document.getElementById('cmbmaterial').focus();
      return false;
    }
    if(this.material.itemname.trim()=='')
    {
      this.adm.showMessage('Select Material','Warning',3);
      document.getElementById('cmbmaterial').focus();
      return false;
    }
    if(+this.qty <= 0)
    {
      this.adm.showMessage('Qty not mentioned','Warning',3);
      document.getElementById('txtQty').focus();
      
      return false;
    }
    if(+this.umid <=0)
    {
      this.adm.showMessage('Unit not mentioned','Warning',3);
      document.getElementById('cmbUOM').focus();
      
      return false;
    }

    return true;
  }
  public addItem()
  {
     if(this.valChkSmall())
     {
       this.totalItems.push({
          itemid:this.material.itemid,
          itemname:this.material.itemname,
          qty:+this.qty,
          umid:+this.umid,
          um:this.findUOM(this.umid),
          description:this.purpose
       });
       this.material={
        itemid:null,
        itemname:'',
        grpname:'',
        stock:null,
        um:''
      };
      this.qty=0;
      this.purpose='';
      this.selectdMaterialUnits=[];

     }

  }
  private findUOM(rec:number):string
  {
    var uom='';
      var det=this.selectdMaterialUnits.filter(a => a.umid == +this.umid);
      if(det.length > 0)
      {
        uom=det[0].um;
      }
    return uom;
  }
  public deleteItem(obj:any)
  {
      var index=this.totalItems.indexOf(obj);
      if(index >= 0)
      {
        this.totalItems.splice(index,1);
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
public changeMaterial()
{
    this.selectdMaterialUnits=[];
    this.selectdMaterialUnits=this.totalMaterialUnits.filter(a => a.recordid==this.material.itemid);
    if(this.selectdMaterialUnits.length > 0)
    {
      this.umid=+this.selectdMaterialUnits[0].umid;
    }
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


public getNewSupplier(data)
{ 
 
  if(data)
  {
    
    if(+data.recordId != 0)
    {
     
  this.suppliers.push({
    recordid:data.recordId,
    supplier:data.PartyName,
    partygroup:data.partygroup
  });
  this.selectedsuppliers.push({
    recordid:data.recordId,
    supplier:data.PartyName,
    partygroup:data.partygroup
  });
 
}
}
}

addsuppliers()
{
  this.selectedsuppliers=[];
  this.selectedsuppliernames='';
   for(var i=0;i<this.suppliers.length;i++)
   {
     if(this.suppliers[i].chk)
     {
       this.selectedsuppliernames = this.selectedsuppliernames + this.suppliers[i].supplier + ',  '
      this.selectedsuppliers.push({
          supcode:this.suppliers[i].supcode,
          addr:this.suppliers[i].addr
      });
    }
   }
   this.modalService.dismissAll();
}
public findAddress(obj:any)
{
  var det=obj.addresses.filter(a => a.addressName==obj.addr);
  if(det)
  {
    if(det.length > 0)
    {
      obj.addrdetails=det[0].addres;
    }
  }
  this.makeActualDetails(obj);
}
public makeActualDetails(obj:any)
{
  var det=this.suppliers.filter(a => a.supcode==obj.supcode);
  if(det)
  {
    if(det.length > 0)
    {
      det[0].chk=obj.chk;
      det[0].addr=obj.addr;
      det[0].addrdetails=obj.addrdetails;
    }
    
  }
}
public makeSuppliers()
{
  if(this.searchtext.trim()=='')
  {
    this.filteredsuppliers=this.suppliers.filter(a => 1==1);
  }
  else
  {
    this.filteredsuppliers=this.suppliers.filter(a => a.supplier.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
}
}
