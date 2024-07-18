import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdKeyRepsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDKeyDepartments()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDKeyReports/GetKeyRepHRDDepartments',this.userdetails.usr,this.adm.makeConfig());
  }
  public getHRDKeyDesignations()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDKeyReports/GetKeyRepHRDDesignations',this.userdetails.usr,this.adm.makeConfig());
  }
  public getHRDKeyEmployees()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDKeyReports/GetKeyRepHRDEmployees',this.userdetails.usr,this.adm.makeConfig());
  }
}
