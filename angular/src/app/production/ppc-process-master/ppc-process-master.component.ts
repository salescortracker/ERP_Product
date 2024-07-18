import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcMastersService } from 'app/services/production/ppc-masters.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ppc-process-master',
  templateUrl: './ppc-process-master.component.html',
  styleUrls: ['./ppc-process-master.component.scss']
})
export class PpcProcessMasterComponent implements OnInit {
public process:string='';
public qcChk:boolean=true;
recordId:number=0;

public processes:any;
public creCheck:Boolean=false;
public delCheck:Boolean=false;
public opened=false;
  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcMastersService) {
    if(this.adm.screenCheck(10,1,1,0))
    {
        this.listAdd();
        this.delCheck=this.adm.screenCheck(10,1,1,3);
    }
    else
    {
        this.router.navigateByUrl('production/unauthorize');
    }
   }
public listAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.ppc.getPPCProcesses().subscribe(res =>
      {
          this.processes=res;
          this.spinner.hide();
      });
}
  ngOnInit(): void {
  }
  makeCle()
  {
    this.recordId=0;
    this.process='';
    this.qcChk=false;
  }
  openNew()
  {
    this.creCheck=this.adm.screenCheck(10,1,1,1);
      this.makeCle();
      this.opened=true;
  }
  close()
  {
    this.opened=false;
  }
  openOld(obj:any)
  {
    this.creCheck=this.adm.screenCheck(10,1,1,2);
    this.makeCle();
    this.recordId=obj.recordId;
    this.process=obj.processName;
    this.qcChk=obj.qcRequired==1;
    this.opened=true;
  }

  valCheck():boolean
  {
    if(this.process.trim()=='')
    {
      this.adm.showMessage('Process not entered','Warning',3);
      return false;
    }
    return true;
  }
  save()
  {
if(this.valCheck())
{
    Swal.fire({  
      title:  this.recordId==0? 'Confirms Process Details':'Modifies Process Details' ,  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, confirm it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) { 
  
        var process:any={
          ProcessName:this.process,
          QcRequired:this.qcChk?1:0
        };
        if(this.recordId > 0)
        {
          process.RecordId=this.recordId;
        }

        this.spinner.show(undefined,
          {
            type: 'ball-triangle-path',
            size: 'medium',
            bdColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            fullScreen: true
          });
          this.ppc.setPPCProcess(process,this.recordId==0?1:2).subscribe(res =>
            {
                var result:any=res;
                if(result.result=='OK')
                {

                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Process Details saved.',  
                    'success'  
                  );
                    this.listAdd();
                    if(this.recordId > 0)
                    {
                      this.opened=false;
                    }
                    this.makeCle();
                   
                }
                else
                {
                  Swal.fire(  
                    result.result,  
                    'Error in transaction.',  
                    'error'  
                  );

                }
            });
  
  }
  });
  }

}
public delete()
{
  Swal.fire({  
    title:   'Deletes Process Details' ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 

      var process:any={
        ProcessName:this.process,
        QcRequired:this.qcChk?1:0,
        RecordId:this.recordId
      };
      
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.ppc.setPPCProcess(process,3).subscribe(res =>
          {
              var result:any=res;
              if(result.result=='OK')
              {

                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Process Details deleted.',  
                  'success'  
                );
                  this.listAdd();
                  this.opened=false;
                  
                  this.makeCle();
                 
              }
              else
              {
                Swal.fire(  
                  result.result,  
                  'Error in transaction.',  
                  'error'  
                );

              }
          });

}
});
}
}
