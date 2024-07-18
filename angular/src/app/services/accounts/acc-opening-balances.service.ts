import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccOpeningBalancesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getAccountOpeningBalances()
  {
  var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/accOpenings/GetOpeningBalances',usr,this.adm.makeConfig());
  }

  public setAccountOpeningBalances(accdet:any[])
  {
  var usr=this.adm.getUserCompleteInformation().usr;
  var obj:any={
    accdet:accdet,
    usr:usr
  }
    return this.http.post(this.adm.getActualURL() + 'api/accOpenings/setOpeningBalances',obj,this.adm.makeConfig());
  }




}
