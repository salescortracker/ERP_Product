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
  selector: 'app-hrd-allowances-deductions',
  templateUrl: './hrd-allowances-deductions.component.html',
  styleUrls: ['./hrd-allowances-deductions.component.scss']
})
export class HrdAllowancesDeductionsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public delVisible:Boolean=false;
public authCheck:Boolean=false;
  public saveStr:string='';
 public calculated:number=null;
  public recordID:number=0;
  public treeObj:any;
 public initialCheck:number=0;
  public allowances:any[]=[];
  public effects:any[]=[];
  public effid:string='';
  public selEffects:any[]=[];
  public allowance:any={
    Allowance:'',
    AllowanceCheck:0,
    EffectAs:0,
    CalcType:0
  }
public lines:any[]=[];


  public opened:boolean=false;
   
  public searchtext:string='';
  constructor(private hall:HrdAllowancesDeductionsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) {
if(this.adm.screenCheck(8,1,2,0))
{
  this.authCheck=true;
  this.delCheck=this.adm.screenCheck(8,1,2,3);
 
    this.effects.push({
      sno:-1,
      nam:"Basic"
    });
    this.effects.push({
      sno:-2,
      nam:"LOP"
    });
    this.effects.push({
      sno:-3,
      nam:"Late"
    });
    this.effects.push({
      sno:-4,
      nam:"OT"
    });
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


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(8,1,2,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.delVisible=false;
    this.recordID=0;
   this.allowance={
      Allowance:'',
      AllowanceCheck:0,
      EffectAs:0,
      CalcType:0
    }
    this.selEffects=[];
  }

  openOld(obj:any)
  {
    this.creCheck=this.adm.screenCheck(8,1,2,2);
   this.delVisible=true;
    this.recordID=obj.recordId;
    this.makeCalculation();
    this.allowance={
     
      Allowance:obj.allowance,
      AllowanceCheck:obj.allowanceCheck,
      EffectAs:obj.effectAs,
      CalcType:obj.calcType
    }
    this.saveStr='Modify';
    this.selEffects=[];
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
this.hall.getHrdAllowance(this.recordID).subscribe(res =>
  {
    console.log(res);
    var det:any=res;
    var lines:any=det.lines;
    for(var i=0;i<lines.length;i++)
    {
      this.selEffects.push({
        sno:+lines[i].allowanceOn,
        nam:lines[i].allowanceName
      });
    }
    this.spinner.hide();
    console.log(this.selEffects);
  });


    this.opened=true;
     
  }
valChk():Boolean
{
   
  return true;
}
public delete()
{
  Swal.fire({  
    title:   'Deletes Allowance/Deduction Details' ,  
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

        this.allowance.RecordId=this.recordID;
        this.allowance.AllowanceCheck=+this.allowance.AllowanceCheck;
        this.allowance.AllowanceCheck=+this.allowance.AllowanceCheck;
        this.allowance.CalcType=+this.allowance.CalcType;
        this.allowance.EffectAs=+this.allowance.EffectAs;
        


        var lines:any=[];
        for(var i=0;i<this.selEffects.length;i++)
        {
          lines.push({
            AllowanceOn:this.selEffects[i].sno
          });
        }
    
        var tracheck=3;
       this.hall.setHrdAllowance(this.allowance,lines,tracheck).subscribe(
          async res => {
            var result:any=res;

           
            if(result.result  =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Allowance/Deduction Details deleted.',  
            'success'  
          )  ;

         var det=this.effects.filter(a => a.sno == this.recordID);
         if(det.length > 0)
         {
           var obj=det[0];
           var index=this.effects.indexOf(obj);
           this.effects.splice(index,1);
         }
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
        title:  this.recordID==0?'Confirms Allowance/Deduction Details':'Modifies Allowance/Deduction Details',  
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
    
            this.allowance.RecordId=this.recordID;
            this.allowance.AllowanceCheck=+this.allowance.AllowanceCheck;
            this.allowance.AllowanceCheck=+this.allowance.AllowanceCheck;
            this.allowance.CalcType=+this.allowance.CalcType;
            this.allowance.EffectAs=+this.allowance.EffectAs;
            


            var lines:any=[];
            for(var i=0;i<this.selEffects.length;i++)
            {
              lines.push({
                AllowanceOn:this.selEffects[i].sno
              });
            }
        
            var tracheck=this.recordID==0?1:2;
           this.hall.setHrdAllowance(this.allowance,lines,tracheck).subscribe(
              async res => {
                var result:any=res;

                console.log(res,'result');
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Allowance/Deduction Details saved.',  
                'success'  
              )  ;

              if(this.recordID==0)
            {
              var header=result.header;
              this.effects.push({
                sno:header.recordId,
                nam:header.allowance
              });
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
  
   
    this.hall.getHrdAllowances().subscribe(res => 
      {
        var det:any=res;
        this.allowances=det;
        this.spinner.hide();
        if(this.initialCheck==0)
        {
        for(var i=0;i<this.allowances.length;i++)
        {
            this.effects.push({
              sno:this.allowances[i].recordId,
              nam:this.allowances[i].allowance
            })
        }
        this.initialCheck=1;
      }
      })
}
 
 
public searchItems()
{
}
public makeCalculation()
{
  switch(+this.allowance.CalcType)
  {
     
    case 0:
      this.calculated=null;
      break;
    case 1:
      this.calculated=3.25;
      break;
      case 2:
      this.calculated=3.00;
      break;
      case 3:
        this.calculated=4.00;
        break;
        case 4:
          this.calculated=3.00;
          break;
  }
}

public addEffect()
{
  if(this.effid=='')
  {
    this.adm.showMessage('Select Effect on','Warning',3);
    return;
  }
  for(var i=0;i<this.selEffects.length;i++)
  {
    if(this.selEffects[i].sno == +this.effid)
    {
      this.adm.showMessage('This Effect is already added','Warning',3);
    return;
    }
  }
  var det=this.effects.filter(a => a.sno == +this.effid);
   
  if(det.length > 0)
  {
    this.selEffects.push({
      sno:+this.effid,
      nam:det[0].nam
    });
  }
  
}
public deleteEffect(obj)
{
  var index=this.selEffects.indexOf(obj);
  if(index >=0)
  {
    this.selEffects.splice(index,1);
  }
}
}
