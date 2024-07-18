import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccAccountsService } from 'app/services/accounts/acc-accounts.service';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-sal-customers',
  templateUrl: './sal-customers.component.html',
  styleUrls: ['./sal-customers.component.scss']
})
export class SalCustomersComponent implements OnInit {
  public treeObj:any;
  public actype='Customer';
  public authCheck:boolean=false;
  public partytype='CUS';
  public tracheck:number=1;
  public prevchk:boolean=true;
  public opened:boolean=false;
public savestr:string='Save';
  public supplier:any={
   RecordId:0,
   PartyName:null,
   PartyGroup:0,
   Addr:null,
   Country:-1,
   Stat:null,
   District:null,
   City:null,
   Zip:null,
   Mobile:null,
   Tel:null,
   Fax:null,
   Email:null,
   Web:null,  
   Statu:1,
   ContactPerson:null,
   ContactDesignation:null,
   ContactMobile:null,
   ContactEmail:null,
   LeadTime:null,
   CrDaysCheck:0,
   CrDay:null,
   CrAmtCheck:0,
   CrAmt:null,
   RestrictMode:0,
   Gst:null,
   Cin:null,
   Pan:null,
   Din:null,
   PartyType:this.partytype,
   DualType:0,
   EximCheck:0,
   AirDestination:null,
   SeaDestination:null,
   BankForSecurity:0,
   PartyCode:null,
   PartyUserName:null
  };
  public recordid:number=0;
  public partygrp:string='';
  public parties:any[]=[];
  public totalparties:any=[];
  public searchtext:string='';
  public banks:any=[];
  public countries:any=[];
  constructor(private par:PartyDetailsService,private  cou:AdmCountriesService, private adm:AdminGeneralInfoService,private router:Router, private spinner: NgxSpinnerService) {
  if(this.adm.screenCheck(2,1,9,0))
  {
    this.authCheck=true;
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.par.GetPartyCompleteDetails('SUP').subscribe(res =>
      {
        var result:any=res;
        this.treeObj=result.partygroups;
        this.totalparties=result.parties;
        this.banks=result.banks;
        this.makeFilter();
        this.spinner.hide();
      });
      this.spinner.show(undefined,
        {
          type: 'ball-triangle-path',
          size: 'medium',
          bdColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          fullScreen: true
        });
        this.cou.getAdmActiveCountries().subscribe(res =>
          {
            this.countries=res;
            console.log('countries',this.countries);
            this.spinner.hide();
          });
        
    }
    else
    {
      this.authCheck=false;
    }
     }
  
    ngOnInit(): void {
    }

