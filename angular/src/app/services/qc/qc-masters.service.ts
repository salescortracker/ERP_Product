import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class QcMastersService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getQcTestings(det:string)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:det,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/QCMasters/GetQCTests",inf,this.adm.makeConfig());
  }
  public setQcTesting(test:any,tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      test:test,
      traCheck:tracheck,
      usr:u
    };
    return this.http.post(this.adm.getActualURL() + "api/QCMasters/SetQcTest",tot,this.adm.makeConfig());

  }
}
