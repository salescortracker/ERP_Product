import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { PurSupplierGroupsService } from 'app/services/purchases/pur-supplier-groups.service';

@Component({
  selector: 'app-pur-key-rep-list-of-supplier-groups',
  templateUrl: './pur-key-rep-list-of-supplier-groups.component.html',
  styleUrls: ['./pur-key-rep-list-of-supplier-groups.component.scss']
})
export class PurKeyRepListOfSupplierGroupsComponent implements OnInit {
  public grps:any;
  public pdffile:string;
  public excelfile:string;
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private pkey:PurSupplierGroupsService,private adm:AdminGeneralInfoService,
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
    
    this.pkey.getSupplierGroupsReport().subscribe(
      async res => {
        var det:any=res;
        this.grps=det.groups;
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
