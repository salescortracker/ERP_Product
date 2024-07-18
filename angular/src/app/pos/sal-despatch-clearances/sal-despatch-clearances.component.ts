import { Component, OnInit } from '@angular/core';
import { AdminGeneralInfoService } from 'app/services/admin/admin-general-info.service';
import { SalSalesService } from 'app/services/pos/sal-sales.service';
import { SalDispatchesService } from 'app/services/sales/sal-dispatches.service';
import { EmitAndSemanticDiagnosticsBuilderProgram } from 'typescript';

@Component({
  selector: 'app-sal-despatch-clearances',
  templateUrl: './sal-despatch-clearances.component.html',
  styleUrls: ['./sal-despatch-clearances.component.scss']
})
export class SalDespatchClearancesComponent implements OnInit {

public sales:any;
  constructor(private sal:SalDispatchesService,private adm:AdminGeneralInfoService) {
    this.listAdd();
   }

  public listAdd()
  {
    this.sal.getPendingDispatches().subscribe(res =>
      { 
          this.sales=res;
      });
  }
  ngOnInit(): void {
  }
  public checkPass(obj:any)
  {
    if(obj.pass == obj.passCode)
    {
        this.sal.setPendingDispatchClearance(obj.recordId).subscribe(res =>
          {
              var det:any=res;
              if(det.result=='OK')
              {
                  this.adm.showMessage('Cleared Successfully','Success',1);
                  this.listAdd();
              }
              else
              {
                this.adm.showMessage(det.result,'Error',4);
              }
          });
    }
    else
    {
      this.adm.showMessage('Invalid pass code','Warning',3);
    }
  }

}
