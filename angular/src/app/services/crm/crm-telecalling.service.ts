import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmTelecallingService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public gerCompleteEnquiryRxRequirements()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxEnquiryRequirements',this.userdetails.usr,this.adm.makeConfig());
  }
  public gerCompleteTeleCallRxRequirements()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxTelecallRequirements',this.userdetails.usr,this.adm.makeConfig());
  }
  
  public getListOfTeleCalls(frmdat:String,todat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:frmdat,
      toDate:todat,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxTelecalls',inf,this.adm.makeConfig());

  }
  public getListOfRXEnquiries(frmdat:String,todat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:frmdat,
      toDate:todat,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxEnquiries',inf,this.adm.makeConfig());

  }
  public getListOfRXOrders(frmdat:String,todat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:frmdat,
      toDate:todat,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxOrders',inf,this.adm.makeConfig());

  }
  public getTeleCallDetailById(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any=
    {
      recordId:rec,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxTelecallById',inf,this.adm.makeConfig());

  }
  public setTeleCall(obj:any,tracheck:number)
  {
    var tot:any={
      call:obj,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
   console.log('tot',tot);
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/SetCRMRXTeleCall',tot,this.adm.makeConfig());

  }

public setEnquiryRX(obj:any,tracheck:number)
{
  var tot:any={
    call:obj,
    traCheck:tracheck,
    usr:this.adm.getUserCompleteInformation().usr
  };
 console.log(tot);
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/SetCRMRXEnquiry',tot,this.adm.makeConfig());

  
}


public getQuotationRXRequirements()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxQuotationsRequirements',this.userdetails.usr,this.adm.makeConfig());

}
public setQuotation(tot:any)
{
   
  return this.http.post(this.adm.getActualURL() + 'api/CRMRx/SetCRMRxQuotation',tot,this.adm.makeConfig());

}
  
}
