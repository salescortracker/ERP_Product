import { Component, OnInit, Input  } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { CurrencyPipe } from '@angular/common';
import { AccTransactionsService } from 'app/services/accounts/acc-transactions.service';
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
  selector: 'app-acc-transfers',
  templateUrl: './acc-transfers.component.html',
  styleUrls: ['./acc-transfers.component.scss']
})
export class AccTransfersComponent implements OnInit {
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
  public transAccounts:any[]=[];
 
  public listdet:any;
public fromaccount:number=0;
public toaccount:number=0;
public amt:number=0;
 
public transdet:any[]=[];

public narration:String='';


public frmgrp:string='';
public togrp:string='';
public frmbal:number=0;
public tobal:number=0;
 

  constructor(private adm:AdminGeneralInfoService,private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private toastr:ToastrService,private acc:AccAccountsService,
    private act:AccTransactionsService
   ) {
if(this.adm.screenCheck(1,2,4,0))
{
  
  this.delCheck=this.adm.screenCheck(1,2,4,3);
  this.datCheck=this.adm.screenCheck(1,2,4,4);
  
    this.listAdd();
  this.accountsAdd();
 

  
}
else
{
  this.router.navigateByUrl('accounts/accunauthorize');
 
}
   }


  ngOnInit(): void {
  }
  
  openNew()
  {
    this.makeCle();
    this.creCheck=this.adm.screenCheck(1,2,4,1);
    this.saveStr='Save';
    this.opened=true;
  }
  private makeCle()
  {
    this.listAdd();
    
    this.delVisible=false;
    this.recordID=0;
    this.fromaccount=0;
    this.toaccount=0;
    this.transdet=[];
    this.narration='';
    this.opened=false;
  }
  openOld(obj:any)
  {
  
    this.recordID=obj.recordid;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
   
this.act.getTransactionInformation(this.recordID).subscribe(res => 
  {
    var det:any=res;
    var dat= new Date(det.header.dat);
    this.tradat={year: dat.getFullYear(), month: dat.getMonth() + 1, day: dat.getDate()};
    this.narration=det.header.narr;
    for(var i=0;i<det.lines.length;i++)
    {
      if(i==0)
      {
        this.fromaccount=det.lines[i].accname;
        this.amt=det.lines[i].cre;
      }
      else
      {
        this.toaccount=det.lines[i].accname;
      }
    }
    this.spinner.hide();

  });

  this.delVisible=true;
    this.creCheck=this.adm.screenCheck(1,2,4,2);
    this.saveStr='Modify';
    this.opened=true;
     
  }
  public getAccountName(rec):String
  {
 
    var det=this.totalAccounts.filter(a => a.accountId==rec);
    if(det.length > 0)
    return det[0].accountName;
  }

  valChk():Boolean
  {
   
    if(this.fromaccount ==0)
    {
      this.adm.showMessage('From account not selected','Warning',3);
      return false;
    }
    if(this.toaccount ==0)
    {
      this.adm.showMessage('To account not selected','Warning',3);
      return false;
    }
    if(this.amt <=0)
    {
      this.adm.showMessage('Amount not entered','Warning',3);
      return false;
    }
   if(this.fromaccount== this.toaccount)
   {
    this.adm.showMessage('From and To accounts should not be same','Warning',3);
    return false;
   }

    
    return true;
  }
  public delete()
  {
    Swal.fire({  
      title:   'Deletes Transfer Details' ,  
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
          RecordId:this.recordID,
          Dat:this.adm.strDate(this.tradat),
          Narr:this.narration,
          Tratype:'TRANSFER',
          Traref:'',
          Vouchertype:'Transfer',
          BankDet:''
        };
  
        var lines:any[]=[];
         
          lines.push({
            RecordId:this.recordID,
            Sno:1,
            Accname:this.fromaccount,
            Cre:0,
            Deb:+this.amt
          });
          lines.push({
            RecordId:this.recordID,
            Sno:2,
            Accname:this.toaccount,
            Cre:+this.amt,
            Deb:0
          });
        
       
        var tracheck=3;
        this.act.setTransaction(header,lines,tracheck).subscribe(res =>{
        
            var result:any=res;
            if(result.result=='OK')
            {
              Swal.fire(  
                'Transaction Completed Successfully!',  
                'Transfer deleted.',  
                'success'  
              )  ;
                this.makeCle();
            }
            else
            {
              Swal.fire(  
                result.result,  
                'Some error in transaction',  
                'error'  
              )  ;
            }
  
            this.spinner.hide();
        });
        
}
});
       
    
  }
    public save()
    {
  
   
     
      if(this.valChk())
      {
        Swal.fire({  
          title:  this.recordID==0? 'Confirms Transfer Details':'Modifies Transfer Details' ,  
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
            Dat:new Date(this.adm.strDate(this.tradat)),
            Narr:this.narration,
            Tratype:'TRANSFER',
            Traref:'',
            Vouchertype:'Transfer',
            BankDet:''
          };
  
          var lines:any[]=[];
          var lines:any[]=[];
         
          lines.push({
             Sno:1,
            Accname:+this.fromaccount,
            Deb:0,
            Dat:new Date(this.adm.strDate(this.tradat)),
            Cre:+this.amt
          });
          lines.push({
        
            Sno:2,
            Accname:+this.toaccount,
            Deb:+this.amt,
            Dat:new Date(this.adm.strDate(this.tradat)),
            Cre:0
          });
          if(this.recordID > 0)
          {
            header.RecordId=this.recordID;
          }
         
          var tracheck=this.recordID==0?1:2;
          this.act.setTransaction(header,lines,tracheck).subscribe(res =>{
           
              var result:any=res;
            
              if(result.result=='OK')
              {
                
                Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Transfer Saved.',  
                  'success'  
                )  ;
                  this.makeCle();
              }
              else
              {
                Swal.fire(  
                 result.result,  
                  'Some error in transaction.',  
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
  
      this.act.getListOfTransactions('Transfer',this.adm.strDate(this.listdat)).subscribe(res =>
        {
             this.listdet=res;
          });
    this.spinner.hide();
      
  }
  
  
  accountsAdd()
  {
    this.acc.getAccountsForTransfers().subscribe(res =>
      {
        this.totalAccounts=res;
        this.transAccounts= this.totalAccounts;
      });
  }
  public checkBalance(x)
  {
    if(x==1)
    {
      var det=this.transAccounts.filter(a => a.accountId==this.fromaccount);
      if(det.length > 0)
      {
        this.frmgrp=det[0].grp;
        this.frmbal=det[0].balance;
      }
    }
    else
    {
      var det=this.transAccounts.filter(a => a.accountId==this.toaccount);
      if(det.length > 0)
      {
        this.togrp=det[0].grp;
        this.tobal=det[0].balance;
      }
    }
  }
  
  }
  