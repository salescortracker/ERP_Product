import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class ResNCDepartmentsService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  
  public getNCDepartments()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/POSMasNCDepartments/GetResNCDepartments',u,this.adm.makeConfig());
  }
  public setNCDepartments(dept:any,tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      dept:dept,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + 'api/POSMasNCDepartments/SetResNCDepartment',tot,this.adm.makeConfig());
  }

   


}
