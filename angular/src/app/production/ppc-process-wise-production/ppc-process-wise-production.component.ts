import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { PpcMastersService } from 'app/services/production/ppc-masters.service';
 import { PpcTransactionsService } from 'app/services/production/ppc-transactions.service';
import { timeStamp } from 'console';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ppc-process-wise-production',
  templateUrl: './ppc-process-wise-production.component.html',
  styleUrls: ['./ppc-process-wise-production.component.scss']
})
export class PpcProcessWiseProductionComponent implements OnInit {
public listDate:Date= new Date();
public processeslist:any;

public opened:boolean=false;
public creCheck:Boolean=false;
public delCheck:Boolean=false;
public dateCheck:Boolean=false;

public totalpendings:any;
public filterpendings:any;

public employees:any;
public employ:any={
recordId:0,
empname:'',
mobile:'',
designation:''
};
public processes:any;
public processid:number=0;

public recordId:number=0;

  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcTransactionsService, private hrd:HrdEmployeesService,
    private ppm:PpcMastersService) {
      if(this.adm.screenCheck(10,2,3,0))
      {
        this.creCheck=this.adm.screenCheck(10,2,3,1);
        this.delCheck=this.adm.screenCheck(10,2,3,3);
        this.dateCheck=this.adm.screenCheck(10,2,3,4);
          this.listAdd();
          this.requirementsAdd();
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
            this.hrd.getHRDEmployees().subscribe(res =>
              {
                  this.employees=res;
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
                this.ppm.getPPCProcesses().subscribe(res =>
                  {
                      this.processes=res;
                      this.spinner.hide();
                  });
      }
      else
      {
        this.router.navigateByUrl('production/unauthorize');
      }
     }

     openNew()
     {
      this.makeCle();
      this.opened=true;
     }
     close()
     {
       this.opened=false;
     }
     openOld(obj:any)
     {
      this.recordId=obj.recordId;
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.ppc.getProductionProcessDetail(this.recordId).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                  this.processid = det.header.processid;
                  var emp=this.employees.filter(a => a.empname == det.header.processincharge );
                  if(emp.length > 0)
                  {
                    this.employ={
                      recordId:emp[0].recordId,
                      empname:emp[0].empname,
                      mobile:emp[0].mobile,
                      designation:emp[0].designation
                      };
                  }
                  this.filterpendings=[];
                  for(var i=0;i<det.lines.length;i++)
                  {
                    this.filterpendings.push({
                      batchno:det.lines[i].batchno,
                      itemname:det.lines[i].itemname,
                      qty:det.lines[i].qty,
                      um:det.lines[i].um,
                      productionincharge:''

                    })
                  }
                  this.opened=true;
                
              }
              else
              {
                this.adm.showMessage('There are further proceedings for this process','Warning',3);
              }
          });
     }
     makeCle()
     {
        this.recordId=0;
        this.processid=0;
        this.employ={
          recordId:0,
          empname:'',
          mobile:'',
          designation:''
        };
        this.filterpendings=[];

     }

  ngOnInit(): void {
  }
  public requirementsAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.ppc.getPendingProcesses().subscribe(res =>
        {
          this.totalpendings=res;
          this.spinner.hide();
        });
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

    this.ppc.getProductionProcesses(this.adm.stringData(this.listDate),this.adm.stringData(this.listDate)).subscribe(res =>
      {
        this.processeslist=res;
        this.spinner.hide();
      });
}
public makePendingProcesses()
{
  this.filterpendings=this.totalpendings.filter(a => a.processid== +this.processid);

}
public deleteProcess()
{
  Swal.fire({  
    title:  'Deletes Process Details' ,  
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

        var qty=0;
        var lines:any[]=[];
        for(var i=0;i<this.filterpendings.length;i++)
        {
          if(this.filterpendings[i].chk)
          {
            qty=qty+ (+this.filterpendings[i].qty);
            lines.push({
              Batchno:+this.filterpendings[i].batchid,
              LineId:+this.filterpendings[i].sno
            });
          }
        }
      var header:any={
        Qty:qty,
        ProcessIncharge: +this.employ.recordId,
        ProcessId: +this.processid
      };
      this.ppc.setProductionProcess(header,lines,3).subscribe(res =>
        {
              var det:any=res;
              if(det.result=='OK')
              {
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Process Details deleted.',  
                  'success'  
                );
                this.makeCle();
                this.listAdd();
                this.requirementsAdd();
                this.close();
               }
              else
              {
                Swal.fire(  
                  det.result,  
                  'Error in transaction.',  
                  'error'  
                );
              }
        });

}
});





}
valChk():boolean
{
  if(+this.processid <=0 )
  {
    this.adm.showMessage('Process not selected','Warning',3);
    return false;
  }
  if(+this.employ.recordId <=0 )
  {
    this.adm.showMessage('Process Incharge not selected','Warning',3);
    return false;
  }
  var det=this.filterpendings.filter(a => a.chk);
  if(det.length <= 0)
  {
    this.adm.showMessage('List of batches to be processed not selected','Warning',3);
    return false;
  }
  return true;
}
public saveProcess()
{
  if(this.valChk())
  {
    Swal.fire({  
      title:  'Confirms Process Details' ,  
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

          var qty=0;
          var lines:any[]=[];
          for(var i=0;i<this.filterpendings.length;i++)
          {
            if(this.filterpendings[i].chk)
            {
              qty=qty+ (+this.filterpendings[i].qty);
              lines.push({
                Batchno:+this.filterpendings[i].batchid,
                LineId:+this.filterpendings[i].sno
              });
            }
          }
        var header:any={
          Qty:qty,
          ProcessIncharge: +this.employ.recordId,
          ProcessId: +this.processid
        };
        this.ppc.setProductionProcess(header,lines,1).subscribe(res =>
          {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Process Details saved.',  
                    'success'  
                  );
                  this.makeCle();
                  this.listAdd();
                  this.requirementsAdd();
                 }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Error in transaction.',  
                    'error'  
                  );
                }
          });
  
  }
  });
  



  }
}
}
