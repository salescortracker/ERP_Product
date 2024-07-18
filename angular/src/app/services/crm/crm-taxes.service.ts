import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrmTaxesService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getTaxAssigningRequirements()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/CRMTaxAssigning/CRMTaxAssignRequirements',this.userdetails.usr,this.adm.makeConfig());
  }
  public getListOfTaxAssignings()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/CRMTaxAssigning/GetCRMTaxAssignings',this.userdetails.usr,this.adm.makeConfig());

  }
  public getTaxCompleteDetail(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMTaxAssigning/GetCRMTaxAssigning',inf,this.adm.makeConfig());
  }
  public setTaxCompleteDetail(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMTaxAssigning/SetCRMTaxAssigning',tot,this.adm.makeConfig());
  }

  public getCRMSettings()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMSetup/GetCRMSetupDetails',usr,this.adm.makeConfig());
 
  }
  public setCRMSettings(list:any[])
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      list:list,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMSetup/SetCRMSetupDetails',tot,this.adm.makeConfig());
 
  }
}
