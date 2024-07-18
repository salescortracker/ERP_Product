import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class BlankPurchasesRepService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

public getBlankPurchases( fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepListOfPurchases',inf,this.adm.makeConfig());
 
}



public getBlankPurchasesSupplierWise(vendor:string, fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    detail:vendor,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepListOfPurchasesSupplierWise',inf,this.adm.makeConfig());
}


public getBlankPurchasesConsolidated( fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepListOfConsolidatedPurchases',inf,this.adm.makeConfig());
}

public getBlankPurchasesConsolidatedSupplierWise(vendor:string, fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    detail:vendor,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepListOfConsolidatedPurchasesSupplierWise',inf,this.adm.makeConfig());
}


public getBlankPurchasesItemWise( fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepItemWisePurchases',inf,this.adm.makeConfig());
}

public getBlankPurchasesItemWiseLookup( fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseReport/blankPurchaseRepItemWisePurchasesDetailed',inf,this.adm.makeConfig());
}

public getSupplierWisePendings(sup:string)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:sup,
    usr:this.userdetails.usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/SupplierWisePendingPayments',inf,this.adm.makeConfig());
}

}
