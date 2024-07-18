import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdLeavesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDLeaves()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDLeaves/GetHRDLeaves',this.userdetails.usr,this.adm.makeConfig());
  }
  public setHRDLeave(leave:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      leave:leave,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/HRDLeaves/SetHRDLeave',tot,this.adm.makeConfig());
  }
}
