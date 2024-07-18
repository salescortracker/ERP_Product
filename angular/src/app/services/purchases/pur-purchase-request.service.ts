import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
 

@Injectable({
  providedIn: 'root'
})
export class PurPurchaseRequestService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPurchaseRequestRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequestRequirements",u,this.adm.makeConfig());
  }
  public getPurchaseRequests(frmdate:any,todate:any):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:frmdate,
      toDate:todate,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequests",inf,this.adm.makeConfig());
  }
  public getPendingPurchaseRequests()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPendingRequests",u,this.adm.makeConfig());
  }

public getPurchaseRequest(rec:number):any{
  var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequest",inf,this.adm.makeConfig());
}

public setPurchaseRequest(header:any,lines:any[],tracheck:number)
{
  var u=this.adm.getUserCompleteInformation().usr;
  
  var tot:any={
    header:header,
    details:lines,
    tracheck:tracheck,
    usr:u
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/setPurchaseRequest",tot,this.adm.makeConfig());
}


public printPurchaseRequest(rec:number)
{
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/printPurchaseRequest",inf,this.adm.makeConfig());
}

public getPurhaseRequestsAudit(frmdate:string,todate:string)
{
  var inf:any={
    frmDate:frmdate,
    toDate:todate,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequestAudits",inf,this.adm.makeConfig());

}
public getPurchaseRequestTotalDetailByAudit(rec:number)
{
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequestAuditCompleteDetails",inf,this.adm.makeConfig());
}


public getPurchaseRequestDetailsForApproval(dept:number)
{
  var inf:any={
    recordId:dept,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/GetPurchaseRequestsForApproval",inf,this.adm.makeConfig());
}

public setPurchaseRequestApproval(lines:any[])
{
  var tot:any={
    lines:lines,
    usr:this.adm.getUserCompleteInformation().usr
  };
  return this.http.post(this.adm.getActualURL() + "api/PurchaseRequests/setPurchaseRequestApproval",tot,this.adm.makeConfig());

}


}
