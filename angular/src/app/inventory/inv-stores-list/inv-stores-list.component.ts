import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvStoresService } from 'app/services/inventory/inv-stores.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-inv-stores-list',
  templateUrl: './inv-stores-list.component.html',
  styleUrls: ['./inv-stores-list.component.scss']
})
export class InvStoresListComponent implements OnInit {

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
  public storecode:string='';
  public storename:string='';
  public storeincharge:string='';
  public recordID:number=0;

  public opened:boolean=false;
  public stores:any[];
  constructor(private inv:InvStoresService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(3,1,2,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(3,1,2,3);
    this.listAdd();
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
    this.creCheck=this.adm.screenCheck(3,1,2,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.storecode='';
    this.storename='';
    this.storeincharge='';
  }

  openOld(obj:any)
  {
    console.log(obj);
    this.storecode=obj.storeCode;
    this.recordID=obj.recordId;
    this.storename=obj.storeName;
    this.storeincharge=obj.storeIncharge;
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(3,1,2,2);
    this.saveStr='Modify';
    this.opened=true;
  }
valChk():Boolean
{
  if(this.storecode.trim()=='')
  {
    this.toastr.warning('Store Code not mentioned','Warning');
    return false;
  }
  if(this.storename.trim()=='')
  {
    this.toastr.warning('Store Name not mentioned','Warning');
    return false;
  }
  if(this.storeincharge.trim()=='')
  {
    this.toastr.warning('Store Incharge not mentioned','Warning');
    return false;
  }
  return true;
}
public deleteStore()
{
  Swal.fire({  
    title:   'Deletes Store Details',  
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


        {
          
         var obj:any={
      RecordId:this.recordID,
    storeCode:this.storecode,
    storeName:this.storename,
    storeIncharge:this.storeincharge
    };
    
    var tracheck=3;
    this.inv.setInvStore(obj,tracheck).subscribe(
      async res => {
        var resul:any=res;
          
            if(resul.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Store Details deleted.',  
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
 
  }
}
});
   
}
  public saveStore()
  {
    if(this.valChk())
    {
    Swal.fire({  
      title:  this.recordID==0?'Confirms Store Details':'Modifies Store Details',  
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
  
  
          {
            
           var obj:any={
        RecordId:this.recordID,
      storeCode:this.storecode,
      storeName:this.storename,
      storeIncharge:this.storeincharge
      };
      
      var tracheck=this.recordID==0?1:2;
      this.inv.setInvStore(obj,tracheck).subscribe(
        async res => {
          var resul:any=res;
            
              if(resul.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Store Details saved.',  
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
   
    }
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
  
  this.inv.getInvStores().subscribe(
    async res => {
      this.stores=res;
      console.log(this.stores);
    this.spinner.hide(); 
    });
    
}
}
