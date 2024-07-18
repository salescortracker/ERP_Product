import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PartyDetailsService } from 'app/services/accounts/party-details.service';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { CrmRXPriceListService } from 'app/services/crm/crm-rxprice-list.service';

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
  selector: 'app-crm-leads-management',
  templateUrl: './crm-leads-management.component.html',
  styleUrls: ['./crm-leads-management.component.scss']
})
export class CrmLeadsManagementComponent implements OnInit {
  public treeObj:any;
  public actype='Lead';
  public authCheck:boolean=false;
  public partytype='LEA';
  public tracheck:number=1;
  public prevchk:boolean=true;
  public opened:boolean=false;
  public RestrictMode:number=0;
  public BankForSecurity:number=0;
  public country:number=0;
  public defaultcountry:string='';
  public eximcheck:boolean=false;
  public crecheck:Boolean=true;
  public delcheck:Boolean=true;
  public states:any;
public selectedstates:any;
public supcuschk:boolean=false;
  public pageno:number=1;
  public PAGESIZE:number=15;
  public totalpages:number=1;
  page4=1;
  public pricelists:any;
  public discountlists:any;
public savestr:string='Save';
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
   Pricelist:' ',
   Discountlist:' ',
   DualType:0,
   EximCheck:0,
   AirDestination:null,
   SeaDestination:null,
   BankForSecurity:0,
   MainCustomer:0,
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
   DefaultPaymentMode:'CASH',
   KycAcnumber:'',
   KycAcbank:'',
   KycAcbranch:'',
   KycAcholder:'',
   KycAcifsc:''
  };
  public recordid:number=0;
  public partygrp:string='';
  public parties:any[]=[];
  public totaladdresses:any[]=[];
  public totaldepartments:any[]=[];
  public addresses:any[]=[];
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
  public showaddress:any;
  public addressname:string='';
  public departments:any[]=[];
  public department:string='';
  public departmentid:string='';
  public totalparties:any=[];
  public searchtext:string='';
  public banks:any=[];
  public countries:any=[];
  
  constructor(private adm:AdminGeneralInfoService,private modalService: NgbModal,
    private spinner: NgxSpinnerService,private router:Router,private crm:CrmRXPriceListService,
    private par:PartyDetailsService,private  cou:AdmCountriesService,
   ) {
    if(this.adm.screenCheck(7,1,5,0))
    {
      this.authCheck=true;
      this.delcheck=this.adm.screenCheck(7,1,5,3);
      this.listAdd();
     
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
              
              var det=this.countries.filter(a => a.statu==2);
              if(det.length > 0)
              {
                this.defaultcountry=det[0].cntname;
          //      this.changeCountry();
              }
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
                  this.crm.getRxPriceListNames().subscribe(res =>
                    {
                      this.pricelists=res;
                      
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
                      this.crm.getRxDiscountListNames().subscribe(res =>
                        {
                          this.discountlists=res;
                          
                          this.spinner.hide();
                        });
          
      }
      else
      {
        this.router.navigateByUrl('crm/crmunauthorize')
        this.authCheck=false;
      }
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
        this.par.GetPartyCompleteDetails('LEA').subscribe(res =>
          {
            var result:any=res;
             this.treeObj=result.partygroups;
            this.totalparties=result.parties;
            this.totaladdresses=result.addresses;
            this.totaldepartments=result.departments;
            this.banks=result.banks;
            this.searchParties();
            this.spinner.hide();
          });
       }


      ngOnInit(): void {
      }
  
      openNew()
      {
        this.crecheck=this.adm.screenCheck(7,1,5,1);
        this.makeCle();
   this.opened=true;
   this.recordid=0;
   this.savestr="Save";
   this.prevchk=true;
      }
      openOld(obj)
      {
   
        this.crecheck=this.adm.screenCheck(7,1,5,2);
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
       Statu:obj.status=="Active"?1:2,
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
       MainCustomer:obj.mainCustomer,
       Pricelist:obj.pricelist,
   Discountlist:obj.discountlist,
       PartyCode:obj.partyCode,
       PartyUserName:obj.partyUserName,
       
   PrefLanguage:obj.prefLanguage,
   OrderReminder1:obj.orderReminder1,
   OrderReminder2:obj.orderReminder2,
   OrderReminder3:obj.orderReminder3,
   DefaultPurchaseorSaleType:obj.defaultPurchaseorSaleType,
   PaymentReminder1:obj.paymentReminder1,
   PaymentReminder2:obj.paymentReminder2,
   PaymentReminder3:obj.paymentReminder3,
   DefaultPaymentMode:obj.defaultPaymentMode,
   KycAcnumber:obj.kycAcnumber,
   KycAcbank:obj.kycAcbank,
   KycAcbranch:obj.kycAcbranch,
   KycAcholder:obj.kycAcholder,
   KycAcifsc:obj.kycAcifsc
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

this.addresses=[];
         var addrs=this.totaladdresses.filter(a => a.recordId == +obj.recordId);
         if(addrs)
         {
         for(var i=0;i<addrs.length;i++)
         {
          this.addresses.push({
            AddressName:addrs[i].addressName,
            Addres:addrs[i].addres,
            Country:addrs[i].country,
            Stat:addrs[i].stat,
            District:addrs[i].district,
            City:addrs[i].city,
            Zip:addrs[i].zip,
    
            Mobile:addrs[i].mobile,
            Tel:addrs[i].tel,
            Fax:addrs[i].fax,
            Email:addrs[i].email,
            Webid:addrs[i].webid,
            Statu:+addrs[i].statu,
          });
         }
        }

        this.departments=[];
        var depts=this.totaldepartments.filter(a => a.recordId ==  +obj.recordId);
        if(depts)
        {
          for(var i=0;i<depts.length;i++)
          {
            this.departments.push({
              Department:depts[i].department,
              DepartmentDetails:depts[i].departmentDetails
            });
          }
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
     Pricelist:' ',
   Discountlist:' ',
   MainCustomer:0,
     AirDestination:null,
     SeaDestination:null,
     BankForSecurity:0,
     PartyCode:null,
     PartyUserName:null,
     PrefLanguage:'',
     OrderReminder1:null,
     OrderReminder2:null,
     OrderReminder3:null,
     DefaultPurchaseorSaleType:' ',
     PaymentReminder1:null,
     PaymentReminder2:null,
     PaymentReminder3:null,
     DefaultPaymentMode:'CASH',
     KycAcnumber:'',
     KycAcbank:'',
     KycAcbranch:'',
     KycAcholder:'',
     KycAcifsc:''
     };
     this.addresses=[];
     this.departments=[];
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
      this.searchParties();
        });
      }
      
  
      
      
  public searchParties()
  {
    this.loadPage(1);
  }
  loadPage(event)
  {
    this.pageno=event;
    this.page4=event;
    this.searchDetails();
  }
  public searchDetails()
  {
    
    var parties:any;
    if(this.searchtext.trim()=='')
    {
        parties=this.totalparties;
    }
    else
    {
      parties=this.totalparties.filter((a:any) => a.partyName.toUpperCase().includes(this.searchtext.toUpperCase()));
    }
    this.totalpages=parties.length/this.PAGESIZE*10;
     this.parties=[];
    var start=(this.pageno-1)*this.PAGESIZE;
    var end=start+this.PAGESIZE-1;
      for(var i=start;i<=end;i++)
    {
      if(i==parties.length)
      {
        return;
      }
      else
      {
      this.parties.push(parties[i]);
      }
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
           this.addAddress();
         this.supplier.CrDaysCheck=this.supplier.CrDaysCheck==true?1:0;
         this.supplier.CrAmtCheck=this.supplier.CrAmtCheck ==true?1:0;
         this.supplier.EximCheck=this.supplier.EximCheck==true?1:0;
       this.supplier.DualType=this.supcuschk?1:0;
    this.supplier.RestrictMode=+this.supplier.RestrictMode;
    this.supplier.Statu=+this.supplier.Statu;
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
      
            //  this.supplier.RestrictMode=+this.RestrictMode;
              this.supplier.BankForSecurity=+this.BankForSecurity;
              this.tracheck=this.recordid==0?1:2;
              this.par.setPartyDetail(this.supplier,this.addresses,this.departments,this.tracheck).subscribe(res =>
                {
                  var result:any=res;
                   
                  if(result.result  =='OK')
      {
         Swal.fire(  
                  'Transaction Completed Successfully!',  
                  'Lead Details Saved.',  
                  'success'  
                );
                this.listAdd();
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
        this.supplier.CrDaysCheck=this.supplier.CrDaysCheck==true?1:0;
        this.supplier.CrAmtCheck=this.supplier.CrAmtCheck ==true?1:0;
        this.supplier.EximCheck=this.supplier.EximCheck==true?1:0;
       this.supplier.Country=+this.supplier.Country;
   this.supplier.RestrictMode=+this.supplier.RestrictMode;
   this.supplier.Statu=+this.supplier.Statu;
   console.log(this.supplier,'supplier');
        Swal.fire({  
         title: 'Deletes ' + this.actype + ' Details' ,  
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
     
               this.supplier.BankForSecurity=+this.BankForSecurity;
               this.par.setPartyDetail(this.supplier,this.addresses,this.departments,3).subscribe(res =>
               {
                 var result:any=res;
                  
                 if(result.result  =='OK')
     {
        Swal.fire(  
                 'Transaction Completed Successfully!',  
                 'Lead Details Deleted.',  
                 'success'  
               );
               this.listAdd();
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
      public changeCountry()
  {
    var det=this.countries.filter(a => a.cntname==this.address.country);
    if(det.length > 0)
    {
      var rec=+det[0].recordId;
      this.selectedstates=this.states.filter(a => a.cntname == rec);
    }
      
      
    
  }
  valCheckAddress(x):boolean
  {
    if(this.address.nam.trim()=='')
    {
       return false;
    }
      if(this.address.addr.trim()=='')
      {
         return false;
      }
      

      return true;
  }
  public addAddress()
  {
    if(this.valCheckAddress(1))
    {
      this.addresses.push({
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
  }
   public updateAddress()
  {
    if(this.valCheckAddress(2))
    {
      var addr=this.addresses.filter(a => a.AddressName==this.addressname);
      debugger
      if(addr)
      {
        if(addr.length > 0)
        {
          addr[0].AddressName=this.address.nam;

          addr[0].Addres=this.address.addr;
          addr[0].Country=this.address.country;
          addr[0].Stat=this.address.stat;
          addr[0].District=this.address.district;
          addr[0].City=this.address.city;
          addr[0].Zip=this.address.zip;
          addr[0].Mobile=this.address.mobile;
          addr[0].Tel=this.address.tel;
          addr[0].Fax=this.address.fax;
          addr[0].Email=this.address.email;
          addr[0].Webid=this.address.web;
          addr[0].Statu=+this.address.statu;
        }
        this.modalService.dismissAll();
      }
    }
  }
  public deleteAddress()
  {
      var index=this.addresses.indexOf(this.showaddress);
      if(index >= 0)
      {
        this.addresses.splice(index,1);
        this.modalService.dismissAll();
      }
  }
public closeAddress()
{
  this.modalService.dismissAll();
}
public valCheckDepartment():boolean
{
  if(this.department.trim()=='')
  {
    this.adm.showMessage('Department name not mentioned','Warning',3);
    return false;
  }
  if(this.departmentid.trim()=='')
  {
    this.adm.showMessage('Department Detail not mentioned','Warning',3);
    return false;
  }
  var det=this.departments.filter(a => a.Department==this.department);
  if(det.length > 0)
  {
    this.adm.showMessage('This department already added','Warning',3);
    return false;
  }
  return true;
}
  addDepartment()
  {
    if(this.valCheckDepartment())
    {
      this.departments.push({
        Department:this.department,
        DepartmentDetails:this.departmentid
      });
      this.department='';
      this.departmentid='';
    }
  }
  deleteDepartment(obj:any)
  {
    var index=this.departments.indexOf(obj);
    if(index >= 0)
{
  this.departments.splice(index,1);
}
  }





  
openModal(customContent,x,obj) {
  if(x==1)
  {
    this.address={
      id:0,
      nam:'',
      addr:'',
      country:this.defaultcountry,
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
  this.changeCountry();
  }
  else
  {
    this.showaddress=obj;
    this.addressname=obj.AddressName;
    this.address={
      id:1,
      nam:obj.AddressName,
      addr:obj.Addres,
      country:obj.Country,
      stat:obj.Stat,
      district:obj.District,
      city:obj.City,
      zip:obj.Zip,
      mobile:obj.Mobile,
      tel:obj.Tel,
      fax:obj.Fax,
      email:obj.Email,
      web:obj.Webid,
      statu:+obj.Statu,
  };
  }
  let ngbModalOptions: NgbModalOptions = {
    backdrop : 'static',
    keyboard : false
};
this.modalService.open(customContent,  ngbModalOptions);
}

    }
    