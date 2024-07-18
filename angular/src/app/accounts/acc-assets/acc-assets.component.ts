import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAssetsService } from 'app/services/accounts/acc-assets.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const now = new Date();
@Component({
  selector: 'app-acc-assets',
  templateUrl: './acc-assets.component.html',
  styleUrls: ['./acc-assets.component.scss']
})

export class AccAssetsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
 

  public saveStr:string='';
 
  public recordID:number=0;
public authCheck:boolean=false;

public asset:string='';
public depreciation:number=0;
public openingvalue:number=0;
public openingdat:string='';
public dat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  public opened:boolean=false;
  public assets:any;
  public totalassets:any;
  public searchtext:string='';
  constructor(private ast:AccAssetsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(1,1,4,0))
{
  this.delCheck=this.adm.screenCheck(1,1,4,3);
    this.listAdd();
    this.authCheck=true;
   
}
else
{
  this.authCheck=false;
this.router.navigateByUrl('accounts/accunauthorize');

}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,1,4,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.asset='';
    this.depreciation=0;
    this.openingvalue=0;
    this.openingdat='';
    this.dat={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
     
    
  }

  openOld(obj:any)
  {
    console.log(obj);
    this.recordID=obj.recordId;
   this.asset=obj.assetName;
   this.depreciation=obj.depreciation;
   this.openingvalue=this.adm.removeKama(obj.opvalue);
   
   //this.openingdat
   var dat=new Date(obj.opedate);
   this.openingdat=this.adm.makeDate(dat);
    this.dat=this.openingdat;
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,1,4,2);
    this.saveStr='Modify';
    this.opened=true;
  }
valChk():Boolean
{
  if(!this.asset)
  {
    this.adm.showMessage('Asset name not mentioned','Warning',3);
    return false;
  }
 if(this.asset.trim()=='')
 {
  this.adm.showMessage('Asset name not mentioned','Warning',3);
  return false;
 }
  
 if(!this.depreciation)
 {
   this.adm.showMessage('Depreciation not mentioned','Warning',3);
   return false;
 }
if(this.depreciation==0)
{
 this.adm.showMessage('Depreciation not mentioned','Warning',3);
 return false;
}
if(!this.openingvalue)
{
  this.adm.showMessage('Initial value not mentioned','Warning',3);
  return false;
}
if(this.openingvalue==0)
{
this.adm.showMessage('Initial value not mentioned','Warning',3);
return false;
}
if(+this.depreciation > 100)
{
  this.adm.showMessage('Depreciation % can not be more than 100','Warning',3);
return false;
}


  return true;
}
public delete()
{
   

     Swal.fire({  
        title:  'Deletes Asset Details',  
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
    
            var obj:any={
              RecordId:this.recordID,
              AssetName:this.asset,
              Depreciation:this.depreciation,
              OpeningValue:this.openingvalue,
              Date:this.adm.strDate(this.dat)
            
            };
            
      var tracheck=3;
          
           this.ast.setAsset(obj,tracheck).subscribe(
              async res => {
                var result:any=res;
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Asset Details deleted.',  
                'success'  
              )  ;
              this.opened=false;
               
            this.makeCle();
            this.listAdd();
           
       }
       else
       {
      Swal.fire(  
          result.result,  
          'Some error in transaction',  
          'error'  
        )  
      }
          
       
      this.spinner.hide();
      });
    }
  });

}
  public save()
  {

 
    
    if(this.valChk())
    {

      Swal.fire({  
        title:  this.recordID==0?'Confirms Asset Details':'Modifies Asset Details',  
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
    
            var obj:any={
              RecordId:this.recordID,
              AssetName:this.asset,
              Depreciation:this.depreciation,
              OpeningValue:this.openingvalue,
              Date:new Date(this.adm.strDate(this.dat))
            
            };
            
      var tracheck=this.recordID==0?1:2;
          
           this.ast.setAsset(obj,tracheck).subscribe(
              async res => {
                var result:any=res;
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Asset Details saved.',  
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
          result.result,  
          'Some error in transaction',  
          'error'  
        )  
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
  
  this.ast.getAssets().subscribe(
    async res => {
     this.totalassets=res;
     this.assets=this.totalassets;
    this.spinner.hide(); 
    });
    
    
}

public searchItems()
{
    this.assets=this.totalassets.filter(a => a.assetName.toUpperCase().includes(this.searchtext.toUpperCase()));
}
}
