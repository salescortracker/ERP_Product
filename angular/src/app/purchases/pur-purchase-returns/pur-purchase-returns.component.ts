import { destroyPlatform, Input, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n, NgbCalendar,NgbModalOptions, NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvPurchaseOrderService } from 'app/services/inventory/inv-purchase-order.service';
import { PurchasesService } from 'app/services/purchases/purchases.service';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  selector: 'app-pur-purchase-returns',
  templateUrl: './pur-purchase-returns.component.html',
  styleUrls: ['./pur-purchase-returns.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurPurchaseReturnsComponent implements OnInit {
  public materials:any;
  public title:string='';
  now:Date= new Date();
  public listdat:any={year: this.now.getFullYear(), month: this.now.getMonth() + 1, day: this.now.getDate()};
public purchasereturns:any;
  public mir:string='';
  public invoiceno:string='';
public recordId:number=0;
  public baseAmt:number=0;
  public taxesAmt:number=0;
  public totalAmt:number=0;
  public fromdate:Date=new Date();
  public todate:Date=new Date();
  public taxes:any;
  public seq:string='';
  public closeResult:string='';
  public prevreturn:number=0;
  public prevnote:number=0;
  public purchases:any;
  public purchase:any;
  public opened:boolean=false;
  public tradat:string= this.adm.stringData(new Date());
  public prevbaseamt:number=0;
  public prevtaxes:number=0;
  public prevothers:number=0;
  public prevtotal:number=0;

  public header:any={
    
    Transporter:'',
    RefMir:-1,
     Vendorid:-1,
    Vendorname:'',
    Addr:'',
    Country:'',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Webid:'',
    Baseamt:0,
    Discount:0,
    Taxes:0,
    Others:0,
    TotalAmt:0,
    Pos:1,
    Settlemode:0,
    CurrencyConversion:1,
    CurrencySymbol:'/-'
  };
    
    constructor(private pur:PurchasesService, private puo:InvPurchaseOrderService,
      private modalService: NgbModal,private adm:AdminGeneralInfoService, private spinner: NgxSpinnerService,) { 
      this.listAdd();
        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
      this.pur.getPurchaseReturnRequirements().subscribe(res =>
        {
          var det:any=res;
          this.seq=det.seq;
           
           this.taxes=det.taxes;
          
        });
        this.spinner.hide();
    }
    openNew()
    {
      this.makeCle();
      this.opened=true;
    }
    close()
    {
      this.opened=false;
    }
    deletePurchaseReturn(obj:any)
    {
      Swal.fire({  
        title: 'Deletes Purchase Return Details',  
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
            this.pur.deletePurchaseReturn(obj.recordId).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Purchase Return Details deleted.',  
                    'success'  
                  );
                    this.listAdd();
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Error in transaction.',  
                    'error'  
                  );



                }
                this.spinner.hide();
              });
       
}
});

    }
  
  public parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
   
    ngOnInit(): void {
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
  var dat1=this.adm.strDate(this.listdat);
  this.pur.getPurchaseReturns(dat1).subscribe(res =>
    {
        this.purchasereturns=res;
         console.log(res);
         this.spinner.hide();
    });

   }
  public itemsCalculation()
  {
      this.baseAmt=0;
  /*  for(var i=0;i<this.materials.length;i++)
    {
      this.selectedItems[i].valu =this.selectedItems[i].qty * this.selectedItems[i].rate 
      this.baseAmt=this.baseAmt + (+this.selectedItems[i].valu);
    }
  
    this.makeCalculations();*/
  }
  public makeCalculations()
  {
    this.header.Baseamt=0;
    for(var i=0;i<this.materials.length;i++)
    {
      this.header.Baseamt=this.header.Baseamt + (+this.materials[i].returned * (+this.materials[i].rat));
    }
    this.header.TotalAmt=this.header.Baseamt+this.header.Taxes;
    }
  public makeTaxes()
  {
     
    this.header.Taxes=0;
    for(var i=0;i<this.taxes.length;i++)
    {
      if(this.taxes[i].taxvalue)
      {
        this.header.Taxes=this.header.Taxes+this.taxes[i].taxvalue;
      }
    }
  
    this.makeCalculations();
  
  }
    
    public makeCle()
    {
      this.recordId=0;
      this.header={
    
        Transporter:'',
        RefMir:-1,
         Vendorid:-1,
        Vendorname:'',
        Addr:'',
        Country:'',
        Stat:'',
        District:'',
        City:'',
        Zip:'',
        Mobile:'',
        Tel:'',
        Fax:'',
        Email:'',
        Webid:'',
        Baseamt:0,
        Discount:0,
        Taxes:0,
        Others:0,
        TotalAmt:0,
        Pos:1,
        Settlemode:0,
        CurrencyConversion:1,
        CurrencySymbol:'/-'
      };
      this.materials=null;
      this.prevbaseamt=0;
      this.prevtaxes=0;
      this.prevothers=0;
      this.prevtotal=0;
      this.prevreturn=0;
      this.prevnote=0;
      this.mir='';
      
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
    public purchasesAdd()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
    var dat1=this.adm.stringData(this.fromdate);
    var dat2=this.adm.stringData(this.todate);
    this.pur.getPurchaseReturnPurchasesList(dat1,dat2).subscribe(res =>
      {
          this.purchases=res;
           console.log(res);
           this.spinner.hide();
      });
  }
  public getPurchase(obj:any)
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.modalService.dismissAll();
      this.pur.getPurchaseReturnPurchaseInfo(obj.recordId).subscribe(res =>
        {
            console.log('purchase',res);
            var det:any=res;
            var header=det.header;
            this.prevbaseamt= (+header.baseamt-(+header.discount));
            this.prevtaxes=+header.taxes;
            this.prevothers=+header.others;
            this.prevtotal= +header.totalAmt;
            this.mir=header.seq + " " + this.adm.stringData(new Date(header.dat));
            this.invoiceno=header.invoiceno;
            if(det.prevPurchaseReturn)
            this.prevreturn=det.prevPurchaseReturn;
            if(det.prevCreditNotes)
            this.prevnote=det.prevCreditNotes;
            if(det)
            {
              this.header={
    
                Transporter:'',
                RefMir:header.recordId,
                 Vendorid: +header.vendorid,
                Vendorname:header.vendorname,
                Addr:header.addr,
                Country:header.country,
                Stat:header.stat,
                District:header.district,
                City:header.city,
                Zip:header.zip,
                Mobile:header.mobile,
                Tel:header.tel,
                Fax:header.fax,
                Email:header.email,
                Webid:header.webid,
                Baseamt:0,
                Discount:0,
                Taxes:0,
                Others:0,
                TotalAmt:0,
                Pos:1,
                Settlemode:0,
                CurrencyConversion:header.currencyConversion,
                CurrencySymbol:header.currencySymbol
              };
            }
            for(var i=0;i<det.lines.length;i++)
            {
              det.lines[i].returned=0;
            }
            this.materials=det.lines;
            this.spinner.hide();
        });
  }
  
  private valChk():boolean
  {
    if(this.materials)
    {
    var x=0;
    for(var i=0;i<this.materials.length;i++)
    {
        if(+this.materials[i].returned > 0)
        {
          x++;
        }
    }
    if(x==0)
    {
      this.adm.showMessage('No materials entered to be returned','Warning',3);
      return false;
    }
  }
     if(!this.materials)
     {
       this.adm.showMessage('No materials found','Warning',3);
       return false;
     }

     x=0;
     for(var i=0;i<this.materials.length;i++)
     {
       if(+this.materials[i].returned > +this.materials[i].available )
       {
         x++;
       }
     }
     if(x > 0)
     {
      this.adm.showMessage('Retuned qty can not be more than available','Warning',3);
      return false;
     }
    return true;
  }
  
  savePurchase()
  {
    if(this.valChk())
    {
  
  
      Swal.fire({  
        title: 'Confirms Purchase Return Details',  
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
  
          
            
            
            var lines:any[]=[];
            for(var i=0;i<this.materials.length;i++)
            {
              if(+this.materials[i].returned > 0)
              {
              lines.push({
                Lotno: +this.materials[i].sno,
                ItemId: +this.materials[i].itemid,
                ItemName: this.materials[i].itemname,
                Batchno: this.materials[i].batchno,
                Manudate: new Date(),
                Expdate: new Date(),
                Qty:+this.materials[i].returned,
                Um:+this.materials[i].umid,
                Rat:+this.materials[i].rat,
                Mrp:+this.materials[i].conversion,
                BranchId:this.materials[i].gin
               });
              }
             
            }
  
            var taxes:any[]=[];
            for(var i=0;i<this.taxes.length;i++)
            {
              if(+this.taxes[i].taxvalue > 0)
              {
                taxes.push({
                  Taxcode:this.taxes[i].taxCode,
                  Taxper:+this.taxes[i].taxPer,
                  Taxvalue:+this.taxes[i].taxvalue,
                });
                
  
              }
            }
   
            this.pur.setPurchaseReturn(this.header,lines,taxes,1).subscribe(res =>
              {
                var det:any=res;
                this.spinner.hide();
                if(det.result=='OK')
                {
                  this.makeCle();
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Your Purchase Return saved.',  
                    'success'  
  
                  )  ;
                  this.listAdd();
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Some error in transaction',  
                    'error'  
                  ) ;
                }
              });
  
  
  
        }
      
    }) ;
  
  
  
    }
  
  }
  deletePurchase()
  {

  }

  
openModal(customContent) {
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    windowClass:'terms-modal',
    keyboard : false
};
this.modalService.open(customContent,  ngbModalOptions);
}
 
  
    }
   