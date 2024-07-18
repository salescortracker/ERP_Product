import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmBillSubmissionsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSubmittedBills(dat:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:dat,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMBillSubmissions/GetSubmittedBills",inf,this.adm.makeConfig());

  }
  public getPendingBills():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/CRMBillSubmissions/GetBillsForSubmission",u,this.adm.makeConfig());
  }
  public setBillSubmission(header:any,lines:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      header:header,
      lines:lines,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMBillSubmissions/SetBillSubmission",tot,this.adm.makeConfig());
  }
  public crmFollowupList(fromdate:string)
  {
    var inf:any={
      frmDate:fromdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMPostFollowup/GetTodayFollowup",inf,this.adm.makeConfig());

  }
  public crmFollowupRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMPostFollowup/GetFollowUpRequirements",u,this.adm.makeConfig());

  }
  public setFollowUp(call:any)
  {
    var tot:any={
      call:call,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMPostFollowup/SetCRMPostFollowup",tot,this.adm.makeConfig());

 
  }
}
