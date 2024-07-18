import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProductionRoutingModule } from "./production-routing.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";

import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProductionDashboardComponent } from './production-dashboard/production-dashboard.component';
import { PpcProcessMasterComponent } from './ppc-process-master/ppc-process-master.component';
import { PprProductWiseDetailsComponent } from './ppr-product-wise-details/ppr-product-wise-details.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { PpcMassPlanningComponent } from './ppc-mass-planning/ppc-mass-planning.component';
import { PpcBatchPlanningComponent } from './ppc-batch-planning/ppc-batch-planning.component';
import { PpcProcessWiseProductionComponent } from './ppc-process-wise-production/ppc-process-wise-production.component';
import { PpcRepMassAchievementsComponent } from './ppc-rep-mass-achievements/ppc-rep-mass-achievements.component';
import { PpcRepMaterialRequirementComponent } from './ppc-rep-material-requirement/ppc-rep-material-requirement.component';
import { PpcRepRunningBatchesComponent } from './ppc-rep-running-batches/ppc-rep-running-batches.component';
import { PpcRepMaterialCostingComponent } from './ppc-rep-material-costing/ppc-rep-material-costing.component';
import { PpcRepPendingProcessesComponent } from './ppc-rep-pending-processes/ppc-rep-pending-processes.component';
import { PpcRepMachineUsageComponent } from './ppc-rep-machine-usage/ppc-rep-machine-usage.component';
import { PpcRepMaterialWastageComponent } from './ppc-rep-material-wastage/ppc-rep-material-wastage.component';
 

@NgModule({
    imports: [
        CommonModule,
        ProductionRoutingModule,
        NgxChartsModule,
        NgbModule,
        FormsModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        SidebarModule.forRoot(),
        FormsModule,
        NgxSpinnerModule,
        NgSelectModule
        
    ],
    declarations: [
        
         ProductionDashboardComponent,
      
        
       PpcProcessMasterComponent,
        
       PprProductWiseDetailsComponent,
        
       UnAuthorizeComponent,
        
       PpcMassPlanningComponent,
        
       PpcBatchPlanningComponent,
        
       PpcProcessWiseProductionComponent,
        
       PpcRepMassAchievementsComponent,
        
       PpcRepMaterialRequirementComponent,
        
       PpcRepRunningBatchesComponent,
        
       PpcRepMaterialCostingComponent,
        
       PpcRepPendingProcessesComponent,
        
       PpcRepMachineUsageComponent,
        
       PpcRepMaterialWastageComponent],
    providers:[MenuServiceService]
})
export class ProductionModule { }

