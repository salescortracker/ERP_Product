import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PurRepOrderManagementService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurRequests(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderRequests",inf,this.adm.makeConfig());
  }
  public getPurPendingRequests(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderPendingRequests",inf,this.adm.makeConfig());
  }
  public getPurUnorderedRequests(rec:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepItemWisePendingRequests",inf,this.adm.makeConfig());
  }
  public getPurRequestsExpired():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/PurRepRequestsExpired",u,this.adm.makeConfig());
  }
  public getPurRequestsTobeApproved():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/PurRepRequestsTobeApproved",u,this.adm.makeConfig());
  }
  public getEnquiriesList(rec:number,fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    //rec 1 for total list 2 for pending and 3 for expired 
    var inf:any={
      recordId:rec,
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/PurRepListOfEnquiries",inf,this.adm.makeConfig());

  }
  public getPurOrders(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderListOfOrders",inf,this.adm.makeConfig());
  }
  public getPurOrdersSupplierwise(rec:number,fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderListOfOrdersSupplierWise",inf,this.adm.makeConfig());
  }

  public getPurPendingOrders(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderListOfOrdersPending",inf,this.adm.makeConfig());
  }
  public getPurExpectedMaterials():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
   
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderExpectedMaterials",u,this.adm.makeConfig());
  }
  public getPurPendingAdvances():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
   
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderPendingAdvances",u,this.adm.makeConfig());
  }
  public getPurPendingAdvancesSupplierwise():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
   
      return this.http.post(this.adm.getActualURL() + "api/PurRepOrderManagement/purRepOrderSupplierwisePendingAdvances",u,this.adm.makeConfig());
  }
}
