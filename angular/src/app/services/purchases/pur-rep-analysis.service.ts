import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurRepAnalysisService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAnalysisPriceComparison(fdate1:string,tdate1:string,fdate2:string,tdate2:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      fromdate1:fdate1,
      todate1:tdate1,
      fromdate2:fdate2,
      todate2:tdate2,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepAnalysis/PurAnalysisPriceComparison",inf,this.adm.makeConfig());
  }
  public getAnalysisPriceComparisonWithStdPrice(fromdate:string,todate:string):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:fromdate,
      toDate:todate,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepAnalysis/PurAnalysisPriceWithStandard",inf,this.adm.makeConfig());
  
  }
  public getReplinishment1(prevdays:number,nextdays:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      previousdays:prevdays,
      nextdatys:nextdays,
      usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/PurRepAnalysis/PurAnalysisReplinishment1",inf,this.adm.makeConfig());
  
  }
  public getReplinishment2()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/PurRepAnalysis/PurAnalysisReplinishment2",u,this.adm.makeConfig());
  }
}