    openNew()
    {
      this.makeCle();
 this.opened=true;
 this.recordid=0;
 this.savestr="Save";
 this.prevchk=true;
    }
    openOld(obj)
    {


       this.recordid=obj.recordId;
       this.opened=true;
      this.savestr="Modify";

      this.supplier={
        RecordId:obj.recordId,
     PartyName:obj.partyName,
     PartyGroup:obj.partyGroup,
     Addr:obj.addr,
     Country:obj.country,
     Stat:obj.stat,
     District:obj.district,
     City:obj.city,
     Zip:obj.zip,
     Mobile:obj.mobile,
     Tel:obj.tel,
     Fax:obj.fax,
     Email:obj.email,
     Web:obj.web,  
     Statu:obj.statu,
     ContactPerson:obj.contactPerson,
     ContactDesignation:obj.contactDesignation,
     ContactMobile:obj.contactMobile,
     ContactEmail:obj.contactEmail,
     LeadTime:obj.leadTime,
     CrDaysCheck:obj.crDaysCheck,
     CrDay:obj.crDay,
     CrAmtCheck:obj.CrAmtCheck,
     CrAmt:obj.crAmt,
     RestrictMode:obj.restrictMode,
     Gst:obj.gst,
     Cin:obj.cin,
     Pan:obj.pan,
     Din:obj.din,
     PartyType:this.partytype,
     DualType:obj.dualType,
     
     EximCheck:obj.eximCheck,
     AirDestination:obj.airDestination,
     SeaDestination:obj.seaDestination,
     BankForSecurity:obj.bankForSecurity,
     PartyCode:obj.partyCode,
     PartyUserName:obj.partyUserName
       };
      this.partygrp=obj.partyGroupName;
       if(obj.partyUserName)
       {
         if(obj.partyUserName.trim()!=null)
         {
          this.prevchk=false;
         }
         else
         {
          this.prevchk=true;
         }
       }
       else
       {
        this.prevchk=true;
       }
    }
    close()
    {
      this.opened=false;
    }
  makeCle()
  {
    
    this.partygrp='';
    this.supplier={
   RecordId:0,
   PartyName:null,
   PartyGroup:0,
   Addr:null,
   Country:-1,
   Stat:null,
   District:null,
   City:null,
   Zip:null,
   Mobile:null,
   Tel:null,
   Fax:null,
   Email:null,
   Web:null,  
   Statu:1,
   ContactPerson:null,
   ContactDesignation:null,
   ContactMobile:null,
   ContactEmail:null,
   LeadTime:null,
   CrDaysCheck:0,
   CrDay:null,
   CrAmtCheck:0,
   CrAmt:null,
   RestrictMode:0,
   Gst:null,
   Cin:null,
   Pan:null,
   Din:null,
   PartyType:this.partytype,
   DualType:0,
   EximCheck:0,
   AirDestination:null,
   SeaDestination:null,
   BankForSecurity:0,
   PartyCode:null,
   PartyUserName:null
   };
  }
  public toggleVisible(obj:any)
  {
    obj.openCheck=!obj.openCheck;
  }
  public toggleVisiblePlus(obj:any)
  {
    obj.openCheck=!obj.openCheck;
    this.partygrp=obj.subGroup;
    this.supplier.PartyGroup=obj.recordId;
  }
  
    private getParties()
    {
      this.par.getPartyDetails(this.partytype).subscribe(res =>{
  this.totalparties=res;
  this.makeFilter();
      });
    }
  public makeFilter()
  {
    
    if(this.searchtext.trim()=='')
    {
        this.parties=this.totalparties;
    }
    else
    {
       this.parties=this.totalparties.filter((a:any) => a.partyName.toUpperCase().includes(this.searchtext.toUpperCase()));
    }
  }
  private valChk()
  {
    if(!this.supplier.PartyName)
    {
      this.adm.showMessage('No ' + this.actype + ' Selected','Warning',3);
      return false;
    }
    if(this.supplier.PartyName.trim()=='')
    {
      this.adm.showMessage('No ' + this.actype + ' Selected','Warning',3);
      return false;
    }
    if(this.partygrp.trim()=='')
    {
      this.adm.showMessage(  this.actype + ' group not Selected','Warning',3);
      return false;
    }
    return true;
  }
    public save()
    {
      if(this.valChk())
       {
       this.supplier.CrDaysCheck=this.supplier.CrDaysCheck==true?1:0;
       this.supplier.CrAmtCheck=this.supplier.CrAmtCheck ==true?1:0;
       this.supplier.EximCheck=this.supplier.EximCheck==true?1:0;
  
  
  
       Swal.fire({  
        title:this.recordid==0?  'Confirms ' + this.actype + ' Details' : 'Modifies ' + this.actype + ' details' ,  
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
    
    
            
            var dets:any[]=[];
            this.par.setPartyDetail(this.supplier,dets,dets,this.tracheck).subscribe(res =>
              {
                var result:any=res;
                 
                if(result.result  =='OK')
    {
       Swal.fire(  
                'Transaction Completed Successfully!',  
                'Supplier Details Saved.',  
                'success'  
              );
              this.getParties();
              this.makeCle();
              if(this.recordid > 0)
              {
                this.opened=false;
              }
     
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
    public delete()
    {

    }
  }
  
