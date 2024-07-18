import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AdminGeneralInfoService, UserCompleteInfo } from 'app/services/admin/admin-general-info.service';
import { LoginControls, LoginServiceService } from 'app/services/admin/login-service.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
@Component({
  selector: 'app-manageinnlogin',
  templateUrl: './manageinnlogin.component.html',
  styleUrls: ['./manageinnlogin.component.scss']
})
export class ManageinnloginComponent{
  location: Location;
  loginFormSubmitted = false;
  isLoginFailed = false;
  public dat1=new Date("13-Feb-2003");
  public dat2= new Date();
  public presentyears=0;
  

  public customerid:number=null;
  public username:string='';
  public password:string='';

  loginForm = new FormGroup({
    customerCode: new FormControl(null, [Validators.required]),
    username: new FormControl('', [Validators.required]),
   password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });




  constructor(private router: Router, private authService: AuthService,private loca:Location,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,private toastr:ToastrService,
    
    private log:LoginServiceService,private adm:AdminGeneralInfoService) {
      this.location=this.loca;
      
      this.adm.clearSessionStorage();
      this.presentyears = Math.floor(this.dat2.getFullYear() - this.dat1.getFullYear());
  }

  get lf() {
    var x= this.loginForm.controls;
    return x;
  }

onSubmit()
{
  
    if(this.loginForm.value.customercode < 1000)
    {
        this.vendorLogin();
    }
    else
    {
      this.clientLogin();
    }
}

//VendorLigin
vendorLogin()
{
   
  this.loginFormSubmitted = true;
  if (this.loginForm.invalid) {
    return;
  }

  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });

  

var ll:LoginControls={
customerCode:this.loginForm.value.customercode,
userName:this.loginForm.value.username,
password:this.loginForm.value.password
};
var x=0;
  
if(ll != null)
{
this.log.LoginVerification(ll).subscribe(
    async res => {
    
      if(res==null)
      {
          this.toastr.error('Invalid Credentials');
          this.spinner.hide();
          x++;
      }
      else
      {
        localStorage.setItem('userdetails',JSON.stringify(res));
   
        
        this.spinner.hide();
        this.router.navigateByUrl('vendors/dashboard');
        x++;
      }
      
if(x==0)
{
this.spinner.hide();
this.toastr.error('Verify network');
}

    }
  );
  }

}

  // On submit button click
  clientLogin() {
  
  
    
this.customerid=this.loginForm.controls.customerCode.value;
this.username=this.loginForm.controls.username.value;
this.password=this.loginForm.controls.password.value;
    if(!this.customerid)
    {
      this.adm.showMessage('Enter valid Customer ID','Warning',3);
      return;
    }
    if(this.customerid==0)
    {
      this.adm.showMessage('Enter valid Customer ID','Warning',3);
      return;
    }
    if(!this.username)
    {
      this.adm.showMessage('Enter valid User name','Warning',3);
      return;
    }
    if(this.username.trim()=='')
    {
      this.adm.showMessage('Enter valid User name','Warning',3);
      return;
    }
    if(!this.password)
    {
      this.adm.showMessage('Enter Password','Warning',3);
      return;
    }
    if(this.password.trim()=='')
    {
      this.adm.showMessage('Enter Password','Warning',3);
      return;
    }

    this.loginFormSubmitted = true;
   
if(this.customerid != null && this.username.trim() != "" && this.password.trim() != "")
{
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    

var ll:LoginControls={
  customerCode:this.customerid,
  userName:this.username,
  password:this.password
};
var x=0;
var info:UserCompleteInfo=null;
 
if(ll != null)
{
  this.log.LoginVerification(ll).subscribe(
      async res => {
       
        if(res==null)
        {
            this.toastr.error('Invalid Credentials');
            this.spinner.hide();
            x++;
        }
        else
        {
          info=res;

   
          if(info.addr.country=="REGPROB")
          {
              this.adm.showMessage('Your License details are expired please contact your vendor','Error',4);
          }
          else
          {
            info.usr.vendor="101";
          this.adm.setUserCompleteInformation(info);
          console.log('info',info);
             if(this.findNextPage(info))
             {
                switch(info.usr.pCode)
                {
                  case "D-USI":
                    this.router.navigateByUrl('dashboard/dashboardUsine');
                    break;
                    case "D-USH":
                      this.router.navigateByUrl('dashboard/dashboardUsine');
                      break;
                }
             }
             else
             {
               this.adm.showMessage('You are not authorised for this system','Error',4);
             }
        }
        this.spinner.hide();
      }
    });
     }
  }
   
  }

  public makeLogin(event:any)
  {
      if(event.key=="Enter")
    {
      this.onSubmit();
    }
  }
  
  private findNextPage(usr:UserCompleteInfo):boolean
  {
    if(usr.usr.rCode.toLocaleLowerCase()=="administrator")
    {
      return true;
    }
    else
    {
    if(+usr.usr.webCheck ==1)
    {
      return true;
    }
    else
    {
      var det=localStorage.getItem('customercode');
      if(+usr.usr.cCode==+det)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
      
  }
  setEventFocus(event,x)
  {
    if(event.key=="Enter")
          {
    switch(x)
    {
      case 1:
        if(this.loginForm.controls.customerCode.value)
        {
          
            document.getElementById('ucode').focus();
           
        }
        break;
      case 2:
        if(this.loginForm.controls.username.value)
        {
          if(this.loginForm.controls.username.value.trim() != "")
          {
           
            document.getElementById('pass').focus();
           
        }
        }
        break;
        case 3:
          this.onSubmit();
          break;
          
    }
  }
  }
}


