import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrdResumeService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDResume(fromdate:string,todate:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.userdetails.usr
    };  
    return this.http.post(this.adm.getActualURL() + 'api/HRDResume/GetHRDResumeList',inf,this.adm.makeConfig());
  }
  public getResumeCompleteDetails(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
       usr:this.userdetails.usr
    };  
    return this.http.post(this.adm.getActualURL() + 'api/HRDResume/GetHRDResume',inf,this.adm.makeConfig());

  }
  public setResume(header:any,curr:any[],exp:any[],img:any,tracheck:number)
  { 
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      header:header,
      curriculum:curr,
      experience:exp,
      traCheck:tracheck,
      imgs:img,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/HRDResume/SetHRDResume',tot,this.adm.makeConfig());

  }
}
