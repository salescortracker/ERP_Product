import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';
 
@Injectable({
  providedIn: 'root'
})
export class CrmKeyReportsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCustomerGroupsReport()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMKeyReports/crmeyRepCustomerGroups",u,this.adm.makeConfig());

  }
  public getCustomerDetailsReport()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMKeyReports/CRMKeyRepCustomerDetails",u,this.adm.makeConfig());

  }
}
