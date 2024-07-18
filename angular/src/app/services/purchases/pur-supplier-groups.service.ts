import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurSupplierGroupsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSupplierGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PurSupplierGroups/GetSupplierGroups",u,this.adm.makeConfig());
  }
  public getSupplierGroup(rec:number):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any=
    {
      recordId:rec,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PurSupplierGroups/GetPurSupplierGroup",inf,this.adm.makeConfig());
  }
  public setSupplierGroup(grp:any,traCheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      grp:grp,
      traCheck:traCheck,
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PurSupplierGroups/setSupplierGroup",tot,this.adm.makeConfig());

  }
  public getSupplierGroupsTreeWise()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurSupplierGroups/GetSupplierGroupsTreeView",u,this.adm.makeConfig());

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
