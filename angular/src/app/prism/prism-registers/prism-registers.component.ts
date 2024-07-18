import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PrismRegisterService } from 'app/services/prism/prism-register.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-prism-registers',
  templateUrl: './prism-registers.component.html',
  styleUrls: ['./prism-registers.component.scss']
})
export class PrismRegistersComponent implements OnInit {
  public open:boolean=true;
  public customer:any={
    Customer:'',
    Addr:'',
    Country:'',
    Stat:'',
    District:'',
    City:'',
    Zip:'',
    Mobile:'',
    Tel:'',
    Fax:'',
    Email:'',
    Web:'',
    ProductId:'',
    defaultUser:'',
    currencySymbol:'',
    currency:'',
    coins:'',
    fiscal:'',
    servername:'',
    database:'',
    username:'',
    password:'',
    Urldet:''
  };
  public fdate:Date= new Date();
  public result:any={
    customerCode:null,
    username:'',
    password:'',
    result:''
  };
  public products:any;
  constructor(private prism:PrismRegisterService,private adm:AdminGeneralInfoService,
    private spinner: NgxSpinnerService,private router:Router) {
this.productsAdd();
     }
public productsAdd()
{
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.prism.getPrismProducts().subscribe(res =>
      {
          this.products=res;
          this.spinner.hide();
      });
}
  ngOnInit(): void {
  }
private valChk():boolean
{
  if(this.customer.Customer.trim()=='')
  {
    this.adm.showMessage('Company not selected','Warning',3);
    return false;
  }
  if(this.customer.Mobile.trim()=='')
  {
    this.adm.showMessage('Mobile not selected','Warning',3);
    return false;
  }
  if(this.customer.Email.trim()=='')
  {
    this.adm.showMessage('Email not selected','Warning',3);
    return false;
  }
  if(this.customer.ProductId.trim()=='')
  {
    this.adm.showMessage('Product Code not selected','Warning',3);
    return false;
  }
  if(this.customer.defaultUser.trim()=='')
  {
    this.adm.showMessage('User name not selected','Warning',3);
    return false;
  }


  return true;
}
  public setRegistration()
  {
      if(this.valChk())
      {
        Swal.fire({  
          title:   'Confirms Register Details' ,  
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
              this.customer.fiscal=this.adm.stringData(this.fdate);
              this.prism.setPrismRegistration(this.customer).subscribe(res =>
                {
                      var det:any=res;
                      if(det.result=='OK')
                      {
                        this.adm.showMessage('Registration completed successfully','Success',1);
                        this.result={
                          customerCode:det.customerCode,
                          username:det.username,
                          password:det.password,
                          result:det.result
                        };
                        this.open=false;
                      }
                      else
                      {
                        this.adm.showMessage(det.result,'Error',4);
                      }
                      this.spinner.hide();
                });
              
    
      }
    
    });
        }
       
  }
  
public parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
}

}
