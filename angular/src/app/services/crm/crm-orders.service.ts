import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrmOrdersService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCRMSaleOrderRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/GetSaleOrderRequirements',usr,this.adm.makeConfig());
   }
   public getSaleOrders(fromdate:string,todate:string)
   {
      var inf:any={
        frmDate:fromdate,
        toDate:todate,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/GetSaleOrders',inf,this.adm.makeConfig());
 
   }
public getSaleOrder(rec:number)
{
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/GetSaleOrder',inf,this.adm.makeConfig());

}
public setSaleOrder(header:any,lines:any[],terms:any[],taxes:any[],tracheck:number)
{
  var tot:any={
    header:header,
    lines:lines,
    terms:terms,
    taxes:taxes,
    traCheck:tracheck,
usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/SetSaleOrder',tot,this.adm.makeConfig());

}


   public getSaleOrdersForApproval()
   {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/GetSaleOrdersForApprovals',usr,this.adm.makeConfig());

   }
   public setSaleOrderForApproval(rec:number)
   {
      var inf:any={
        recordId:rec,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/CRMSaleOrder/SetSaleOrderForApprovals',inf,this.adm.makeConfig());
 
   }

}
