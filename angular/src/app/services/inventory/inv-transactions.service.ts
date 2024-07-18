import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvTransactionsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInvLossesTraRequirements(rec):any
  {

    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    }
      return this.http.post(this.adm.getActualURL() + "api/invLossesTra/GetInvLossesTraRequirements",inf,this.adm.makeConfig());
  }


  public getInvTransactions(fromdate:string,detail:string)
  {
      var inf:any=
      {
        frmDate:fromdate,
        detail:detail,
        usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + "api/invLossesTra/GetInvTransactions",inf,this.adm.makeConfig());

  }
  public getInvTransaction(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/invLossesTra/GetInvTransaction",inf,this.adm.makeConfig());

  }
  public setInvTransaction(header:any,lines:any[],mgts:any[])
  {
    var tot:any={
header:header,
lines:lines,
mgts:mgts,
usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/invLossesTra/SetInvTransaction",tot,this.adm.makeConfig());

  }
  public deleteInvTransaction(rec:number,typ:string)
  {
    var inf:any={
      recordId:rec,
      detail:typ,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/invLossesTra/DeleteInvTransaction",inf,this.adm.makeConfig());

  }
}
