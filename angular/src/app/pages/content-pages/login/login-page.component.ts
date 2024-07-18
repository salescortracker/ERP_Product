import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AdminGeneralInfoService, UserCompleteInfo } from 'app/services/admin/admin-general-info.service';
import { LoginControls, LoginServiceService } from 'app/services/admin/login-service.service';

import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

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
  

if(ll != null)
{
  this.log.LoginAdmin(ll).subscribe(
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
          console.log(res);
          
          this.spinner.hide();
          this.router.navigateByUrl('prism/dashboard');
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


