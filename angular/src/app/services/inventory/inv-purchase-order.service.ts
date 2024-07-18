import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class InvPurchaseOrderService {

  userdetails:UserCompleteInfo=null;
  
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient)
  {
    
  }
  public GetBlankSuppliers()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/blankPurchases/GetBlankSuppliersOnly',usr,this.adm.makeConfig());
  
  }
public GetPurchaseAdvanceRequirement()
{
  var usr=this.adm.getUserCompleteInformation().usr;
  return this.http.post(this.adm.getActualURL() + 'api/purSetup/GetTotalAdvanceRequirements',usr,this.adm.makeConfig());
}
public SetPurchaseAdvance(obj:any,tracheck:number)
{
  var usr=this.adm.getUserCompleteInformation().usr;
  var tot:any={
    adva:obj,
    tracheck:tracheck,
    usr:usr
  }
  console.log(tot);
  return this.http.post(this.adm.getActualURL() + 'api/partyadvances/setAdvance',tot,this.adm.makeConfig());

}
  public GetInvPurchaseOrderRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrderRequirements',usr,this.adm.makeConfig());
  }
  
  public GetCRMSaleOrderRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrderRequirements2',usr,this.adm.makeConfig());
  }
  public GetInvSaleOrderRequirements()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrderRequirements2',usr,this.adm.makeConfig());
  }
  public GetPurchaseOrdersForAdvances(validity:boolean,frmdate:string,todate:string)
  {
    var inf:any={
      recordId:validity?1:0,
      frmDate:frmdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/purSetup/GetPendingOrders',inf,this.adm.makeConfig());

  }   
  public GetSaleOrdersForAdvances(validity:boolean,frmdate:string,todate:string)
  {
    var inf:any={
      recordId:validity?1:0,
      frmDate:frmdate,
      toDate:todate,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/purSetup/GetPendingSaleOrders',inf,this.adm.makeConfig());

  }   
  public getAdvanceRequirements()
  {
    return this.http.post(this.adm.getActualURL() + 'api/purSetup/GetTotalAdvanceRequirements',this.adm.getUserCompleteInformation().usr,this.adm.makeConfig())
  }

  public GetInvPurchaseOrders(dat1:String,dat2:String,typ:string)
  {
    var inf:any={
      frmDate:dat1,
      toDate:dat2,
      detail:typ,
      usr:this.adm.getUserCompleteInformation().usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrders',inf,this.adm.makeConfig());

  }
  public GetInvPurchaseOrder(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrder',inf,this.adm.makeConfig());

  }
  
  public invPurchaseOrderSave(header:any,lines:any[],terms:any[],taxes:any,tracheck:number)
  {

    
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      header:header,
      lines:lines,
      terms:terms,
      taxes:taxes,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    console.log(tot,'PO Total');
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/SetPurchaseOrder',tot,this.adm.makeConfig());

  }
  public invPurchaseOrderConfirmationSave(tot:any)
  {
 

  }


  public GetBlankPurchaseOrderRequirements()
  {
    

    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrderBlanks/GetPurchaseOrderBlanksRequirements',usr,this.adm.makeConfig());



  }

  public getBlankPurchaseOrders(dat1:String,dat2:String)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      frmDate:dat1,
      toDate:dat2,
      usr:this.adm.getUserCompleteInformation().usr
    }
    
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrderBlanks/GetPurchaseBlanksOrders',inf,this.adm.makeConfig());

  }
  public GetBlankPurchaseOrder(rec:number)
  {
    var inf:any={
      recordId:rec,
      usr:this.adm.getUserCompleteInformation().usr
    };
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrderBlanks/GetPurchaseBlanksOrder',inf,this.adm.makeConfig());

  }

  public setBlankPurchaseOrder(header:any,lines:any[],terms:any[],taxes:any,tracheck:number)
  {

    
    this.userdetails=this.adm.getUserCompleteInformation();
    var tot:any={
      header:header,
      lines:lines,
      terms:terms,
      taxes:taxes,
      traCheck:tracheck,
      usr:this.userdetails.usr
    }
    
    console.log(tot);
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrderBlanks/SetPurchaseBlankOrder',tot,this.adm.makeConfig());

  }

  public printBlankOrder(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
     
      usr:this.userdetails.usr
    }
    console.log(inf);
    
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrderBlanks/printBlankOrder',inf,this.adm.makeConfig());
  }
  
  public printPurchaseOrder(rec:number)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any={
      recordId:rec,
     
      usr:this.userdetails.usr
    }
    console.log(inf);
    
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/printPurchaseOrder',inf,this.adm.makeConfig());
  }
  public getPurchaseOrdersForApproval()
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/GetPurchaseOrdersForApprovals',usr,this.adm.makeConfig());

  }
  public setPurchaseOrderForApproval(rec:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var inf:any={
      recordId:rec,
     
      usr:usr
    }
      return this.http.post(this.adm.getActualURL() + 'api/purPurchaseOrders/SetPurchaseOrderForApprovals',inf,this.adm.makeConfig());
 
  
  }

  public l̥setPurchaseOrder()
  {

  }


  
  

}
