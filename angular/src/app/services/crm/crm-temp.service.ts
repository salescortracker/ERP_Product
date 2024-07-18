import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmTempService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getDayWiseOrders(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRxDummy/GetCRMRxDayWiseOrders',inf,this.adm.makeConfig());
  }

  public setDayWiseOrders(obj:any[])
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      orders:obj,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/CRMRxDummy/setCRMRxDummyDet',tot,this.adm.makeConfig());

  }


  public getClosedOrders(frmdate:String,todate:String)
  {
    
    var inf:any=
    {
      frmDate:frmdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    console.log(inf);
    return this.http.post(this.adm.getActualURL() + 'api/CRMRxDummy/getClosedOrders',inf,this.adm.makeConfig());
  }
}
