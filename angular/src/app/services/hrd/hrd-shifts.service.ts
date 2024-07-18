import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdShiftsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDShifts()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDShifts/GetHrdShifts',this.userdetails.usr,this.adm.makeConfig());
  }
  public setHRDShift(shift:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      shift:shift,
      traCheck:tracheck,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDShifts/SetHrdShifts',tot,this.adm.makeConfig());
  }
}
