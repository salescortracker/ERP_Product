import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalSaleTypesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSaleTypes():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/SaleTypes/GetSaleTypes",u,this.adm.makeConfig());
  }
  public setSaleType(ptype:any,traCheck:number):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      stype:ptype,
      traCheck:traCheck,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/SaleTypes/SetSaleType",tot,this.adm.makeConfig());
    }
   
    

  public getSaleAccountsAssign()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/SaleTypes/GetSaleAccounts",u,this.adm.makeConfig());

  }
  public setPurchaseAccountsAssign(list:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      list:list,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/SaleTypes/SetSaleAccounts",u,this.adm.makeConfig());

  }
}
