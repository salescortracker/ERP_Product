import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';

@Injectable({
  providedIn: 'root'
})
export class MaiEquipDetailsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getEquipmentDetails():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/MaiEqupment/GetMaiEquipmentDetails",u,this.adm.makeConfig());
  }
  public getEquipmentDetail(rec:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/MaiEqupment/GetMaiEquipmentDetail",inf,this.adm.makeConfig());
  }

public setEquipmentDetail(equip:any,specifications:any[],prevmaintenances:any[],traCheck:number)
{
  var tot:any={
equip:equip,
specifications:specifications,
prevmaintenances:prevmaintenances,
traCheck:traCheck,
usr:this.adm.getUserCompleteInformation().usr

  };
  return this.http.post(this.adm.getActualURL() + "api/MaiEqupment/SetMaiEquipmentDetail",tot,this.adm.makeConfig());

}

}
