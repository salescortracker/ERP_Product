import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';


@Injectable({
  providedIn: 'root'
})
export class PurPurchaseEnquiryService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getPurchaseEnquiryRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/GetPurchaseEnquiryRequirements",u,this.adm.makeConfig());
  }

  public getPurchaseEnquiries(fromdate:string,todate:string)
  {
      var inf:any={
        frmDate:fromdate,
        toDate:todate,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/GetPurchaseEnquiries",inf,this.adm.makeConfig());
  }

  public getPurchaseEnquiry(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/GetPurchaseEnquiry",inf,this.adm.makeConfig());
  }
  public setPurchaseEnquiry(header:any,supps:number[],lines:any[],notes:any[],tracheck)
  {
    debugger
      var tot:any={
        header:header,
        supps:supps,
        lines:lines,
        notes:notes.length > 0 ? notes:null,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      console.log('Complete',tot);
      return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/setPurchaseEnquiry",tot,this.adm.makeConfig());
 
  }
  
public printPurchaseEnquiry(rec:number)
{
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/PrintPurchaseEnquiry",inf,this.adm.makeConfig());
}
public mailPurchasesEnquiry(rec:number)
{
  var inf:any={
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/sendEnquiryMail",inf,this.adm.makeConfig());

}

public getPurchaseEnquiriesForApproval()
{
  return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/GetPurchaseEnquiriesForApprovals",this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());

}
public setPurchaseEnquiryForApproval(rec:number)
{
  var inf:any=
  {
    recordId:rec,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + "api/PurchaseEnquiries/SetPurchaseEnquiryForApprovals",inf,this.adm.makeConfig());
}

}
