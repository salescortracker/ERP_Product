import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAllowancesDeductionsService } from 'app/services/hrd/hrd-allowances-deductions.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgxSpinnerService } from "ngx-spinner";
import { HrdDepartmentsService } from 'app/services/hrd/hrd-departments.service';
import { HrdLeavesService } from 'app/services/hrd/hrd-leaves.service';
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hrd-designations',
  templateUrl: './hrd-designations.component.html',
  styleUrls: ['./hrd-designations.component.scss']
})
export class HrdDesignationsComponent implements OnInit {
public recordId:number=0;
public designations:any;
public desig:string='';
public allowances:any;
public leaves:any;
public saveStr:string='';
public authCheck:Boolean=false;
public opened:boolean=false;
public delVisible:Boolean=false;
public delCheck:Boolean=false;
public creCheck:Boolean=false;
public department:string='';
public departmentid:number=0;
public treeObj:any;
  constructor(private adm:AdminGeneralInfoService,private hrd:HrdDesignationsService,private hdep:HrdDepartmentsService,
    private allo:HrdAllowancesDeductionsService,  private lea:HrdLeavesService, private router:Router,
    private spinner:NgxSpinnerService) {
    if(this.adm.screenCheck(8,1,4,0))
    {
      this.delCheck=this.adm.screenCheck(8,1,4,3);
      this.authCheck=true;
      this.listAdd();
      this.treeAdd();
      this.getDetails();
    }
    else
    {
      this.router.navigateByUrl('hrd/unauthorzeid');
    }
   }

   openNew()
   {
     this.recordId=0;
     this.delVisible=false;
     this.opened=true;
     this.creCheck=this.adm.screenCheck(8,1,4,1);
     this.makeCle();
     this.saveStr='Save';
   }
public openOld(obj:any)
{
  this.delVisible=true;
  this.saveStr='Modify'
  this.creCheck=this.adm.screenCheck(8,1,4,2);
  this.opened=true;
  this.makeCle();
  this.desig=obj.designation;
  this.recordId=obj.recordId;
  this.hrd.getHRDDesignation(obj.recordId).subscribe(res => 
    {
      console.log(res);
        var det:any=res;
       for(var i=0;i<this.allowances.length;i++)
       {
          for(var j=0;j<det.desigallowances.length;j++)
          {
            if(det.desigallowances[j].allowanceId == this.allowances[i].recordId)
            {
              this.allowances[i].valu=det.desigallowances[j].valu
            }
          }
       }
       for(var i=0;i<this.leaves.length;i++)
       {
        for(var j=0;j<det.leaves.length;j++)
        {
            if(det.leaves[j].leaveId == this.leaves[i].recordId)
            {
              this.leaves[i].valu=det.leaves[j].valu
            }
        }
       }
    });
}
  ngOnInit(): void {
  }
close()
{
  this.opened=false;
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
    this.allo.getHrdAllowances().subscribe(res => 
      {
          this.allowances=res;
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
        this.lea.getHRDLeaves().subscribe(res =>
          {
            this.leaves=res;
            this.spinner.hide();
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
  this.hrd.getHRDDesignations().subscribe(res => 
    {
      console.log('res',res);
      var det:any= res;
      this.designations=JSON.parse(JSON.stringify(det));
      this.spinner.hide();
    });
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
  
  this.hdep.getHRDDeoartmentsTreeWise().subscribe(
    async res => {
      this.treeObj=res;
      
    this.spinner.hide(); 
    });
}
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  console.log(obj);
  obj.openCheck=!obj.openCheck;
  this.department=obj.subGroup;
  this.departmentid=obj.recordId;
}
public delete()
{

}
private valChk():Boolean
{
  if(this.desig.trim()=='')
  {
    this.adm.showMessage('Designation not mentioned','Warning',3);
    return false;
  }
  if(this.department.trim()=='')
  {
    this.adm.showMessage('Department not selected','Warning',3);
    return false;
  }
  return true;
}
public save()
{
if(this.valChk())
{
  Swal.fire({  
    title:  this.recordId==0? 'Creates Designation Details':'Modifies Designation Details' ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 

      var allowances:any[]=[];
      var leaves:any[]=[];
      var desi:any=
      {
        RecordId:this.recordId,
        Designation:this.desig,
        Department:this.departmentid
      }
     
      for(var i=0;i<this.allowances.length;i++)
      {
        if(this.allowances[i].valu > 0)
        {
        allowances.push({
          allowanceId:this.allowances[i].recordId,
          allowance:this.allowances[i].allowance,
          valu:this.allowances[i].valu
        });
      }
      }
      for(var i=0;i<this.leaves.length;i++)
      {
        if(this.leaves[i].valu > 0)
        {
        leaves.push({
          leaveId:this.leaves[i].recordId,
          leave:this.leaves[i].leaveCode,
          valu:this.leaves[i].valu
        });
      }
      }

      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });

      this.hrd.setHRDDesignation(desi, allowances,leaves,this.recordId==0?1:2).subscribe(res =>
        {
          var result:any=res;
          if(result.result=='OK')
          {
            Swal.fire(  
              'Transaction Completed Successfully!',  
              'Designation Details saved.',  
              'success'  
            );
            if(this.recordId !=0)
            {
              this.opened=false;
            }
            this.listAdd();
            this.makeCle();
          }
this.spinner.hide();
        });


}
});
}
}
makeCle()
{
  this.desig='';
  this.departmentid=0;
  this.department='';
  for(var i=0;i<this.allowances.length;i++)
  {
    this.allowances[i].valu=0;
  }
  for(var i=0;i<this.leaves.length;i++)
  {
    this.leaves[i].valu=0;
  }
}

}
