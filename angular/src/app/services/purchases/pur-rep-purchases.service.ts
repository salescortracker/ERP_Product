import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PurRepPurchasesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getListOfPurchases(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchases",inf,this.adm.makeConfig());
  }
  public getListOfPurchasesConsolidated(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchasesConsolidated",inf,this.adm.makeConfig());
  }
  public getListOfPurchasesDetailed(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchasesDetailed",inf,this.adm.makeConfig());
  }
  public purRepPurchasesListofPurchasesSupplierWise(fromdate:string,todate:string,vendor:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      detail:vendor,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchasesSupplierWise",inf,this.adm.makeConfig());
  }

  public purRepPurchasesConsolidatedSupplierWise(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchasesSupplierConsolidated",inf,this.adm.makeConfig());
  }
  public purRepPurchaseReturnsList(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesListofPurchaseReturns",inf,this.adm.makeConfig());
 

  }
  public purRepPurchaseReturnsConsolidated(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchasesPurchaseReturnsConsolidated",inf,this.adm.makeConfig());
 

  }
  public purRepPurchaseReturnSupplierWiseConsolidated(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/purRepPurchaseReturnsSupplierConsolidated",inf,this.adm.makeConfig());
 

  }
  public purRepPurchaseToPurchaseReturn(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/PurRepPurchasesToReturns",inf,this.adm.makeConfig());
  }
  public purRepPurchaseCreditNotes(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepPurchases/PurRepListOfCreditNotes",inf,this.adm.makeConfig());
  }
}
