import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmCustomerGroupsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCustomerGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/CRMCustomerGroups/GetCustomerGroups",u,this.adm.makeConfig());
  }
  public getCustomerGroup(rec:number):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any=
    {
      recordId:rec,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/CRMCustomerGroups/GetSalCustomerGroup",inf,this.adm.makeConfig());
  }
  public setCustomerGroup(grp:any,traCheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      grp:grp,
      traCheck:traCheck,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/CRMCustomerGroups/setCustomerGroup",tot,this.adm.makeConfig());

  }
  public getCustomerGroupsTreeWise()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/CRMCustomerGroups/GetCustomerGroupsTreeView",u,this.adm.makeConfig());

  }

  public getSupplierGroupsReport()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurKeyReports/purKeyRepSupplierGroups",u,this.adm.makeConfig());

  }
  public getSuppliersReport()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurKeyReports/purKeyRepSupplierDetails",u,this.adm.makeConfig());
  }

}
