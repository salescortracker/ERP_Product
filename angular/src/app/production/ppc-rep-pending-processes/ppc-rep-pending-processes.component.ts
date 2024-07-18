import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcReportsService } from 'app/services/production/ppc-reports.service';
 import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ppc-rep-pending-processes',
  templateUrl: './ppc-rep-pending-processes.component.html',
  styleUrls: ['./ppc-rep-pending-processes.component.scss']
})
export class PpcRepPendingProcessesComponent implements OnInit {
  public details:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  public dat:string='';
  constructor(private ppc:PpcReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(10,9,1,0))
     {
      this.listAdd();
      this.dat=this.adm.stringData(new Date());
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('purchases/unauthorize');
     }
     
   }

  ngOnInit(): void {
  }
  listAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    
    this.ppc.getPPCRunningBatchCompleteDetails().subscribe(
      async res => {
        var det:any=res;
        this.details=det.details;
       this.pdffile=this.adm.getReportsURL() + det.pdfFile;
       this.excelfile=this.adm.getReportsURL() + det.excelFile;
       
      this.spinner.hide(); 
      console.log(det);
      });
      
  }
  makePdf()
{
  this.adm.makePdf(this.pdffile);
}
makeExcel()
{
this.adm.makeExcel(this.excelfile);
}
}
