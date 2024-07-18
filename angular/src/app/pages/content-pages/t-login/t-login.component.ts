import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AdminGeneralInfoService, UserCompleteInfo } from 'app/services/admin/admin-general-info.service';
import { LoginControls, LoginServiceService } from 'app/services/admin/login-service.service';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-t-login',
  templateUrl: './t-login.component.html',
  styleUrls: ['./t-login.component.scss']
})
export class TLoginComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;
  public dat1=new Date("13-Feb-2003");
  public dat2= new Date();
  public presentyears=0;
  

  public customerid:number=null;
  public username:string='';
  public password:string='';

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
      this.presentyears = Math.floor(this.dat2.getFullYear() - this.dat1.getFullYear());
  }

  get lf() {
    var x= this.loginForm.controls;
    return x;
  }

  // On submit button click
  onSubmit() {

    if(!this.loginForm.controls.customercode.value)
    {
      this.adm.showMessage('Enter valid Customer ID','Warning',3);
      return;
    }
    if(this.loginForm.controls.customercode.value==0)
    {
      this.adm.showMessage('Enter valid Customer ID','Warning',3);
      return;
    }
    if(!this.loginForm.controls.username.value)
    {
      this.adm.showMessage('Enter valid User name','Warning',3);
      return;
    }
    if(this.loginForm.controls.username.value.trim()=='')
    {
      this.adm.showMessage('Enter valid User name','Warning',3);
      return;
    }
    if(!this.loginForm.controls.password.value)
    {
      this.adm.showMessage('Enter Password','Warning',3);
      return;
    }
    if(this.loginForm.controls.password.value.trim()=='')
    {
      this.adm.showMessage('Enter Password','Warning',3);
      return;
    }
    this.loginFormSubmitted = true;
   

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

    

var ll:LoginControls={
  customerCode:this.loginForm.controls.customercode.value,
  userName:this.loginForm.controls.username.value,
  password:this.loginForm.controls.password.value
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
          this.adm.setUserCompleteInformation(info);
          var nxtpage:boolean=false;
          nxtpage=this.findNextPage(info);


          if(nxtpage)
          {
            this.router.navigateByUrl('tool/tooldash');
          }
          else
          {
            this.adm.showMessage('Invalid Credentials','Error',4);
            this.adm.clearSessionStorage();
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

  
  private findNextPage(usr:UserCompleteInfo):boolean
  {
    if(usr.usr.rCode.toLocaleLowerCase()=="administrator")
    {
      return true;
    }
    else
    {
      return false;
    }      
  }
}


