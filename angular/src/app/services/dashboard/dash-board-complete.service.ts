import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DashBoardCompleteService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCompleteUsers():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/DashboardComplete/GetCompleteUsersList",u,this.adm.makeConfig());
  }
  public uploadFiles(postinfo:any)
  {
     
   
    return this.http.post(this.adm.getActualURL() + 'api/DashboardGeneral/PostGeneralPosts',postinfo);

  }
}
