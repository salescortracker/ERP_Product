import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class BlankOrderRepsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

public getBlankOrders( fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankOrderReports/blankOrderRepListOfOrders',inf,this.adm.makeConfig());
 
}
public getBlankOrdersSupplierWise(supplier:string, fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    detail:supplier,
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankOrderReports/blankOrderRepListOfOrdersSupplierWise',inf,this.adm.makeConfig());
 
}
public getBlankOrdersSupplierWiseDelayed(supplier:string, fromdate:String, todate:String)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    detail:supplier,
    frmDate:fromdate,
    toDate:todate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankOrderReports/blankOrderRepListOfOrdersSupplierWiseDelayed',inf,this.adm.makeConfig());
 
}
public getBlankOrdersExpectedBalnks()
{

  var usr=this.adm.getUserCompleteInformation().usr;
   
  return this.http.post(this.adm.getActualURL() + 'api/BlankOrderReports/blankOrderRepListOfExpectedMaterial',usr,this.adm.makeConfig());
 
}
public getBlankOrdersExpectedBalnksSupplierWise(supplier:string)
{

  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    detail:supplier,
  
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/BlankOrderReports/blankOrderRepListOfExpectedMaterialSupplierWise',inf,this.adm.makeConfig());
 
}
}