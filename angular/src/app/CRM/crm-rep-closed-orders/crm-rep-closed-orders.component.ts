import { AbstractType, Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { CrmTempService } from 'app/services/crm/crm-temp.service';
import { NgxSpinnerService } from "ngx-spinner";

const now = new Date();

@Component({
  selector: 'app-crm-rep-closed-orders',
  templateUrl: './crm-rep-closed-orders.component.html',
  styleUrls: ['./crm-rep-closed-orders.component.scss']
})
export class CrmRepClosedOrdersComponent implements OnInit {
  public frmdate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  public todate:any={year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
public dets:any;
  constructor(private adm:AdminGeneralInfoService,private crm:CrmTempService,private spinner:NgxSpinnerService) { 
    this.showDetails();
  }
  
    ngOnInit(): void {
    }
  public showDetails()
  {
  this.spinner.show(undefined,
    {
      type: 'ball-triangle-path',
      size: 'medium',
      bdColor: 'rgba(0, 0, 0, 0.8)',
      color: '#fff',
      fullScreen: true
    });
    this.crm.getClosedOrders(this.adm.strDate( this.frmdate),this.adm.strDate(this.todate)).subscribe(res => 
      { 
        this.dets=res;
       console.log(res);
       this.spinner.hide();
      });
  }
  }
  