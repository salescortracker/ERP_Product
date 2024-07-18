import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
 import { InvSetupService } from 'app/services/inventory/inv-setup.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inv-setup',
  templateUrl: './inv-setup.component.html',
  styleUrls: ['./inv-setup.component.scss']
})
export class InvSetupComponent implements OnInit {

  public costingtype:number=-1;
  public authCheck:Boolean=false;
  constructor(private inv:InvSetupService,private adm:AdminGeneralInfoService,private spinner: NgxSpinnerService) {
   if(this.adm.screenCheck(3,12,1,0))
   {
     this.authCheck=true;
    this.getInfo();
   }
    
   }

  ngOnInit(): void {
  }

  public getInfo()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
    this.inv.getInventoryCostingInfo().subscribe(res =>
      {
        this.spinner.hide();
        var det:any=res;
        this.costingtype=+det.setupValue;
       
      });
  }
  public setInfo()
  {
    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });
      this.inv.setInventoryCostingInfo(this.costingtype).subscribe(res =>
        {
          this.spinner.hide();
          var det:any=res;
          if(det.detail=="OK")
          {
              this.adm.showMessage('Costing details changed successfully','Success',1);
          }
          else
          {
            this.adm.showMessage(det.detail,'Error',4);
          }
        });
  }

}
