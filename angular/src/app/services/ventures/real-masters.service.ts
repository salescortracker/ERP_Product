import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
 

@Injectable({
  providedIn: 'root'
})
export class RealMastersService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getLevelWiseCommissions()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/AdminMasters/GetLevelWiseCommissions",u,this.adm.makeConfig());
  }
  public setLevelWiseCommissions(levels:any[])
  {
    var tot:any={
      lst:levels,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminMasters/SetLevelWiseCommissions",tot,this.adm.makeConfig());
 
  }
  public getPackages()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/AdminMasters/GetPackages",u,this.adm.makeConfig());
  }
  public setPackage(pack:any,tracheck:number)
  {
    var tot:any={
      pack:pack,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminMasters/SetPackage",tot,this.adm.makeConfig());
 
  }

  public getLeveSpecialBonuses(fromdate:string,todate:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/GetLevelSpecialBonuses",inf,this.adm.makeConfig());
  }
  public getLeveSpecialBonus(rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      RecordId:rec,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/GetLevelSpecialBonus",inf,this.adm.makeConfig());
  }
  public setLeveSpecialBonus(header:any,lines:any[],tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/SetLevelSpecialBonus",tot,this.adm.makeConfig());
 
  }
  public getLevelAgents()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/GetLevelAgents",u,this.adm.makeConfig());

  }
  public getLevelAgentsDetailed ()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/GetLevelAgentsDetailed",u,this.adm.makeConfig());

  }
  public setLevelAgent(agent:any,tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      agent:agent,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactions/SetLevelAgent",tot,this.adm.makeConfig());

  }

  public getHolidays(rec:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsTwo/GetHolidays",inf,this.adm.makeConfig());
 
  }
  public setHoliday(day:any,tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
       var tot:any={
      day:day,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsTwo/SetHoliday",tot,this.adm.makeConfig());

  }
public getTopUpPackages(fromdate:string,todate:string)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsTwo/GetPackageTopups",inf,this.adm.makeConfig());

}
public setTopUpPackage(pack:any)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var tot:any={
    pack:pack,
    usr:u
  }
  return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsTwo/setPackageTopup",tot,this.adm.makeConfig());
}
public deleteTopUpPackage(rec:number)
{
  return this.http.delete(this.adm.getActualURL() + "api/AdminTransactionsTwo/deletePackageTopup?rec=" + rec,this.adm.makeConfig());
}
public printTopUpPackage(rec:number)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    recordId:rec,
    usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminLevelPrints/printInvestmentVoucher",inf,this.adm.makeConfig());

}

public getAgentRequestRequirements()
{
  var u=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsThree/GetLevelAgentRequestRequirements",u,this.adm.makeConfig());

}

public setAgentRequest(tot:any)
{
  var u=this.adm.getUserCompleteInformation().usr;
  tot.Customercode=u.cCode;
  return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsThree/SetLevelAgentRequest",tot,this.adm.makeConfig());

}

public getAgentPaymentRequirements()
{
return this.http.get(this.adm.getActualURL() + "api/AdminTransactionsThree/GetAgentPaymentRequirements",this.adm.makeConfig());
}
public setAgentPayment(tot:any)
{
  return this.http.post(this.adm.getActualURL() + "api/AdminTransactionsThree/SetLevelAgentPayment",tot,this.adm.makeConfig());

}

public agentDashBoard()
{
  var u=this.adm.getUserCompleteInformation().usr.uCode;
  return this.http.get(this.adm.getActualURL() + "api/LevelMgtDashboards/GetAgentDashboardInfo?agentid="+u,this.adm.makeConfig());

}
public adminDashBoard()
{
  return this.http.get(this.adm.getActualURL() + "api/LevelMgtDashboards/GetAdminDashboardInfo",this.adm.makeConfig());

}

public getPayments(fromdate:string,todate:string)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminLevelReports/GetAdminPayments",inf,this.adm.makeConfig());

}

public getPaymentCutoffReport(fromdate:string)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
     usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminLevelReports/GetAdminPaymentCutoffReport",inf,this.adm.makeConfig());

}

public getReceipts(fromdate:string,todate:string)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminLevelReports/GetAdminReceipts",inf,this.adm.makeConfig());

}

public getInvestments(fromdate:string,todate:string)
{
  var u=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:fromdate,
    toDate:todate,
    usr:u
  };
  return this.http.post(this.adm.getActualURL() + "api/AdminLevelReports/GetInvestments",inf,this.adm.makeConfig());

}


public getPaymentCutOff()
{
  return this.http.get(this.adm.getActualURL() + "api/PaymentCutOff/GetPaymentCutoffRequirements",this.adm.makeConfig());
} 
public setPaymentCutOff(list:any[])
{
  return this.http.post(this.adm.getActualURL() + "api/PaymentCutOff/SetPaymentCutOff",list,this.adm.makeConfig());
}
  
}
