import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartyDetailsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPartyDetails(partytype:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartyDetails',inf,this.adm.makeConfig());

  }
  public getPartyDetail(partytype:String,rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
      recordId:rec,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartyDetail',inf,this.adm.makeConfig());

  }
  public setPartyDetail(party:any,addresses:any[],departments:any[], traCheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      party:party,
      addresses:addresses,
      departments:departments,
      traCheck:traCheck,
      usr:this.userdetails.usr
    };
    console.log('supplier',tot);
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/SetPartyDetail',tot,this.adm.makeConfig());

  }

  public GetPartyOpeningBalances(partytype:string)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:partytype,
       usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetPartiesOpeningBalances',inf,this.adm.makeConfig());
  }
  public SetPartyOpeningBalances(supports:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      supports:supports,
       usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/SetPartiesOpeningBalances',tot,this.adm.makeConfig());
  }
public GetPartyCompleteDetails(partytype:string)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    detail:partytype,
     usr:this.userdetails.usr
  };
  
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetCompleteInfoForParty',inf,this.adm.makeConfig());

}

public GetSupplierCompletePendingBalances(rec:number)
{
  var inf:any={
      recordId:rec,
    usr:this.userdetails.usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetSupplierPendingBalancesDetails',inf,this.adm.makeConfig());

}
public GetCustomerCompletePendingBalances(rec:number)
{
  var inf:any={
      recordId:rec,
    usr:this.userdetails.usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/PartyDetails/GetCustomerPendingBalancesDetails',inf,this.adm.makeConfig());

}


}
