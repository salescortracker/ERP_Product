import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HrdDepartmentsService } from 'app/services/hrd/hrd-departments.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HrdDesignationsService } from 'app/services/hrd/hrd-designations.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hrd-employees',
  templateUrl: './hrd-employees.component.html',
  styleUrls: ['./hrd-employees.component.scss']
})
export class HrdEmployeesComponent implements OnInit {
public fileName:string='../../../assets/img/employee.jpg';
public fileobj:any;
public NewfileReqObj:any[]=[];
fileevent: any;
public fileNames:any[]=[];
public files:File[]=[];
public fileReqObj:any; 
filename: any = '';
 
public creCheck:Boolean=false;
public delCheck:Boolean=false;
public delVisible:Boolean=false;

public recordId:number=0;
public empdupcheck:boolean=false;
public designation:string='';
public department:string='';
public designations:any;
public totaldesignations:any;
public allowances:any;
public desigallowances:any;
public desigleaves:any;
public leaves:any;
public treeObj:any;
public tracheck:number=1;
public opened:boolean=false;
public maingrp:string='xx';
public subgrp:string='';
public maingrpid:number=0;
public employees:any;
public searchtext:string='';
public superior:any={
  recordId:null,
  empno:'',
  empname:'',
  mobile:'',
  email:'',
  department:'',
  designation:''
};
public employee:any={
  Empno:'',
  Empname:'',
  Surname:'',
  Fathername:'',
  Gender:1,
  ModeofPay:3,
  MaritalStatus:2,
  Address:'',
  Country:'',
  Stat:'',
  District:'',
  City:'',
  Zip:'',
  Mobile:'',
  Tel:'',
  Fax:'',
  Email:'',
  Webid:'',
  Pan:'',
  Aadhar:'',
  Height:'',
  Weight:'',
  BloodGrp:'',
  Referenc:'',
  Department:0,
  Designation:0,
  Mgr:null,
  BasicPay:0,
  SbAc:'',
  Bankifscno:'',
  Pzip:''
}
public identifications:any[]=[];
public identification:string='';
public qualifications:any[]=[];
public qual:any={
  Frmyear:null,
  Toyear:null,
  Qual:'',
  Board:'',
}
public experiences:any[]=[];
public exper:any={
  Frmyear:null,
  Toyear:null,
  Designation:'',
  Organisation:'',
}
public relations:any[]=[];
public rela:any={
  Relativename:'',
  Relation:''
}
 
public dob:any={year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};

  constructor(private datepipe:DatePipe, private router:Router, private adm:AdminGeneralInfoService, private hrd:HrdEmployeesService, private spinner:NgxSpinnerService) {
   if(this.adm.screenCheck(8,1,6,0))
   {
    this.getEmployeeRequirements();
    this.listAdd();
    this.delCheck=this.adm.screenCheck(8,1,6,3);
   }
   else
   {
    this.router.navigateByUrl('hrd/unauthorzeid');
   }
   }
public listAdd()
{
  this.hrd.getHRDEmployees().subscribe(res =>
    {
      this.employees=res;
      console.log(this.employees);
    });
}
  ngOnInit(): void {
   
  
  }
public onSelectFile(e)
{
    
  this.NewfileReqObj=[];
  if(e.target.files)
  {
    var reader= new FileReader();
   
    var fi=e.target.files[0];
    this.fileevent = e;
    this.UploadAttach();
    this.files.push(e.target.files[0]);
    for(var i=0;i<e.target.files.length;i++)
    {
    reader.readAsDataURL(e.target.files[i]);
    reader.onload=(event:any)=>
      {
        this.fileName=event.target.result;
          this.fileNames.push({
              typ:'Image',
              file:event.target.result,
           });
          }
        }
  }



}


UploadAttach() {
  var filedata: any = document.getElementById("file-upload");
  if (filedata.files.length > 0) {
    const file = filedata.files[0];
    this.filename = file.name;
    var type = this.filename.split('.')[this.filename.split('.').length - 1];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileobj = reader.result;
      var splitfile = this.fileobj.split(',');
      this.fileobj = splitfile[1];
       
      if (type.toUpperCase() == 'JPG' || type.toUpperCase() == 'PNG' || type.toUpperCase() == 'TXT' || type.toUpperCase() == 'PDF' || type.toUpperCase() == 'XLS' || type.toUpperCase() == 'XLSX' || type.toUpperCase() == 'JPG' || type.toUpperCase() == 'JPEG' || type.toUpperCase() == 'GIF') {
        this.fileReqObj = {
          "Filename": this.filename,
          "ContentType": 'application/' + type,
          "Contents": this.fileobj,
          "FileType": type,
          "MsgID": "",
          "Private": false,
          "Public": true,
          "Description": this.filename,
        }
        this.NewfileReqObj.push(this.fileReqObj);
         
      }  
    };
  }
 
}
  public getEmployeeRequirements()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.hrd.getHRDEmployeeRequirements().subscribe(res =>
        {
           
            var detail:any=res;
            console.log(res);
            this.treeObj=detail.departmentTree;
            this.totaldesignations=detail.designations;
            this.allowances=detail.allowancesDeductions
            this.leaves=detail.leaves;
            this.desigallowances=detail.desigallowances;
            this.desigleaves=detail.desigleaves;
            
            this.spinner.hide();
        });
  }
