import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import * as internal from 'assert';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class PrismQuotationsService {
  constructor(private http: HttpClient,private adm:AdminGeneralInfoService) { }
  public getPrismQuotationRequirements()
  {
     return this.http.get(this.adm.getActualURL() + 'api/PrismQuotations/GetPrismQuotationRequirements',this.adm.makeConfig());
  }
  public getPrismQuotations(fromdate:string,todate:string)
  {
    return this.http.get(this.adm.getActualURL() + 'api/PrismQuotations/GetPrismQuotations?fromdate=' + fromdate + '&todate=' + todate ,this.adm.makeConfig());
  }
  public getEnquiryCompleteInfo(enqid:number)
  {
    return this.http.get(this.adm.getActualURL() + 'api/PrismQuotations/GetPrismQuotations?enqid=' + enqid.toString() ,this.adm.makeConfig());
  }
  public setPrismQuotation(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/PrismQuotations/setQuotationInfo',obj ,this.adm.makeConfig());
  }
  public printPrismQuotation(quoid:number)
  {
    return this.http.get(this.adm.getActualURL() + 'api/PrismQuotations/PrintPrismQuotation?quoid=' + quoid.toString() ,this.adm.makeConfig());
  }
}
