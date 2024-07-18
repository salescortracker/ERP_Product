import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcBatchPlanningService } from 'app/services/production/ppc-batch-planning.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { umask } from 'process';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-ppc-batch-planning',
  templateUrl: './ppc-batch-planning.component.html',
  styleUrls: ['./ppc-batch-planning.component.scss']
})
export class PpcBatchPlanningComponent implements OnInit {
public listDate:Date=new Date();
recordId:number=0;
public listprocesses:any;
public totalrequirements:any;
public processesList:any[]=[];
public employeesList:any[]=[];
public processes:any;
public processid:number=0;
public process:any={
  recordId:0,
  processName:'',
  qcRequired:0
};
public qcChk:boolean=false;

public products:any;
public product:any={
recordId:0,
itemid:'',
itemname:'',
grpname:'',
um:'',
umid:0
};
public employees:any;
public employee:any={
recordid:0,
empno:'',
empname:'',
mobile:'',
designation:''
};
public emp:any={
  recordid:0,
  empno:'',
  empname:'',
  mobile:'',
  designation:''
  };
public pendings:any;
public filterpendings:any;
 


public batchno:string='';
public fromdate:Date= new Date();
public todate:Date= new Date();
public qty:number=0;




public creCheck:Boolean=false;
public delCheck:Boolean=false;
public opened=false;
  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcBatchPlanningService) { 
      if(this.adm.screenCheck(10,2,2,0))
      {
          this.listAdd();
          this.requirementsAdd();
          this.delCheck=this.adm.screenCheck(10,2,2,3);
      }
      else
      {
          this.router.navigateByUrl('production/unauthorize');
      }
    }

  ngOnInit(): void {
  }
