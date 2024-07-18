import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmRXPriceListService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getRxPriceListNames()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/GetRXPriceNames',usr,this.adm.makeConfig());

  }
  public getRxDiscountListNames()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
   return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/GetRXDiscountNames',usr,this.adm.makeConfig());

  }
  public getRxPriceList(str:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
     var usr=this.userdetails.usr;
     var inf:any={
      detail:str,
      usr:usr
     }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/GetRXSalePriceList',inf,this.adm.makeConfig());
  }
  public getRxDiscountList(str:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
     var usr=this.userdetails.usr;
     var inf:any={
      detail:str,
      usr:usr
     }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/GetRXSaleDiscountList',inf,this.adm.makeConfig());
  }
  public setRxPriceList(prices:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
     var usr=this.userdetails.usr;
    var tot:any={
      prices:prices,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/SetRXSalePriceList',tot,this.adm.makeConfig());

  }
  public setRxDiscountsList(discounts:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
     var usr=this.userdetails.usr;
    var tot:any={
      discounts:discounts,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRXSalePrices/SetRXSaleDiscountList',tot,this.adm.makeConfig());

  }
  public getCRMRXDashboard()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var usr=this.userdetails.usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMDashboardRX/GetCRMRXDashboard',usr,this.adm.makeConfig());

  }
}
