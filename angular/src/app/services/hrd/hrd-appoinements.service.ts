import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrdAppoinementsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAppointmentRequirements()
  {
    return this.http.post(this.adm.getActualURL() + 'api/HRDAppointments/GetHRDAppintmentList',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public setAppointment(header:any,lines:any[])
  {
      var tot:any={
        header:header,
        candidates:lines,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + 'api/HRDAppointments/SetHrdAppintment',tot,this.adm.makeConfig());

  }
}
