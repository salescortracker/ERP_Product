import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class PurPurchaseQuotationService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPurchaseQuotationRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurQuotations/GetPurchaseQuotationRequirements",u,this.adm.makeConfig());
  }
  public getPurchaseQuotationsForApprovals()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurQuotations/GetPurQuotationsForApprovals",u,this.adm.makeConfig());
  }

  public getPurchaseQuotations(fromdate:string,todate:string)
  {
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurQuotations/GetPurQuotations",inf,this.adm.makeConfig());

  }
  public getPurchaseQuotation(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurQuotations/GetPurQuotation",inf,this.adm.makeConfig());

  }
  public setPurchaseQuotation(header:any,lines:any[],imgs:any[],notes:any[],taxes:any[], tracheck)
  {
    
      var tot:any={
        header:header,
        
        lines:lines,
        imgs:imgs,
        terms:notes,
         taxes:taxes,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      console.log('tot',tot);
      return this.http.post(this.adm.getActualURL() + "api/PurQuotations/setPurQuotation",tot,this.adm.makeConfig());
 
  }
  public setPurchaseQuotationForApproval(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurQuotations/SetPurQuotationForApproval",inf,this.adm.makeConfig());

  }
  public getPurchaseOrderRequirements2()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/purPurchaseOrders/PurOrderRequirements2",u,this.adm.makeConfig());

  }
public setPurchaseOrder2(details:any[],terms:any[])
{
  var tot:any={
    details:details,
    //terms:terms,
    usr:this.adm.getUserCompleteInformation().usr
  }
  console.log(tot,'tot');
  return this.http.post(this.adm.getActualURL() + "api/purPurchaseOrders/SetPurchaseOrder2",tot,this.adm.makeConfig());
}



}
