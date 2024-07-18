import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdAttendancesService } from 'app/services/hrd/hrd-attendances.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
const now=new Date();
@Component({
  selector: 'app-hrd-emp-in-out',
  templateUrl: './hrd-emp-in-out.component.html',
  styleUrls: ['./hrd-emp-in-out.component.scss']
})
export class HrdEmpInOutComponent implements OnInit {
public empinouts:any;
public employees:any;
public tracheck:number=1;
public recordId:number=0;
public fromtime:string='';
public totime:string='';
public emp:any={
  recordId:null,
  empno:'',
  empname:'',
  mobile:'',
  email:'',
  department:'',
  designation:''
};
public listdat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
 
  constructor(private hrd:HrdAttendancesService,private hr:HrdEmployeesService,private adm:AdminGeneralInfoService,private router:Router) { 
    this.hr.getHRDEmployees().subscribe(res =>
      {
        this.employees=res;
      });
     this.listAdd();
  }

  ngOnInit(): void {
  }
  public listAdd()
  {
    this.hrd.getHRDInoutDetails(this.adm.strDate(this.listdat)).subscribe(res =>
      {
        this.empinouts=res;
      });
  }
  public openNew()
  {
    this.tracheck=2;
    this.recordId=0;
  }

  public save()
{
  var obj:any={
    Lineid:this.recordId,
    EmpId:this.emp.recordId,
    Dat:new Date(this.adm.strDate(this.listdat)),
    FromTime:this.fromtime,
    ToTime:this.recordId==0?null:this.totime,
  }
  this.hrd.setHRDInOutDetails(obj,this.recordId==0?1:2).subscribe(res =>
    {
      var result:any=res;
      if(result.result=="OK")
      {
        this.adm.showMessage('Transaction Completed Successfully','Success',1);
        this.listAdd();

      }
      else
      {
        this.adm.showMessage(result.result,'Error',4);
      }
    });
}
public close()
{
  this.tracheck=1;
}
}
