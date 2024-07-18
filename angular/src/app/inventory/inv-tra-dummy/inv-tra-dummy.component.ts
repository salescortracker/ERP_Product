import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvTransactionsService } from 'app/services/inventory/inv-transactions.service';
import { publish } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-inv-tra-dummy',
  templateUrl: './inv-tra-dummy.component.html',
  styleUrls: ['./inv-tra-dummy.component.scss']
})
export class InvTraDummyComponent implements OnInit {

  public tracode:number=102;
public title:string='';
public traid:number=-1;
public description:string='';
public opened:number=1;
public tradescription:string='';
public tradets:any;
  public requirements:any;
  public materials:any;
  public material:any;
  public gininfo:any;
  public totalinfo:any;
  public batches:any[]=[];
  public um:string='';
  public gin:string='';
  public totalavailable:number=0;
  public batchavailable:number=0;
  public lineItems:any[]=[];
  public mgtItems:any[]=[];
  public qty:number=0;
  public slno:number=1;

  public stores:any;
  public storeid:number=0;
  public tradat:Date= new Date();
  
  public listdate:Date = new Date();
  public transactions:any;
  constructor(private inv:InvTransactionsService,private adm:AdminGeneralInfoService,private spinner:NgxSpinnerService) { 
  
  switch(this.tracode)
  {
    case 102:
      this.title='Losses';
      break;
  }
  
  this.addRequirements();
  this.listAdd();
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
      this.inv.getInvTransactions(this.adm.stringData(this.listdate),this.title).subscribe(res =>
        {
            this.transactions=res;
            console.log(res);
            this.spinner.hide();
        });
  }
addRequirements()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.inv.getInvLossesTraRequirements(this.tracode).subscribe(res =>
    {
        var det:any=res;
        this.totalinfo=det;
        this.tradets=det.trans;
        this.stores=det.stores;
        if(this.stores.length > 0)
        {
          this.storeid= +this.stores[0].recordId;
          this.makeStoreWiseInfo();
        }
        this.materials=det.matinfo.totalmaterials;
       // this.gininfo=det.matinfo.ginwiseinfo;
        console.log(det,'requirements');
        this.spinner.hide();
    });
}
  makeStoreWiseInfo()
  {
    this.gininfo=this.totalinfo.matinfo.ginwiseinfo.filter(a => a.store == +this.storeid);
  }
  close()
  {
    this.opened=1;
  }
  openNew()
  {
    this.opened=2;
    this.makeCle();
  }
  private makeCle()
  {
      this.lineItems=[];
      this.mgtItems=[];
  }
  openOld()
  {
    this.opened=3;
  }
  ngOnInit(): void {
  }
