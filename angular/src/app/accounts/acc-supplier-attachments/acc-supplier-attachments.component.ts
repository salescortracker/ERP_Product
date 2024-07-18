import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-acc-supplier-attachments',
  templateUrl: './acc-supplier-attachments.component.html',
  styleUrls: ['./acc-supplier-attachments.component.scss']
})
export class AccSupplierAttachmentsComponent implements OnInit {

public treeObj:any;
public actype='Supplier';
public crdayscheck:Boolean=false;
public cramtcheck:Boolean=true;
public prevchk:Boolean=true;
public supplier:any={
 RecordId:0,
 ConPerson:'',
 Designation:'',
 Mobile:'',
 Email:'',
 LeadTime:0,
 CrDaysChk:0,
 CrDays:0,
 CrAmtChk:0,
 CrAmt:0,
 RestrictMode:0,
 Gst:'',
 Cin:'',
 Pan:'',
 Din:'',
 SupCusChk:0,
 EximChk:0,
 AirDest:'',
 SeaDest:'',
 BankForSecurity:0
};
public party:string='';
public partygrp:string='';

public parties:any=[];

public banks:any=[];

  constructor(private acc:AccAccountsService,private adm:AdminGeneralInfoService,private router:Router, private spinner: NgxSpinnerService) {
if(this.adm.screenCheck(1,1,6,0))
{
    this.acc.getTreeWiseAccounts('SUNDRY CREDITORS').subscribe(res =>{

this.treeObj=res;
    });

    this.acc.getAccountsTypeWise('BAN').subscribe(res =>{
    
this.banks=res;
    });

this.getParties();
  }
  else
  {
    this.router.navigateByUrl('accounts/accunauthorize');
  }
   }

  ngOnInit(): void {
  }
makeCle()
{
  this.party='';
  this.partygrp='';
  this.supplier={
    RecordId:0,
    ConPerson:'',
    Designation:'',
    Mobile:'',
    Email:'',
    LeadTime:undefined,
    CrDaysChk:0,
    CrDays:undefined,
    CrAmtChk:0,
    CrAmt:undefined,
    RestrictMode:0,
    Gst:'',
    Cin:'',
    Pan:'',
    Din:'',
    SupCusChk:0,
    EximChk:0,
    AirDest:'',
    SeaDest:'',
    BankForSecurity:0,
    usercode:'',
    partyCode:''
   };
}

  public changeBool(det:Boolean)
  {
    this.cramtcheck=!this.cramtcheck;
  }
  public toggleVisible(obj:any)
{
  obj.openCheck=!obj.openCheck;
}
public toggleVisiblePlus(obj:any)
{
  obj.openCheck=!obj.openCheck;
  
  if(obj.groupcode =='SPECIAL')
  {
    this.makeCle();
    this.supplier.RecordId=obj.recordId; 
    this.party=obj.subGroup;
    this.partygrp=obj.mainGroup;
    var det=this.parties.filter(a => a.recordId == obj.recordId);
  
if(det != null)
{
  if(det.length > 0)
  {
   
     
    this.supplier.ConPerson=det[0].conPerson;
    this.supplier.Designation=det[0].designation;
    this.supplier.Mobile=det[0].mobile;
    this.supplier.Email=det[0].Eeail;
    this.supplier.LeadTime=det[0].leadTime;
    this.supplier.CrDaysChk=det[0].crDaysChk;
    this.supplier.CrDays=det[0].crDays;
    this.supplier.CrAmtChk=det[0].crAmtChk;
    this.supplier.CrAmt=det[0].crAmt;
    this.supplier.RestrictMode=det[0].restrictMode;
    this.supplier.Gst=det[0].gst;
    this.supplier.Cin=det[0].cin;
    this.supplier.Pan=det[0].pan;
    this.supplier.Din=det[0].din;
    this.supplier.SupCusChk=det[0].supCusChk;
    this.supplier.EximChk=det[0].eximChk;
    this.supplier.AirDest=det[0].airDest;
    this.supplier.SeaDest=det[0].seaDest;
    this.supplier.BankForSecurity=det[0].bankForSecurity;
    this.supplier.usercode=det[0].usercode;
    this.supplier.partyCode=det[0].partyCode;
    if(det[0].usercode.trim() != '')
    this.prevchk=false;
    else
    this.prevchk=true;
  }
  else
  {
    this.prevchk=true;
  }
}


  }
  else
  {
      this.makeCle();
      this.prevchk=true;
  }



  }

  private getParties()
  {
    this.acc.getPartyDetails().subscribe(res =>{
this.parties=res;
    });
  }


  public save()
  {
    if(this.party.trim()=='')
    {
        this.adm.showMessage('No ' + this.actype + ' Selected','Warning',3);
    }
    else
    {
     
     this.supplier.CrDaysChk=this.supplier.CrDaysChk==true?1:0;
     this.supplier.CrAmtChk=this.supplier.CrAmtChk==true?1:0;
     this.supplier.EximChk=this.supplier.EximChk==true?1:0;



     Swal.fire({  
      title:  'Confirms ' + this.actype + ' attachments' ,  
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
  
  
          
          
          this.acc.setPartyDetails(this.supplier,this.actype).subscribe(res =>
            {
              var result:any=res;
               
              if(result.result  =='OK')
  {
     Swal.fire(  
              'Transaction Completed Successfully!',  
              'Supplier Details Save.',  
              'success'  
            )  ;
            this.getParties();
            this.makeCle();
   
     }
     else
     {
    Swal.fire(  
        result.result,  
        'Some error in transaction',  
        'error'  
      )  
    }
        
     
    this.spinner.hide();
    });
  }
  });


    }
  }
}
