import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PurRepStocksService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurchasesDayBook(fromdate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:fromdate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepStocks/PurRepPurchasesDayBook",inf,this.adm.makeConfig());
  }
  public getItemWiseConsolidations(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepStocks/PurRepItemWisePurchasesConsolidations",inf,this.adm.makeConfig());
  }
  public getTop10Purchases(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepStocks/PurRepTop10ItemsPurchased",inf,this.adm.makeConfig());
  }
  public getLeast10Purchases(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepStocks/PurRepLeast10ItemsPurchased",inf,this.adm.makeConfig());
  }
  public getNoItemsPurchases(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepStocks/PurRepNoPurchaseItems",inf,this.adm.makeConfig());
  }
}
