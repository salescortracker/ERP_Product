import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { SalSaleTypesService } from 'app/services/pos/sal-sale-types.service';

@Component({
  selector: 'app-sal-accounts-assign',
  templateUrl: './sal-accounts-assign.component.html',
  styleUrls: ['./sal-accounts-assign.component.scss']
})
export class SalAccountsAssignComponent implements OnInit {
  public details:any[]=[];
  public accounts:any[]=[];
  public authCheck:boolean=false;
    constructor(private sal:SalSaleTypesService, private acc:AccAccountsService, private adm:AdminGeneralInfoService,private router:Router) { 
      if(this.adm.screenCheck(2,8,4,0))
      {
        this.authCheck=true;
      this.sal.getSaleAccountsAssign().subscribe(res =>
        {
          var det:any=res;
            this.details=det;
            for(var i=0;i<this.details.length;i++)
            {
              this.findGroup(this.details[i]);
            }
        });
  
        this.acc.getAccountsForTransactions().subscribe(res =>
          {
            var acco:any=res;
            this.accounts=acco;
             
          });
        }
        else
        {
          this.authCheck=false;
        }
  
    }
  
    ngOnInit(): void {
    }
  public findGroup(obj:any)
  {
    var det=this.accounts.filter(a => a.accountId == obj.accountId);
    if(det.length >0)
    {
      obj.grp=det[0].grp;
    }
  }
  public save()
  {
    console.log(this.details);
    var obj:any[]=[];
    for(var i=0;i<this.details.length;i++)
    {
      obj.push({
        Transcode:this.details[i].transcode,
        Account:+this.details[i].accountId,
        Module:'SAL'
      });
    }
    this.acc.setAccountDetailsForAssign(obj).subscribe(res =>
      {
          var result:any=res;
          if(result.result=='OK')
          {
              this.adm.showMessage('Accounts reverted successfully','Success',1);
          }
          else
          {
            this.adm.showMessage(result.result,'Error',4);
          }
      });
  }
  }
  