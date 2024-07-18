import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class ResServicesService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  
  public getResServices()
  {
   
     var usr=this.adm.getUserCompleteInformation().usr
     
    return this.http.post(this.adm.getActualURL() + 'api/ResServices/GetResServices',usr,this.adm.makeConfig());
  }
  public setReservices(servi:any,tracheck:number)
  {
      var tot:any={
        service:servi,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + 'api/ResServices/setResServices',tot,this.adm.makeConfig());
 
  }
}