public makeUnits(e)
{
  this.totalavailable=0;
  this.batchavailable=0;
  var det=this.materials.filter(a => a.recordId==e);
  if(det.length > 0)
  {
    this.material=det[0];
    this.um=det[0].um;
  }
this.batches=[];

    var dets=this.gininfo.filter(a => a.itemName==this.material.recordId);
    
    for(var i=0;i<dets.length;i++)
    {
      if(this.material.umid >= 4)
{
      this.batches.push({
          gin:dets[i].gin,
          batchno:dets[i].batchNo,
          qty:dets[i].qtyin
      });
    }
    this.totalavailable=this.totalavailable+dets[i].qtyin;
}
var used:number=0;
for(var i=0;i<this.lineItems.length;i++)
{
  if(this.lineItems[i].materialid == this.material.recordId)
  {
      used=used+this.lineItems[i].qty;
  }
}
this.totalavailable=this.totalavailable-used;
}
public findtraDescr()
{
  var det=this.tradets.filter(a => a.recordid == +this.traid);
  if(det.length > 0)
  {
    this.tradescription=det[0].description;
  }
}
public findBatchQty()
{
  this.batchavailable=0;
  var det=this.batches.filter(a => a.gin==this.gin);
  if(det.length > 0)
  {
    this.batchavailable=det[0].qty;
  }
  var used=0;
  for(var i=0;i<this.lineItems.length;i++)
  {
    if(this.lineItems[i].gin == this.gin)
    {
      used=used+this.lineItems[i].qty;
    }
  }
  this.batchavailable=this.batchavailable-used;
}
private valCheckSmall():boolean
{
  if(+this.traid <=0)
  {
    this.adm.showMessage(this.title + ' not selected','Warning',3);
    return false;
  }
  if(!this.material)
  {
    this.adm.showMessage('Material not selected','Warning',3);
    return false;
  }
  if(this.material.umid >=4 && this.gin.trim() =='')
  {
    this.adm.showMessage('Batch / GIN not selected','Warning',3);
    return false;
  }
  if(this.material.umid >=4 && this.batchavailable < this.qty)
  {
    this.adm.showMessage('Batch / GIN does not contain selected qty','Warning',3);
    return false;
  }
  if(this.material.umid > 1 && this.totalavailable < this.qty)
  {
    this.adm.showMessage('Qty is not avaialbel','Warning',3);
    return false;
  }

  return true;
}
public addLine()
{
    if(this.valCheckSmall())
    {
      this.lineItems.push({
          traid: +this.traid,
          traname: this.findTraName(),
          materialid:this.material.recordId,
          materialname:this.material.itemname,
          gin:this.material.umid < 4? '':this.gin,
          batchno:this.material.umid < 4? '': this.findBatchNo(),
          qty:this.qty,
          um:this.um,
          costingtype:this.material.umid,
          sno:this.slno
      });
this.slno++;
      this.traid=-1;
      this.material=null;
      this.batches=[];
      this.batchavailable=0;
      this.totalavailable=0;
      this.qty=0;
      this.um='';

      this.makeGinAdjustments();
    }
}
private makeGinAdjustments()
{
  this.mgtItems=[];
  for(var i=0;i<this.lineItems.length;i++)
  {
      if(this.lineItems[i].costingtype==1 || this.lineItems[i].costingtype >=4)
      {
        this.mgtItems.push({
            traid:this.lineItems[i].traid,
            traname: this.lineItems[i].traname,
          materialid:this.lineItems[i].materialid,
          materialname:this.lineItems[i].materialname,
          gin:this.lineItems[i].gin,
          batchno:this.lineItems[i].batchno,
          qty:this.lineItems[i].qty,
          um:this.lineItems[i].um,
          costingtype:this.lineItems[i].costingtype,
          lineid:this.lineItems[i].sno
        });
      }
      else
      {
        var dets=this.gininfo.filter(a => a.itemName==this.lineItems[i].materialid);
        console.log(dets);
        var qty=this.lineItems[i].qty;
          for(var j=0;j<dets.length;j++)
        {
          
            if(qty > 0)
            {
              var availableqty=dets[j].qtyin-this.usedGinQty(dets[j].gin);
              if(availableqty >= qty)
              {
                this.mgtItems.push({
                  traid:this.lineItems[i].traid,
                  traname: this.lineItems[i].traname,
                materialid:this.lineItems[i].materialid,
                materialname:this.lineItems[i].materialname,
                gin:dets[j].gin,
                batchno:this.lineItems[i].batchno,
                qty:qty,
                um:this.lineItems[i].um,
                costingtype:this.lineItems[i].costingtype,
                lineid:this.lineItems[i].sno
              });
              qty=0;
              }
              else
              {
                this.mgtItems.push({
                  traid:this.lineItems[i].traid,
                  traname: this.lineItems[i].traname,
                materialid:this.lineItems[i].materialid,
                materialname:this.lineItems[i].materialname,
                gin:dets[j].gin,
                batchno:this.lineItems[i].batchno,
                qty:availableqty,
                um:this.lineItems[i].um,
                costingtype:this.lineItems[i].costingtype,
                lineid:this.lineItems[i].sno
              });
              qty=qty-availableqty;
              }
            }
        }
        
      }
  }
}
private usedGinQty(gin:string):number
{
  var det=this.mgtItems.filter(a => a.gin==gin);
  var qty=0;
  for(var i=0;i<det.length;i++)
  {
    qty=qty+this.mgtItems[i].qty;
  }
  return qty;
}
public deleteLine(obj:any)
{
  var index=this.lineItems.indexOf(obj);
  if(index >=0)
  {
    this.lineItems.splice(index,1);
    this.makeGinAdjustments();
  }
}
private findBatchNo():string
{
  
  var str='';
  var det=this.batches.filter(a => a.gin==this.gin);
  if(det.length > 0)
  {
    str=det[0].batchno;
  }
  return str;
}
private findTraName():string
{
  var str='';
  var det=this.tradets.filter(a => a.recordid == +this.traid);
  if(det.length > 0)
  {
    str=det[0].name;
  }
  return str;
}


public valChk():boolean
{
  if(+this.storeid <= 0)
  {
    this.adm.showMessage('Select Store','Warning',3);
    return false;
  }
  if(this.lineItems.length <= 0)
  {
      this.adm.showMessage('Items not selected','Warning',3);
      return false;
  }
  return true;
}
public save()
{
  if(this.valChk())
  {
    Swal.fire({  
      title:  'Confirms Transaction Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
  
  
 
    var header:any=
    {
      TraType:this.title,
      Descriptio:this.description
    }
    var lines:any[]=[];
    for(var i=0;i<this.lineItems.length;i++)
    {
      lines.push({
        Sno:this.lineItems[i].sno,
        ItemId: +this.lineItems[i].materialid,
        Qtyin:0,
        Qtyout: +this.lineItems[i].qty,
      });
    }
    var mgtlines:any[]=[];
    for(var i=0;i<this.mgtItems.length;i++)
    {
      mgtlines.push({
        Sno:i+1,
        Gin:this.mgtItems[i].gin,
        ItemName: +this.mgtItems[i].materialid,
        Store: +this.storeid,
        Qtyin:0,
        Qtyout:this.mgtItems[i].qty,
        Department:this.mgtItems[i].traid,
        TransactionType:this.tracode,
        LineId:this.mgtItems[i].lineid
      });
    }
    this.inv.setInvTransaction(header,lines,mgtlines).subscribe(res =>
      {
          var det:any=res;
          if(det.result=='OK')
          {

            Swal.fire(  
              'Transaction Completed Successfully!',  
               this.title + ' Details saved.',  
              'success'  
            );
          }
          else
          {
            Swal.fire(  
              det.result,  
              'Error in transaction.',  
              'error'  
            );
          }
      });
    }
  });
  }
}
}
