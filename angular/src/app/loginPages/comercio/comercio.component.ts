import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AdminGeneralInfoService, UserCompleteInfo } from 'app/services/admin/admin-general-info.service';
import { LoginControls, LoginServiceService } from 'app/services/admin/login-service.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comercio',
  templateUrl: './comercio.component.html'
   
})
export class ComercioComponent {
  public logincheck:boolean=true;
  
  loginFormSubmitted = false;
  isLoginFailed = false;

  
  loginForm = new FormGroup({
    customercode: new FormControl(null, [Validators.required]),
    username: new FormControl('', [Validators.required]),
   password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });




  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,private toastr:ToastrService,
    
    private log:LoginServiceService,private adm:AdminGeneralInfoService) {
      this.adm.clearSessionStorage();
  }

  get lf() {
    var x= this.loginForm.controls;
    return x;
  }

  public makeToggleLogin()
  {
    this.logincheck=!this.logincheck;
  }
  // On submit button click
  onSubmit() {

    

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

          console.log(res);
          this.adm.setUserCompleteInformation(info);
        //  alert(info.usr.pCode);
          switch(info.usr.pCode)
            {
                case "D-MIN":
                  this.router.navigateByUrl('dashboard/dashboardMINN');
                  break;
                case "D-COM":
                  this.router.navigateByUrl('dashboard/dashboardComercio')
                  break;
                case "D-USI":
                  this.router.navigateByUrl('dashboard/dashboardUsine')
                  break;
                case "D-REA":
                  this.router.navigateByUrl('dashboard/dashboardReal')
                  break;
            }
          this.spinner.hide();
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

  }


