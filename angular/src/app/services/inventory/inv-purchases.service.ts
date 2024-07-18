import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvPurchasesService {

  userdetails:UserCompleteInfo=null;
  
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient)
  {
    
  }

  public GetInvPurchaseBlankRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetPurchaseBlanksRequirements',usr,this.adm.makeConfig());
  }
  public getBlankPurchases(dat1:String,dat2:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankPurchases',inf,this.adm.makeConfig());

  }
  public GetBlankPurchase(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankPurchaseDetails',inf,this.adm.makeConfig());

  }

  public setBlankPurchase(header:any,lines:any[],taxes:any,tracheck:number)
  {

    
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      header:header,
      lines1:lines,
     taxes:taxes,
      tracheck:tracheck,
      usr:this.userdetails.usr
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/SetBlankPurchase',tot,this.adm.makeConfig());

  }

  public getPurchaseCreditNote(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/getCreditNotes',inf,this.adm.makeConfig());
  }
  public setPurchaseCreditNote(obj:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      note:obj,
      tracheck:tracheck,
      usr:this.userdetails.usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/setCreditNote',tot,this.adm.makeConfig());
  }

  public setSupplierPending(obj:any[])
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      payments:obj,
 
      usr:this.userdetails.usr
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/setSupplierPayment',tot,this.adm.makeConfig());
  }

}
