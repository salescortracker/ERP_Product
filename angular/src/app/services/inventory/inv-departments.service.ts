import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvDepartmentsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInvDepartments()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetInvDepartments',this.userdetails.usr,this.adm.makeConfig());

  }
  public getInvLossesTransactions()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetInvLossesTransactions',this.userdetails.usr,this.adm.makeConfig());

  }
  public getInvIssuesTransactions()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetInvIssuesDepartment',this.userdetails.usr,this.adm.makeConfig());

  }
  public getInvMaterialsComplete()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetMaterialCompleteDetails',this.userdetails.usr,this.adm.makeConfig());

  }
  public setIssue(line:any,tracheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      line:line,
      traCheck:tracheck,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/SetIssue',tot,this.adm.makeConfig());

  }

  public GetClosingReport(rec:number,fromdate:string)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      frmDate:fromdate,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetFnBWiseClosingStock',inf,this.adm.makeConfig());

  }

  public getClosingStockWithValue(fromdate:string)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
       toDate:fromdate,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invRepStocks/InvRepStocksClosingStocks',inf,this.adm.makeConfig());

  }
}
