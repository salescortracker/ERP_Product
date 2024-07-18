import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmDiscountListService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getDiscountListRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetDiscountListRequirements',usr,this.adm.makeConfig());
   }
   public getPriceListRxRequirements()
   {
     var usr=this.adm.getUserCompleteInformation().usr;
     return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetPriceListRequirementsRx',usr,this.adm.makeConfig());
    }
  public getDiscountLists()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetCRMDiscountLists',usr,this.adm.makeConfig());
  }
  public getDiscountListInfo(rec:number)
  {
   var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr};
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/GetCRMDiscountListDetails',inf,this.adm.makeConfig());
  }
  public setDiscountList(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMDiscountList/setCRMDiscountList',tot,this.adm.makeConfig());

  }


}
