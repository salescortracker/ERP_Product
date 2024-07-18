import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvKeyReportsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getKeyRepUnits()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvUnits',this.userdetails.usr,this.adm.makeConfig());
  }
  public getKeyRepStores()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvStores',this.userdetails.usr,this.adm.makeConfig());
  }
  public getKeyRepItemGroups()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvItemGroups',this.userdetails.usr,this.adm.makeConfig());
  }
  public getKeyRepItems()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvItems',this.userdetails.usr,this.adm.makeConfig());
  }
  public getKeyRepDepartments()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvDepartments',this.userdetails.usr,this.adm.makeConfig());
  }
  public getKeyRepLosses()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invKeyReportsController/GetKeyRepInvLosses',this.userdetails.usr,this.adm.makeConfig());
  }
}
