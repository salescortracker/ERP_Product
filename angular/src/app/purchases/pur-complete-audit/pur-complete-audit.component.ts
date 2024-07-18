import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PurPurchaseRequestService } from 'app/services/purchases/pur-purchase-request.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { 
  }
}
@Component({
  selector: 'app-pur-complete-audit',
  templateUrl: './pur-complete-audit.component.html',
  styleUrls: ['./pur-complete-audit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PurCompleteAuditComponent implements OnInit {
public currentOrientation='vertical'
activeTypeButton: string = "";
public fromdate:Date=new Date();
public todate:Date=new Date();

public fromstr:string='';
public tostr:string='';



public requests:any;
public detailedRequests:any[]=[];
public detailedRequest:any={};
public requestno:number=-1;

  constructor(private adm:AdminGeneralInfoService,private router:Router,private req:PurPurchaseRequestService,
    private spinner: NgxSpinnerService,private modalService: NgbModal,) {
    if(this.adm.screenCheck(2,11,6,0))
    {

    }
    else
    {
      this.router.navigateByUrl('purchases/purunauthorize');
    }
   }

  ngOnInit(): void {
  }
  GetTransactionByType(str)
  {
    this.activeTypeButton=str;
    this.fromstr='';
    this.tostr='';

  }

  public showDetails()
  {
    this.fromstr=this.adm.stringData(this.fromdate);
    this.tostr=this.adm.stringData(this.todate);
    this.makeInfo();
  }
  private makeInfo()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    switch (this.activeTypeButton) {
      case 'Purchase Request':
        this.req.getPurhaseRequestsAudit(this.fromstr,this.tostr).subscribe(res => 
          {
              this.requests=res;
              
              this.spinner.hide();
          });
        break;
    
      default:
        break;
    }
  }
  
parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

public makeRequestDetails(obj:any,customContent)
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.req.getPurchaseRequestTotalDetailByAudit(obj.recordid).subscribe(res =>
    {
        console.log(res);
        var det:any=res;
        for(var i=0;i<det.length;i++)
        {
          this.detailedRequests.push({
              header:det[i].header,
              lines:det[i].lines
          });
        }
        if(this.detailedRequests.length > 0)
        {
          this.requestno=0;
          this.detailedRequest=this.detailedRequests[0];
          this.modalService.open(customContent, { windowClass: 'terms-modal'  });
        }
        this.spinner.hide();
    });
}
public changeRequest(x)
{
  if(x > 0)
  {
    if(this.requestno < this.detailedRequests.length-1)
    {
        this.requestno++;
        this.detailedRequest=this.detailedRequests[this.requestno];
    }
  }
  else
  {
    if(this.requestno > 0)
    {
      this.requestno--;
      this.detailedRequest=this.detailedRequests[this.requestno];
    }
  }
}






openModal(customContent) {
  //  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  this.modalService.open(customContent, { windowClass: 'terms-modal'  });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
    } else {
        return `with: ${reason}`;
    }
  }
}
