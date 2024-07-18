import { Component, OnInit } from '@angular/core';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';

@Component({
  selector: 'app-acc-year-end',
  templateUrl: './acc-year-end.component.html',
  styleUrls: ['./acc-year-end.component.scss']
})
export class AccYearEndComponent implements OnInit {
  public pnlaccount:any={
    accountId:-1,
    accountname:'',
    grp:'',
  };
  public deb:number;
  public cre:number;
  public pnlaccounts:any;
  public pnldetails:any[]=[];
  constructor(private acc:AccAccountsService) {

    this.acc.getCompleteAssetsandLiabilities().subscribe(res =>
      {
          
          this.pnlaccounts=res;
          console.log(this.pnlaccounts,'accounts');
      });
   }

  ngOnInit(): void {
  }

  public addPNL()
  {
      if(this.pnlaccount)
      {
        if(this.pnlaccount.accountname.trim() != '')
        {
          this.pnldetails.push({
              accountname:this.pnlaccount.accountname,
              grp:this.pnlaccount.grp,
              deb:this.deb,
              cre:this.cre
          });
        }
      }
  }
  public deletePNL(obj:any)
  {
    var index=this.pnldetails.indexOf(obj);
    if(index >= 0)
    {
      this.pnldetails.splice(index,1);
    }
  }
}