public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
  this.department=obj.subGroup;
  this.employee.Department=obj.recordId;
  this.findDesignations();
}
public findDesignations()
{
  this.designations=this.totaldesignations.filter(a => a.department==this.employee.Department);
}
public findDesignation()
{
    var x=+this.employee.Designation;
    
    var detail=this.designations.filter(a => a.recordId ==x);
    if(detail.length > 0)
    {
      this.designation=detail[0].designation;
    }
    this.designationWiseValues();
}


public addIdenti()
{
  if(this.identification.trim()=='')
  {
    this.adm.showMessage('Identification not mentioned','Warning',3);
    return;
  }
  else
  {
    this.identifications.push({
      Identit:this.identification
    });
    this.identification='';
  }
}
 
public removeIdenti(obj:any) {
  var index=this.identifications.indexOf(obj);

  if(index >=0)
{
  this.identifications.splice(index,1);
}
}
 
public addQualification()
{
  this.qualifications.push(this.qual);
 this.qual={
    Frmyear:null,
    Toyear:null,
    Qual:'',
    Board:'',
  }
}
public removeQualification(obj:any)
{
  var index=this.qualifications.indexOf(obj);
  if(index >=0)
  {
    this.qualifications.splice(index,1);
  }
}
public addExperience()
{
  this.experiences.push(this.exper);
  this.exper={
    Frmyear:null,
    Toyear:null,
    Designation:'',
    Organisation:'',
  }
}
public removeExperience(obj:any)
{
  var index=this.experiences.indexOf(obj);
  if(index >=0)
  {
    this.experiences.splice(index,1);
  }
}
public addRelation()
{
  this.relations.push(this.rela);
  this.rela={
  Relativename:'',
  Relation:''
}

}
public removeRelation(obj:any)
{
  var index=this.relations.indexOf(obj);
  if(index >=0)
  {
    this.relations.splice(index,1);
  }
}
public designationWiseValues()
{
   
  for(var i=0;i<this.allowances.length;i++)
  {
    this.allowances[i].valu=0;
  }
  for(var i=0;i<this.leaves.length;i++)
  {
    this.leaves[i].valu=0;
  }
  var allo=this.desigallowances.filter(a => a.recordId== +this.employee.Designation);
   for(var i=0;i<allo.length;i++)
   {
     for(var j=0;j<this.allowances.length;j++)
     {
        if(allo[i].allowance == this.allowances[j].recordId)
        {
          this.allowances[j].valu=allo[i].valu;
        }
     }
   }

   var leav=this.desigleaves.filter(a => a.recordId ==+this.employee.Designation);
   for(var i=0;i<leav.length;i++)
   {
     for(var j=0;j<this.leaves.length;j++)
     {
        if(leav[i].leaveId == this.leaves[j].recordId)
        {
          this.leaves[j].valu=leav[i].valu;
        }
     }
   }
}
public close()
{
  this.tracheck=1;
  this.opened=false;
}
public openNew()
{
  this.makeCle();
  this.tracheck=2;
  this.opened=true;
  this.creCheck=this.adm.screenCheck(8,1,6,1);
}
public openOld(obj)
{
  this.makeCle();
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.hrd.getHRDEmploy(obj.recordId).subscribe(res =>
    {
      var det:any=res;
      var emp=det.employee;
      this.recordId=obj.recordId;
      
      this.employee={
        Empno:emp.empno,
        Empname:emp.empname,
        Surname:emp.surname,
        Fathername:emp.fathername,
        Gender:emp.gender,
        ModeofPay:emp.modeofPay,
        MaritalStatus:emp.maritalStatus,
        Address:emp.address,
        Country:emp.country,
        Stat:emp.stat,
        District:emp.district,
        City:emp.city,
        Zip:emp.zip,
        Mobile:emp.mobile,
        Tel:emp.tel,
        Fax:emp.fax,
        Email:emp.email,
        Webid:emp.webid,
        Pan:emp.pan,
        Aadhar:emp.aadhar,
        Height:emp.height,
        Weight:emp.weight,
        BloodGrp:emp.bloodGrp,
        Referenc:emp.refeferenc,
        Department:emp.department,
        Designation:emp.designation,
        Mgr:emp.mgr,
        BasicPay:emp.basicPay,
        SbAc:emp.sbAc,
        Bankifscno:emp.bankifscno,
        Pzip:emp.pzip
      }
      if(det.identifications)
      {
      for(var i=0;i<det.identifications.length;i++)
      {
      this.identifications.push({
        Identit:det.identifications[i].identit
      });
    }
  }
  
     for(var i=0;i<this.allowances.length;i++)
     {
       for(var j=0;j<det.allowances.length;j++)
       {
            if(this.allowances[i].recordId == det.allowances[j].allowanceId)
            {
              this.allowances[i].valu=det.allowances[j].valu;
            }
       }
     }
   
     for(var i=0;i<this.leaves.length;i++)
     {
       for(j=0;j<det.leaves.length;j++)
       {
         if(this.leaves[i].recordId==det.leaves[j].leaveId)
         {
           this.leaves[i].valu=det.leaves[j].valu;
         }
       }
     }
     if(det.curriculum)
     {
     for(var i=0;i<det.curriculum.length;i++)
     {
      this.qualifications.push({
        Frmyear:det.curriculum[i].frmyear,
        Toyear:det.curriculum[i].toyear,
        Qual:det.curriculum[i].qual,
        Board:det.curriculum[i].board,
      });
     }
    }
    if(det.experience)
    {
     for(var i=0;i<det.experience.length;i++)
     {
      this.experiences.push({
        Frmyear:det.experience[i].frmyear,
        Toyear:det.experience[i].toyear,
        Designation:det.experience[i].designation,
        Organisation:det.experience[i].organisation,
      });
     }
    }
    if(det.relations)
    {
     for(var i=0;i<det.relations.length;i++)
     {
      this.relations.push({
        Relativename:det.relations[i].relativename,
        Relation:det.relations[i].relation,
         });
     }
    }
    var usr=this.adm.getUserCompleteInformation().usr;
    this.fileName= this.adm.getActualURL() +  'Attachments/hrd/EMP_PIC_'  + obj.recordId + '_' + usr.bCode + '_' + usr.cCode  + '.jpg' ;
    this.creCheck=this.adm.screenCheck(8,1,6,2);
    this.tracheck=2;
    this.opened=true;
      this.spinner.hide();
    });
}
makeCle()
{
  this.fileName='../../../assets/img/employee.jpg';
this.recordId=0;
this.empdupcheck=false;
this.designation='';
this.department='';
this.maingrp='xx';
this.subgrp='';
this.maingrpid=0;
this.superior={
  recordId:null,
  empno:'',
  empname:'',
  mobile:'',
  email:'',
  department:'',
  designation:''
};
this.employee={
  Empno:'',
  Empname:'',
  Surname:'',
  Fathername:'',
  Gender:1,
  ModeofPay:3,
  MaritalStatus:2,
  Address:'',
  Country:'',
  Stat:'',
  District:'',
  City:'',
  Zip:'',
  Mobile:'',
  Tel:'',
  Fax:'',
  Email:'',
  Webid:'',
  Pan:'',
  Aadhar:'',
  Height:'',
  Weight:'',
  BloodGrp:'',
  Referenc:'',
  Department:0,
  Designation:0,
  Mgr:null,
  BasicPay:0,
  SbAc:'',
  Bankifscno:'',
  Pzip:''
}
this.identifications=[];
this.identification='';
this.qualifications=[];
this.qual={
  Frmyear:null,
  Toyear:null,
  Qual:'',
  Board:'',
}
this.experiences=[];
this.exper={
  Frmyear:null,
  Toyear:null,
  Designation:'',
  Organisation:'',
}
this.relations=[];
this.rela={
  Relativename:'',
  Relation:''
}
 
this.dob={year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate()};

}

