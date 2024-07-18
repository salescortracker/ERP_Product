import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HrdDesignationsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getHRDDesignations()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/HRDDesignations/GetHRDDesignations',this.userdetails.usr,this.adm.makeConfig());
  }
  public getHRDDesignation(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/HRDDesignations/GetHRDDesignation',inf,this.adm.makeConfig());
  }
  public setHRDDesignation(designation:any, allowances:any[],leaves:any,tracheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
     var tot:any={
      designation:designation,
      desigallowances:allowances,
      leaves:leaves,
      traCheck:tracheck,
      usr:usr
     }
     console.log(tot);
     return this.http.post(this.adm.getActualURL() + 'api/HRDDesignations/setHRDDesignation',tot,this.adm.makeConfig());

  }
}
