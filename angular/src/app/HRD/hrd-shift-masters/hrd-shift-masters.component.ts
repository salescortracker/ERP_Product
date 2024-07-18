import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdLeavesService } from 'app/services/hrd/hrd-leaves.service';
import { HrdShiftsService } from 'app/services/hrd/hrd-shifts.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-hrd-shift-masters',
  templateUrl: './hrd-shift-masters.component.html',
  styleUrls: ['./hrd-shift-masters.component.scss']
})
export class HrdShiftMastersComponent implements OnInit {
  public shifts:any;
  public authCheck:Boolean=false;
  public opened:boolean=false;
  public delCheck:Boolean=false;
  public creCheck:Boolean=false;
  public delVisible:Boolean=false;
  public saveStr:string='';

  public recordid:number=0;
  public fromhour:string='00';
  public fromminute:string='00';
  public tohour:string='00';
  public tominute:string='00';
public hours:string[]=[];
public minutes:string[]=[];


  public shift:any={
    ShiftName:'',
    FromTime:'',
    ToTime:''
   
  }
  constructor(private adm:AdminGeneralInfoService,private router:Router, private hrd:HrdShiftsService, private spinner: NgxSpinnerService) {   
    if(this.adm.screenCheck(8,1,7,0))
    {
      this.delCheck=this.adm.screenCheck(8,1,7,3);
      this.authCheck=true;
      for(var i=0;i<=23;i++)
      {
        this.hours.push(i<10?'0'+i.toString():i.toString());
      }
      for(var i=0;i<=59;i++)
      {
        this.minutes.push(i<10?'0'+i.toString():i.toString());
      }
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
     this.creCheck=this.adm.screenCheck(8,1,7,1);
   }
   openOld(obj:any)
   {
    this.saveStr='Modify';
    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(8,1,7,2);
    console.log(obj);
    this.opened=true;
    this.recordid=+obj.recordId;
    this.shift={
      ShiftName:obj.shiftName,
      FromTime:obj.fromTime,
      ToTime:obj.toTime
    }
    this.fromhour=obj.fromTime.substring(0,2);
    this.fromminute=obj.fromTime.substring(3,5);
    console.log(obj.fromTime.substring(3,2),obj.fromTime.substring(3,5),'old');
    this.tohour=obj.toTime.substring(0,2);
    this.tominute=obj.toTime.substring(3,5);
   }
   makeCle()
   {
    this.shift={
      ShiftName:'',
      FromTime:'',
      ToTime:''
    }
    this.fromhour='00';
    this.fromminute='00';
    this.tohour='00';
    this.tominute='00';
   }

  ngOnInit(): void {
  }
close()
{
  this.opened=false;
}
public deleteShift()
{

  this.shift.RecordId=this.recordid;
    
    Swal.fire({  
      title:  'Deletes Shift Details',  
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
         this.hrd.setHRDShift(this.shift,tracheck).subscribe(
            async res => {
              var result:any=res;

              console.log(res,'result');
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Shift Details deleted.',  
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
  if(this.shift.ShiftName=='')
  {
    this.adm.showMessage('Shift Name not mentioned','Warning',3);
    return false;
  }
   
   
  return true;
}
public saveShift()
{
  if(this.valChk())
  {
    Swal.fire({  
      title:  this.recordid==0?'Confirms Shift Details':'Modifies Shift Details',  
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
   
           
      
          var tracheck=this.recordid==0?1:2;
          this.shift.FromTime=this.fromhour + ':' + this.fromminute;
          this.shift.ToTime=this.tohour + ':' + this.tominute;
          
          if(this.recordid > 0)
          {
            this.shift.RecordId=this.recordid;
          }
         this.hrd.setHRDShift(this.shift,tracheck).subscribe(
            async res => {
              var result:any=res;

              console.log(res,'result');
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Shift Details saved.',  
              'success'  
            )  ;

            if(this.recordid==0)
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

  this.hrd.getHRDShifts().subscribe(res => 
    {
        this.shifts=res;
        this.spinner.hide();
    });
}

}
