import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import { InvSetupService } from 'app/services/inventory/inv-setup.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-inv-items-tra',
  templateUrl: './inv-items-tra.component.html',
  styleUrls: ['./inv-items-tra.component.scss']
})
export class InvItemsTraComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
 
  public checkDup:string='';
  public recordID:number=0;

  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;



  public mainum:number=-1;
  public stdum:number=-1;
  public conve:number;
  public stdumchk:Boolean=true;

  public treeObj:any;
  public ums:any;
  public umslist:any[]=[];

  public opened:boolean=false;
  public items:any;
  public totalitems:any;
  public searchtext:string='';

  public grop:string='';

public item:any={
   Itemid:'',
  ItemName:'',
  Grp:0,
  StdRate:0,
  ReOrderQty:0,
  ShelfLifeReqd:0,
  InventoryReqd:1,
  Statu:1,
  costingType:0
  };
  public costingtype:number=0;
  public itemunits:any[];
  public costingtypecheck:boolean=true;

  public shelflife:boolean=false;
  public invreqd:boolean=true;



  constructor(private inm:InvMastersService,private inu:InvUMService, private inv:InvSetupService,  private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private gen:AdminGeneralInfoService
   ) {
if(this.adm.screenCheck(3,1,4,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(3,1,4,3);
    this.listAdd();
    this.treeAdd();

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.inv.getInventoryCostingInfo().subscribe(res =>
      {
        this.spinner.hide();
        var det:any=res;
        this.costingtype=+det.setupValue;
      });

}
else
{
  this.router.navigateByUrl('inventory/invunauthorize');
}
 
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.costingtypecheck=true;
    this.creCheck=this.adm.screenCheck(3,1,4,1);
    this.saveStr='Save';
    this.opened=true;
   
  }
  private makeCle()
  {
    this.delVisible=false;
    this.shelflife=false;
    this.invreqd=true;
    this.item={
   Itemid:'',
  ItemName:'',
  Grp:0,
  StdRate:0,
  ReOrderQty:0,
  ShelfLifeReqd:0,
  InventoryReqd:1,
  Statu:1,
  CostingType:this.costingtype
      };
this.grop='';
      this.umslist=[];
    this.stdumchk=true;

      if(this.recordID > 0)
      {
        this.opened=false;
       
      }
      this.recordID=0;
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
     
    this.recordID=obj.recordId;
   
      this.costingtypecheck=true;
    this.grop=obj.grp;

    this.inm.getInventoryItem(this.recordID).subscribe(res =>
      {
        var det:any=res;
         

        this.umslist=[];

        this.item={
          RecordId:this.recordID,
         Itemid:det.mat.itemid,
         ItemName:det.mat.itemName,
         Grp:det.mat.grp,
         StdRate:det.mat.stdRate,
         ReOrderQty:det.mat.reOrderQty,
         ShelfLifeReqd:det.mat.shelfLifeReqd,
         InventoryReqd:det.mat.inventoryReqd,
         Statu:det.mat.statu,
         CostingType:det.mat.costingType
             };
 
             this.shelflife=this.item.ShelfLifeReqd==1?true:false;
             this.invreqd=this.item.InventoryReqd==1?true:false;

        for(var i=0;i<det.matum.length;i++)
        {

          this.umslist.push({
            mainid:det.matum[i].um,
            mainum:this.getUM(det.matum[i].um),
            conve:det.matum[i].conversionFactor,
            stdid:det.matum[i].stdUm,
            stdum:this.getUM(det.matum[i].stdUm)
        
        
          });
        }
        if(this.umslist.length > 0)
        {
          this.stdum=this.umslist[0].stdid;
        }
        this.costingtypecheck=det.tracheck==1?true:false;
        this.spinner.hide();
      });

    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(3,1,4,2);
    this.saveStr='Modify';
    this.opened=true;
    
  
  }
valChk():Boolean
{
  
    if(this.item.Itemid.trim()=='')
    {
      this.gen.showMessage('Material code not mentioned','Warming',3);
      return false;
    } 
    if(this.item.ItemName.trim()=='')
    {
      this.gen.showMessage('Material name not mentioned','Warming',3);
      return false;
    } 
    if(this.grop.trim()=='')
    {
      this.gen.showMessage('Material Group not selected','Warming',3);
      return false;
    } 
    if(this.item.CostingType <= 0)
    {
      this.gen.showMessage('Costing type not selected','Warming',3);
      return false;
    }
    if(this.checkDup.trim() != '')
    {
      this.gen.showMessage('Item code or name should not be duplicated','Warming',3);
      return false;
    }
    if(this.umslist.length <=0)
    {
      this.gen.showMessage('Material Unites not entered','Warming',3);
      return false;
    }
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:   'Deletes Material Details',  
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

      this.item.RecordId=this.recordID;

      this.item.ShelfLifeReqd = +this.item.shelfLifeReqd==1?1:0;
      this.item.InventoryReqd=+this.item.InventoryReqd==1?1:0;
    var matum:any[]=[];
var cnt=0;
    for(var i=0;i<this.umslist.length;i++)
    {
      if(this.umslist[i].mainid==this.umslist[i].stdid)
      {
        cnt++;
      }
    }
for(var i=0;i<this.umslist.length;i++)
    {
        matum.push({
          RecordId:this.recordID,
          Um:+this.umslist[i].mainid,
          StdUm:+this.umslist[i].stdid,
          ConversionFactor:this.umslist[i].conve
        });

      }
      if(cnt==0)
      {
        matum.push({
          RecordId:this.recordID,
          Um:+this.umslist[0].stdid,
          StdUm:+this.umslist[0].stdid,
          ConversionFactor:1
        });
      }

        
        this.inm.setInventoryItem(this.item,matum,3).subscribe(res =>
          {  var resul:any=res;
              
                if(resul.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Material Details deleted.',  
                'success'  
              )  ;
  
              if(this.recordID==0)
            {
               this.opened=true;
            }
            else
            {
              
                 this.opened=false;
            }
            this.makeCle();
            this.listAdd();
           
       }
        else
       {
      Swal.fire(  
          resul.result,  
          'Some error in transaction',  
          'error'  
        )  
      }
          
       
      this.spinner.hide();
      
          

  });
}}
);
     
  
}


  public save()
  {
 
  
    
    
    
    
    
    if(this.valChk())
        {
        Swal.fire({  
          title:  this.recordID==0?'Confirms Material Details':'Modifies Material Details',  
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
      
              if(this.recordID > 0)
            this.item.RecordId=this.recordID;
              

             
            this.item.ShelfLifeReqd = this.shelflife?1:0;
            this.item.InventoryReqd=this.invreqd?1:0;
          var matum:any[]=[];
    var cnt=0;
          for(var i=0;i<this.umslist.length;i++)
          {
            if(this.umslist[i].mainid==this.umslist[i].stdid)
            {
              cnt++;
            }
          }
      for(var i=0;i<this.umslist.length;i++)
          {
              matum.push({
                RecordId:this.recordID,
                Um:+this.umslist[i].mainid,
                StdUm:+this.umslist[i].stdid,
                ConversionFactor:this.umslist[i].conve
              });
    
            }
            if(cnt==0)
            {
              matum.push({
                RecordId:this.recordID,
                Um:+this.umslist[0].stdid,
                StdUm:+this.umslist[0].stdid,
                ConversionFactor:1
              });
            }
            this.item.CostingType=+this.item.CostingType;
              var tracheck=this.recordID==0?1:2;
              this.inm.setInventoryItem(this.item,matum,this.recordID==0?1:2).subscribe(res =>
                {  var resul:any=res;
                    
                      if(resul.result  =='OK')
          {
             Swal.fire(  
                      'Transaction Completed Successfully!',  
                      'Material Details saved.',  
                      'success'  
                    )  ;
        
                    if(this.recordID==0)
                  {
                     this.opened=true;
                  }
                  else
                  {
                    
                       this.opened=false;
                  }
                  this.makeCle();
                  this.listAdd();
                 
             }
              else
             {
            Swal.fire(  
                resul.result,  
                'Some error in transaction',  
                'error'  
              )  
            }
                
             
            this.spinner.hide();
            
                
    
        });
      }}
    );
    }
    
   
   
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

    this.inu.getInvUms().subscribe(res => 
      {
        this.ums=res;
         
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

        this.inm.getInventoryItems().subscribe(res =>
          {
            this.totalitems=res;
              this.searchItems();
              this.loadPage(1);
        this.spinner.hide(); 
          });

  
    
}
public searchItems()
{
  this.pageno=1;
  this.searchDetails();
}
loadPage(event)
{
  this.pageno=event;
  this.searchDetails();
  this.page4=event;
}
public addUM()
{
    if(this.mainum <=0)
    {
      this.gen.showMessage('Main Unit not mentioned','Warning',3);
      return;
    }
    if(this.stdum <=0)
    {
      this.gen.showMessage('Std Unit not mentioned','Warning',3);
      return;
    }
    if(! this.conve)
    {
      this.gen.showMessage('Conversion of unit not mentioned','Warning',3);
      return;
    }
    if(this.conve <= 0)
    {
      this.gen.showMessage('Conversion of unit not mentioned','Warning',3);
      return;
    }

    var x=this.umslist.filter(a => a.mainid ==this.mainum);
  if(x.length > 0)
  {
    this.gen.showMessage('These details are already specified','Warning',3);
    return;
  }


  this.umslist.push({
    mainid:this.mainum,
    mainum:this.getUM(this.mainum),
    conve:this.conve,
    stdid:this.stdum,
    stdum:this.getUM(this.stdum)


  });

  this.mainum=-1;
  this.conve=0;
  this.stdumchk=false;
    

}
public deleteUM(obj:any)
{
    var ind=this.umslist.indexOf(obj); 
    this.umslist.splice(ind,1);
  if(this.umslist.length ==0)
  {
    this.stdumchk=true;
  }
}

private getUM(id):String
{
  var str='';

  var x=this.ums.filter(a => a.recordId ==id);
  if(x.length > 0)
  {
    str=x[0].um;
  }

  return str;
}

treeAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  
  this.inm.getInvGroupsTreeWise().subscribe(
    async res => {
      this.treeObj=res;
      console.log(this.treeObj);
    this.spinner.hide(); 
    });
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
 this.item.Grp=obj.recordId
  this.grop=obj.subGroup;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  this.item.Grp=obj.recordId
  this.grop=obj.subGroup;
  

}
public searchDetails()
{

  var items:any;
  if(this.searchtext.trim()=='')
  {
      items=this.totalitems;
  }
  else
  {
      items=this.totalitems.filter((a:any) => a.itemname.toUpperCase().includes(this.searchtext.toUpperCase()));
  }
  this.totalpages=items.length/this.PAGESIZE*10;
   this.items=[];
  var start=(this.pageno-1)*this.PAGESIZE;
  var end=start+this.PAGESIZE-1;
    for(var i=start;i<=end;i++)
  {
    if(i==items.length)
    {
      return;
    }
    else
    {
    this.items.push(items[i]);
    }
  }
 
   }

   public findDuplicate(x)
   {
     this.checkDup='';
    switch (x) {
      case 1:
        var det=this.totalitems.filter(a => a.itemcode.toUpperCase() == this.item.Itemid.toUpperCase()  && a.recordId != this.recordID );
        if(det.length > 0)
        {
          this.checkDup='This Item Code is already existed';
        }
        else
        {
          this.checkDup='';
        }
        break;
      case 2:
        var det=this.totalitems.filter(a => a.itemname.toUpperCase() == this.item.ItemName.toUpperCase() && a.recordId != this.recordID);
      
        if(det.length > 0)
        {
          this.checkDup='This Item Name is already existed';
        }
        else
        {
          this.checkDup='';
        }
        break;
    }

       
   }

}
