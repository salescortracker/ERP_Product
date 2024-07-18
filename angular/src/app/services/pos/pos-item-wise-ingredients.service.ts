import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PosItemWiseIngredientsService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getPOSItemWiseIngredients():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PosItemWiseIngredients/GetPOSItemWiseIngredients",u,this.adm.makeConfig());
  }
  public getPOSItemWiseIngredientRequirements():any
  {
    var u=this.adm.getUserCompleteInformation().usr;
      return this.http.post(this.adm.getActualURL() + "api/PosItemWiseIngredients/GetPOSItemWiseIngredientRequirements",u,this.adm.makeConfig());
  }
  public setPOSItemWiseIngredients(ingr:any[])
  {
    var u=this.adm.getUserCompleteInformation().usr;
    var tot:any={
      ingredients:ingr,
      usr:u
    }
    return this.http.post(this.adm.getActualURL() + "api/PosItemWiseIngredients/SetPOSItemWiseIngredients",tot,this.adm.makeConfig());
  }
}
