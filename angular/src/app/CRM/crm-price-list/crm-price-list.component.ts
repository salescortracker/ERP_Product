import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmPriceListService } from 'app/services/crm/crm-price-list.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
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
  selector: 'app-crm-price-list',
  templateUrl: './crm-price-list.component.html',
  styleUrls: ['./crm-price-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CrmPriceListComponent implements OnInit {
public pricelists:any;
public categorywisecheck:number=3;
public pricedetails:any;
public groups:string[]=[];
public grp:string=' ';
public searchtext:string='';

public caltype:string="1";
public calvalue:number=0;
public taxes:any;
public header:any={
  PriceListName:'',
  EffectiveDate:new Date(),
  Pos:1,
  MrpCheck:0
};
public subdetails:any;
public filterdetails:any;

public recordId:number=0;
public mrpcheck:boolean=false;
public opened:boolean=false;
  constructor(private crm:CrmPriceListService,private adm:AdminGeneralInfoService,
    private modalService: NgbModal,private router:Router, private  spinner:NgxSpinnerService) 
  {
    if(this.adm.screenCheck(7,1,1,0))
    {
    this.listAdd();
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.crm.getPriceListRequirements().subscribe(res =>
        {
          var det:any=res;
            this.pricedetails=det.prices;
            this.taxes=det.taxes;
        });
      }
      else
      {
        this.router.navigateByUrl('crm/crmunauthorize');
      }
   }

  ngOnInit(): void {
  }

openNew()
{
  this.makeCle();
  this.opened=true;
}
openOld(obj)
{
 
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.crm.getPriceListInfo(obj.recordId).subscribe(res =>{
    var det:any=res;
    console.log(det);
    this.header={
      PriceListName:det.header.priceListName,
    EffectiveDate:det.header.effectiveDate,
    Pos:det.header.pos,
    MrpCheck:det.header.mrpCheck
    };
    this.mrpcheck=det.header.mrpCheck;
    this.recordId=obj.recordId;
    this.pricedetails=det.pricedetails;
    this.spinner.hide();
    this.opened=true;
  });
}
makeCle()
{
  this.recordId=0;
  this.mrpcheck=false;
  this.header={
    PriceListName:'',
    EffectiveDate:new Date(),
    Pos:1,
    MrpCheck:0
  };
  for(var i=0;i<this.pricedetails.length;i++)
  {
    this.pricedetails[i].price=0;
  }

}
makeReset()
{
  this.recordId=0;
  this.mrpcheck=false;
  this.header={
    PriceListName:'',
    EffectiveDate:new Date(),
    Pos:1,
    MrpCheck:0
  };
  this.mrpcheck=false;
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
      this.crm.getPriceLists().subscribe(res =>
        {
            this.pricelists=res;
            this.spinner.hide();
        });
  }

  private valChk():boolean
  {
    if(this.header.PriceListName.trim()=='')
    {
        this.adm.showMessage('Price list not mentioned','Warning',3);
        return false;
    }
    return true;
  }

  public save()
  {
    if(this.valChk())
    {
    Swal.fire({  
      title:  this.recordId==0?'Confirms Price Details':'Modifies Price Details' ,  
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
          var tracheck:number=0;
          if(this.recordId > 0)
          {
            this.header.RecordId=this.recordId;
            tracheck=2;
          }
          else
          {
            tracheck=1;
          }
          if(this.mrpcheck)
          {
            this.header.MrpCheck=1;
          }
          else
          {
            this.header.MrpCheck=0;
          }
          this.header.Pos=+this.header.Pos;
          for(var i=0;i<this.pricedetails.length;i++)
          {
            lines.push({
              ProductId:+this.pricedetails[i].productid,
              Price:+this.pricedetails[i].price,
              taxId:+this.pricedetails[i].tax > 0?+this.pricedetails[i].tax:null
            });
          }
          this.crm.setPriceList(this.header,lines,tracheck).subscribe(res =>
            {
              var resu:any=res;
              if(resu.result=='OK')
              {
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Price Details saved.',  
                  'success'  
                );
                this.listAdd();
                this.close();
              }
              else
              {
                Swal.fire(  
                  resu.result,  
                  'Error in transaction.',  
                  'error'  
                );
              }
                this.spinner.hide();
            });

  
  }
  });
    }
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
public makeFilters(customContent)
{
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    windowClass:'terms-modal',
    keyboard : false
};

this.subdetails=[];
this.filterdetails=[];
for(var i=0;i<this.pricedetails.length;i++)
{
  if(!this.groupCheck(this.pricedetails[i].grpname))
  {
    this.groups.push(this.pricedetails[i].grpname);
  }
  this.subdetails.push({
    productid:this.pricedetails[i].productid,
    product:this.pricedetails[i].product,
    grpname:this.pricedetails[i].grpname,
    uom:this.pricedetails[i].uom,
    price:this.pricedetails[i].price,
    tax:this.pricedetails[i].tax
  });
  this.filterdetails.push({
    productid:this.pricedetails[i].productid,
    product:this.pricedetails[i].product,
    grpname:this.pricedetails[i].grpname,
    uom:this.pricedetails[i].uom,
    price:this.pricedetails[i].price,
    tax:this.pricedetails[i].tax
  });
}

this.modalService.open(customContent,  ngbModalOptions);
}
groupCheck(str:string):boolean
{
  var det=this.groups.filter(a => a==str);
  if(det.length > 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
makeGroupFilters()
{
  this.searchtext="";
  if(this.grp==" ")
  {
    this.filterdetails=this.subdetails;
    
  }
  else
  {
    this.filterdetails=this.subdetails.filter(a => a.grpname==this.grp);
  }
}
makeTextFilter()
{
  this.grp==" "
  if(this.searchtext.trim()=='')
  {
    this.filterdetails=this.subdetails;
  }
  else
  {
    this.filterdetails=this.subdetails.filter(a => a.product.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
}
public makeCalculations()
{
  if(this.caltype=="1")
  {
      for(var i=0;i<this.filterdetails.length;i++)
      {
        this.filterdetails[i].price= (+this.filterdetails[i].price) + (+this.filterdetails[i].price *(+this.calvalue/100));
      }
  }
  else
  {
    for(var i=0;i<this.filterdetails.length;i++)
    {
      this.filterdetails[i].price= (+this.filterdetails[i].price) + (+this.calvalue );
    }
  }
}
public resetValues()
{
  for(var i=0;i<this.filterdetails.length;i++)
    {
      this.filterdetails[i].price= this.findPrice(this.filterdetails[i]);
    }
}
private findPrice(obj:any):number
{
  for(var i=0;i<this.pricedetails.length;i++)
  {
    if(this.pricedetails[i].productid== obj.productid)
    {
      return this.pricedetails[i].price;
    }
  }
   
}
public assignValues()
{
  debugger
   console.log(this.filterdetails,this.pricedetails);
  for(var i=0;i<this.filterdetails.length;i++)
  {
    var det=this.pricedetails.filter(a => a.productid == this.filterdetails[i].productid);
    if(det.length > 0)
    {
      det[0].price=this.filterdetails[i].price;
      det[0].tax=this.filterdetails[i].tax;
    }
   /* for(var j=0;j<this.pricedetails.length;i++)
    {
    if(this.pricedetails[j].productid== this.filterdetails[i].productid)
    {
      this.pricedetails[j].price=this.filterdetails[i].price;
    }
  }*/
  }
}


public categoryWiseSort(): void {
  return;
}
 
}
 