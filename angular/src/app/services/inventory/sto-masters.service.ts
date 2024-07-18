import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';

@Injectable({
  providedIn: 'root'
})
export class StoMastersService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getStockSKURequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/StockMaster/GetStockCompleteSKURequirements',usr,this.adm.makeConfig());
   
  }
  public getStockSKUs()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/StockMaster/GetStockSKUs',usr,this.adm.makeConfig());
  }
  public setStockSKU(stock:any)
  {
    var tot:any={
      stock:stock,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/StockMaster/setStocksSKUDetail',tot,this.adm.makeConfig());

  }
  public deleteStockSKU(recordId:number)
  {
    var inf:any={
      RecordId:recordId,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/StockMaster/deleteStockSKUDetail',inf,this.adm.makeConfig());

  }
}
