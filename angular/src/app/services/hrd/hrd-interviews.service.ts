import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrdInterviewsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInterviews()
  {
    return this.http.post(this.adm.getActualURL() + 'api/HRDInterViews/GetHRDInterviewsList',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());

  }
  public getResume(rec:number)
  {
    var inf:any=
    {
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDInterViews/GetHRDPendingResume',inf,this.adm.makeConfig());
  }
  public setInterview(header:any,candidates:any[],emps:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      panel:emps,
      candidates:candidates,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };

    return this.http.post(this.adm.getActualURL() + 'api/HRDInterViews/setHRInterView',tot,this.adm.makeConfig());

  }


  

}
