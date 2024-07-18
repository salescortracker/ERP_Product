import { Component, OnInit } from '@angular/core';
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
const now = new Date();


@Component({
  selector: 'app-acc-fin-rep-balance-sheet',
  templateUrl: './acc-fin-rep-balance-sheet.component.html',
  styleUrls: ['./acc-fin-rep-balance-sheet.component.scss']
})
export class AccFinRepBalanceSheetComponent implements OnInit {
  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  public pdffile:any ;
  public excelfile:any;

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
      this.ack.getBalanceSheet(str).subscribe(res =>
        {
console.log(res);
var det:any=res;
this.details=det.data;

this.pdffile=  det.pdffile;
this.excelfile= det.excelfile;
this.spinner.hide();
        });
  }
  public makePdf()
  {
    if(this.pdffile != null)
    {
      this.adm.makePdf(this.pdffile);
    }
  }
  public makeExcel()
  {
    if(this.excelfile != null)
    {
      this.adm.makeExcel(this.excelfile);
    }
  }

}
