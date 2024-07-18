import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { RecursiveAstVisitor } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPurchasesRequirements():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/purPurchases/GetPurchaseRequirements",u,this.adm.makeConfig());
  }
  public getPurchases(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/purPurchases/GetPurchases",inf,this.adm.makeConfig());

  }
  public getPurchase(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/purPurchases/GetPurchase",inf,this.adm.makeConfig());

  }
  public setPurchase(header:any,lines:any[],taxes:any[],tracheck:number)
  {
      var tot:any={
        header:header,
        lines:lines,
        taxes:taxes,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      console.log('tot',tot);
      return this.http.post(this.adm.getActualURL() + "api/purPurchases/SetPurchase",tot,this.adm.makeConfig());

  }

  public getPurchaseReturnRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/GetPurchaseReturnRequirements",usr,this.adm.makeConfig());
  }
  public getPurchaseReturnPurchasesList(fromdate:string,todate:string)
  {
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/GetPurchases",inf,this.adm.makeConfig());

  }
  public getPurchaseReturnPurchaseInfo(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/GetPurchase",inf,this.adm.makeConfig());


  }
  public setPurchaseReturn(header:any,lines:any[],taxes:any[],tracheck:number)
  {
    var tot:any={
header:header,
lines:lines,
taxes:taxes,
traCheck:tracheck,
usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/SetPurchaseReturn",tot,this.adm.makeConfig());
  }
  public deletePurchaseReturn(recordid:number)
  {
    var inf:any={
      recordId:recordid,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/DeletePurchaseReturn",inf,this.adm.makeConfig());
 


  }
  public getPurchaseReturns(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/PurPurchaseReturn/GetPurchaseReturns",inf,this.adm.makeConfig());

  }
  public setPurchaseCreditNote(note:any)
  {
      var tot:any={
        note:note,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + "api/PurCreditNotes/SetCreditNote",tot,this.adm.makeConfig());

  }
  public getPurchaseCreditNotes(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PurCreditNotes/GetCreditNotes",inf,this.adm.makeConfig());

  }
  public deletePurchaseCreditNote(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/PurCreditNotes/DeleteCreditNote",inf,this.adm.makeConfig());
 
  }


  public getPayments(fromdate:string)
  {
    var inf:any={
      frmDate:fromdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PartyPayments/GetPayments",inf,this.adm.makeConfig());
  }
  public setPayment(header:any,lines:any[])
  {
      var tot:any={
        header:header,
        lines:lines,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + "api/PartyPayments/SetPartyPayment",tot,this.adm.makeConfig());

  }
  public deletePayment(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
      return this.http.post(this.adm.getActualURL() + "api/PartyPayments/DeletePartyPayment",inf,this.adm.makeConfig());

  }


}
