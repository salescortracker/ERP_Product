import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService} from 'ngx-spinner';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
 import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { PurPurchaseReturnsService } from 'app/services/purchases/pur-purchase-returns.service';
import { PurchasesService } from 'app/services/purchases/purchases.service';
const now = new Date();
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CrmSaleReturnsService } from 'app/services/crm/crm-sale-returns.service';

@Component({
  selector: 'app-crm-post-sale-bill-clearances',
  templateUrl: './crm-post-sale-bill-clearances.component.html',
  styleUrls: ['./crm-post-sale-bill-clearances.component.scss']
})
export class CrmPostSaleBillClearancesComponent implements OnInit {
  public opened:boolean=false;
  public dateCheck:Boolean=false;
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public listdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public details:any[]=[];
  public receipts:any;
  public customers:any[]=[];
  public customerid:number=-1;
  public amtadjust:number=0;
  
  public amt:number=0;
  public tds:number=0;
  public rebate:number=0;
  public others:number=0;
  public recamt:number=0;
  public paymentmode:string=' ';
  public selall:boolean=false;
  public accounts:any;
  public totalaccounts:any;
  public revereseAccount:number=0;
    constructor(private adm:AdminGeneralInfoService, private pur:CrmSaleReturnsService,
      
      private acc:AccAccountsService, private par:PartyDetailsService, private router:Router,private spinner: NgxSpinnerService) { 
      if(this.adm.screenCheck(2,3,4,0))
      {
            this.creCheck=this.adm.screenCheck(2,3,4,1);
          this.delCheck=this.adm.screenCheck(2,3,4,3);
          this.getParties();
      this.listAdd();
          this.getTotalAccounts();
      }
      else
      {
        this.router.navigateByUrl('purchases/unauthorize');
      }
    }
    openNew()
    {
      this.makeCle();
      this.opened=true;
      
    }
    public close()
    {
      this.opened=false;
    }
    private makeCle()
    {
        this.customerid=0;
        this.details=[];
        this.amt=0;
        this.rebate=0;
        this.others=0;
        this.paymentmode=' ';
        this.recamt=0;
        this.filterAccounts();
        this.revereseAccount=0;
    }
    ngOnInit(): void {
    }
  
