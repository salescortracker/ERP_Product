import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class PpcMastersService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPPCProcesses()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcMasters/GetPPCProcesses",u,this.adm.makeConfig());
  }
  public setPPCProcess(process:any,tracheck:number)
  {
    var tot:any={
      process:process,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcMasters/SetPPCProcess",tot,this.adm.makeConfig());
 
  }
  public getProductWiseAttachments()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcMasters/GetProductWiseAttachments",u,this.adm.makeConfig());
  }
  public setProductWiseAttachments(rec:number,attachment:any,ingredients:any[],equipment:any[],designations:any[])
  {
    var tot:any={
      productId:rec,
      attachment:attachment,
      ingredients:ingredients,
      equipment:equipment,
      designations:designations,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcMasters/SetProductWiseAttachments",tot,this.adm.makeConfig());
 
  }
}
