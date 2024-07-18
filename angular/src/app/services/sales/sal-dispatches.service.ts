import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class SalDispatchesService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getSaleRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    
    return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/GetSaleRequirements",u,this.adm.makeConfig());
  }
 public getSales(fromdate:string)
 {
  var inf:any=
  {
    frmDate:fromdate,
      usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/GetSales",inf,this.adm.makeConfig());

 }
 public getSale(rec:number)
 {
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/GetSale",inf,this.adm.makeConfig());

 }
 public setSale(header:any,lines:any[],taxes:any[],terms:any[])
 {
  var tot:any={
    header:header,
    lines:lines,
    taxes:taxes,
    traCheck:1,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/SetSale",tot,this.adm.makeConfig());

  
 }

 public getPendingDispatches()
 {
  var u=this.adm.getUserCompleteInformation().usr;
    
  return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/GetPendingDispatches",u,this.adm.makeConfig());

 }
 public setPendingDispatchClearance(rec:number)
 {
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + "api/SaleDespatches/SetPendingDispatchClear",inf,this.adm.makeConfig());

 }
}
