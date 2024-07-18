import { Component, OnInit, Input  } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { CurrencyPipe } from '@angular/common';
import { AccTransactionsService } from 'app/services/accounts/acc-transactions.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
const now = new Date();
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
  selector: 'app-acc-receipts',
  templateUrl: './acc-receipts.component.html',
  styleUrls: ['./acc-receipts.component.scss']
})
export class AccReceiptsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public datCheck:Boolean=false;
  public delVisible:Boolean=false;

  public saveStr:string='';
 
  public recordID:number=0;
  public listdat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};

  public opened:boolean=false;
  public items:any;
  public totalitems:any;
  public searchtext:string='';
  
  public totalAccounts:any;
  public reverseAccounts:any;
  public revAccount:String='';
  public transAccounts:any;
  public revgrp:string='';
  public revbal:number=0;
  public revstr:string='';
public accgrp:string='';
public accbal:string='';
public accdetail:any={ accountId: 0, accountName: "", grp: "", actype: "",balance:0 };
public amt:number=0;
public transdet:any[]=[];

public narration:String='';
public totalAmt:number=0;
public bankDet:String='';
  closeResult: string;

  public listdet:any;
  
  public modeofpay:string='';
public authCheck:boolean=false;


  constructor( private adm:AdminGeneralInfoService,private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private acc:AccAccountsService,
    private act:AccTransactionsService
   ) {
if(this.adm.screenCheck(1,2,2,0))
{
  this.delCheck=this.adm.screenCheck(1,2,2,3);
  this.datCheck=this.adm.screenCheck(1,2,2,4);
  this.authCheck=true;
    this.listAdd();
  this.accountsAdd();
 

  
}
else
{
this.router.navigateByUrl('accounts/accunauthorize');
//this.authCheck=false;
}
   }

  ngOnInit(): void {
   // this.listAdd();
  }


  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,2,2,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.listAdd();
   
    this.delVisible=false;
    this.recordID=0;
    this.modeofpay='';
   
    this.reverseAccounts=[];
     
    this.revgrp='';
    this.transdet=[];
    this.narration='';
    this.opened=false;
  }

  openOld(obj:any)
  {
  
    
   
    this.recordID=obj.recordid;
   
this.act.getTransactionInformation(this.recordID).subscribe(res => 
  {
    var det:any=res;
    var header=det.header;
    var lines:any[]=det.lines;

    var dat=new Date(header.dat);
    this.tradat=this.adm.makeDate(dat);
    
    this.modeofpay=header.tratype;
this.reverseAccountsAdd();

     this.narration=header.narr;
     this.transdet=[];
     for(var i=0;i<lines.length;i++)
     {
       if(lines[i].cre > 0)
       {
        this.transdet.push({
          recordid: lines[i].accname,
          accname:this.getAccountName( lines[i].accname),
          amt:lines[i].cre
        });
        
       }
       else
       {
         this.totalAmt=lines[i].deb;
         this.revAccount=lines[i].accname;
         this.getRevereseAccountDetails();
       }
     }



  });

    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,2,2,2);
    this.saveStr='Modify';
    this.opened=true;
    
  
  }
  public getAccountName(rec):String
  {
 
    var det=this.totalAccounts.filter(a => a.accountId==rec);
    if(det.length > 0)
    return det[0].accountName;
  }


  