openNew()
{
this.makeCle();
this.creCheck=this.adm.screenCheck(10,2,2,1);
this.opened=true;
}
close()
{
  this.opened=false;
}
makeCle()
{
  this.recordId=0;
  this.batchno='';
  this.qty=0;
  this.product={
    recordId:0,
    itemid:'',
    itemname:'',
    grpname:'',
    um:'',
    umid:0
    };
    this.employee={
      recordid:0,
      empno:'',
      empname:'',
      mobile:'',
      designation:''
      };
  this.emp={
    recordid:0,
    empno:'',
    empname:'',
    mobile:'',
    designation:''
    };
    this.processid=0;
    this.filterpendings=[];
    this.processesList=[];
    this.employeesList=[];

}
openOld(obj:any)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.ppc.getPPCBatchPlan(obj.recordid).subscribe(res =>
      {
        var det:any=res;
        console.log('old',det);
        if(det.result=='OK')
        {
          this.recordId=obj.recordid;
            this.batchno=det.header.batchNo;
            this.fromdate=new Date(det.header.fromDate);
            this.todate=new Date(det.header.toDate);
            var pro=this.products.filter(a => a.recordId == det.header.itemId);
            if(pro.length > 0)
            {
              this.product={
                recordId:pro[0].recordId,
                itemid:pro[0].itemid,
                itemname:pro[0].itemname,
                grpname:pro[0].grpname,
                um:pro[0].um,
                umid:pro[0].umid
                };
            }
            var emp=this.employees.filter(a => a.recordid == det.header.productionIncharge);
            if(emp.length > 0)
            {
            this.employee={
              recordid:emp[0].recordid,
              empno:emp[0].empno,
              empname:emp[0].empname,
              mobile:emp[0].mobile,
              designation:emp[0].designation,
              };
            }
            this.qty=det.header.qty;
            this.filterpendings=[];
            for ( var i=0;i< det.orderinfo.length;i++)
            {
                this.filterpendings.push({
                    soid:det.orderinfo[i].soid,
                    sno:det.orderinfo[i].sno,
                    seq:det.orderinfo[i].seq,
                    partyname:det.orderinfo[i].partyName,
                    itemid:det.orderinfo[i].itemId,
                    itemname:det.orderinfo[i].itemName,
                    pending:det.orderinfo[i].qty,
                    qtyavailable:0,
                    qty:det.orderinfo[i].qty,
                });
            }
            this.employeesList=[];
            for(var i=0;i<det.employeeinfo.length;i++)
            {
              this.employeesList.push({
                recordId:det.employeeinfo[i].recordid,
                empname:det.employeeinfo[i].empname,
                designation:det.employeeinfo[i].designation
              });
            }
            this.processesList=[];
            for(var i=0;i<det.processinfo.length;i++)
            {
              this.processesList.push({
                recordid:det.processinfo[i].recordid,
                processName:det.processinfo[i].processname,
                qcDescription:det.processinfo[i].qcrequired==1?'Required':'Not Required',
                qcRequired:det.processinfo[i].qcrequired,
              });
            }





            this.opened=true;
        }
        else
        {
          this.adm.showMessage('This Batch proceeded for further processes','Warning',3);
        }
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
      this.ppc.getPPCBatchPlans(this.adm.stringData(this.listDate),this.adm.stringData(this.listDate)).subscribe(res =>
        {
          this.listprocesses=res;
          this.spinner.hide();
        });
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
      this.ppc.getPPCBatchRequirements().subscribe(res =>
        {
          this.totalrequirements=res;
          this.products=this.totalrequirements.products;
          this.employees=this.totalrequirements.employees;
          this.pendings=this.totalrequirements.orders;
          this.processes=this.totalrequirements.processes;
          this.spinner.hide();
        });
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }
  public makeFilterOrders()
  {
    debugger
    this.filterpendings=this.pendings.filter(a => a.itemid==this.product.recordId);
  }
  makeQty()
  {
    this.qty=0;
    for(var i=0;i<this.filterpendings.length;i++)
    {
      if(this.filterpendings[i].chk)
      {
        this.qty=this.qty + (+this.filterpendings[i].pending);
      }
    }
  }
public findProcessInfo()
{
  this.process={
    recordId:0,
    processName:'',
    qcRequired:0
  };
  var det=this.processes.filter(a => a.recordId == +this.processid);
  if(det.length > 0)
  {
    this.process={
      recordId:det[0].recordId,
      processName:det[0].processName,
      qcRequired:det[0].qcRequired
    };
    if(+det[0].qcRequired ==1)
    {
      this.qcChk=true;
    }
    else
    {
      this.qcChk=false;
    }
  }
}
private valProcessCheck():boolean
{
  if(+this.process.recordId <= 0)
  {
    this.adm.showMessage('Select Process','Warning',3);
    return false;
  }
  var det=this.processesList.filter(a => a.recordId == this.process.recordId);
  if(det.length > 0)
  {
    this.adm.showMessage('This Process already added','Warning',3);
    return false;
  }
  return true;
}
public addProcess()
{
  if(this.valProcessCheck())
  {
    this.processesList.push({
      recordid:this.process.recordId,
      processName:this.process.processName,
      qcDescription:this.qcChk?'Required':'Not Required',
      qcRequired:this.qcChk?1:0
    });
    this.processid=0;
    this.qcChk=false;

   
  }
}
public deleteProcess(obj:any)
{
  var index=this.processesList.indexOf(obj);
  if(index >= 0)
  {
    this.processesList.splice(index,1);
  }
}
private valEmployeeCheck():boolean
{
    if(+this.emp.recordId <= 0)
    {
      this.adm.showMessage('Select Employee','Warning',3);
      return false;
    }
  var det=this.employeesList.filter(a => a.recordId == this.emp.recordid);
  if(det.length > 0)
  {
    this.adm.showMessage('This Employee already added','Warning',3);
    return false;
  }
  return true;
}
public addEmployee()
{
  if(this.valEmployeeCheck())
  {
    this.employeesList.push({
      recordId:this.emp.recordid,
      empname:this.emp.empname,
      designation:this.emp.designation
    });
    this.emp={
      recordid:0,
      empno:'',
      empname:'',
      mobile:'',
      designation:''
      };

  }
    
}
public deleteEmployee(obj:any)
{
  var index=this.employeesList.indexOf(obj);
  if(index >=0)
  {
    this.employeesList.splice(index,1);
  }
}
valChk():boolean
{
  if(this.product.recordId <= 0)
  {
    this.adm.showMessage('Select Product to be planned','Warning',3);
    return false;
  }
  var det=this.filterpendings.filter(a => a.chk);
  if(det.length <=0)
  {
    this.adm.showMessage('Select Sale order to be planned','Warning',3);
    return false;
  }
  if(this.processesList.length <=0)
  {
    this.adm.showMessage('Select processes for planning','Warning',3);
    return false;
  }
  if(this.employeesList.length <=0)
  {
    this.adm.showMessage('Select employees for planning','Warning',3);
    return false;
  }
  return true;
}
saveBatch()
{
  if(this.valChk())
  {
    Swal.fire({  
      title: this.recordId==0? 'Confirms Batch Planning':'Modifies Batch Planning' ,  
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

          var header:any=
          {
            BatchNo:this.batchno,
            FromDate:this.fromdate,
            ToDate:this.todate,
            ProductionIncharge:this.employee.recordid,
            ItemId:this.product.recordId,
            Qty:this.qty
          }
          var processes:any[]=[];
          for(var i=0;i<this.processesList.length;i++)
          {
            processes.push({
              ProcessId:this.processesList[i].recordid,
              QcRequired:this.processesList[i].qcRequired
            });
          }
          var employees:any[]=[];
          for(var i=0;i<this.employeesList.length;i++)
          {
            employees.push({
              Employee:this.employeesList[i].recordId
            });
          }
          var orders:any[]=[];
          for(var i=0;i<this.filterpendings.length;i++)
          {
            if(this.filterpendings[i].chk)
            {
              orders.push({
                Soid:this.filterpendings[i].soid,
                LineId:this.filterpendings[i].sno
              });
            }
          }

          if(+this.recordId > 0)
          {
            header.RecordId= +this.recordId
          }
          this.ppc.setPPCBatchPlan(header,processes,employees,orders,this.recordId==0?1:2).subscribe(res =>
            {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Batch Details saved.',  
                    'success'  
                  );
                  if(this.recordId > 0)
                  {
                    this.opened=false;
                  }
                  this.listAdd();
                  this.makeCle();
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Error in transaction.',  
                    'error'  
                  );
                }
                this.spinner.hide();
            });
           
  }
  });
  
  }
}
deleteBatch()
{
  if(this.valChk())
  {
    Swal.fire({  
      title:  'Cancels Batch Planning' ,  
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

          var header:any=
          {
            RecordId:this.recordId,
            BatchNo:this.batchno,
            FromDate:this.fromdate,
            ToDate:this.todate,
            ProductionIncharge:this.employee.recordid,
            ItemId:this.product.recordId,
            Qty:this.qty
          }
          var processes:any[]=[];
          for(var i=0;i<this.processesList.length;i++)
          {
            processes.push({
              ProcessId:this.processesList[i].recordid,
              QcRequired:this.processesList[i].qcRequired
            });
          }
          var employees:any[]=[];
          for(var i=0;i<this.employeesList.length;i++)
          {
            employees.push({
              Employee:this.employeesList[i].recordId
            });
          }
          var orders:any[]=[];
          for(var i=0;i<this.filterpendings.length;i++)
          {
            if(this.filterpendings[i].chk)
            {
              orders.push({
                Soid:this.filterpendings[i].soid,
                LineId:this.filterpendings[i].sno
              });
            }
          }

          
          this.ppc.setPPCBatchPlan(header,processes,employees,orders,3).subscribe(res =>
            {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Batch Details deleted.',  
                    'success'  
                  );
                  
                  this.opened=false;
                  this.listAdd();
                  this.makeCle();
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
                this.spinner.hide();
            });
           
  }
  });
  
  }
}
}
