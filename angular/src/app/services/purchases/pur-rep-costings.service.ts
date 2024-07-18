import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class PurRepCostingsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSupplierDayBook(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurCostReports/PurRepSupplierDayBook",inf,this.adm.makeConfig());
  }
  public getSupplierLedger(rec:number,fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurCostReports/PurRepSupplierLedger",inf,this.adm.makeConfig());
  }
  public getSupplierSnapShot():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
     
      return this.http.post(this.adm.getActualURL() + "api/PurCostReports/PurRepSupplierSnapShot",u,this.adm.makeConfig());
  }
  public getSupplierAgingDetails():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
     
      return this.http.post(this.adm.getActualURL() + "api/PurCostReports/PurRepSupplierAgingDetails",u,this.adm.makeConfig());
  }
  public getSupplierClosingBalances():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
     
      return this.http.post(this.adm.getActualURL() + "api/PurCostReports/PurRepSupplierClosingBalances",u,this.adm.makeConfig());
  }
}
