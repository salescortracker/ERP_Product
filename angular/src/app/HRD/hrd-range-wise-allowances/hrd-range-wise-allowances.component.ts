import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { HrdAllowancesDeductionsService } from 'app/services/hrd/hrd-allowances-deductions.service';
import { HrdDepartmentsService } from 'app/services/hrd/hrd-departments.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-hrd-range-wise-allowances',
  templateUrl: './hrd-range-wise-allowances.component.html',
  styleUrls: ['./hrd-range-wise-allowances.component.scss']
})
export class HrdRangeWiseAllowancesComponent implements OnInit {
  public creCheck:Boolean=false;
   
public authCheck:Boolean=false;
public hrdallowancesdeductions:any[]=[];
public hrdallowancesdeductionsranges:any[]=[];
public selectRanges:any[]=[];

public allowanceId:number=0;
public fromValue:number=0;
public toValue:number=0;
public valu:number=0;

  constructor(private hall:HrdAllowancesDeductionsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(8,1,5,0))
{
  this.authCheck=true;
 this.listAdd();

}
else
{
  this.router.navigateByUrl('hrd/unauthorzeid');
}
 
   }

  ngOnInit(): void {
   // this.listAdd();
  }
 
  private makeCle()
  {
    this.listAdd();
    this.selectRanges=[];
    this.fromValue=0;
    this.toValue=0;
    this.valu=0;
  }
  
    
  public save()
  {
      Swal.fire({  
        title:   'Confirms Allowance/Deduction Range Details',  
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

            var det:any[]=[];
            for(var i=0;i<this.selectRanges.length;i++)
            {
              det.push({
                AllowanceId:+this.selectRanges[i].allowanceId,
                FromValue:this.selectRanges[i].fromValue,
                ToValue:this.selectRanges[i].toValue,
                Valu:this.selectRanges[i].valu
              });
            }

 
           this.hall.setHRDAllowancesDeductionsRange(det).subscribe(
              async res => {
                var result:any=res;
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Allowance/Deduction Details saved.',  
                'success'  
              )  ;

             
            this.makeCle();
           
            
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
    this.hall.getHRDAllowancesDeductionsRange().subscribe(res =>
      {
        var det:any=res;
        this.hrdallowancesdeductions=det.allowancesDeductions;
        this.hrdallowancesdeductionsranges=det.allowanceDeductionRanges;
        this.spinner.hide();
      });
}
 

addRange()
{
   

  if(this.allowanceId==0)
  {
    this.adm.showMessage('Select Allowance/Deduction','Warning',3);
    return;
  }
  else
{
  var det=this.hrdallowancesdeductions.filter(a => a.recordId == +this.allowanceId);
  var nam='';
  if(det.length >0)
  {
    nam=det[0].allowance;
  }
    this.selectRanges.push({
      allowanceId:this.allowanceId,
      allowanceName:nam,
      fromValue:this.fromValue,
      toValue:this.toValue,
      valu:this.valu
    });
}


}
deleteRange(obj:any)
{
  var index=this.selectRanges.indexOf(obj);
  if(index >=0)
  {
    this.selectRanges.splice(index,1);
  }
}

public getRanges()
{
  this.selectRanges=[];
  var dets=this.hrdallowancesdeductionsranges.filter(a => a.allowanceId == +this.allowanceId);
  var det=this.hrdallowancesdeductions.filter(a => a.recordId == +this.allowanceId);
  var nam='';
  if(det.length >0)
  {
    nam=det[0].allowance;
  }
   
  if(dets.length >0)
  {
    for(var i=0;i<dets.length;i++)
    {
    this.selectRanges.push({
      allowanceId:this.allowanceId,
      allowanceName:nam,
      fromValue:dets[i].fromValue,
      toValue:dets[i].toValue,
      valu:dets[i].valu
    });
  }
  }
}

   
}
