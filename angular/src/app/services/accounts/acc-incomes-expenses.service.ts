import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{UserInfo,userAddress,UserAssigns,UserCompleteInfo,UserPermissions,LoginInput, AdminGeneralInfoService} from '../admin/admin-general-info.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccIncomesExpensesService {
  userdetails:UserCompleteInfo=null;
  constructor(private adm:AdminGeneralInfoService,private http: HttpClient) { }
  public getIncomesExpenses(det:String)
  {
    this.userdetails=this.adm.getUserCompleteInformation();
    var inf:any=
    {
      detail:det,
      usr:this.userdetails.usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accIncomexExpenses/GetFinIncomesExpenses',inf,this.adm.makeConfig());

  }

  public setIncomesExpense(exp:any,tracheck:number)
  {
    var usr=this.adm.getUserCompleteInformation().usr;
    var tot:any=
    {
      exp:exp,
      usr:usr,
      tracheck:tracheck

    }
    
    return this.http.post(this.adm.getActualURL() + 'api/accIncomexExpenses/SetFinIncomeExpense',tot,this.adm.makeConfig());
  }

  public getIncomesExpensesTransactions(frmdate:string,todate:string,typ:string)
  {
    var inf:any={
      frmDate:frmdate,
      toDate:todate,
      detail:typ,
      usr:this.adm.getUserCompleteInformation().usr
    }
    return this.http.post(this.adm.getActualURL() + 'api/accIncomexExpenses/GetAccIncomesExpensesTransactions',inf,this.adm.makeConfig());

  }
  public sttIncomeExpenseTransaction(expense:any,tracheck:number)
  {
    var tot:any={
      expenses:expense,
      tracheck:tracheck,
      usr:this.adm.getUserCompleteInformation().usr
    }
    console.log('total',tot);
    return this.http.post(this.adm.getActualURL() + 'api/accIncomexExpenses/setAccIncomeExpenseTransaction',tot,this.adm.makeConfig());

  }
}
