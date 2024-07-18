import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmRolesService } from 'app/services/admin/adm-roles.service';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';

@Component({
  selector: 'app-adm-system-make',
  templateUrl: './adm-system-make.component.html',
  styleUrls: ['./adm-system-make.component.scss']
})
export class AdmSystemMakeComponent implements OnInit {
public saveString:string='';
public chk:boolean=false;
public cCode:number=0;
  constructor(private gen:AdminGeneralInfoService,private router:Router) {
    this.cCode=this.gen.getUserCompleteInformation().usr.cCode;
    this.checkSystem();
   
   }

  ngOnInit(): void {
  }
public checkSystem()
{
  if(this.gen.screenCheck(-1,-1,-1,-1))
  {
    var det=+localStorage.getItem('customercode');
    if(det)
    {
        if(det==this.cCode)
        {
          this.saveString='Remove System';
          this.chk= true;
        }
        else
        {
          this.saveString='Add System';
          this.chk=  false;
        }
    }
    else
    {
      this.saveString='Add System';
      this.chk=  false;
    }
  }
  else
  {
    this.router.navigateByUrl('admin/unauthorize');
  }
}

public makeSystem()
{
  if(this.chk)
  {
    localStorage.removeItem('customercode');
    this.saveString='Add System';
    this.chk=false;
    this.gen.showMessage('This system is removed from users list','Success',1);
  }
  else
  {
    localStorage.setItem('customercode', this.cCode.toString());
    this.saveString='Remove System';
    this.chk=true;
    this.gen.showMessage('This system is added to users list','Success',1);
  }
}
}
