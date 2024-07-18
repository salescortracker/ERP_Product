import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccTransactionsService {

  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getListOfTransactions(Str:String,dat:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:Str,
      frmDate:dat,
      usr:this.userdetails.usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/accTransactions/getTransactionsList',inf,this.adm.makeConfig());

  }


  public getTransactionInformation(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
     
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accTransactions/getTransactionDetail',inf,this.adm.makeConfig());
  }


  public setTransaction(header:any,lines:any[],tracheck:number):any
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var obj:any={
      header:header,
      lines:lines,
      tracheck:tracheck,
      usr:this.userdetails.usr
    }
    console.log('tot',obj);
    return this.http.post(this.adm.getActualURL() + 'api/accTransactions/setTransaction',obj,this.adm.makeConfig());
  }

  public printVoucher(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
     
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accTransactions/accPrintVoucher',inf,this.adm.makeConfig());
  }

}
