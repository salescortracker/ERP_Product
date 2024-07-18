import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccBRSService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getBankTransactions(fromdate:string,todate:string,rec:number)
  {
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AccBankReconciliation/getBankTransactions',inf,this.adm.makeConfig());

  }

  public setReconciliation(obj:any)
  {
    var tot:any=
    {
      check:obj,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/AccBankReconciliation/setReconciliation',tot,this.adm.makeConfig());
 }

}
