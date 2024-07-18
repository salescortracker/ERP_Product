import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { number } from 'ngx-custom-validators/src/app/number/validator';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

 
@Component({
  selector: 'app-pur-suppliers-child',
  templateUrl: './pur-suppliers-child.component.html',
  styleUrls: ['./pur-suppliers-child.component.scss']
})
export class PurSuppliersChildComponent implements OnInit {
  @Output()
  notify:EventEmitter<any>= new EventEmitter<any>();

  public treeObj:any;
  public actype='Supplier';
  public partytype='SUP';
   public country:number=0;
   public supplier:any={
    RecordId:0,
    PartyName:null,
    PartyGroup:0,
     
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
    
    PartyType:this.partytype,
    DualType:0,
    EximCheck:0,
    AirDestination:null,
    SeaDestination:null,
    BankForSecurity:0,
    PartyCode:null,
    PartyUserName:'',
 
    PrefLanguage:'',
    OrderReminder1:null,
    OrderReminder2:null,
    OrderReminder3:null,
    DefaultPurchaseorSaleType:' ',
    PaymentReminder1:null,
    PaymentReminder2:null,
    PaymentReminder3:null,
    DefaultPaymentMode:'CREDIT',
    KycAcnumber:'',
    KycAcbank:'',
    KycAcbranch:'',
    KycAcholder:'',
    KycAcifsc:''
   };
  public partygrp:string='';
  public countries:any=[];
  public states:any;
public selectedstates:any;
  public address:any={
    id:0,
    nam:'',
    addr:'',
    country:'',
    stat:'',
    district:'',
    city:'',
    zip:'',
    mobile:'',
    tel:'',
    fax:'',
    email:'',
    web:'',
    statu:1,
};

  constructor(private par:PartyDetailsService,private  cou:AdmCountriesService, private adm:AdminGeneralInfoService, private spinner: NgxSpinnerService) {
    if(this.adm.screenCheck(2,1,2,0))
    {
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
  
              this.cou.getTotalStates().subscribe(res =>
                {
                    this.states=res;
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
      this.par.GetPartyCompleteDetails('SUP').subscribe(res =>
        {
          var result:any=res;
          this.treeObj=result.partygroups;
          this.spinner.hide();
        });
    }
  }
       makeCle()
       {
        this.supplier={
          RecordId:0,
          PartyName:null,
          PartyGroup:0,
           
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
          
          PartyType:this.partytype,
          DualType:0,
          EximCheck:0,
          AirDestination:null,
          SeaDestination:null,
          BankForSecurity:0,
          PartyCode:null,
          PartyUserName:'',
       
          PrefLanguage:'',
          OrderReminder1:null,
          OrderReminder2:null,
          OrderReminder3:null,
          DefaultPurchaseorSaleType:' ',
          PaymentReminder1:null,
          PaymentReminder2:null,
          PaymentReminder3:null,
          DefaultPaymentMode:'CREDIT',
          KycAcnumber:'',
          KycAcbank:'',
          KycAcbranch:'',
          KycAcholder:'',
          KycAcifsc:''
         };
         this.address={
          id:0,
          nam:'',
          addr:'',
          country:'',
          stat:'',
          district:'',
          city:'',
          zip:'',
          mobile:'',
          tel:'',
          fax:'',
          email:'',
          web:'',
          statu:1,
      };
       }
    
      ngOnInit(): void {
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
      
    public changeCountry()
  {
    var det=this.countries.filter(a => a.cntname==this.address.country);
    if(det.length > 0)
    {
      var rec=+det[0].recordId;
      this.selectedstates=this.states.filter(a => a.cntname == rec);
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
      public saveSupplier()
      {
        if(this.valChk())
         {
        
          this.supplier.CrDaysCheck=this.supplier.CrDaysCheck==true?1:0;
          this.supplier.CrAmtCheck=this.supplier.CrAmtCheck ==true?1:0;
          this.supplier.EximCheck=this.supplier.EximCheck==true?1:0;
        this.supplier.DualType=0;
     this.supplier.RestrictMode=+this.supplier.RestrictMode;
     this.supplier.Statu=+this.supplier.Statu;
           Swal.fire({  
           title: 'Confirms ' + this.actype + ' Details',  
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
       
               var addresses:any[]=[];
               addresses.push({
                AddressName:this.address.nam,
                Addres:this.address.addr,
                Country:this.address.country,
                Stat:this.address.stat,
                District:this.address.district,
                City:this.address.city,
                Zip:this.address.zip,
        
                Mobile:this.address.mobile,
                Tel:this.address.tel,
                Fax:this.address.fax,
                Email:this.address.email,
                Webid:this.address.web,
                Statu:+this.address.statu,
              });
                
               this.par.setPartyDetail(this.supplier,addresses,[],1).subscribe(res =>
                 {
                   var result:any=res;
                    
                   if(result.result  =='OK')
       {
          Swal.fire(  
                   'Transaction Completed Successfully!',  
                   'Supplier Details Saved.',  
                   'success'  
                 );

                 var obj:any=
                 {
                   recordid:result.recordId,
                   supplier:this.supplier,
                   addresses:addresses,
                   grp:this.partygrp
                 }
                 this.notify.emit(obj);
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
