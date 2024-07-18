import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class AgentReportsService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  
  public getMyTreeView()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    
    return this.http.post(this.adm.getActualURL() + "api/LevelMgtDashboards/GetAgentMyTeamTree",u,this.adm.makeConfig());
  }
  public getAgentTreeViewComplete(agentid:string)
  {
    return this.http.get(this.adm.getActualURL() + "api/LevelMgtDashboards/GetAgentTeamTreeBusiness?agentid="+agentid,this.adm.makeConfig());
  }
  public getMyCompleteReceipts(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:u.uCode,
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/AdminLevelReports/GetMyCompleteReceipts",inf,this.adm.makeConfig());
 
  
  }
  public getAgentCompleteInfo()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.get(this.adm.getActualURL() + "api/UserLevelReports/GetUserCompleteInfo?user="+u.uCode,this.adm.makeConfig());
  }
  public getUserReceipts(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
       frmDate:fromdate,
      toDate:todate,
      usr:u
    };
    console.log('inf',inf);
    return this.http.post(this.adm.getActualURL() + "api/UserLevelReports/GetUserWiseReceipts",inf,this.adm.makeConfig());
 
  
  }
}
