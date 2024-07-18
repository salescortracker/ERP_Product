import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AccBRSService } from 'app/services/accounts/acc-brs.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from "ngx-spinner";

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
  constructor(public activeModal: NgbActiveModal) { }
}
@Component({
  selector: 'app-acc-brs',
  templateUrl: './acc-brs.component.html',
  styleUrls: ['./acc-brs.component.scss']
})
export class AccBRSComponent implements OnInit {
  public fromdate:Date=new Date();
  public todate:Date=new Date();
  public banks:any;
  public bankid:number=-1;
  public closeResult:any;

  public transactions:any;
  public selectedTra:any;
  public  pos:number=-1;
  public description:string='';
  constructor(private acc:AccAccountsService,private modalService: NgbModal,private spinner:NgxSpinnerService,private adm:AdminGeneralInfoService,private router:Router,private brs:AccBRSService) { 
    if(this.adm.screenCheck(1,2,5,0))
    {
      
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'large',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.acc.getAccountsTypeWise('BAN').subscribe(res =>
          {
              this.banks=res;
              this.spinner.hide();
          });

    }
    else
    {
this.router.navigateByUrl('accounts/accunauthorize');
    }

  }

  ngOnInit(): void {
  }

public listAdd()
{
  if(+this.bankid <= 0)
  {
    this.adm.showMessage('Bank not selected','Warning',3);

  }
  else
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'large',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.brs.getBankTransactions(this.adm.stringData(this.fromdate),this.adm.stringData(this.todate),+this.bankid).subscribe(res =>
      {
        var det:any=res;
          this.transactions=JSON.parse(det.detail);
          console.log(this.transactions);
          this.spinner.hide();
      });
  }
}



  
public parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}
open(content,obj:any) {

   
   /* this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });*/
    this.modalService.open(content);
  this.selectedTra=obj;


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
  
  public save()
  {
    var obj:any={
      RecordId:this.selectedTra.recordId,
      Dat:this.selectedTra.dat,
      details:this.selectedTra.onAccount,
      Bank:+this.bankid,
      Amt:this.selectedTra.deb >0?this.selectedTra.deb:this.selectedTra.cre,
      Description:this.description,
      Pos:+this.pos
    };
console.log(obj,'xx');
      
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'large',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.brs.setReconciliation(obj).subscribe(res =>
        {
          var det:any=res;
          if(det.result=='OK')
          {
            this.adm.showMessage('Completed Successfully','Success',1);
            this.selectedTra.clearedDat=new Date();
            this.selectedTra.pos=this.pos;
            this.selectedTra.description=this.description;

            this.pos=-1;
            this.description='';
            this.modalService.dismissAll();
          }
          else
          {
            this.adm.showMessage(det.result,'Error',4);
          }
          this.spinner.hide();
        });

  }

}
