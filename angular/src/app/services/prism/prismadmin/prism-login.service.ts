import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import * as internal from 'assert';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Injectable({
  providedIn: 'root'
})
export class PrismLoginService {

  constructor(private http: HttpClient,private adm:AdminGeneralInfoService) { }
  public loginCheckPrism(obj:any)
  {
    return this.http.post(this.adm.getActualURL() + 'api/PrismLogin/LoginVerification',obj);
  }
}
