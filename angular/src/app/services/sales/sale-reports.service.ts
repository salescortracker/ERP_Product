import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
 
@Injectable({
  providedIn: 'root'
})
export class SaleReportsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getListOfSales(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleReports/SalRepListOfSales",inf,this.adm.makeConfig());
  }
  public getListOfSalesDetailed(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleReports/SalRepListOfSalesDetailed",inf,this.adm.makeConfig());
  }
  public getListOfSalesConsolidated(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleReports/SalRepListOfSalesConsolidated",inf,this.adm.makeConfig());
  }
  public getListOfSalesCustomerwise(fromdate:string,todate:string,rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleReports/SalRepListOfSalesCustomerWise",inf,this.adm.makeConfig());
  }
  public getListOfSalesCustomerWiseConsolidated(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleReports/SalRepListOfSalesCustomerWiseConsolidated",inf,this.adm.makeConfig());
  }
  public getCustomerDayBook(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleCostReports/SalRepCustomerDayBook",inf,this.adm.makeConfig());
  }
  public getCustomerLedger(fromdate:string,todate:string,rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
frmDate:fromdate,
toDate:todate,
usr:u
    };
    
    return this.http.post(this.adm.getActualURL() + "api/SaleCostReports/SalRepCustomerLedger",inf,this.adm.makeConfig());
  }
  public getCustomerSnapShot()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/SaleCostReports/SalRepCustomerSnapShot",u,this.adm.makeConfig());

  }
  public getCustomerAgingDetails()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/SaleCostReports/SalRepCustomerAgingDetails",u,this.adm.makeConfig());

  }
  public getCustomerClosingBalances()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/SaleCostReports/SalRepCustomerClosingBalances",u,this.adm.makeConfig());

  }
}
