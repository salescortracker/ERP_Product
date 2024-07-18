import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class MaiEquipKeyReportsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getKeyRepEquipmentGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/MaiEquipKeyReports/GetKeyRepMaiEquipmentGroups",u,this.adm.makeConfig());
  }
  public getKeyRepEquipmentDetails():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/MaiEquipKeyReports/GetKeyRepMaiEquipmentDetails",u,this.adm.makeConfig());
  }
}
