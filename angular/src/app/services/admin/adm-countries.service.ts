import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class AdmCountriesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getAdmTotalCountries()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/countries/GetTotalCountries',this.userdetails.usr,this.adm.makeConfig());

  }
  public getAdmActiveCountries()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/countries/GetActiveCountries',this.userdetails.usr,this.adm.makeConfig());

  }
  public setAdmCountry(cnt:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      country:cnt,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    console.log('country',tot);
    return this.http.post(this.adm.getActualURL() + 'api/countries/SetCountry',tot,this.adm.makeConfig());

  }

  public getTotalStates()
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/countries/GetTotalStates',this.userdetails.usr,this.adm.makeConfig());

  }
  public setState(stat:any,tracheck:number)
  {
   
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      stat:stat,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/countries/SetState',tot,this.adm.makeConfig());

  }
  public updateState(rec:number,stat:string)
  {
    var inf:any={
      recordId:rec,
      detail:stat,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/countries/UpdateState',inf,this.adm.makeConfig());

  }
  public deleteState(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/countries/DeleteState',inf,this.adm.makeConfig());

  }


  public getTaxes()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/taxes/GetTaxes',this.userdetails.usr,this.adm.makeConfig());

  }
  public setTax(obj:any)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      tax:obj,
       usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/taxes/setTax',tot,this.adm.makeConfig());

  }


  public getAdmTargets()
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/AdminTargets/GetTargets',this.userdetails.usr,this.adm.makeConfig());

  }
  public setAdmTarget(obj:any[])
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      targets:obj,
       usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/AdminTargets/setAdmTargets',tot,this.adm.makeConfig());

  }


  public getActivityLog()
  {
   var usr =this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/AdminTargets/getActivitiesListUserWise',usr,this.adm.makeConfig());

  }


}
