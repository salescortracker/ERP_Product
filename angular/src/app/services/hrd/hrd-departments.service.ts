import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdDepartmentsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDDepartments()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/hrdDepartments/GetDepartments',this.userdetails.usr,this.adm.makeConfig());

  }
  public getHRDDeoartmentsTreeWise()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/hrdDepartments/GetHrdDepartmentsTreeView',this.userdetails.usr,this.adm.makeConfig());
  }
  public setHRDDepartment(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var details:any={
      dept:obj,
      traCheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/hrdDepartments/setHrdDepartment',details,this.adm.makeConfig());
  }
}
