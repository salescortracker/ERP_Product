import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResItemGroupsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getResItemGroups()
  {
    var u=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/itemGroups/GetResItemGroups',u,this.adm.makeConfig());
  }


  public getResItemGroupsTreeView()
  {
    
    var u=this.adm.getUserCompleteInformation().usr;
   return this.http.post(this.adm.getActualURL() + 'api/itemGroups/GetResItemGroupTrees',u,this.adm.makeConfig());
  }
  public setResItemGroup(grp:any,tracheck:number)
  {
    var obj:any=
    {
      grp:grp,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/itemGroups/SetResItemGroups',obj,this.adm.makeConfig());
  }

  public setResItemGroupImage(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/itemGroups/setPOSGroupImage',obj,this.adm.makeConfig());
   }

}
