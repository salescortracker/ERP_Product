import { Component, OnInit } from '@angular/core';
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
const now = new Date();

@Component({
  selector: 'app-acc-fin-rep-bank-book',
  templateUrl: './acc-fin-rep-bank-book.component.html',
  styleUrls: ['./acc-fin-rep-bank-book.component.scss']
})
export class AccFinRepBankBookComponent implements OnInit {
  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  
  public pdffile:string='';
  public excelfile:string='';

  public details:any;

  constructor(private adm:AdminGeneralInfoService,private ack:AccKeyReportsService) { }

  ngOnInit(): void {
  }

  public listAdd()
  {
      var str=this.adm.strDate(this.tradat);
      this.ack.getCashBankBook(str,'BAN').subscribe(res =>
        {
console.log(res);
var det:any=res;
this.details=det.data;
//this.pdffile= this.adm.getReportsURL() + det.pdffile;
//this.excelfile= this.adm.getReportsURL() + det.excelfile;

        });
  }

}
