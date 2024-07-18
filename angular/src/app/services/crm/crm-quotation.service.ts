import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrmQuotationService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getCRMQuotationRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/GetSaleQuotationRequirements',usr,this.adm.makeConfig());
   }
   public getCRMQuotations(frmdate:string,todate:string)
   {
     this.userdetails=this.adm.getUserCompleteInformation();
     var inf:any=
     {
       frmDate:frmdate,
       toDate:todate,
       usr:this.userdetails.usr
     };
     return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/GetCRMQuotations',inf,this.adm.makeConfig());
   }
   public getCRMQuotation(rec:number)
   {
     this.userdetails=this.adm.getUserCompleteInformation();
     var inf:any=
     {
      recordId:rec,
       usr:this.userdetails.usr
     };
     return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/GetCRMQuotation',inf,this.adm.makeConfig());
   }
   public setCRMQuotation(header:any,lines:any[],terms:any[],taxes:any[],tracheck:number)
   {
    var tot:any={
      header:header,
      lines:lines,
      terms:terms,
      taxes:taxes,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/setCRMQuotation',tot,this.adm.makeConfig());
  
    
   }

   public getCRMQuotationsForApproval()
   {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/GetCRMQuotationsForApprovals',usr,this.adm.makeConfig());
   }
   public setCRMQuotationForApproval(rec:number)
   {
      var inf:any={
        recordId:rec,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/SetCRMQuotationForApproval',inf,this.adm.makeConfig());
   }
   public printQuotation(rec:number)
   {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMQuotations/PrintSaleQuotation',inf,this.adm.makeConfig());

    
   }
}
