import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AccOpeningBalancesService } from 'app/services/accounts/acc-opening-balances.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-acc-opening-balances',
  templateUrl: './acc-opening-balances.component.html',
  styleUrls: ['./acc-opening-balances.component.scss']
})
export class AccOpeningBalancesComponent implements OnInit {
public authCheck:boolean=false;
public detail:any;
public dat:string='';
public first:string='';
public second:string='';
public accounts:any;
public accdetail:any=
{ accountId: 0, accountname: "", grp: "", grpid: 140 };


public listAccounts:any[]=[];

public totaldebit:number=0;
public totalcredit:number=0;

public debit:number=0;
public credit:number=0;
public grp:string='';


  constructor(private aco:AccOpeningBalancesService,private acc:AccAccountsService,private adm:AdminGeneralInfoService,private spinner: NgxSpinnerService,private router:Router) {
    if(this.adm.screenCheck(1,1,3,0))
    {
      this.authCheck=true;
    this.listAdd();
    this.accountsAdd();
    }
    else
    {
      this.authCheck=false;
      this.router.navigateByUrl('accounts/accunauthorize');
    
    }
   }

  ngOnInit(): void {
  }

  public listAdd()
  {
  
    this.aco.getAccountOpeningBalances().subscribe(res =>{
      
      this.listAccounts=[];
      this.detail=res;
      this.dat=this.detail.dat;
     for(var i=0;i<this.detail.accdet.length;i++)
     {
      this.listAccounts.push({
        recordId:this.detail.accdet[i].recordId,
        accname:this.detail.accdet[i].accname,
        deb:this.detail.accdet[i].deb,
        cre:this.detail.accdet[i].cre
      });
     }
     this.makeCalculations();
     
    });
  }
  public accountsAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.acc.getAccounts().subscribe(res =>{
      this.accounts=res;
      this.spinner.hide();
    });
  }


  public addAccount()
  {
    if(this.accdetail.accountname == '')
    {
      this.adm.showMessage('Account not selected','Warning',3);
      return;
    }

    for(var i=0;i<this.listAccounts.length;i++)
    {
      if(this.listAccounts[i].accountname == this.accdetail.accountname)
      {
        this.adm.showMessage('Details of this account are already existed','Warning',3);
        return;
      }
    }

    if(this.debit == 0 && this.credit ==0)
    {
      this.adm.showMessage('Both debit and credit can not be equal to zero','Warning',3);
      return;
    }
    if(this.debit != 0 && this.credit != 0)
    {
      this.adm.showMessage('Both debit and credit can not have values','Warning',3);
      return;
    }

    this.listAccounts.push({
      recordId:this.accdetail.accountId,
      accname:this.accdetail.accountname,
      deb:this.debit,
      cre:this.credit
    });
this.accdetail=
{ accountId: 0, accountname: "", grp: "", grpid: 140 };
this.debit=0;
this.credit=0;

this.makeCalculations();
  }
 public delAccount(obj:any)
  {
    var index=this.listAccounts.indexOf(obj);
    if(index >= 0)
    {
      this.listAccounts.splice(index,1);
      this.makeCalculations();
    }
  }

  private makeCalculations()
  {
    this.totalcredit=0;
    this.totaldebit=0;
    for(var i=0;i<this.listAccounts.length;i++)
    {
      this.totaldebit=this.totaldebit+this.listAccounts[i].deb;
      this.totalcredit=this.totalcredit + this.listAccounts[i].cre;
    }
    this.totaldebit=Math.round(this.totaldebit*100)/100;
    this.totalcredit=Math.round(this.totalcredit*100)/100;
  }
  
public save()
{

if(this.listAccounts.length <= 0)
{
  this.adm.showMessage('No entries found','Warning',3);
    return;
}
 
  if(this.totalcredit != this.totaldebit)
  {
    this.adm.showMessage('Entries are not balanced','Warning',3);
    return;
  }


  Swal.fire({  
    title: 'Confirms Opening Balance Details',  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 
       
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });


       
        this.aco.setAccountOpeningBalances(this.listAccounts).subscribe(res =>{
          var result:any=res;
          if(result.result =='OK')
{
   Swal.fire(  
            'Transaction Completed Successfully!',  
            'Opening Balances saved.',  
            'success'  
          )  ;

          
   }
   else
   {
  Swal.fire(  
      result.result,  
      'Some error in transaction',  
      'error'  
    )  
  }
      
   
  this.spinner.hide();
  });
}
});

}
}
