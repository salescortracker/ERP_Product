import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class PpcBatchPlanningService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPPCBatchPlans(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcBatchPlanning/GetPPCBatchPlans",inf,this.adm.makeConfig());
  }
  public getPPCBatchPlan(rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
        usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcBatchPlanning/GetPPCBatchPlan",inf,this.adm.makeConfig());
  }
  public getPPCBatchRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcBatchPlanning/GetPPCBatchRequirements",u,this.adm.makeConfig());

  }
  public setPPCBatchPlan(header:any,processes:any[],employees:any[],orders:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      processes:processes,
      employees:employees,
      orders:orders,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    console.log('total batch info',tot);
    return this.http.post(this.adm.getActualURL() + "api/ppcBatchPlanning/SetPPCBatchPlanning",tot,this.adm.makeConfig());

  }
}
