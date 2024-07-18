import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalSalesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getSalesequirements():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/Sales/GetSaleRequirements",u,this.adm.makeConfig());
  }
  public getSales(frmdate:string)
  {
    var inf:any={
      frmDate:frmdate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/Sales/GetSales",inf,this.adm.makeConfig());

  }

  public setSale(header:any,lines:any[],taxes:any[],tracheck:number)
  {
      var tot:any={
        header:header,
        lines:lines,
        taxes:taxes,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      console.log('tot',tot);
      return this.http.post(this.adm.getActualURL() + "api/Sales/SetSale",tot,this.adm.makeConfig());

  }
}
