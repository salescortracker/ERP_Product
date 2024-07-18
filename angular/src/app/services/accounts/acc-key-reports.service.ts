import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccKeyReportsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getKeyAccountGroups()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accKeyReports/getAccKeyRepAccountGroups',this.userdetails.usr,this.adm.makeConfig());

  }
  public getKeyAccountDetails()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accKeyReports/getAccKeyRepAccountDetails',this.userdetails.usr,this.adm.makeConfig());

  }
  public getKeyAssetDetails()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accKeyReports/getAccKeyRepAssetDetails',this.userdetails.usr,this.adm.makeConfig());

  }

public getCashBankBook(dat:String,typ:String)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    frmDate:dat,
    detail:typ,
    usr:this.userdetails.usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepCashBankBook',inf,this.adm.makeConfig());
}
public getDayBook(dat:String)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    frmDate:dat,
    usr:this.userdetails.usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepDayBook',inf,this.adm.makeConfig());
}
public getLedgerDetailed(rec:number,detail:string,fromdate:string,todate:string)
{
  var inf:any=
  {
    frmDate:fromdate,
    toDate:todate,
    recordId:rec,
    detail:detail,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepLedgerDetaild',inf,this.adm.makeConfig());

}
  public getTrialBalance(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepTrialBalance',tot,this.adm.makeConfig());
  }
  
  public getSchedules(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepSchedules',tot,this.adm.makeConfig());
  }

  public getPNLAccount(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    console.log(this.userdetails,'usr');
    var inf:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    console.log(inf,'inf');
    return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepPNLAccount',inf,this.adm.makeConfig());
  }
  public getBalanceSheet(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    console.log(this.userdetails,'usr');
    var inf:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    console.log(inf,'inf');
    return this.http.post(this.adm.getActualURL() + 'api/accFinReports/getAccRepBalanceSheet',inf,this.adm.makeConfig());
  }
}
