import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ToolResService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getBillsForDeletion(frmdate:string,todate:string):any
  {
    var inf:any={
      frmDate:frmdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/POSTool/GetPOSBillsListForDeletion",inf,this.adm.makeConfig());
   }

   public setBillsDeletion(bills:number[],seq:string,billno:number)
   {
    var tot:any={
billnos:bills,
seq:seq,
billno:billno,
usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + "api/POSTool/setPOSBillDeletion",tot,this.adm.makeConfig());
 
   }
 
}
