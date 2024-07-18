import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvUMService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInvUms():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    
      return this.http.post(this.adm.getActualURL() + "api/inventory/GetInventoryUnits",u);
  }

  public setInvUm(obj:any,tracheck:number)
  {
    var det:any={
      um:obj,
      usr:this.adm.getUserCompleteInformation().usr,
      traCheck:tracheck
    }
     
    return this.http.post(this.adm.getActualURL() + "api/inventory/SetInventoryUnits",det);

  }
}
