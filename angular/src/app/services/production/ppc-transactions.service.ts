import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class PpcTransactionsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPPCMassPlanningRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcTransactions/GetMassPlanningRequirements",u,this.adm.makeConfig());
  }
  public getPendingSaleOrdersTobePlanned()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcTransactions/GetPendingSOToBePlanned",u,this.adm.makeConfig());
  }
  public getItemsRequireedForMassPlanning(lst:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
lst:lst,
usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcTransactions/PPCItemsRequiredForMassPlanning",tot,this.adm.makeConfig());
  }
  public setPPCMassPlanning(header:any,lines:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      header:header,
      lines:lines,
    usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcTransactions/SetMassPlanning",tot,this.adm.makeConfig());
  }
  public deletePPCMassPlanning(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcTransactions/DeleteMassPlanning",inf,this.adm.makeConfig());
  }

  public getPendingProcesses()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcProduction/ppcShowPendingProcesses",u,this.adm.makeConfig());

  }
  public getProductionProcesses(fromdate:string,todate:string)
  {
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcProduction/getTodaysProductionDetails",inf,this.adm.makeConfig());

  }
  public getProductionProcessDetail(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcProduction/getTodaysProductionDetail",inf,this.adm.makeConfig());

  }
  public setProductionProcess(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcProduction/SetProductionProcess",tot,this.adm.makeConfig());

  }
}
