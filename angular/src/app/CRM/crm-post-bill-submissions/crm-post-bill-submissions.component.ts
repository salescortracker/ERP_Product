import { Component, OnInit } from '@angular/core';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmBillSubmissionsService } from 'app/services/crm/crm-bill-submissions.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-crm-post-bill-submissions',
  templateUrl: './crm-post-bill-submissions.component.html',
  styleUrls: ['./crm-post-bill-submissions.component.scss']
})
export class CrmPostBillSubmissionsComponent implements OnInit {
  public listdate:Date= new Date();
  public submissions:any;
public customers:any;
public cusid:number=0;
public opened:boolean=false;
public totalpendings:any;
public pendings:any[]=[];
  constructor(private cus:PartyDetailsService,private crm:CrmBillSubmissionsService,
    private spinner: NgxSpinnerService,private adm:AdminGeneralInfoService) { 
    this.customersAdd();
    this.listAdd();
this.pendingDetails();
  
  }
  private pendingDetails()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.crm.getPendingBills().subscribe(res =>
        {
            this.totalpendings=res;
            this.spinner.hide();
        });
  }
private customersAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.cus.getPartyDetails("CUS").subscribe(res =>
      {
         var det:any=res;
         this.customers=det.parties;
          this.spinner.hide();
      });
}
openNew()
{
  this.makeCle();
  this.opened=true;
}
makeCle()
{
  this.cusid=0;
  this.pendings=[];
}
  private listAdd()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.crm.getSubmittedBills(this.adm.stringData(this.listdate)).subscribe(res =>
        {
          this.submissions=res;
          this.spinner.hide();
        });
  }
  ngOnInit(): void {
  }

  findPendings()
  {
    this.pendings=[];
    var det:any=this.totalpendings.filter(a => a.partyId == +this.cusid);
    for(var i=0;i<det.length;i++)
    {
      this.pendings.push({
        chk:false,
RecordId:det[i].recordId,
seq:det[i].seq,
dat:det[i].dat,
customer:det[i].partyName,
baseamt:det[i].baseamt,
totalamt:det[i].totalAmt
      });
    }
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return null;
  }

  save()
  {
    var det:any=this.pendings.filter(a => a.chk);
    
    if(det.length > 0)
    {
      Swal.fire({  
        title:  'Confirms Bill Submissions' ,  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 
          this.spinner.show(undefined,
            {
              type: 'ball-triangle-path',
              size: 'medium',
              bdColor: 'rgba(0, 0, 0, 0.8)',
              color: '#fff',
              fullScreen: true
            });
            var header:any={
              CustomerId:+this.cusid
            };
            var lines:any[]=[];
            for(var i=0;i<det.length;i++)
            {
              lines.push({
                Billno:det[i].RecordId
              });
            }
            this.crm.setBillSubmission(header,lines).subscribe(res =>
              {
                var det:any=res;
                if(det.result=='OK')
                {
                  Swal.fire(  
                    'Transaction Completed Successfully!',  
                    'Bills Submitted.',  
                    'success'  
                  );
                   this.listAdd();
                  this.makeCle();
                  this.pendingDetails();
                }
                else
                {
                  Swal.fire(  
                    det.result,  
                    'Error in transaction.',  
                    'error'  
                  );

                }


                this.spinner.hide();
              });

    
    }
    });
    }
    else
    {
      this.adm.showMessage('No bills are selected to be submitted','Warning',3);  
    }
  }


}

