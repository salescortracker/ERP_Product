import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmPriceListService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPriceListRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetPriceListRequirements',usr,this.adm.makeConfig());
   }
   public getPriceListRxRequirements()
   {
     var usr=this.adm.getUserCompleteInformation().usr;
     return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetPriceListRequirementsRx',usr,this.adm.makeConfig());
    }
  public getPriceLists()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetCRMPricesLists',usr,this.adm.makeConfig());
  }
  public getPriceListInfo(rec:number)
  {
   var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr};
    return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/GetCRMPriceListDetails',inf,this.adm.makeConfig());
  }
  public setPriceList(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMPriceLists/setCRMPriceList',tot,this.adm.makeConfig());

  }


}
