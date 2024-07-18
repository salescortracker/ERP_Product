import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class CrmRepPostSalesService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSaleReturns(fromdate:string,todate:string)
  {
     var inf:any=
    {
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/RMPostSaleReports/GetSaleReturns",inf,this.adm.makeConfig());

  }
  public getSnapShot()
  {
    return this.http.post(this.adm.getActualURL() + "api/CRMPostSaleReports/CRMRepCustomerSnapShot",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());

  }
  public getAgings()
  {
    return this.http.post(this.adm.getActualURL() + "api/CRMPostSaleReports/CRMRepCustomerAgingDetails",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
}
