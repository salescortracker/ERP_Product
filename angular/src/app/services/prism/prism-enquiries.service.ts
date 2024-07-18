import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import * as internal from 'assert';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class PrismEnquiriesService {
  constructor(private http: HttpClient,private adm:AdminGeneralInfoService) { }
  public getPrismEnquiryRequirements()
  {
    console.log(this.adm.makeConfig(),'config');
    return this.http.get(this.adm.getActualURL() + 'api/PrismEnquiries/GetPrismEnquiryRequirements',this.adm.makeConfig());
  }
  public getPrismEnquiries(fromdate:string,todate:string)
  {
    return this.http.get(this.adm.getActualURL() + 'api/PrismEnquiries/GetPrismEnquiries?fromdate=' + fromdate + '&todate=' + todate,this.adm.makeConfig());
  }
  public setPrismEnquiry(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/PrismEnquiries/setPrismEnquiry',obj,this.adm.makeConfig());
  }
  public putPrismEnquiry(obj:any)
  {
    return this.http.put(this.adm.getActualURL() + 'api/PrismEnquiries/PutPrismEnquiry',obj,this.adm.makeConfig());
  }
  public deletePrismEnquiry(enqid:number)
  {
    return this.http.delete(this.adm.getActualURL() + 'api/PrismEnquiries/DeletePrismEnquiry?enqid='+enqid.toString(),this.adm.makeConfig());
  }
}
