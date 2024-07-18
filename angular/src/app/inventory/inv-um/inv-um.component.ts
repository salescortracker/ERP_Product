import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-inv-um',
  templateUrl: './inv-um.component.html',
  styleUrls: ['./inv-um.component.scss']
})
export class InvUMComponent implements OnInit {

  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
  public uom:string='';
  public recordID:number=0;

  public opened:boolean=false;
  public ums:any[];
  constructor(private inv:InvUMService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(3,1,1,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(3,1,1,3);
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
    this.creCheck=this.adm.screenCheck(3,1,1,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
    this.uom='';
  }

  openOld(obj:any)
  {
     
    this.uom=obj.um;
    this.recordID=obj.recordId;
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(3,1,1,2);
    this.saveStr='Modify';
    this.opened=true;
  }
valChk():Boolean
{
  if(this.uom.trim()=='')
  {
    this.toastr.warning('Unit not mentioned','Warning');
    return false;
  }
  return true;
}
public deleteUM()
{
  Swal.fire({  
    title:   'Deletes Unit Details',  
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
            Um:this.uom
          };
          
          var tracheck=3;
          this.inv.setInvUm(obj,tracheck).subscribe(
            async res => {
              var resul:any=res;
          
            if(resul.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Unit Details deleted.',  
            'success'  
          )  ;

         
         
          this.makeCle();
             this.opened=false;
        
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
  public saveUM()
  {
    if(this.valChk())
    {
    Swal.fire({  
      title:  this.recordID==0?'Confirms Unit Details':'Modifies Unit Details',  
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
                Um:this.uom
            };
            if(this.recordID > 0)
            {
              obj.RecordId=this.recordID;
            }
            
            var tracheck=this.recordID==0?1:2;
            this.inv.setInvUm(obj,tracheck).subscribe(
              async res => {
                var resul:any=res;
            
              if(resul.result  =='OK')
  {
      Swal.fire(  
              'Transaction Completed Successfully!',  
              'Unit Details saved.',  
              'success'  
            )  ; 
 
            this.listAdd();
            this.opened=false;
 
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
  
  this.inv.getInvUms().subscribe(
    async res => {
      this.ums=res;
    
    this.spinner.hide(); 
    });
    
}
}
