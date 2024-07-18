import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class AdmRolesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAdmRoles()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/GetAdminRoles',this.userdetails.usr,this.adm.makeConfig());

  }
  public getAdmRole(rolename:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any=
    {
      detail:rolename,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/GetAdminRole',inf,this.adm.makeConfig());

  }
  public setAdmRole(roles:any,rolename:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any=
    {
      roles:roles,
      rolesName:rolename,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/setAdminRole',tot,this.adm.makeConfig());

  }

  public getSystemRequirement()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/getSystemVerification',usr,this.adm.makeConfig());
  }
  public setSystemRequirement(str:string)
  {
    var inf:any={
      detail:str,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/setSystemVerification',inf,this.adm.makeConfig());

  }
  public getUsers()
  {
    return this.http.post(this.adm.getActualURL() + 'api/AdminRoles/setSystemVerification',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  
 
}
