import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmRolesService } from 'app/services/admin/adm-roles.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-adm-system-verification',
  templateUrl: './adm-system-verification.component.html',
  styleUrls: ['./adm-system-verification.component.scss']
})
export class AdmSystemVerificationComponent implements OnInit {

  public verification:boolean=false;
  constructor(private spinner:NgxSpinnerService,private router:Router, private adm:AdmRolesService,private gen:AdminGeneralInfoService) {
   
   if(this.gen.screenCheck(-1,-1,-1,-1))
   {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.adm.getSystemRequirement().subscribe(res =>
      {
          var det:any=res;
          if(det.result=='YES')
          {
            this.verification=true;
          }
          else
          {
            this.verification=false;
          }
          this.spinner.hide();
      });
    }
else
{
  this.router.navigateByUrl('admin/unauthorize');
}


   }

  ngOnInit(): void {
  }

  public setVerification()
  {
    var str:string='YES';
    if(this.verification)
    {
      str='YES';
    }
    else
    {
      str='NO';
    }
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.adm.setSystemRequirement(str).subscribe(res =>
        {
          var result:any=res;
            if(result.result=='OK')
            {
                this.gen.showMessage('Reverted successfully','Success',1);
            }
            else
            {
              this.gen.showMessage(result,'Error',4);
            }
            this.spinner.hide();
        });
  }
}
