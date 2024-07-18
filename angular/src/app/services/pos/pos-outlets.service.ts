import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosOutletsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getOutlets():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/ResOutlets/GetResOutlets',u);
      
  }
  public setOutlet(outlet:any,tracheck:number):any
  {
    var obj:any=
    {
      outlet:outlet,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    console.log(obj,'outlettotal');
    return this.http.post(this.adm.getActualURL() + 'api/ResOutlets/setResOutlet',obj);

  }

  public getOutletSettings()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/ResOutlets/getResOutletSettings',u,this.adm.makeConfig());
  }

  public setOutletSettings(rescode:string,sets:any[])
  {
    var tot:any=
    {
      restaCode:rescode,
      setup:sets,
      usr:this.adm.getUserCompleteInformation().usr
    }
    console.log('tot',tot);
    return this.http.post(this.adm.getActualURL() + 'api/ResOutlets/setResOutletSettings',tot,this.adm.makeConfig());

  }

}
