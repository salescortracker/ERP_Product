import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class PpcReportsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

public getPPCDashboard()
{
  var u=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + "api/ProductionDashboard/getProductionDashBoardDetails",u,this.adm.makeConfig());
}

  public getPPCRepMassPlanningStatus()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcReports/ppcRepMassAchievements",u,this.adm.makeConfig());
  }
  public getPPCRepMaterialRequirement()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcReports/ppcRepMaterialRequirements",u,this.adm.makeConfig());
  }
  public getPPCRunningBatchCompleteDetails()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcReports/ppcRepRunningBatchInfo",u,this.adm.makeConfig());
  
  }
  public getPPCRunningBatchMaterialDetails()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/ppcReports/ppcRepRunningBatchMaterialDetails",u,this.adm.makeConfig());
  
  }
  public getPPCMaterialWastages(fromdate:string,todate:string)
  {
    
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/ppcReports/ppcRepMaterialWastageDetails",inf,this.adm.makeConfig());
  }
}
