import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosKotGroupsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getKOTGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/poskotgroups/GetResKOTGroups',u,this.adm.makeConfig());
      
  }
  public getKOTGroupWiseGroups(detail:String):any
  {
    
    var u=this.adm.getUserCompleteInformation().usr;
    var obj:any={
      detail:detail,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + 'api/poskotgroups/GetResKOTGroupDetails',obj,this.adm.makeConfig());
      
  }
  public getKOTPendingGroups():any
  {
    
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/poskotgroups/POSResKOTPendingGroups',u,this.adm.makeConfig());
      
  }
  public setKOTGroup(kotgrpname:String,grps:number[],tracheck:number):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var obj:any={
      kotgrp:kotgrpname,
      grps:grps,
      tracheck:tracheck,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + 'api/poskotgroups/setPOSKOTGroups',obj,this.adm.makeConfig());
      
  }
}
