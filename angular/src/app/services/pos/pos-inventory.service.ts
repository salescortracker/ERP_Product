import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PosInventoryService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  
  public getKitchens():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/POSInventory/GetResKitchens",u,this.adm.makeConfig());
  }

  public setKitchen(kitchen:any,tracheck:number)
  {
    var tot:any={
      kitchen:kitchen,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/setResKitchen",tot,this.adm.makeConfig());

  }
  public getFNBServices()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/GetResFNBServices",u,this.adm.makeConfig());
  }
  public setFNBService(fnbservice:any,tracheck:number)
  {
    var tot:any={
      fnbservice:fnbservice,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/setResFNBServices",tot,this.adm.makeConfig());

  }

  public getKitchenWiseResta()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/GetResKitchenWiseResta",u,this.adm.makeConfig());
 
  }
  public setKitchenWiseResta(details:any[])
  {
      var tot:any={
        details:details,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + "api/POSInventory/setResKitchenWiseResta",tot,this.adm.makeConfig());

  }
  public getFNBServiceWiseResta()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/GetResFNBServiceWiseResta",u,this.adm.makeConfig());
 
  }
  public setFNBServiceWiseResta(details:any[])
  {
      var tot:any={
        details:details,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + "api/POSInventory/setResFNBServiceWiseResta",tot,this.adm.makeConfig());

  }
  public getDepartmentWiseItems()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/getDepartmentWiseItems",u,this.adm.makeConfig());
 
  }
  public setDepartmentWiseItems(details:any[])
  {
      var tot:any={
        details:details,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + "api/POSInventory/setDepartmentWiseItems",tot,this.adm.makeConfig());
  }
  public getItemWiseIngredients()
  {
    var u=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + "api/POSInventory/GetItemWiseIngredients",u,this.adm.makeConfig());
 
  }
  public setItemWiseIngredients(details:any[])
  {
      var tot:any={
        details:details,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + "api/POSInventory/SetItemWiseIngredients",tot,this.adm.makeConfig());
  }
  
}
