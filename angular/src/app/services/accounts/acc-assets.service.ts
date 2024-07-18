import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccAssetsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAssets()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/accAssets/GetAssets',this.userdetails.usr,this.adm.makeConfig());

  }

  public setAsset(asset:any,tracheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      asset:asset,
      usr:usr,
      traCheck:tracheck

    }
    
    return this.http.post(this.adm.getActualURL() + 'api/accAssets/SetAsset',tot,this.adm.makeConfig());
  }

}
