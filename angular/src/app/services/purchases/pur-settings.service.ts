import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurSettingsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurSettings():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PurSettings/GetPurSetupDetails",u,this.adm.makeConfig());
  }
  public setPurSettings(sets:any[]):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      sets:sets,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurSettings/SetPurSetupDetails",tot,this.adm.makeConfig());
  }

  public getPurMailSettings():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PurSettings/GetPurMailSettings",u,this.adm.makeConfig());
  }
  public setPurMailSettings(mails:any[]):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      mails:mails,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurSettings/SetPurMailSettings",tot,this.adm.makeConfig());
  }
  public getPurCoveringLetterInfo(det:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any=
    {
      detail:det,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/AdminTargets/GetMisCoveringLetterDetails",inf,this.adm.makeConfig());
  }
  public setPurCoveringLetterInfo(det:any):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      detail:det,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/AdminTargets/SetMisCoveringLetterDetails",tot,this.adm.makeConfig());
  }



}
