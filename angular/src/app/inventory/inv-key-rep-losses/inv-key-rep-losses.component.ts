import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { InvKeyReportsService } from 'app/services/inventory/inv-key-reports.service';
@Component({
  selector: 'app-inv-key-rep-losses',
  templateUrl: './inv-key-rep-losses.component.html',
  styleUrls: ['./inv-key-rep-losses.component.scss']
})
export class InvKeyRepLossesComponent implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private akey:InvKeyReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(2,9,1,0))
     {
      this.authCheck=true;
     this.listAdd();
     }
     else
     {
      this.authCheck=false;
      this.router.navigateByUrl('inventory/invunauthorize');
      
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
    
    this.akey.getKeyRepLosses().subscribe(
      async res => {
        var det:any=res;
      
        this.details=det.details;
       this.pdffile= this.adm.getReportsURL() + det.pdffile;
       this.excelfile= this.adm.getReportsURL() + det.excelfile;
       
      this.spinner.hide(); 
      });
      
  }
 

}
