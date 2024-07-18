import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from './admin-general-info.service';
import { Observable } from 'rxjs';

export class LoginControls
{
  public customerCode:number;
  public userName:string;
  public password:string;
 }

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public LoginVerification(u:LoginControls):any
  {
    console.log(this.adm.getActualURL());
      return this.http.post(this.adm.getActualURL() + "api/LoginControl/LoginVerification",u);
  }
  public LoginAdmin(u:LoginControls)
  {
    return this.http.post(this.adm.getActualURL() + "api/LoginAdmin/LoginCheck",u);
  }
  public LoginChangePassword(oldpass:string,newpass:string)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var obj:any=
    {
      oldpassword:oldpass,
      newpassword:newpass,
      usr:this.adm.getUserCompleteInformation().usr
    }
if(usr.rCode.toUpperCase()=="AGENT")
{
  return this.http.post(this.adm.getActualURL() + "api/LoginControl/logChangePasswordAgent",obj);
 
}
else
{
  return this.http.post(this.adm.getActualURL() + "api/LoginControl/logChangePassword",obj);
}
  
  }
}
