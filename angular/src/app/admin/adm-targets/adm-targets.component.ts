import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmCountriesService } from 'app/services/admin/adm-countries.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
@Component({
  selector: 'app-adm-targets',
  templateUrl: './adm-targets.component.html',
  styleUrls: ['./adm-targets.component.scss']
})
export class AdmTargetsComponent implements OnInit {

  public targets:any[]=[];
  constructor(private adm:AdminGeneralInfoService,private tgt:AdmCountriesService,private router:Router) {
    
    if(this.adm.screenCheck(-1,-1,-1,-1))
    {
        this.listAdd();
    }
    else
  {
    this.router.navigateByUrl('admin/unauthorize');
  }

  }

  ngOnInit(): void {
  }
public listAdd()
{
   this.tgt.getAdmTargets().subscribe(res =>
    {
      var det:any=res;
      this.targets=det;
      console.log(det);
    })
}
public saveTarget()
{
    this.tgt.setAdmTarget(this.targets).subscribe(res =>
      {
          var result:any=res;
          if(result.result=="OK")
          {
              this.adm.showMessage('Target values reverted successfully','success',1);
          }
          else
{
  this.adm.showMessage(result.result,'Error',4);
}

      });
}

}