valChk():boolean
{

  if(this.employee.Empno.trim()=="")
  {
    this.adm.showMessage('Employee number not mentioned','Warning',3);
    return false;
  }
  if(this.empdupcheck)
  {
    this.adm.showMessage('Employee number already existed','Warning',3);
    return false;
  }
  
  if(this.employee.Empname.trim()=="")
  {
    this.adm.showMessage('Employee name not mentioned','Warning',3);
    return false;
  }
  if(this.employee.Aadhar.trim()=="")
  {
    this.adm.showMessage('Aadha not mentioned','Warning',3);
    return false;
  }
  if(this.employee.Mobile.trim()=="")
  {
    this.adm.showMessage('Mobile not mentioned','Warning',3);
    return false;
  }
  if(+this.employee.Department <= 0)
  {
    this.adm.showMessage('Department not selected','Warning',3);
    return false;
  }
  if(+this.employee.Designation <= 0)
  {
    this.adm.showMessage('Designation not selected','Warning',3);
    return false;
  }
  return true;
}
public save()
{
  if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordId==0?'Confirms Employee Details':'Modifies Employee Details',  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 

          this.saveEmployee();


        }
      });
    }
    
  }

public saveEmployee()
{

  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });

  this.employee.Designation = +this.employee.Designation
  this.employee.ModeofPay = +this.employee.ModeofPay;
  this.employee.Gender = +this.employee.Gender;
  this.employee.MaritalStatus = +this.employee.MaritalStatus;
