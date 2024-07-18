import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';

@Injectable({
  providedIn: 'root'
})
export class BlaSamplesLossesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

public getBlankSampleInwards(frmdate:String)
{
  var usr=this.adm.getUserCompleteInformation().usr;
  var inf:any={
    frmDate:frmdate,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/blankSamplesLosses/GetBlankSampleInwardDetails',inf,this.adm.makeConfig());
 
}
public setBlankSampleInwards(items:any[],tracheck:number)
{
  var usr=this.adm.getUserCompleteInformation().usr;
  var tot:any={
    items:items,
    tracheck:tracheck,
    usr:usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/blankSamplesLosses/setBlankSampleInward',tot,this.adm.makeConfig());
 
}
}
