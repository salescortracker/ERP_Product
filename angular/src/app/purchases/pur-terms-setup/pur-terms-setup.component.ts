import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { InvSetupService } from 'app/services/inventory/inv-setup.service';

@Component({
  selector: 'app-pur-terms-setup',
  templateUrl: './pur-terms-setup.component.html',
  styleUrls: ['./pur-terms-setup.component.scss']
})
export class PurTermsSetupComponent implements OnInit {
public details:any;
public term:string='';
  constructor(private adm:AdminGeneralInfoService,private router:Router,private inv:InvSetupService) {

    if(this.adm.screenCheck(2,8,2,0))
{
      this.listAdd();
   
}
else
{
this.router.navigateByUrl('purchases/purunauthorize')
}
   }

  ngOnInit(): void {
  }
listAdd()
{
  this.inv.getPurTerms().subscribe(res =>
    {
        this.details=res;
        console.log(res);
    });
}


public save()
{
  if(this.term=='')
  {
    this.adm.showMessage('Term not entered','warning',3);
    return;
  }
   
  this.inv.setPurTerms(this.term,1).subscribe(res =>
    {
        var result:any=res;
        if(result.result=='OK')
        {
          this.adm.showMessage('Term added successfully','Success',1);
          this.listAdd();
          this.term='';
        }
        else
        {
          this.adm.showMessage(result.result,'Error',4);
        }
    });
}
public delete(det:any)
{
  
this.inv.setPurTerms(det.term,3).subscribe(res =>
  {
      var result:any=res;
      if(result.result=='OK')
      {
        this.adm.showMessage('Term deleted successfully','Success',1);
        this.listAdd();
        this.term='';
      }
      else
      {
        this.adm.showMessage(result.result,'Error',4);
      }
  });
}


}
