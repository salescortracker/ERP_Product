import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrmOrdersRxService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getRXOrders(frmdate,todate)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any=
    {
      frmDate:frmdate,
      toDate:todate,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMRx/GetCRMRxOrders',inf,this.adm.makeConfig());
  }
  public getCustomerWiseAnalysis(frmdate,todate)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any=
    {
      frmDate:frmdate,
      toDate:todate,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/CRMRepAnalysis/GetCRMCustomerWiseBusinessInfo',inf,this.adm.makeConfig());
  }

}
