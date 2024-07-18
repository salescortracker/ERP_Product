import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { CrmKeyReportsService } from 'app/services/crm/crm-key-reports.service';
 

@Component({
  selector: 'app-crm-key-rep-customers',
  templateUrl: './crm-key-rep-customers.component.html',
  styleUrls: ['./crm-key-rep-customers.component.scss']
})
export class CrmKeyRepCustomersComponent implements OnInit {
  public parties:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private ckey:CrmKeyReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(2,11,1,0))
     {
      this.listAdd();
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('crm/crmunauthorize');
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
    
    this.ckey.getCustomerDetailsReport().subscribe(
      async res => {
        var det:any=res;
        this.parties=det.customers;
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