public confirmPrint(obj:any)
{
  if(obj.printCount==0)
  {
    if(this.adm.screenCheck(1,2,2,7))
    {
      this.print(obj);
    }
    else
    {
      this.adm.showMessage('You are not authorised to print receipt','Warning',3);
    }
  }
  else
  {
    if(this.adm.screenCheck(1,2,2,8))
    {
      Swal.fire({  
        title:  'This receipt is already printed ' + obj.printCount + ' time(s) Do you want to reprint it' ,  
        text: 'You will not be able to recover this file!',  
        icon: 'warning',  
        showCancelButton: true,  
        confirmButtonText: 'Yes, confirm it!',  
        cancelButtonText: 'No, keep it'  
      }).then((result) => {  
        if (result.value) { 
          this.print(obj);


        }
      });

    }
    else
    {
      this.adm.showMessage('You are not authorised to reprint receipt ','Warning',3);
    }
  }
}
  public print(obj:any)
{

  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
  this.act.printVoucher(obj.recordid).subscribe(res =>
    {
      
var det:any=res;
if(det.filename != '')
{
window.open( this.adm.getReportsURL() + det.filename,'_blank');
obj.printCount=obj.printCount+1;
}
 
this.spinner.hide();
    });

 
}
  valChk():Boolean
{

   if(+this.revAccount<=0)
   {
     this.adm.showMessage('Reverse account not selected','Warning',3);
     return false;
   }
   if(this.transdet.length <= 0)
   {
     this.adm.showMessage('Receipt details not added','Warning',3);
     return false;
   }
   if(this.narration=='')
   {
    this.adm.showMessage('Narration not mentioned','Warning',3);
    return false;
   }
  
  return true;
}
public delete()
{
  Swal.fire({  
    title:  'Deletes Receipt Details' ,  
    text: 'You will not be able to recover this file!',  
    icon: 'warning',  
    showCancelButton: true,  
    confirmButtonText: 'Yes, confirm it!',  
    cancelButtonText: 'No, keep it'  
  }).then((result) => {  
    if (result.value) { 

  
    this.makeTotalAmt();
      var header:any={
        RecordId:this.recordID,
        Dat:new Date(this.adm.strDate(this.tradat)),
          Narr:this.narration,
          Tratype:this.modeofpay,
          Traref:'',
          Vouchertype:'Receipt',
          BankDet:this.bankDet
      };

      var lines:any[]=[];
      for(var i=0;i<this.transdet.length;i++)
      {
        lines.push({
          RecordId:this.recordID,
          Sno:i+1,
          Accname:this.transdet[i].recordid,
          Cre:this.transdet[i].amt,
          Deb:0
        });
      }
      lines.push({
        RecordId:this.recordID,
        Sno:this.transdet.length+1,
        Accname:+this.reverseAccounts,
        Cre:0,
        Deb:this.totalAmt
      });
      var tracheck=3;
      this.act.setTransaction(header,lines,tracheck).subscribe(res =>{
      
          var result:any=res;
          if(result.result=='OK')
          {
            Swal.fire(  
               'Transaction Completed Successfully',  
              'Receipt deleted',  
              'success'  
            )  ;
              this.makeCle();
          }
          else
          {
            Swal.fire(  
              result.result,  
              'Error in transaction.',  
              'error'  
            )  ;
          }

          
      });
    }
  });
  
}
  public save()
  {

 
   
    if(this.valChk())
    {
      Swal.fire({  
        title:  this.recordID==0? 'Confirms Receipt Details':'Modifies Receipt Details' ,  
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
      this.makeTotalAmt();
        var header:any={
          Dat:new Date(this.adm.strDate(this.tradat)),
          Narr:this.narration,
          Tratype:this.modeofpay,
          Traref:'',
          Vouchertype:'Receipt',
          BankDet:this.bankDet
        };

        var lines:any[]=[];
        for(var i=0;i<this.transdet.length;i++)
        {
          lines.push({
            RecordId:this.recordID,
            
            Accname:this.transdet[i].recordid,
            Deb:0,
            Cre:this.transdet[i].amt,
            Dat:new Date(this.adm.strDate(this.tradat))
          });
        }
        lines.push({
          RecordId:this.recordID,
          Sno:this.transdet.length+1,
          Accname:+this.revAccount,
          Deb:this.totalAmt,
          Cre:0,
          Dat:new Date(this.adm.strDate(this.tradat))
        });
        var tracheck=this.recordID==0?1:2;
        if(this.recordID > 0)
        {
          header.RecordId=this.recordID;
        }
        this.act.setTransaction(header,lines,tracheck).subscribe(res =>{
         
            var result:any=res;
          
            if(result.result=='OK')
            {
              
              Swal.fire(  
                'Transaction Completed Successfully!',  
                'Receipt saved.',  
                'success'  
              )  ;
                this.makeCle();
            }
            else
            {
              Swal.fire(  
                result.result,  
                'Error in transaction.',  
                'error'  
              );
            }

            this.spinner.hide();
        });
      }
    });
    }
   
  }

  close()
  {
    this.opened=false;
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

    this.act.getListOfTransactions('Receipt',this.adm.strDate(this.listdat)).subscribe(res =>
      {
        
          this.listdet=res;

      });


  
 this.spinner.hide();
    
}


accountsAdd()
{
  this.acc.getAccountsForTransactions().subscribe(res =>
    {
      this.totalAccounts=res;
     
      this.transAccounts=this.totalAccounts.filter(a => a.actype=='FIN');
    })
}

public reverseAccountsAdd()
{
 
  let rev:String='BAN';
  if(this.modeofpay=='REC_CASH')
  {
    rev='CAS';
  }
  if(this.modeofpay=='REC_MOBILE_WALLET')
  {
    rev='MOB'
  }
  this.revAccount='';
  this.revgrp='';
  this.revbal=0;
this.reverseAccounts=this.totalAccounts.filter(a => a.actype== rev);

}


public searchItems()
{
    this.items=this.totalitems.filter((a:any) => a.accountname.toUpperCase().includes(this.searchtext.toUpperCase()));
}

openContent() {
  const modalRef = this.modalService.open(NgbdModalContent);
  modalRef.componentInstance.name = 'World';
}

 // Open default modal
 open(content) {

if(this.modeofpay.trim() != '')
{
  this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}

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

public getRevereseAccountDetails()
{
  var det=this.totalAccounts.filter(a => a.accountId==this.revAccount);
  if(det.length > 0)
  {
       this.revgrp=det[0].grp;
       
        this.revstr=det[0].balance >= 0? 'Dr ':'Cr ';
        this.revbal= Math.abs(det[0].balance);
  }
}


public addDetails()
{
  if(this.accdetail.accountName=='')
  {
    this.adm.showMessage('Account not selected','Warning',3);
    return;
  }
  if(this.amt<=0)
  {
    this.adm.showMessage('Enter valid amount','Warning',3);
    return;
  }
  this.transdet.push({
    recordid: this.accdetail.accountId,
    accname:this.accdetail.accountName,
    amt:this.amt
  });
  this.makeTotalAmt();
  this.accdetail={ accountId: 0, accountName: "", grp: "", actype: "",balance:0 };
this.amt=0;
}
public deleteDetails(obj)
{
  var index=this.transdet.indexOf(obj);
  if(index >=0)
  {
    this.transdet.splice(index,1);
    this.makeTotalAmt();
  }
}
public makeTotalAmt()
{
  this.totalAmt=0;
  for(var i=0;i<this.transdet.length;i++)
  {
    this.totalAmt=this.totalAmt+this.transdet[i].amt;
  
  }
}



}
