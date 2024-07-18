import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvUMService } from 'app/services/inventory/inv-um.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';
import { InvMastersService } from 'app/services/inventory/inv-masters.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-inv-losses-list',
  templateUrl: './inv-losses-list.component.html',
  styleUrls: ['./inv-losses-list.component.scss']
})
export class InvLossesListComponent implements OnInit {
 
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;

  public saveStr:string='';

  public lossname:string='';
  public allowableper:number=0;
   

  public recordID:number=0;

  public opened:boolean=false;
  public losses:any;
  constructor(private inv:InvMastersService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(3,1,7,0))
{
  this.delCheck=this.adm.screenCheck(3,1,7,3);
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
    this.creCheck=this.adm.screenCheck(3,1,7,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
   this.lossname='';
   this.allowableper=0;
  }

  openOld(obj:any)
  {
    
    this.recordID=obj.recordId;
    this.lossname=obj.lossName;
    this.allowableper=obj.allowableper;
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(3,1,7,2);
    this.saveStr='Modify';
    this.opened=true;
  } 
valChk():Boolean
{
  if(this.lossname.trim()=='')
  {
    this.toastr.warning('Loss not mentioned','Warning');
    return false;
  }
  if(this.allowableper <= 0)
  {
    this.toastr.warning('Allowable % not mentioned','Warning');
    return false;
  }
  
  return true;
}
public deleteStore()
{
   
  Swal.fire({  
    title:   'Deletes Loss Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  

    if (result.value) { 
      var obj:any={
        RecordId:this.recordID,
        LossName:this.lossname,
        Allowableper:this.allowableper,
     
      };
   
      this.inv.setInvLosses(obj,3).subscribe(
        async res => {
          var result:any=res;
          
          if(result.result  =='OK')
          {
            Swal.fire(  
              'Transaction Completed Successfully',  
              'Loss details deleted',  
              'success'  
            )  
            this.listAdd();
            this.makeCle();
              this.opened=false;
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
  public saveStore()
  {
    if(this.valChk())
    {
    Swal.fire({  
      title:  this.recordID==0?'Confirms Loss Details':'Modifies Loss Details',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  

      if (result.value) { 
        var obj:any={
          RecordId:this.recordID,
          LossName:this.lossname,
          Allowableper:this.allowableper,
       
        };
        var tracheck=this.recordID==0?1:2;
        this.inv.setInvLosses(obj,tracheck).subscribe(
          async res => {
            var result:any=res;
            
            if(result.result  =='OK')
            {
              Swal.fire(  
                'Transaction Completed Successfully',  
                'Loss details saved',  
                'success'  
              )  
              this.listAdd();
              if(this.recordID==0)
              {
                this.makeCle();
                
                this.opened=true;
              }
              else
              {
                this.makeCle();
                this.opened=false;
               
              }
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
  
  this.inv.getInvLosses().subscribe(
    async res => {
      this.losses=res;
      console.log(this.losses);
    this.spinner.hide(); 
    });
    
}
}
