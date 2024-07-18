import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSupplierGroupsService } from 'app/services/purchases/pur-supplier-groups.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
import { QcRepMaterialsService } from 'app/services/qc/qc-rep-materials.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-qc-rep-mirpendings',
  templateUrl: './qc-rep-mirpendings.component.html',
  styleUrls: ['./qc-rep-mirpendings.component.scss']
})
export class QcRepMIRPendingsComponent implements OnInit {
  public details:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private qc:QcRepMaterialsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(11,9,1,0))
     {
      this.listAdd();
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('qc/qcunauthorize');
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
    
    this.qc.getPendingMIRForQC().subscribe(
      async res => {
        var det:any=res;
        this.details=det.details;
       this.pdffile=this.adm.getReportsURL() + det.pdfFile;
       this.excelfile=this.adm.getReportsURL() + det.excelFile;
       
      this.spinner.hide(); 
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
