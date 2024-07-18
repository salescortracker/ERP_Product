import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import * as internal from 'assert';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class PrismProductsService {

  constructor(private http: HttpClient,private adm:AdminGeneralInfoService) { }
  public getPrismProducts()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    console.log(usr);
    return this.http.post(this.adm.getActualURL() + 'api/PrismProducts/GetPrismProducts',usr);
  }
  public getPrismProduct(pcode:string)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      detail:pcode,
      usr:usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/PrismProducts/GetPrismProduct',inf);
  }
  public setPrismProduct(product:any,modules:any[],tracheck:number)
  { 
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      product:product,
      modules:modules,
      tracheck:tracheck
    }
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/PrismProducts/SetPrismProduct',tot);
  }

}
