import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class CrmPreSaleReportsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getTeleCallsList(fromdate:string,todate:string)
  {
     var inf:any=
    {
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMListofTeleCalls",inf,this.adm.makeConfig());

  }
  public getTeleCallsPending()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMPendingTeleCalls",u,this.adm.makeConfig());

  }
  public getEnquiriesList(fromdate:string,todate:string)
  {
     var inf:any=
    {
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMListofEnquiries",inf,this.adm.makeConfig());

  }
  public getEnquiriesPending()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMPendingEnquiries",u,this.adm.makeConfig());

  }
  public getCallerWiseCalls(fromdate:string,todate:string)
  {
    var inf:any=
    {
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMCallerwiseCalls",inf,this.adm.makeConfig());
  }
  public getListofOrders(fromdate:string,todate:string)
  {
    var inf:any=
    {
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMListofSaleOrders",inf,this.adm.makeConfig());
  }

  public getListofPendingOrders( )
  {
      return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMListofPendingSaleOrders",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public getItemWisePendingOrders( )
  {
      return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMItemWisePendingSaleOrders",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public getPendingAdvances( )
  {
      return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/crmRepOrderPendingAdvances",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  
  public getCustomerWiseOrders(rec:number,fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/CRMPreSaleReports/GetCRMCustomerWiseSaleOrders",inf,this.adm.makeConfig());
  }
}
