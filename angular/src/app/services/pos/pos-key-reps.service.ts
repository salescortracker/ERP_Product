import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosKeyRepsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPOSItemGroups():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/POSKeyRep/GetResKeyRepItemGroups",u);
  }
  public getPOSItems():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/POSKeyRep/GetResKeyRepItemDetails",u);
  }
  public getPOSOutlets():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/POSKeyRep/GetResKeyRepOutletDetails",u);
  }
  public getPOSMenuDetails(rCode:String):any
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var inf:any={
detail:rCode,
usr:u
    };
      return this.http.post(this.adm.getActualURL() + "api/POSKeyRep/GetResRepMenuDetails",inf);
  }

  public getSettlementInformation(frmdat:any,todat:any)
  {
    var dat1=this.adm.strDate(frmdat);
    var dat2=this.adm.strDate(todat);

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    console.log('inf',inf);
    return this.http.post(this.adm.getActualURL() + 'api/posDayReps/getSettlements',inf,this.adm.makeConfig());
  }

  public getSaleInfoAdmin(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSales',inf,this.adm.makeConfig());
  }

  public setPOSBillReprint(rec:number) 
  {
    
    var inf:any=
    {
      recordId:rec,
       
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/resRePrint',inf,this.adm.makeConfig());
  }


  public getDayStatus(dat :any)
  {
    var dat1= this.adm.stringData(this.adm.makePresentDate(dat));
    
    
    var inf:any=
    {
      frmDate:dat1,
       
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/GetDayStautsPOS',inf,this.adm.makeConfig());
    
  }
  public getPendingTableInfo()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/pos/IPosPendingTableInfo',usr,this.adm.makeConfig());
  }


}