this.employee.BasicPay= +this.employee.BasicPay;
this.employee.Mgr=this.superior.recordId
var allows:any[]=[];
var leavs:any[]=[];

for(var i=0;i<this.allowances.length;i++)
{
  allows.push({
    
  allowanceId:+this.allowances[i].recordId,
  allowance:this.allowances[i].allowance,
  valu:+this.allowances[i].valu,
});

}

for(var i=0;i<this.leaves.length;i++)
{
  leavs.push({
    
    leaveId:+this.leaves[i].recordId,
    leave:this.leaves[i].leaveCode,
  valu:+this.leaves[i].valu,
});

}

  console.log(this.employee,'Employee');
  console.log(this.identifications,'identifications');
  console.log(this.qualifications,'qualifications');
  console.log(this.experiences,'experiences');
  console.log(this.relations,'relations');
  console.log(this.allowances,'allowances');
  console.log(this.leaves,'leaves');

  if(this.recordId > 0)
  {
    this.employee.RecordId =this.recordId;
  }
  this.hrd.setHrdEmployee(this.employee,allows, leavs,this.identifications,this.qualifications,this.experiences,this.relations,this.NewfileReqObj ? this.NewfileReqObj : null,this.recordId==0?1:2).subscribe(res =>
    {
      var det:any=res;
      if(det.result=='OK')
      {
          Swal.fire(  
          'Transaction Completed Successfully!',  
          'Employee Details saved.',  
          'success'  
        )  ;
        this.listAdd();
        if(this.recordId > 0)
        {
          this.recordId=0;
          this.tracheck=1;
        }
        this.makeCle();
      }
      else
      {
         Swal.fire(  
          det.result,  
          'Some error in transaction',  
          'error'  
        )  
      }
      this.spinner.hide();
    });

}
public checkEmployee()
{
  var det=this.employees.filter(a => a.empno.toUpperCase() == this.employee.Empno.toUpperCase());
  if(det.length > 0)
  {
    this.empdupcheck=true;
  }
  else
  {
    this.empdupcheck=false;
  }
}
public searchItems()
{

}

}
