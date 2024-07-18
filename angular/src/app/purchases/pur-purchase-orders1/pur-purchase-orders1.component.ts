import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
 
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurPurchaseQuotationService } from 'app/services/purchases/pur-purchase-quotation.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { updateFor } from 'typescript';
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
  selector: 'app-pur-purchase-orders1',
  templateUrl: './pur-purchase-orders1.component.html',
  styleUrls: ['./pur-purchase-orders1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurPurchaseOrders1Component implements OnInit {
public materials:any;
public totalunits:any;
public prices:any;
public matprices:any;
public material:any={
  itemid:-1,
  itemname:'',
  grpname:'',
  stock:null,
  um:''
};
public terms:any;
public term:string='';
public qty:number=0;
public rat:number=0;
public umid:number=0;
public um:string='';
public supid:number=0;
public supplier:string='';
public requests:any;
 
public pendingrequests:any;
public reqId:number=-1;
public department:string='';
public totalDetails:any[]=[];
  constructor(private pur:PurPurchaseQuotationService,  private modalService: NgbModal,private adm:AdminGeneralInfoService,private router:Router,private spinner:NgxSpinnerService) {
    if(this.adm.screenCheck(2,3,4,1))
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
    this.pur.getPurchaseOrderRequirements2().subscribe(res =>
      {
        var det:any=res;
        console.log(res);
        this.materials=det.materials;
        this.totalunits=det.units;
        this.prices=det.prices;
        this.requests=det.requests;
        this.terms=det.terms;
      });
      this.spinner.hide();
    }
    else
{
this.router.navigateByUrl('purchases/purunauthorize');
}

   }

  ngOnInit(): void {
  }

  public changeMaterial()
  {
      this.matprices=this.prices.filter(a => a.itemid==this.material.itemid);
       this.supplier='';
       this.rat=0;

       this.pendingrequests=this.requests.filter(a => a.itemid==this.material.itemid);

  }
  public requestChange()
  {
      var det=this.pendingrequests.filter(a => a.itemid ==this.material.itemid && a.recordId == +this.reqId);
      if(det.length > 0)
      {
        this.department=det[0].department;
        this.qty=det[0].pendingQty;
      }
  }
  public addCheck():boolean
  {
    if(this.material && this.qty > 0 && this.rat > 0 && this.supplier.trim() != '')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  public addItem(obj:any)
  { 
      this.supid=obj.vendorid;
      this.supplier=obj.vendorname;
      this.rat=obj.rat;
      this.umid=obj.umid,
      this.um=obj.um;
  }
  public addDetail()
  {
      this.totalDetails.push({
          itemid:this.material.itemid,
          itemname:this.material.itemname,
          supid:this.supid,
          supplier:this.supplier,
          qty:this.qty,
          rat:this.rat,
          umid:this.umid,
          um:this.um,
          reqId:this.reqId<=0?null:this.reqId,
          request:this.reqId<=0?null:this.findRequest(+this.reqId)
      });
      this.matprices=null;
      this.rat=0;
      this.qty=0;
      this.reqId=-1;
      this.material={
        itemid:-1,
        itemname:'',
        grpname:'',
        stock:null,
        um:''
      };
  }
  private findRequest(rec:number):string
  {
    var det=this.pendingrequests.filter(a => a.recordId == rec);
    if(det.length >0)
    {
        return det[0].seq;
    }
    else
    {
        return '';
    }
  }
  public addTerm()
  {
    if(this.term.trim() != '')
    {
    this.terms.push({
      chk:true,
      term:this.term
    });
  }
  }
  public deleteDetail(obj:any)
  {
      var index=this.totalDetails.indexOf(obj);
      if(index >= 0)
      {
        this.totalDetails.splice(index,1);
      }
  }
  public save()
  {
    //totalDetails

    var details:any[]=[];
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    for(var i=0;i<this.totalDetails.length;i++)
    {
      details.push({
        supId:this.totalDetails[i].supid,
        supplier:this.totalDetails[i].supplier,
        itemId:this.totalDetails[i].itemid,
        itemname:this.totalDetails[i].itemname,
        prrequest:+this.totalDetails[i].reqId,
        qty:+this.totalDetails[i].qty,
        rat:+this.totalDetails[i].rat,
        um:+this.totalDetails[i].umid,
      });
    }
    this.pur.setPurchaseOrder2(details,null).subscribe(res =>
      {
        var result:any=res;
        if(result.result=='OK')
        {
          this.adm.showMessage('Orders saved successfully','Success',1);
        }
        else
        {
          this.adm.showMessage(result.result,'Error',4);
        }

        this.spinner.hide();
      });
  }
  
openModal(customContent) {
  
  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }

}
