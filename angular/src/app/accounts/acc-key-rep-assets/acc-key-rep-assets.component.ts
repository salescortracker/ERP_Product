import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AccAccountGroupsService } from 'app/services/accounts/acc-account-groups.service';
import { AccKeyReportsService } from 'app/services/accounts/acc-key-reports.service';

@Component({
  selector: 'app-acc-key-rep-assets',
  templateUrl: './acc-key-rep-assets.component.html',
  styleUrls: ['./acc-key-rep-assets.component.scss']
})
export class AccKeyRepAssetsComponent implements OnInit {
  public assets:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private akey:AccKeyReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(1,8,1,0))
     {
      this.listAdd();
      this.authCheck=true;
     }
     else
     {
       this.authCheck=false;
       this.router.navigateByUrl('accounts/accunauthorize');
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
    
    this.akey.getKeyAssetDetails().subscribe(
      async res => {
        var det:any=res;
        console.log(det);
        this.assets=det.assets;
       this.pdffile= this.adm.getReportsURL() + det.pdffile;
       this.excelfile= this.adm.getReportsURL() + det.excelfile;
       
      this.spinner.hide(); 
      });
      
  }
}