     private getParties()
    {
      this.par.getPartyDetails('CUS').subscribe(res =>{
        var detai:any=res;
  var det:any=detai.parties;
  
        for(var i=0;i<det.length;i++)
        {
          this.customers.push({
            recordId:det[i].recordId,
            partyName:det[i].partyName,
            gst:det[i].gst,
            mobile:det[i].mobile,
          });
        }
        });
    }
  public listAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
      this.pur.getReceipts(this.adm.strDate(this.listdate)).subscribe(res =>
        {
            this.receipts=res;
            this.spinner.hide();
        });
  }
  deleteReceipt(obj:any)
  {
    Swal.fire({  
      title:  'Deletes Group Details' ,  
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

          this.pur.deleteReceipt(obj.recordId).subscribe(res =>
            {
                var det:any=res;
                if(det.result=='OK')
                {
    
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Payment Details Deleted.',  
                    'success'  
                  );
                  this.listAdd();
                   }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Error in transaction.',  
                    'error'  
                  );
                }
                this.spinner.hide();



            });

  
  
  }
  });

  }
  private valCheck():boolean
  {
    if(+this.customerid <= 0)
    {
      this.adm.showMessage('Customer not Selected','Warning',3);
      return false;
    }
    if(this.amt == 0)
    {
      this.adm.showMessage('Select Bills to be payed','Warning',3);
      return false;
    }
    if(this.recamt != 0 && this.revereseAccount <= 0)
    {
      this.adm.showMessage('Reverse Account not selected','Warning',3);
      return false;
    }

    return true;

  }
  public save()
  {

    if(this.valCheck())
    {
      Swal.fire({  
        title:  'Confirms Receipt Details' ,  
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



   


      var header:any={
        PartyId:+this.customerid,
        BaseAmt:this.amt,
        Tds:this.tds,
        Rebate:this.rebate,
        Others:this.others,
        ReceiptAmt:this.recamt,
        ModeOfPayment:this.paymentmode,
        RevAccount: +this.revereseAccount
      }
      var lines:any[]=[];
      for(var i=0;i<this.details.length;i++)
      {
        if(this.details[i].chk && this.details[i].amt > 0)
        {
            lines.push({
              TransactionType:"REC",
              PartyId:+this.customerid,
              PartyName: this.findPartyName(),
              TransactionAmt: +this.details[i].amt,
              PendingAmount:0,
              ReturnAmount:0,
              CreditNote:0,
              PaymentAmount: +this.details[i].amt,
              Descriptio:' ',
              OnTraId: +this.details[i].recordid
              
            });
        }
      }
       this.pur.setReceipt(header,lines).subscribe(res =>
        {
            var det:any=res;
            if(det.result=='OK')
            {

              Swal.fire(  
                'Transaction Completed Successfully!',  
                'Payment Details Saved.',  
                'success'  
              );
              this.listAdd();
              this.makeCle();
            }
            else
            {
              Swal.fire(  
                det.result,  
                'Error in transaction.',  
                'error'  
              );
            }
            this.spinner.hide();
        });
   

       
    }
  });
  
  }

      
  }
  findPartyName():string
  {
      var det=this.customers.filter(a => a.recordId = +this.customerid);
      if(det.length > 0)
      {
          return det[0].partyName;
      }
      else
      {
        return ' ';
      }
  }
  makeTotalSelection()
  {
      for(var i=0;i<this.details.length;i++)
      {
        this.details[i].chk=this.selall;
        this.details[i].amt=this.selall?this.details[i].balance:0;
      }
      this.makeCalculations();
  }
  makeChange(obj)
  {
    if(obj.chk)
    {
      obj.amt=obj.balance;
    }
    else
    {
      obj.amt=0;
    }
    this.makeCalculations();
  }
  makeCalculations()
  {
      this.amt=0;
      for(var i=0;i<this.details.length;i++)
      {
        if(this.details[i].chk)
        {
          this.amt=this.amt+(this.details[i].amt?this.details[i].amt:0);
        }
      }
      this.makeTotals();
  }
  
  makeTotals()
  {
      this.recamt=this.amt-this.tds-this.rebate-this.others;
  }
  
  makeAdjustments()
  {
    for(var i=0;i<this.details.length;i++)
    {
      this.details[i].chk=false;
      this.details[i].amt=0;
    }
    var amt=this.amtadjust;
    for(var i=0;i<this.details.length;i++)
    {
      if(amt > 0)
      {
        this.details[i].chk=true;
        this.details[i].amt=this.details[i].balance <= amt?this.details[i].balance:amt;
        amt=amt-this.details[i].amt;
      }
    }
    this.makeCalculations();
  }
  
  showDet()
  {
    if(+this.customerid > 0)
    {
      this.selall=false;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
  
    this.par.GetCustomerCompletePendingBalances(+this.customerid).subscribe(res =>
      {
          var det:any=res;
           this.details=[];
          for(var i=0;i<det.length;i++)
          {
              this.details.push({
                  recordid:det[i].transactionId,
                  billno:det[i].branchId,
                  dat:det[i].dat,
                  traamt:det[i].transactionAmt,
                  credamt:det[i].pendingAmount,
                  purreturn:det[i].returnAmount,
                  crnote:det[i].creditNote,
                  paid:det[i].paymentAmount,
                  balance:+det[i].username,
                  amt:0,
                  chk:false
              });
          }
            this.spinner.hide();
      }); 
    }
    else
    {
      this.adm.showMessage('Select Supplier','Warning',3);
    }
     
  }
  public getTotalAccounts()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.acc.getAccounts().subscribe(res =>
        {
          var det:any=res;
          this.totalaccounts=det.filter(a => a.actype=='CAS' || a.actype=='BAN' || a.actype=='MOB');
          this.spinner.hide();
          console.log('accounts',this.totalaccounts,det);
        });
  }
  public filterAccounts()
  {
    this.accounts=[];
    if(this.paymentmode=='CASH')
    {
      this.accounts=this.totalaccounts.filter(a => a.actype =='CAS');
    }
    if(this.paymentmode=='CARD' || this.paymentmode=='CHEQUE' || this.paymentmode=='ONLINE' )
    {
      this.accounts=this.totalaccounts.filter(a => a.actype =='BAN');
    }
    if(this.paymentmode=='M_WALLET')
    {
      this.accounts=this.totalaccounts.filter(a => a.actype =='MOB')
    }
  }
  
  
  
  }
  