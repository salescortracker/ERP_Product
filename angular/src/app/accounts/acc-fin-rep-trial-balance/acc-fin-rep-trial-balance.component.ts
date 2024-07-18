import { Component, OnInit } from '@angular/core';
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
const now = new Date();
@Component({
  selector: 'app-acc-fin-rep-trial-balance',
  templateUrl: './acc-fin-rep-trial-balance.component.html',
  styleUrls: ['./acc-fin-rep-trial-balance.component.scss']
})
export class AccFinRepTrialBalanceComponent implements OnInit {
  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  public pdffile:string='';
  public excelfile:string='';

  public details:any;

  constructor(private adm:AdminGeneralInfoService,private ack:AccKeyReportsService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
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

      var str=this.adm.strDate(this.tradat);
      this.ack.getTrialBalance(str).subscribe(res =>
        {
console.log(res);
var det:any=res;
this.details=det.data;
this.pdffile= this.adm.getReportsURL() + det.pdffile;
this.excelfile= this.adm.getReportsURL() + det.excelfile;
this.spinner.hide();
        });
  }

}
