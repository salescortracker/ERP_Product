import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class ResTablesNWaitersService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  
  public getTables()
  {
     var usr=this.adm.getUserCompleteInformation().usr
    return this.http.post(this.adm.getActualURL() + 'api/POSTablesnWaiters/getResTables',usr,this.adm.makeConfig());
  }
  public setTable(tab:any,traCheck:number)
  {

     var usr=this.adm.getUserCompleteInformation().usr
     var tot:any={
       tab:tab,
       usr:usr,
       traCheck:traCheck
     }
    return this.http.post(this.adm.getActualURL() + 'api/POSTablesnWaiters/setResTable',tot,this.adm.makeConfig());
  }
  public getWaiters()
  {
    var usr=this.adm.getUserCompleteInformation().usr
    return this.http.post(this.adm.getActualURL() + 'api/POSTablesnWaiters/getPOSWaiters',usr,this.adm.makeConfig());
   }
   public setWaiter(waiter:any,tracheck:number)
   {
      var tot:any={
        waiter:waiter,
        tracheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + 'api/POSTablesnWaiters/setPOSWaiter',tot,this.adm.makeConfig());

   }
}
