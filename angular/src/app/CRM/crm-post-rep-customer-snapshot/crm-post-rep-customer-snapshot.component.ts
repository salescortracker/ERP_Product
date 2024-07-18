import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmRepPostSalesService } from 'app/services/crm/crm-rep-post-sales.service';
import { PurRepCostingsService } from 'app/services/purchases/pur-rep-costings.service';
import { PurSupplierGroupsService } from 'app/services/purchases/pur-supplier-groups.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crm-post-rep-customer-snapshot',
  templateUrl: './crm-post-rep-customer-snapshot.component.html',
  styleUrls: ['./crm-post-rep-customer-snapshot.component.scss']
})
export class CrmPostRepCustomerSnapshotComponent implements OnInit {
  public parties:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private pur:CrmRepPostSalesService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(2,11,4,0))
     {
      this.listAdd();
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('purchases/purunauthorize');
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
    
    this.pur.getSnapShot().subscribe(
      async res => {
        var det:any=res;
        this.parties=det.details;
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
