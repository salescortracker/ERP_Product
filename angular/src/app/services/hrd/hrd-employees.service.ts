import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrdEmployeesService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDEmployeeRequirements()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDEmployees/GetHRDEmployeeRequirements',this.userdetails.usr,this.adm.makeConfig());
  }
  public getHRDEmployees()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDEmployees/GetHRDEmployees',this.userdetails.usr,this.adm.makeConfig());

  }
  public getHRDEmploy(rec:number)
  {
      var inf:any={
        recordId:rec,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/HRDEmployees/GetHRDEmployee',inf,this.adm.makeConfig());

  }
  public setHrdEmployee(emp:any,allowances:any[],leaves:any[],identifications:any,
    curricul:any,experience:any,family:any,images:any[],tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      employee:emp,
      allowances:allowances,
      leaves:leaves,
      identifications:identifications,
      curriculum:curricul,
      experience:experience,
      family:family,
      imgs:images,
      traCheck:tracheck,
      
      usr:this.userdetails.usr
    }

    return this.http.post(this.adm.getActualURL() + 'api/HRDEmployees/SetHRDEmployee',tot,this.adm.makeConfig());

  }
}
