import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccAccountGroupsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAccountGroups()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accAccountGroups/GetAccountGroups',this.userdetails.usr,this.adm.makeConfig());

  }
  public uploadFiles(postinfo:any)
  {
     
   
    return this.http.post(this.adm.getActualURL() + 'api/DashboardGeneral/PostGeneralPosts',postinfo);

  }
  public getAccountGroupsTreeWise()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accAccountGroups/GetAccountGroupsTreeView',this.userdetails.usr);
  }
  public setAccountGroup(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var details:any={
      grp:obj,
      traCheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/accAccountGroups/setAccountGroup',details);
  }
}
