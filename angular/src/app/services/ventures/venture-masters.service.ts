import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import { fromJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
 

@Injectable({
  providedIn: 'root'
})
export class VentureMastersService {
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAgentCompleteInfo()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.get(this.adm.getActualURL() + "api/AdminLevelReports/GetAdminCompleteInfo?agentid=" + u.uCode,this.adm.makeConfig());
  }
  public getVentureRequirements()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/VentureMasters/GetVentureRequirements",u,this.adm.makeConfig());
  }
  public getVentureMasters()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/VentureMasters/GetVentureMasters",u,this.adm.makeConfig());
  }
  public setVentureMaster(venture:any,tracheck:number)
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      venture:venture,
      traCheck:tracheck,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/VentureMasters/SetVentureMaster",tot,this.adm.makeConfig());
  }
  public getVentureCategories()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/VentureCategories/GetVentureCategories",u,this.adm.makeConfig());
  }
  public setVentureCategory(categ:any,imgs:any[],tracheck:number)
  {
      var tot:any={
        categ:categ,
        imgs:imgs,
        traCheck:tracheck,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + "api/VentureCategories/SetVentureCategory",tot,this.adm.makeConfig());
 
  }
public getVentrueCompleteDetailsRequirements()
{
  var u=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + "api/VentureCompleteDetails/VentureCompleteDetailsRequirements",u,this.adm.makeConfig());

}
  public getVentureCompleteDetails()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/VentureCompleteDetails/GetVenCompleteDetails",u,this.adm.makeConfig());
  
  }
  public setVentrueCompleteDetail(plot:any,tracheck:number)
  {
    var tot:any={
    plot:plot,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/VentureCompleteDetails/SetVentureCompleteDetail",tot,this.adm.makeConfig());
  }
  
}
