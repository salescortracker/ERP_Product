import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PartyTransactionsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public printPartyAdvance(obj:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      advance:obj,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/purSetup/PrintAdvanceInfo',tot,this.adm.makeConfig());
  }
public getAdvancesById(rec:number,typ:string)
{
  this.userdetails=this.adm.getUserCompleteInformation();
  var inf:any={
    recordId:rec,
    detail:typ,
    usr:this.userdetails.usr
  };
  return this.http.post(this.adm.getActualURL() + 'api/purSetup/GetTotalAdvanceDetails',inf,this.adm.makeConfig());

}

  

}