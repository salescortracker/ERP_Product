import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosClssyBillingService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getClassyBillingCompleteRequirements():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSClassyBilling/POSBillingRequirements",u,this.adm.makeConfig());
  }

  public setKOTDetails(kotinf:any[],outlet:string,traCheck:number)
  {
    var tot:any={
      kotinf:kotinf,
      outlet:outlet,
      usr:this.adm.getUserCompleteInformation().usr,
      traCheck:traCheck
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + "api/POSClassyBilling/setCompleteKOTInformation",tot,this.adm.makeConfig());
 
  }
  public getPendingSettles()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/pos/getUnsettledBills",usr,this.adm.makeConfig());
 
  }
  public setBillDetails(tableno,restacode)
  {
    var tot:any={
      tableno:tableno,
      restacode:restacode,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/pos/makePOSBillByTableNo",tot,this.adm.makeConfig());
 
  }
  public setUnsettled(billno:number,settlemode:string)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      billno:billno,
      settlemode:settlemode,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + "api/pos/setSettleBill",tot,this.adm.makeConfig());
 
  }

  
}
