import { Component, OnInit } from '@angular/core';
import { AdmRolesService } from 'app/services/admin/adm-roles.service';
import { AdmUsersService } from 'app/services/admin/adm-users.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { HrdEmployeesService } from 'app/services/hrd/hrd-employees.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-adm-users',
  templateUrl: './adm-users.component.html',
  styleUrls: ['./adm-users.component.scss']
})
export class AdmUsersComponent implements OnInit {
  public users:any;
  public user:string='';
  public rolename:string='';
  public roles:string[]=['administrator'];
  public recordId:number=0;
  public opencheck:boolean=false;
  public webenablecheck:boolean=false;
  public mobileenablecheck:boolean=false;
public profile:any={
  UserProfileName:'',
  EmployeeNo:-1,
  AboutUser:''
};
public employees:any[]=[];
public employee:any={
  recordId:null,
  empno:'',
  empname:'',
  mobile:'',
  email:'',
  department:'',
  designation:''
};
  constructor(private spinner: NgxSpinnerService,private hrd:HrdEmployeesService, private usr:AdmUsersService,private adm:AdminGeneralInfoService,private rol:AdmRolesService) { 
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
 
      this.rol.getAdmRoles().subscribe(res =>
        {
          var det:any=res;
          for(var i=0;i<det.length;i++)
          {
            this.roles.push(det[i]);
          }
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
          this.hrd.getHRDEmployees().subscribe(res =>
            {
                console.log(res);
               var det:any=res;
                for(var i=0;i<det.length;i++)
                {
                  this.employees.push({
                    recordId:det[i].recordId,
                    empno:det[i].empno,
                    empname:det[i].empname,
                    mobile:det[i].mobile,
                    email:det[i].email,
                    department:det[i].department,
                    designation:det[i].designation,
                  });
                }
            });


        this.listAdd();
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

    this.usr.getAdmUsers().subscribe(res => 
      {
        this.users=res;
        this.spinner.hide();
      });
    
  }
  public openNew()
  {
    this.opencheck=true;
    this.recordId=0;
    this.user='';
    this.rolename='';
    this.webenablecheck=false;
    this.mobileenablecheck=false;
  }
public openOld(obj:any)
{
   console.log(obj);
   this.recordId=1;
   this.user=obj.usrName;
   this.rolename=obj.roleName;
   this.webenablecheck=obj.webFreeEnable==1?true:false;
   this.mobileenablecheck=obj.mobileFreeEnable==1?true:false;
   this.opencheck=true;
}
public close()
{
  this.opencheck=false;
}
  ngOnInit(): void {
  }
  public blockuser()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.usr.userBlock(this.user).subscribe(res =>
        {
          var det:any=res;
          if(det.result=='OK')
          {
            this.adm.showMessage('User blocked/unblocked successfully','Success',1);
            this.listAdd();
          }
          else
          {
              this.adm.showMessage(det.result,'Error',4);
          }
          this.spinner.hide();
          this.opencheck=false;
        });
  }
  public resetPassword()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.usr.resetUserPassword(this.user).subscribe(res =>
        {
          var det:any=res;
          if(det.result=='OK')
          {
            this.adm.showMessage('Password reset successfully','Success',1);
           }
          else
          {
              this.adm.showMessage(det.result,'Error',4);
          }
          this.spinner.hide();
          this.opencheck=false;
        });
  }
  public setUser()
  {
    var user:any={
      UsrName:this.user,
      RoleName:this.rolename,
      webFreeEnable:this.webenablecheck?1:0,
      mobileFreeEnable:this.mobileenablecheck?1:0

    }
    this.profile.EmployeeNo= +this.employee.recordId > 0 ?(+this.employee.recordId):null;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.usr.setAdmUser(user,this.profile).subscribe(res =>
      {
          var det:any=res;
          if(det.result=='OK')
          {
            this.adm.showMessage('User added successfully','Success',1);
            this.listAdd();
            this.opencheck=false;
          }
          else
          {
            this.adm.showMessage(det.result,'Error',4);
          }
      })
  }

}
