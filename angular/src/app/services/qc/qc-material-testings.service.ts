import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class QcMaterialTestingsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getQcTestRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/QCMaterials/GetQCMaterialRequirements",u,this.adm.makeConfig());
  }
  public setQCTestMaterial(header:any,lines:any[],tracheck)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/QCMaterials/SetQCMaterial",tot,this.adm.makeConfig());

  }
  public getQCMIRApprovalInfo(rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/QCMaterials/GetCompleteMIRQCDetails",inf,this.adm.makeConfig());
 
  }
  public setQCMIRApproval(rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/QCMaterials/SetQCMIRApproval",inf,this.adm.makeConfig());
 
  }

}
