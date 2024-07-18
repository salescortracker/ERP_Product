import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvMastersService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getInventoryGroups()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invgroups/GetInvItemGroups',this.userdetails.usr,this.adm.makeConfig());

  }
  public getInvGroupsTreeWise()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invgroups/GetInvGroupsTreeView',this.userdetails.usr,this.adm.makeConfig());
  }
  public setInventoryGroup(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var details:any={
      grp:obj,
      traCheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/invgroups/setInventoryGroup',details,this.adm.makeConfig());
  }

public getInventoryItems()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  return this.http.post(this.adm.getActualURL() + 'api/invmaterial/GetInvMaterials',this.userdetails.usr,this.adm.makeConfig());
}
public getInventoryProductsOnly()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  return this.http.post(this.adm.getActualURL() + 'api/invmaterial/GetInvProductsOnly',this.userdetails.usr,this.adm.makeConfig());
 
}
public getInventoryItemsShiksha()
{
  this.userdetails=this.adm.getUserCompleteInformation();
  return this.http.post(this.adm.getActualURL() + 'api/invmaterial/GetInvMaterialsShiksha',this.userdetails.usr,this.adm.makeConfig());
}
public getInventoryItem(rec:number)
{
  this.userdetails=this.adm.getUserCompleteInformation();
   
  return this.http.get(this.adm.getActualURL() + 'api/invmaterial/GetInvMaterial?recordId=' + rec + "&cCode="+this.userdetails.usr.cCode ,this.adm.makeConfig());
}



  public setInventoryItem(mat:any,matum:any[],tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      mat:mat,
      matum:matum,
      tracheck:tracheck,
      usr:this.userdetails.usr
    };
    console.log(tot,'mat');
    return this.http.post(this.adm.getActualURL() + 'api/invmaterial/setInvMaterial',tot,this.adm.makeConfig());
  }



  public getInvOpeningStocks()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/getInvOpeningStocks',this.userdetails.usr,this.adm.makeConfig());
  }
  public getInvOpeningStocksShiksha()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/getInvOpeningStocksShiksha',this.userdetails.usr,this.adm.makeConfig());
  }
  public setInvOpeningStock(stock1:any)
  {
    var usr1=this.adm.getUserCompleteInformation().usr;
    let tot:any=
    {
      stock:stock1,
      usr:usr1
    };

    return this.http.post(this.adm.getActualURL() + 'api/invOpening/setInvOpeningStocks',tot,this.adm.makeConfig());
  }

  public delInvOpeningStocks(gin:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:gin,
      usr:usr
    }
     
    return this.http.post(this.adm.getActualURL() + 'api/invOpening/DeleteOpeningStock',inf,this.adm.makeConfig());

  }

  public getInvLosses()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invlosses/getInvLosses',this.userdetails.usr,this.adm.makeConfig());
  }
  public setInvLosses(obj:any,tracheck:number)
  {
    
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      loss:obj,
      traCheck:tracheck,
      usr:this.userdetails.usr
    };
   
    return this.http.post(this.adm.getActualURL() + 'api/invlosses/setInvLoss',tot,this.adm.makeConfig());
  }

  public getInvDepartments()
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/GetInvDepartments',this.userdetails.usr,this.adm.makeConfig());
  
  }
  public setInvDepartment(dept:any,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      dept:dept,
      tracheck:tracheck,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/invDepartments/SetInvDepartment',tot,this.adm.makeConfig());
  
  }


  public invSetupDetails()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/invSetup/invCostingInfo',usr,this.adm.makeConfig());
  }

  public getInvShikshaSets()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/invSets/GetInvSets',usr,this.adm.makeConfig());
  }
  public getInvShikshaSet(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/invSets/GetInvSet',inf,this.adm.makeConfig());
 
  }
  public setInvShikshaSet(header:any,lines:any[],tracheck:number)
  {
    var tot:any={
      header:header,
      lines:lines,
      traCheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/invSets/setInvSet',tot,this.adm.makeConfig());
 
  }



}
