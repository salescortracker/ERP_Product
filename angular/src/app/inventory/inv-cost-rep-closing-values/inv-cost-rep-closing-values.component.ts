import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvDepartmentsService } from 'app/services/inventory/inv-departments.service';
import { PosInventoryService } from 'app/services/pos/pos-inventory.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inv-cost-rep-closing-values',
  templateUrl: './inv-cost-rep-closing-values.component.html',
  styleUrls: ['./inv-cost-rep-closing-values.component.scss']
})
export class InvCostRepClosingValuesComponent implements OnInit {
  public fromdate:Date=new Date();
   
  public details:any;
    public pdffile:string='';
    public excelfile:string='';
  public total:number=0;
    constructor( private inv:InvDepartmentsService, private pos:PosInventoryService, private adm:AdminGeneralInfoService,
      private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService) { 
         
  
      }
  
    ngOnInit(): void {
    }
    parseDate(dateString: string): Date {
      if (dateString) {
          return new Date(dateString);
      }
      return null;
    }
    public listAdd()
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
      
      this.inv.getClosingStockWithValue(this.adm.stringData(this.fromdate)).subscribe(
        async res => {
          var det:any=res;
        
          this.details=det.details;
       //  this.pdffile= this.adm.getReportsURL() + det.pdfFile;
       //  this.excelfile= this.adm.getReportsURL() + det.excelFile;
       
         
        this.spinner.hide(); 
        });
    }
  }
  