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
  selector: 'app-acc-payments',
  templateUrl: './acc-payments.component.html',
  styleUrls: ['./acc-payments.component.scss']
})
export class AccPaymentsComponent implements OnInit {
  public creCheck:Boolean=false;
  public delCheck:Boolean=false;
  public datCheck:Boolean=false;
  public delVisible:Boolean=false;
  public msg:string='';
public mindate:Date=new Date("1-Apr-23");
public maxdate:Date=new Date();
  public saveStr:string='';
 
public cash_det1:string='';

public card_det1:string='';
public card_det2:string='';
public card_det3:Date=new Date();

public cheque_det1:string='';
public cheque_det2:string='';
public cheque_det3:string='';
public cheque_det4:Date=new Date();

public online_det1:string='';
public online_det2:string='';
public online_det3:string='';

public mwallet_det1:string='';
public mwallet_det2:string='';

  public recordID:number=0;
  public listdat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public tradat:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public transdate:Date=new Date();
  public opened:boolean=false;
  public items:any;
  public totalitems:any;
  public searchtext:string='';
  
  public totalAccounts:any;
  public reverseAccounts:any;
  public revAccount:string='';
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
if(this.adm.screenCheck(1,2,1,0))
{
  this.delCheck=this.adm.screenCheck(1,2,1,3);
  this.datCheck=this.adm.screenCheck(1,2,1,4);
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
    this.creCheck=this.adm.screenCheck(1,2,1,1);
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
console.log('result',res);
     var dat=new Date(header.dat);
     this.tradat=this.adm.makeDate(dat);
     this.transdate=new Date(dat);

     this.modeofpay=header.tratype;
this.reverseAccountsAdd();

     this.narration=header.narr;
    
     this.transdet=[];
     for(var i=0;i<lines.length;i++)
     {
       if(lines[i].deb > 0)
       {
        this.transdet.push({
          recordid: lines[i].accname,
          accname:this.getAccountName( lines[i].accname),
          amt:lines[i].deb
        });
        
       }
       else
       {
         this.totalAmt=lines[i].cre;
         this.revAccount=lines[i].accname;
         this.getRevereseAccountDetails();
       }
     }



  });

    this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,2,1,2);
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
    if(this.adm.screenCheck(1,2,1,7))
    {
      this.print(obj);
    }
    else
    {
      this.adm.showMessage('You are not authorised to print Voucher','Warning',3);
    }
  }
  else
  {
    if(this.adm.screenCheck(1,2,1,8))
    {
      Swal.fire({  
        title:  'This voucher is already printed ' + obj.printCount + ' time(s) Do you want to reprint it' ,  
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
      this.adm.showMessage('You are not authorised to reprint Voucher ','Warning',3);
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
 
   if(+this.revAccount <= 0)
   {
     this.adm.showMessage('Reverse account not selected','Warning',3);
     return false;
   }
   if(this.transdet.length <= 0)
   {
     this.adm.showMessage('Payment details not added','Warning',3);
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
    title:  'Deletes Payment Details' ,  
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
          Vouchertype:'Payment',
          BankDet:this.bankDet
      };

      var lines:any[]=[];
      for(var i=0;i<this.transdet.length;i++)
      {
        lines.push({
          RecordId:this.recordID,
          Sno:i+1,
          Accname:this.transdet[i].recordid,
          Cre:0,
          Deb:this.transdet[i].amt
        });
      }
      lines.push({
        RecordId:this.recordID,
        Sno:this.transdet.length+1,
        Accname:+this.reverseAccounts,
        Cre:this.totalAmt,
        Deb:0
      });
      var tracheck=3;
      this.act.setTransaction(header,lines,tracheck).subscribe(res =>{
      
          var result:any=res;
          if(result.result=='OK')
          {
            
            Swal.fire(  
              'Transaction Completed Successfully!',  
              'Payment deleted.',  
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
        title:  this.recordID==0? 'Confirms Payment Details':'Modifies Payment Details' ,  
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

      var det1=' ';
      var det2=' ';
      var det3=' ';
      var det4=' ';

      switch(this.modeofpay)
      {
        case "PAY_CASH":
          det1=this.cash_det1;
          break;
        case "PAY_CARD":
          det1=this.card_det1;
          det2=this.card_det2;
          det3= this.adm.stringData(this.card_det3);
          break;
        case "PAY_CHEQUE":
          det1=this.cheque_det1;
          det2=this.cheque_det2;
          det3=this.cheque_det3;
          det4=this.adm.stringData(this.cheque_det4);
          break;
        case "PAY_ONLINE":
          det1=this.online_det1;
          det2=this.online_det2;
          det3=this.online_det3;
          break;
        case "PAY_MOBILE_WALLET":
          det1=this.mwallet_det1;
          det2=this.mwallet_det1;
          break;
      }


        var header:any={
          Dat:new Date(this.adm.stringData(this.transdate)),
          Narr:this.narration,
          Tratype:this.modeofpay,
          Traref:'',
          Vouchertype:'Payment',
          BankDet:this.bankDet,
          detail1:det1,
          detail2:det2,
          detail3:det3,
          detail4:det4
        };

        var lines:any[]=[];
        for(var i=0;i<this.transdet.length;i++)
        {
          lines.push({
             Sno:i+1,
            Accname:this.transdet[i].recordid,
            Cre:0,
            Deb:this.transdet[i].amt,
            Dat:new Date(this.adm.stringData(this.transdate))
          });
        }
        lines.push({
          Sno:this.transdet.length+1,
          Accname:+this.revAccount,
          Cre:this.totalAmt,
          Deb:0,
          Dat:new Date(this.adm.stringData(this.transdate))
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
                'Payment saved.',  
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

    this.act.getListOfTransactions('Payment',this.adm.strDate(this.listdat)).subscribe(res =>
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
      if(this.transAccounts.length > 0)
      {
        this.transdate=new Date(this.transAccounts[0].dat);
      //  document.getElementById("htradate").max=this.transdate;
      }
    })
}

public reverseAccountsAdd()
{
 
  let rev:String='BAN';
  if(this.modeofpay=='PAY_CASH')
  {
    rev='CAS';
  }
  if(this.modeofpay=='PAY_MOBILE_WALLET')
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
        this.revbal=  Math.abs(det[0].balance);
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

parseDate(dateString: string): Date {
  if (dateString) {

      return new Date(dateString);
  }
  return null;
}
public checkDate()
{
  if(this.transdate)
  {
    if(this.transdate > this.maxdate || this.transdate < this.mindate)
    {
        this.msg= this.adm.stringData(this.transdate) +  "       Your transaction should be between " + this.adm.stringData(this.mindate)  + " and " + this.adm.stringData(this.maxdate);
    }
    else
    {
      this.msg="";
    }
  }
  else
  {
    this.msg;
  }
}
}
