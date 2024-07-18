import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';
import * as internal from 'assert';


@Injectable({
  providedIn: 'root'
})
export class BlaMastersService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  public getBlankSKURequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankCompleteSKURequirements',usr,this.adm.makeConfig());
   
  }
public getBlankSuppliers()
{
  var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankSuppliers',usr,this.adm.makeConfig());
 
}
  public BlankProductsTransaction(detail:string,rec:number,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:detail,
      recordId:rec,
      traCheck: tracheck,
      usr:this.userdetails.usr
    }
    if(tracheck==0)
    {
      return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankProducts',this.userdetails.usr,this.adm.makeConfig());
    }
    else
    {
      return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankProduct',inf,this.adm.makeConfig());
    }
   }

public getCoatings()
{
  return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankCoatings',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
}
public setCoatings(coat:string,tracheck:number)
{
var inf:any={
  detail:coat,
  traCheck:tracheck,
  usr:this.adm.getUserCompleteInformation().usr
};
return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankCoatings',inf,this.adm.makeConfig());

}

   
  public BlankBasePowerTransaction(detail:string,rec:number,tracheck:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      detail:detail,
      recordId:rec,
      traCheck: tracheck,
      usr:this.userdetails.usr
    }
    if(tracheck==0)
    {
      return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankBasePowers',this.userdetails.usr,this.adm.makeConfig());
    }
    else
    {
      return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankBasePower',inf,this.adm.makeConfig());
    }
   }


   public BlankLensDiasTransaction(detail:string,rec:number,tracheck:number)
   {
     this.userdetails=this.adm.getUserCompleteInformation();
     var inf:any={
       detail:detail,
       recordId:rec,
       traCheck: tracheck,
       usr:this.userdetails.usr
     }
     if(tracheck==0)
     {
       return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankLensDias',this.userdetails.usr,this.adm.makeConfig());
     }
     else
     {
       return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankLensDias',inf,this.adm.makeConfig());
     }
    }

    public BlankShadesTransaction(detail:string,rec:number,tracheck:number)
    {
      this.userdetails=this.adm.getUserCompleteInformation();
      var inf:any={
        detail:detail,
        recordId:rec,
        traCheck: tracheck,
        usr:this.userdetails.usr
      }
      if(tracheck==0)
      {
        return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankShades',this.userdetails.usr,this.adm.makeConfig());
      }
      else
      {
        return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankShades',inf,this.adm.makeConfig());
      }
     }


     public BlankSphericalsTransaction(detail:string,rec:number,tracheck:number)
     {
       this.userdetails=this.adm.getUserCompleteInformation();
       var inf:any={
         detail:detail,
         recordId:rec,
         traCheck: tracheck,
         usr:this.userdetails.usr
       }
       if(tracheck==0)
       {
         return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankSphericals',this.userdetails.usr,this.adm.makeConfig());
       }
       else
       {
         return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankSphericals',inf,this.adm.makeConfig());
       }
      }

      public BlankCylindricalsTransaction(detail:string,rec:number,tracheck:number)
      {
        this.userdetails=this.adm.getUserCompleteInformation();
        var inf:any={
          detail:detail,
          recordId:rec,
          traCheck: tracheck,
          usr:this.userdetails.usr
        }
        if(tracheck==0)
        {
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankCylindricals',this.userdetails.usr,this.adm.makeConfig());
        }
        else
        {
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankCylindricals',inf,this.adm.makeConfig());
        }
       }
 

       public BlankAddsTransaction(detail:string,rec:number,tracheck:number)
       {
         this.userdetails=this.adm.getUserCompleteInformation();
         var inf:any={
           detail:detail,
           recordId:rec,
           traCheck: tracheck,
           usr:this.userdetails.usr
         }
         if(tracheck==0)
         {
           return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankAdds',this.userdetails.usr,this.adm.makeConfig());
         }
         else
         {
           return this.http.post(this.adm.getActualURL() + 'api/blankmaster/SetBlankAdds',inf,this.adm.makeConfig());
         }
        }


        public BlankCompleteDetails()
        {
          var usr=this.adm.getUserCompleteInformation().usr;
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankCompleteDetails',usr,this.adm.makeConfig());
        }
        public SetBlankSKU(blank:any)
        {
          var usr=this.adm.getUserCompleteInformation().usr;
          var tot:any={
            blank:blank,
            usr:usr
          };
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/setBlankSKUDetail',tot,this.adm.makeConfig());
    
        }
        public deleteBlankSKU(recordId:number)
        {
          var usr=this.adm.getUserCompleteInformation().usr;
          var inf:any={
            recordId:recordId,
            usr:usr
          };
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/deleteBlankSKUDetail',inf,this.adm.makeConfig());
    
        }

        public getBlankCompleteDetailsBySKU(det:any)
        {
        
          return this.http.post(this.adm.getActualURL() + 'api/blankmaster/GetBlankSKUInformationByUniqueDetails',det,this.adm.makeConfig());
    
        }
        public getBlankPurchaseCompleteDetails(frmdate:any,todate:any)
        {
          var usr=this.adm.getUserCompleteInformation().usr;
          var inf:any={
             frmDate: frmdate,
             toDate: todate,
            usr:usr
          };
          return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankDetailedPurchases',inf,this.adm.makeConfig());
    
        }


        public getBlankPurchasesDashboard()
        {
          return this.http.post(this.adm.getActualURL() + 'api/BlankPurchaseDashboard/GetBlankPurchaseDashboard',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig());
    
        }
       

}
