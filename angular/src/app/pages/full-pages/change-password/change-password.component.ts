import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { LoginServiceService } from 'app/services/admin/login-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
public isLoginMissmatch:boolean=false;
loginForm = new FormGroup({
  oldpassword: new FormControl('', [Validators.required]),
  newpassword1: new FormControl('', [Validators.required]),
  newpassword2: new FormControl('', [Validators.required])
   
});

  constructor(private adm:AdminGeneralInfoService,private log:LoginServiceService) { }

  ngOnInit(): void {
  }
private valChk():boolean
{
  if(this.loginForm.controls.oldpassword.value.trim()=="")
  {
    this.adm.showMessage('Old password not mentioned','Warning',3);
    return false;
  }
  if(this.loginForm.controls.newpassword1.value.trim()!=this.loginForm.controls.newpassword2.value.trim())
  {
    this.adm.showMessage('Miss match in new passwords','Warning',3);
    return false;
  }
  return true;
}
  public onSubmit()
  {
    if(this.valChk())
    {
        this.log.LoginChangePassword(this.loginForm.controls.oldpassword.value,this.loginForm.controls.newpassword1.value).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                this.adm.showMessage('Password changed successfully','Success',1);
                this.loginForm = new FormGroup({
                  oldpassword: new FormControl('', [Validators.required]),
                  newpassword1: new FormControl('', [Validators.required]),
                  newpassword2: new FormControl('', [Validators.required])
                   
                });
              }
              else
              {
                this.adm.showMessage(det.result,'Error',4);
              }
          });
    }
  }
  public checkPasswordMatch()
  {
      if(this.loginForm.controls.newpassword1.value==this.loginForm.controls.newpassword2.value)
      {
        this.isLoginMissmatch=false;
      }
      else
      {
        this.isLoginMissmatch=true;
      }
  }
}
