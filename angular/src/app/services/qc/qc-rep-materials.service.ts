import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class QcRepMaterialsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPendingMIRForQC():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
   
      return this.http.post(this.adm.getActualURL() + "api/QCMIRReports/QCMIRRepPendings",u,this.adm.makeConfig());
  }
  public getQCMaterialResults(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/QCMIRReports/QCMIRRepTestDetails",inf,this.adm.makeConfig());
  }
  public getQCSupplierRanking(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/QCMIRReports/QCMIRRepSupplierRanking",inf,this.adm.makeConfig());
  }
}
