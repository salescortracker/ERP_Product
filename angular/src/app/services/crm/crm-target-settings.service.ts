import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrmTargetSettingsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getTargetRequirements()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/CRMTargetSettings/GetCRMTargetRequirements',this.userdetails.usr,this.adm.makeConfig());
  }
  public getTargetSettingDetails(empno:number,detail:number,yea:number,targetType:number,brandType:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var det:any=
    {
      empno:empno,
      detail:detail,
      yea:yea,
      targetType:targetType,
      brandType:brandType,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMTargetSettings/GetCRMTargetDetails',det,this.adm.makeConfig());
  
    
  }
  public setTarget(targets:any[])
  {
      var tot:any={
        targets:targets,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + 'api/CRMTargetSettings/SetCRMTarget',tot,this.adm.makeConfig());
  
  }
}
