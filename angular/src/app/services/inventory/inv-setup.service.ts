import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvSetupService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurTerms():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/purPurchaseSetup/GetPurchaseTerms",u,this.adm.makeConfig());
  }
  public setPurTerms(term:string,tracheck:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      term:term,
      tracheck:tracheck,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/purPurchaseSetup/setPurchaseTerm",tot,this.adm.makeConfig());
  }
  public getInventoryCostingInfo()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/invSetup/invCostingInfo',usr,this.adm.makeConfig());
   }
  public setInventoryCostingInfo(rec:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId: +rec,
        usr:usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/invSetup/setInvCostingInfo',inf,this.adm.makeConfig());

  }
}
