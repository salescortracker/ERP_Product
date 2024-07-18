import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminGeneralInfoService } from '../admin/admin-general-info.service';


@Injectable({
  providedIn: 'root'
})
export class ResRepSaleReportsService {

  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }

  
  public getSalesList(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSaleReport',inf,this.adm.makeConfig());
  }
  public getDiscountedSalesList(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepDiscountedSaleReport',inf,this.adm.makeConfig());
  }

  public getSalesConsolidatedList(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSaleReportConsolidated',inf,this.adm.makeConfig());
  }

  public getSettlementConsolidatedList(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/posDayReps/getSettlementsConsolidated',inf,this.adm.makeConfig());
  }


  public getItemWiseConsolidations(frmdat:any,todat:any)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getItemWiseConsolidations',inf,this.adm.makeConfig());
  }
public getCompleteKOTInfo(frmdat:any)
{
  var dat1=new Date(this.adm.strDate(frmdat));
    
     
    var inf:any=
    {
      frmDate:dat1,
     
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getKOTCompleteDetails',inf,this.adm.makeConfig());
 
  
}

public getItemWiseSales(frmdat:any,todat:any,item:string)
{
  var dat1= this.adm.strDate(frmdat);
  var dat2=this.adm.strDate(todat);

  var inf:any=
  {
    frmDate:dat1,
    toDate:dat2,
    detail:item,
    recordId:1,
    usr:this.adm.getUserCompleteInformation().usr
  }
  return this.http.post(this.adm.getActualURL() + 'api/pos/GetItemWiseCompleteDetails',inf,this.adm.makeConfig());

}

  public getTableWiseBills(frmdat:any,todat:any,tabno:string)
  {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

    var inf:any=
    {
      frmDate:dat1,
      toDate:dat2,
      detail:tabno,
      recordId:1,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSpecialSaleReport',inf,this.adm.makeConfig());
   }
   public getWaiterWiseBills(frmdat:any,todat:any,waiter:string)
   {
    var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

     var inf:any=
     {
       frmDate:dat1,
       toDate:dat2,
       detail:waiter,
       recordId:2,
       usr:this.adm.getUserCompleteInformation().usr
     }
     return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSpecialSaleReport',inf,this.adm.makeConfig());
    }
    
    public getNCBills(frmdat:any,todat:any)
    {
      var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

      var inf:any=
      {
        frmDate:dat1,
        toDate:dat2,
        detail:'NC',
        recordId:3,
        usr:this.adm.getUserCompleteInformation().usr
      }
      return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSpecialSaleReport',inf,this.adm.makeConfig());
     }
     public getVoidBills(frmdat:any,todat:any)
     {
      var dat1=new Date(this.adm.strDate(frmdat));
      var dat2=new Date(this.adm.strDate(todat));
  
       var inf:any=
       {
         frmDate:dat1,
         toDate:dat2,
         detail:'VOID',
         recordId:3,
         usr:this.adm.getUserCompleteInformation().usr
       }
       return this.http.post(this.adm.getActualURL() + 'api/pos/getResRepSpecialSaleReport',inf,this.adm.makeConfig());
      }


      public GetTopItems(frmdat:any,todat:any,typ:string)
      {
        var dat1=new Date(this.adm.strDate(frmdat));
    var dat2=new Date(this.adm.strDate(todat));

        var inf:any=
        {
          frmDate:dat1,
          toDate:dat2,
          detail:typ,
          usr:this.adm.getUserCompleteInformation().usr
        }
        return this.http.post(this.adm.getActualURL() + 'api/pos/GetTopItemsList',inf,this.adm.makeConfig());

      }
      public getResAuditInformation(frmdate:string,todate:string)
      {
        var dat1=new Date(frmdate);
        var dat2=new Date(todate);
    
        var inf:any=
        {
          frmDate:dat1,
          toDate:dat2,
          usr:this.adm.getUserCompleteInformation().usr
        }
        return this.http.post(this.adm.getActualURL() + 'api/pos/IPosGetAuditInfo',inf,this.adm.makeConfig());
    
        
      }

}
