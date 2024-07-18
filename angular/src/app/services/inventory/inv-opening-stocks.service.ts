import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvOpeningStocksService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http:HttpClient) { }
  public getInvOpeningStocks()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/getInvOpeningStocks',this.userdetails.usr,this.adm.makeConfig());

  }
  public setInvOpeningStocks(obj:any)
  {
    let tot:any={
      stock:obj,
      usr:this.adm.getUserCompleteInformation().usr
    }
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/setOpeningStock', tot,this.adm.makeConfig());

  }


  public setInvOpeningBlanks(obj:any[])
  {
      var tots:any={
          list:obj,
          usr:this.adm.getUserCompleteInformation().usr
      };
      return this.http.post(this.adm.getActualURL() + 'api/invOpening/setOpeningBlanks', tots,this.adm.makeConfig());

  }
  public blanksClosingStocks(dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      frmDate:dat,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/blanksClosingStocks',tot,this.adm.makeConfig());
  }
  public blanksConsumptions(frmdate:String,todate:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      frmDate:frmdate,
      toDate:todate,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/blanksConsumptionDetails',inf,this.adm.makeConfig());
 

    
  }
}
