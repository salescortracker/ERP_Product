import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrdAllowancesDeductionsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHrdAllowances()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HrdAllowancesDeductions/GetHrdAllowancesDeductions',this.userdetails.usr,this.adm.makeConfig());
  }
  public getHrdAllowance(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
    var inf:any={
      recordId:rec,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/HrdAllowancesDeductions/GetHrdAllowancesDeduction',inf,this.adm.makeConfig());

  }
  public setHrdAllowance(header:any,lines:any,traCheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
    var tot:any={
      header:header,
      lines:lines,
      traCheck:traCheck,
      usr:usr
    }
    console.log(tot,'tot');
    return this.http.post(this.adm.getActualURL() + 'api/HrdAllowancesDeductions/SetHrdAllowancesDeduction',tot,this.adm.makeConfig());
  }


  public getHRDAllowancesDeductionsRange()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
    return this.http.post(this.adm.getActualURL() + 'api/HrdAllowancesDeductions/GetHRDAllowancesDeductionRangeRequirements',usr,this.adm.makeConfig());

  }
  public setHRDAllowancesDeductionsRange(range:any[])
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
    var tot:any={
      range:range,
      
      usr:usr
    }
    console.log(tot,'tot');
    return this.http.post(this.adm.getActualURL() + 'api/HrdAllowancesDeductions/setHRDAllowanceDeductionsRange',tot,this.adm.makeConfig());
  }
}
