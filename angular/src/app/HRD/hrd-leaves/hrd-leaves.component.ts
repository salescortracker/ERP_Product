import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdLeavesService } from 'app/services/hrd/hrd-leaves.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-hrd-leaves',
  templateUrl: './hrd-leaves.component.html',
  styleUrls: ['./hrd-leaves.component.scss']
})
export class HrdLeavesComponent implements OnInit {
  public leaves:any;
  public authCheck:Boolean=false;
  public opened:boolean=false;
  public delCheck:Boolean=false;
  public creCheck:Boolean=false;
  public delVisible:Boolean=false;
  public saveStr:string='';
  public leave:any={
    RecordId:0,
    LeaveCode:'',
    LeaveDescription:'',
    PayType:0,
    ForwardType:0
  }
  constructor(private adm:AdminGeneralInfoService,private router:Router, private hrd:HrdLeavesService, private spinner: NgxSpinnerService) {   
    if(this.adm.screenCheck(8,1,3,0))
    {
      this.delCheck=this.adm.screenCheck(8,1,3,3);
      this.authCheck=true;
      this.listAdd();
    }
    else
    {
      this.router.navigateByUrl('hrd/unauthorzeid');
    }
   }

   openNew()
   {
     this.makeCle();
     this.opened=true;
     this.delVisible=false;
     this.saveStr='Save';
     this.creCheck=this.adm.screenCheck(8,1,3,1);
   }
   openOld(obj:any)
   {
    this.saveStr='Modify';
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(8,1,3,2);
    console.log(obj);
    this.opened=true;
    
    this.leave={
      RecordId:obj.recordId,
      LeaveCode:obj.leaveCode,
      LeaveDescription:obj.leaveDescription,
      PayType:obj.payType,
      ForwardType:obj.forwardType
    }
   }
   makeCle()
   {
    this.leave={
      RecordId:0,
      LeaveCode:'',
      LeaveDescription:'',
      PayType:0,
      ForwardType:0
    }
   }

  ngOnInit(): void {
  }
close()
{
  this.opened=false;
}
public deleteLeave()
{

  this.leave.PayType=+this.leave.PayType;
  this.leave.ForwardType=+this.leave.ForwardType;
   
    Swal.fire({  
      title:  'Deletes Leave Details',  
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
   
           
      
          var tracheck=3;
         this.hrd.setHRDLeave(this.leave,tracheck).subscribe(
            async res => {
              var result:any=res;

              console.log(res,'result');
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Leave Details deleted.',  
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
private valChk():Boolean
{
  if(this.leave.LeaveCode=='')
  {
    this.adm.showMessage('Leave Code not mentioned','Warning',3);
    return false;
  }
  if(this.leave.LeaveDescription=='')
  {
    this.adm.showMessage('Leave not mentioned','Warning',3);
    return false;
  }
  if(this.leave.PayType==0)
  {
    this.adm.showMessage('Pay type not mentioned','Warning',3);
    return false;
  }
  if(this.leave.ForwardType==0)
  {
    this.adm.showMessage('Forward type not mentioned','Warning',3);
    return false;
  }
  return true;
}
public saveLeave()
{
  this.leave.PayType=+this.leave.PayType;
  this.leave.ForwardType=+this.leave.ForwardType;
  if(this.valChk())
  {
    Swal.fire({  
      title:  this.leave.RecordId==0?'Confirms Leave Details':'Modifies Leave Details',  
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
   
           
      
          var tracheck=this.leave.RecordId==0?1:2;
         this.hrd.setHRDLeave(this.leave,tracheck).subscribe(
            async res => {
              var result:any=res;

              console.log(res,'result');
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Leave Details saved.',  
              'success'  
            )  ;

            if(this.leave.RecordId==0)
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

  this.hrd.getHRDLeaves().subscribe(res => 
    {
        this.leaves=res;
        this.spinner.hide();
    });
}

}
