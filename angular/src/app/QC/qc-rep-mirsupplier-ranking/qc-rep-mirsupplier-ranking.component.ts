import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurSupplierGroupsService } from 'app/services/purchases/pur-supplier-groups.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
import { QcRepMaterialsService } from 'app/services/qc/qc-rep-materials.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
const now = new Date();

@Component({
  selector: 'app-qc-rep-mirsupplier-ranking',
  templateUrl: './qc-rep-mirsupplier-ranking.component.html',
  styleUrls: ['./qc-rep-mirsupplier-ranking.component.scss']
})
export class QcRepMIRSupplierRankingComponent implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  
  public fromdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    
  constructor(private qc:QcRepMaterialsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   ) { 
    if(this.adm.screenCheck(11,9,1,0))
    {
     this.authCheck=true;
    //this.listAdd();
    }
    else
    {
     this.authCheck=false;
     this.router.navigateByUrl('fo/unAuthorize');
    }
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
     
     this.qc.getQCSupplierRanking(this.adm.strDate(this.fromdate),this.adm.strDate(this.todate)).subscribe(
       async res => {
         var det:any=res;
         console.log(det);
         if(det)
         {
         this.details=det.details;
        this.pdffile= this.adm.getReportsURL() + det.pdfFile;
        this.excelfile= this.adm.getReportsURL() + det.excelFile;
         }
        
       this.spinner.hide(); 
       });
       
   }

  ngOnInit(): void {
  }

}

