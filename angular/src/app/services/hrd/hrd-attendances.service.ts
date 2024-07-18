import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdAttendancesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getHRDInoutDetails(frmdate:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:frmdate,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/HRDEmployeeInOut/GetTodayInoutDetails',inf,this.adm.makeConfig());
  }
  public setHRDInOutDetails(obj:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      inout:obj,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/HRDEmployeeInOut/SetTodayInoutDetails',tot,this.adm.makeConfig());
 
  }
}
