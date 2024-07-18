import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class ResItemsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  
  public getItemDetails()
  {
    this.adm.makeConfig();
    
    var u=this.adm.getUserCompleteInformation().usr;
    
    return this.http.post(this.adm.getActualURL() + 'api/items/getPOSItems',u);
  }

  public getItem(recordid:number):any
  {
    var inf:any={
      recordId:recordid,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/items/getPOSItem',inf);
  }

  public setItemDetails(item:any,categs:any[],addons:any[],tracheck:number):any
  {
      var obj:any=
      {
        item:item,
        categs:categs,
        addons:addons,
        usr:this.adm.getUserCompleteInformation().usr,
        traCheck:tracheck
      }
      console.log(obj);
      return this.http.post(this.adm.getActualURL() + 'api/items/setResItems',obj);

  }

  public getItemPrices()
  {
    return this.http.post(this.adm.getActualURL() + 'api/pos/getPOSCompletePricesInformation',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
  }
  public setItemPrices(restacode:string,prices:any[])
  {
    var tot:any={
      restaCode:restacode,
      pricelist:prices,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/setPOSCompletePricesInfo',tot,this.adm.makeConfig());
  }
  
  public setResItemImage(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/items/setPOSItemImage',obj,this.adm.makeConfig());
   }
}
