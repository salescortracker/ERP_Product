import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { QcMaterialTestingsService } from 'app/services/qc/qc-material-testings.service';
 
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-qc-mirapprovals',
  templateUrl: './qc-mirapprovals.component.html',
  styleUrls: ['./qc-mirapprovals.component.scss']
})
export class QcMIRApprovalsComponent implements OnInit {

  public headers:any;
  public username:string='';
  public details:any;
  public rectification:number=0;
  public rejection:number=0;
  public recordId:number=0;
  constructor(private adm:AdminGeneralInfoService,private router:Router,private spinner: NgxSpinnerService,
    private qc:QcMaterialTestingsService ) {
      this.username=this.adm.getUserCompleteInformation().usr.uCode;
     this.listAdd();
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
    this.qc.getQcTestRequirements().subscribe(res =>
      {
          var det:any=res;
          console.log(det);
          this.headers=det.headers;
          this.spinner.hide();
      });
}
  ngOnInit(): void {
  }
  public openMIR(obj:any)
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.qc.getQCMIRApprovalInfo(obj.recordId).subscribe(res =>
        {
          console.log(res);
          this.recordId=obj.recordId;
         this.details=res;
         this.rectification=0;
         this.rejection=0;

         for(var i=0;i<this.details.length;i++)
         {
            this.rectification=this.rectification+this.details[i].rectifiedvalue;
            this.rejection=this.rejection +this.details[i].rejectedvalue;
         }
         console.log(this.details);
          this.spinner.hide();
        })
     
  }
  public approve()
  {
    if(this.recordId==0)
    {

        this.adm.showMessage('MIR is not selected','Warning',3);
        
    }
    else
    {
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.qc.setQCMIRApproval(this.recordId).subscribe(res =>
          {
              var result:any=res;
              if(result.result=='OK')
              {
                  this.adm.showMessage('Approved Successfully','Success',1);
                  this.listAdd();
                  this.details=[];
                  this.rejection=0;
                  this.rectification=0;
              }
              else
              {
                  this.adm.showMessage(result.result,'Error',4);

              }
          });
    }
     
  }
}
