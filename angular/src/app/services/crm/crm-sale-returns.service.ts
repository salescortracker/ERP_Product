import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class CrmSaleReturnsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
 
  public getSaleReturnRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/GetSaleReturnRequirements",usr,this.adm.makeConfig());
  }
  public getSaleReturnSalesList(fromdate:string,todate:string)
  {
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/GetSales",inf,this.adm.makeConfig());

  }
  public getSaleReturnSaleInfo(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/GetSale",inf,this.adm.makeConfig());


  }
  public setSaleReturn(header:any,lines:any[],taxes:any[],tracheck:number)
  {
    var tot:any={
header:header,
lines:lines,
taxes:taxes,
traCheck:tracheck,
usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/SetSaleReturn",tot,this.adm.makeConfig());
  }
  public deleteSaleReturn(recordid:number)
  {
    var inf:any={
      recordId:recordid,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/DeleteSaleReturn",inf,this.adm.makeConfig());
 


  }
  public getSaleReturns(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMSaleReturns/GetSaleReturns",inf,this.adm.makeConfig());

  }


  public getReceipts(fromdate:string)
  {
    var inf:any={
      frmDate:fromdate,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMReceipts/GetReceipts",inf,this.adm.makeConfig());

  }

  public setReceipt(header:any,lines:any[])
  {
    var tot:any={
      header:header,
      lines:lines,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMReceipts/SetPartyReceipt",tot,this.adm.makeConfig());

  }
  public deleteReceipt(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/CRMReceipts/DeletePartyReceipt",inf,this.adm.makeConfig());

  }
   



}
