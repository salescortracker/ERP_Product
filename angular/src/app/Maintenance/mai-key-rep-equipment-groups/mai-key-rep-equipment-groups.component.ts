import { Component, OnInit } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
 import { MaiEquipKeyReportsService } from 'app/services/maintenance/mai-equip-key-reports.service';

@Component({
  selector: 'app-mai-key-rep-equipment-groups',
  templateUrl: './mai-key-rep-equipment-groups.component.html',
  styleUrls: ['./mai-key-rep-equipment-groups.component.scss']
})
export class MaiKeyRepEquipmentGroupsComponent implements OnInit {
  public details:any;
  public pdffile:string='';
  public excelfile:string='';
  public searchtext:string='';
  public authCheck:boolean=false;
  constructor(private akey:MaiEquipKeyReportsService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService
   )
   {
     if(this.adm.screenCheck(9,9,1,0))
     {
      this.authCheck=true;
     this.listAdd();
     }
     else
     {
      this.authCheck=false;
      this.router.navigateByUrl('maintenance/unauthorize');
      
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
    
    this.akey.getKeyRepEquipmentGroups().subscribe(
      async res => {
        var det:any=res;
      
        this.details=det.details;
       this.pdffile= this.adm.getReportsURL() + det.pdffile;
       this.excelfile= this.adm.getReportsURL() + det.excelfile;
       
      this.spinner.hide(); 
      });
      
  }
}

 