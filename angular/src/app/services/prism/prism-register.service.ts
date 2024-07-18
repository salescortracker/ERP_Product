import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import * as internal from 'assert';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class PrismRegisterService {
  constructor(private http: HttpClient,private adm:AdminGeneralInfoService) { }
  public getPrismProducts()
  {
     return this.http.get(this.adm.getActualURL() + 'api/PrismAdmin/getProductsList');
  }
  public setPrismRegistration(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/PrismAdmin/makeRegistration',obj);
  }
}
