import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvStoresService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInvStores():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/invstore/GetInvStores",u,this.adm.makeConfig());
  }

  public setInvStore(obj:any,tracheck:number)
  {
    var det:any={
      store:obj,
      usr:this.adm.getUserCompleteInformation().usr,
      traCheck:tracheck
    }
    
    return this.http.post(this.adm.getActualURL() + "api/invstore/setInvStore",det,this.adm.makeConfig());

  }


  public getLosses():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/invlosses/getInvLosses",u,this.adm.makeConfig());
  }
  
  public setLosses(obj:any,tracheck:number)
  {
    var det:any={
      loss:obj,
      usr:this.adm.getUserCompleteInformation().usr,
      traCheck:tracheck
    }
    
    return this.http.post(this.adm.getActualURL() + "api/invlosses/setInvLoss",det,this.adm.makeConfig());

  }
}
