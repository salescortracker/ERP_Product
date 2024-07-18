import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  selector: 'app-pur-materials-child',
  templateUrl: './pur-materials-child.component.html',
  styleUrls: ['./pur-materials-child.component.scss']
})
export class PurMaterialsChildComponent implements OnInit {
   
  @Output()
  notify:EventEmitter<any>= new EventEmitter<any>();
  
  public mainum:number=-1;
  public stdum:number=-1;
  public conve:number;
  public stdumchk:Boolean=true;

  public treeObj:any;
  public ums:any;
  public umslist:any[]=[];
    
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
public authcheck:boolean=false;
public checkDup:string='';

  constructor(private inm:InvMastersService,private inu:InvUMService, private inv:InvSetupService,  private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private gen:AdminGeneralInfoService
   ) {
if(this.adm.screenCheck(3,1,4,1))
{
 this.authcheck=true;
    this.treeAdd();
this.listAdd();

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
        this.item.costingType=+det.setupValue
      });
      

}
else
{
  this.authcheck=false;
}
 
   }

  ngOnInit(): void {
   // this.listAdd();
  }

 
  private makeCle()
  {
    
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
  public save()
  {
 
  
    
    
    
    
    
    if(this.valChk())
        {
        Swal.fire({  
          title:   'Confirms Material Details',  
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
                  Um:+this.umslist[i].mainid,
                StdUm:+this.umslist[i].stdid,
                ConversionFactor:this.umslist[i].conve
              });
    
            }
            if(cnt==0)
            {
              matum.push({
                   Um:+this.umslist[0].stdid,
                StdUm:+this.umslist[0].stdid,
                ConversionFactor:1
              });
            }
            if(cnt==0)
            {
              this.umslist.push({
                mainid:+this.umslist[0].stdid,
    mainum:this.getUM(+this.umslist[0].stdid),
    conve:1,
    stdid:+this.umslist[0].stdid,
    stdum:this.getUM(+this.umslist[0].stdid)
              });
            }
            this.item.CostingType=+this.item.CostingType;
               this.inm.setInventoryItem(this.item,matum,1).subscribe(res =>
                {  var resul:any=res;
                    
                      if(resul.result  =='OK')
          {
             Swal.fire(  
                      'Transaction Completed Successfully!',  
                      'Material Details saved.',  
                      'success'  
                    )  ;
        
              var obj:any=
              {
                recordid:resul.recordId,
                item:this.item,
                itemgroup:this.grop,
                units:this.umslist
              }
                    this.notify.emit(obj);
                  this.makeCle();
                 // this.listAdd();
                 
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
 
 

}
