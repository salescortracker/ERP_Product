import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PurPurchaseTypesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurchaseTypes():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PurchaseTypes/GetPurchaseTypes",u,this.adm.makeConfig());
  }
  public setPurchaseType(ptype:any,traCheck:number):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      ptype:ptype,
      traCheck:traCheck,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PurchaseTypes/SetPurchaseType",tot,this.adm.makeConfig());
    }
  public getPurchaseTerms():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/purPurchaseOrders/GetPurchaseTerms",u,this.adm.makeConfig());
  }
  public setPurchaseTerm(term:any,tracheck:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      term:term,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/purPurchaseOrders/SetPurchaseTerm",tot,this.adm.makeConfig());
  }

  public getPurchaseAccountsAssign()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurchaseTypes/GetPurchaseAccounts",u,this.adm.makeConfig());

  }
  public getCRMAccountsAssign()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMAdvances/GetSaleCRMAccounts",u,this.adm.makeConfig());
  }
  public setPurchaseAccountsAssign(list:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      list:list,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/PurchaseTypes/SetPurchaseAccounts",tot,this.adm.makeConfig());

  }
}
