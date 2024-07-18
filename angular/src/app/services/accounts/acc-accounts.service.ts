import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccAccountsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAccounts()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetAccounts',this.userdetails.usr);

  }
  
  public setAccount(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var details:any={
      acc:obj,
      tracheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/setAccount',details,this.adm.makeConfig());
  }
  public getTreeWiseAccounts(str:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:str,
      usr:usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/accAccountGroups/GetAccountTypeWiseTreeView',inf,this.adm.makeConfig());
  }

  public getAccountsTypeWise(str:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:str,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetAccountsTypeWise',inf,this.adm.makeConfig())
    
  }

  public getPartyDetails()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/accParty/GetFinPartyDetails',usr,this.adm.makeConfig())
  }
  public getCompleteAssetsandLiabilities()
  {
   var usr=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/accAccounts/GetTotalAssetsandLiabilitiesAccounts',usr,this.adm.makeConfig())
  }

  public setPartyDetails(party:any,typ:String):any
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      party:party,
      actype:typ,
      usr:usr
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/accParty/SetFinPartyDetails',tot,this.adm.makeConfig())
  }

  public getAccountsForTransactions()
  {
       var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/accCompleteInformation',usr,this.adm.makeConfig())
  }

  public getBlankSuppliers()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankSuppliers',usr,this.adm.makeConfig())

    
  }

  public getAccountsForTransfers()
  {
       var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/accTransactionAccInformation',usr,this.adm.makeConfig())
  }


  public getPartiesForTransactions(str:string)
  {
    var inf:any={
      detail:str,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accAccounts/finPartyDetailsForTransactions',inf,this.adm.makeConfig())
  }


  public getAccountDetailsForAssignForPurchases()
  {
var usr=this.adm.getUserCompleteInformation().usr;
return this.http.post(this.adm.getActualURL() + 'api/accountsassign/GetAccountsAssignDetailsPurchases',usr,this.adm.makeConfig())


  }
  public setAccountDetailsForAssign(obj:any[])
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      list:obj,
      usr:usr
    }

return this.http.post(this.adm.getActualURL() + 'api/accountsassign/SetAccountsAssignDetails',tot,this.adm.makeConfig())

  }



}
