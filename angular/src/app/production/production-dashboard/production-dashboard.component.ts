import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { PpcReportsService } from 'app/services/production/ppc-reports.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-production-dashboard',
  templateUrl: './production-dashboard.component.html',
  styleUrls: ['./production-dashboard.component.scss']
})
export class ProductionDashboardComponent implements OnInit {
public top:any={
  fir:0,
  sec:0,
  thir:0,
  fou:0
};
public lin1:any;
public lin2:any;
  constructor(private adm:AdminGeneralInfoService,private router:Router,
    private  spinner: NgxSpinnerService,private ppc:PpcReportsService)  { 
      if(this.adm.screenCheck(10,0,0,1))
    {
        this.showDetails();
     }
    else
    {
        this.router.navigateByUrl('production/unauthorize');
    } }

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
        this.ppc.getPPCDashboard().subscribe(res =>
          {
              var dets:any=res;
              var det=dets.filter(a => a.typ < 90);
              if(det)
              {
                for(var i=0;i<det.length;i++)
                {
                  switch(det[i].typ)
                  {
                    case 1:
                      this.top.fir=det[i].fir;
                      break;
                      case 2:
                        this.top.sec=det[i].fir;
                        break;
                    case 3:
                      
                        this.top.thir=det[i].fir;
                        break;
                  case 4:
                   
                      this.top.fou=det[i].fir;
                      break;
                  }
                }
              }
              this.lin1=dets.filter(a => a.typ >= 100 && a.typ < 190);
              this.lin2=dets.filter(a => a.typ >= 200 && a.typ < 290);
              this.spinner.hide();
          });
    }

  ngOnInit(): void {
  }

}
