import { Component, OnInit } from '@angular/core';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-acc-fin-rep-ledgers-detailed',
  templateUrl: './acc-fin-rep-ledgers-detailed.component.html',
  styleUrls: ['./acc-fin-rep-ledgers-detailed.component.scss']
})
export class AccFinRepLedgersDetailedComponent implements OnInit {
public fromdate:Date=new Date();
public todate:Date=new Date();
public accounts:any;
public rec:number=-1;

public pdffile:string='';
public excelfile:string='';

public details:any;
  constructor(private adm:AdminGeneralInfoService, private ack:AccKeyReportsService,  private acc:AccAccountsService,private spinner:NgxSpinnerService) {
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
            this.accounts=res;
            console.log('Accounts',res);
            this.spinner.hide();
        });

   }

  ngOnInit(): void {
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
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
    this.ack.getLedgerDetailed(+this.rec,this.findAccname(),this.adm.stringData(this.fromdate),this.adm.stringData(this.todate)).subscribe(res =>
      {
            var det:any=res;
          this.details=det.data;
this.pdffile= this.adm.getReportsURL() + det.pdffile;
this.excelfile= this.adm.getReportsURL() + det.excelfile;
this.spinner.hide();
      });
  }
  private findAccname():string{
    var det=this.accounts.filter(a => a.accountId==(+this.rec));
    if(det.length > 0)
    {
      return det[0].accountname;
    }
    else
    {
      return '';
    }
  }
}
