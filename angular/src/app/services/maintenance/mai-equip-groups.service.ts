import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class MaiEquipGroupsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getEquipmentGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/MaiEquipmentGroups/GetMaiEquiGroups",u,this.adm.makeConfig());
  }
  public getEquipmentGroupTreeView()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/MaiEquipmentGroups/GetEquipGroupTrees",u,this.adm.makeConfig());

  }
public setEquipmentGroup(grp:any,tracheck:number)
{
  
  var u=this.adm.getUserCompleteInformation().usr;
  var tot:any={
grp:grp,
traCheck:tracheck,
usr:u
  } ;
  return this.http.post(this.adm.getActualURL() + "api/MaiEquipmentGroups/SetEquipmentGroup",tot,this.adm.makeConfig());

}
 

}
