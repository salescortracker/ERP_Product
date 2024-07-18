import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { ToggleFullscreenDirective } from 'app/shared/directives/toggle-fullscreen.directive';
import { isThisQuarter } from 'date-fns';
import { NgxSpinnerService } from 'ngx-spinner';
const now:Date=new Date();

@Component({
  selector: 'app-inv-audit-consumables',
  templateUrl: './inv-audit-consumables.component.html',
  styleUrls: ['./inv-audit-consumables.component.scss']
})
export class InvAuditConsumablesComponent implements OnInit {
  public stores:any=[];
  public storeid:number=-1;
  public storename:String='';
  public batchno:String='';
  public manudat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};;
  public expdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};;
  public qty:number=null;
  public rat:number=null;
  
  
  
  public dat:Date=new Date();
  
  public addcheck:Boolean=false;
  
  
  public costingtyp:number=-1;
  
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
  
  public opestocks:any[]=[];
  public totalopestocks:any[]=[];
  
  
    constructor(private inv:InvMastersService,private router:Router,  private spinner: NgxSpinnerService,private gen:AdminGeneralInfoService) { 
  if(this.gen.screenCheck(2,1,5,0))
  {
  this.getDetails();
  }
  else
  {
    this.router.navigateByUrl('inventory/invunauthorize');
  }
    }
  
    ngOnInit(): void {
    }
  
    public getDetails()
    {
      
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
       
      this.inv.getInvOpeningStocks().subscribe(res =>
        {
   var det:any=res;
   this.stores=det.stores;
   
   this.totalopestocks=det.ostocks;
 // this.dat=det.dat;
   if(this.stores.length > 0)
   {
    this.storeid= this.stores[0].recordId;
    this.listAdd();
   }
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
       
  
        this.inv.getInventoryItems().subscribe(res =>
          {
           
            this.items=res;
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
          
  
    }
    public listAdd()
    {
        this.opestocks=this.totalopestocks.filter(a => a.storeCode==this.storeid);
        console.log(this.opestocks);
    }
  
  private valChk():Boolean
  {
     return false;
  }
    public addStock()
    {
        if(this.storeid < 0)
        {
            this.gen.showMessage('Store not selected','Warning',3);
            return;
        }
        if(this.material.itemname=='')
        {
          this.gen.showMessage('Material not selected','Warning',3);
          return;
        }
        if(this.material.costingType == 4&& this.batchno.trim()=='')
        {
          this.gen.showMessage('Batch not mentioned','Warning',3);
          return;
        }
        if(this.qty <= 0)
        {
          this.gen.showMessage('Qty not mentioned','Warning',3);
          return;
        }
  
        
  
        var stock:any={
          TransactionId:0,
          Sno:1,
          Gin:'',
          ItemName:this.material.recordId,
          Dat:null,
          BatchNo:this.batchno,
          Manudate:this.gen.makePresentDate(this.manudat),
          Expdate:this.material.shelflife==1?this.gen.makePresentDate(this.expdate):null,
          Store:this.storeid,
          Qtyin:this.qty,
          Qtyout:0,
          Stdum:this.material.stdumId,
          Rat:this.rat,
          Department:null,
          ProductBatchNo:null,
          TransactionType:0
        }
        
        this.inv.setInvOpeningStock(stock).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                  this.gen.showMessage('Stock added successfully','Success',1);
                  this.totalopestocks.push({
                    batchNo:this.batchno,
                    expdate:this.material.shelflife==1?this.gen.strDate(this.expdate):null,
                    gin:det.stock.Gin,
                    itemname:this.material.itemname,
                    manudate:this.gen.strDate(this.manudat),
                    qty:this.qty,
                    rat:this.rat,
                    stdUm:this.material.stdum,
                    storeCode:this.storeid
                  });
                  this.listAdd();
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
                  this.batchno='';
                  this.qty=null;
                  this.rat=null;
                   
              }
              else
              {
                this.gen.showMessage(det.result,'Error',4);
              }
          });
        
    }
  
    public deleteStock(obj:any)
    {
        this.inv.delInvOpeningStocks(obj.gin).subscribe(res =>
          {
              var result:any=res;
              if(result.detail=="OK")
              {
                this.gen.showMessage('Detail deleted successfully','Success',1);
                var index=this.totalopestocks.indexOf(obj);
                if(index >= 0)
                {
                  this.totalopestocks.splice(index,1);
                  this.listAdd();
                }
              }
              else
  
              {
                this.gen.showMessage(result.detail,'Error',4);
              }
          });
    }
  
  }
  
