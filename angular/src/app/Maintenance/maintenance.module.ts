import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import { MaintenanceRoutingModule } from "./maintenance-routing.module";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';
import { MaiEquipGroupsComponent } from './mai-equip-groups/mai-equip-groups.component';
import { MaiEquipDetailsComponent } from './mai-equip-details/mai-equip-details.component';
import { MaiKeyRepEquipmentGroupsComponent } from './mai-key-rep-equipment-groups/mai-key-rep-equipment-groups.component';
import { MaiKeyRepEquipmentDetailsComponent } from './mai-key-rep-equipment-details/mai-key-rep-equipment-details.component';
import { MaiUnAuthorisedComponent } from './mai-un-authorised/mai-un-authorised.component';
import { MaiPreventiveMaintenanceComponent } from './mai-preventive-maintenance/mai-preventive-maintenance.component';
import { MaiBreakdownsComponent } from './mai-breakdowns/mai-breakdowns.component';
import { MaiServiceAssignComponent } from './mai-service-assign/mai-service-assign.component';
import { MaiServiceClearancesComponent } from './mai-service-clearances/mai-service-clearances.component';
import { MaiInsurancesComponent } from './mai-insurances/mai-insurances.component';
import { MaiPlantDownComponent } from './mai-plant-down/mai-plant-down.component';
import { MaiAMCComponent } from './mai-amc/mai-amc.component';
import { MaiRepListOfPreventiveMaintenancesComponent } from './mai-rep-list-of-preventive-maintenances/mai-rep-list-of-preventive-maintenances.component';
import { MaiRepProjectedPreventiveMaintenancesComponent } from './mai-rep-projected-preventive-maintenances/mai-rep-projected-preventive-maintenances.component';
import { MaiRepExpiredPreventiveMaintenancesComponent } from './mai-rep-expired-preventive-maintenances/mai-rep-expired-preventive-maintenances.component';
import { MaiRepListOfBrekdownsComponent } from './mai-rep-list-of-brekdowns/mai-rep-list-of-brekdowns.component';
import { MaiRepBreakdownUnassignedComponent } from './mai-rep-breakdown-unassigned/mai-rep-breakdown-unassigned.component';
import { MaiRepBreakdownUnclearedComponent } from './mai-rep-breakdown-uncleared/mai-rep-breakdown-uncleared.component';
import { MaiRepBreakdownMachineHoursComponent } from './mai-rep-breakdown-machine-hours/mai-rep-breakdown-machine-hours.component';
import { MaiRepVendorRankingComponent } from './mai-rep-vendor-ranking/mai-rep-vendor-ranking.component';
import { MaiRepMaintenanceCostingComponent } from './mai-rep-maintenance-costing/mai-rep-maintenance-costing.component';
import { MaiRepMaintenanceEquipmentWiseComponent } from './mai-rep-maintenance-equipment-wise/mai-rep-maintenance-equipment-wise.component';
import { MaiRepListofPlantDownComponent } from './mai-rep-listof-plant-down/mai-rep-listof-plant-down.component';
import { MaiRepPlantDownReasonwiseComponent } from './mai-rep-plant-down-reasonwise/mai-rep-plant-down-reasonwise.component';
import { MaiSetsAccountsAssignComponent } from './mai-sets-accounts-assign/mai-sets-accounts-assign.component';


@NgModule({
    imports: [
        CommonModule,
        MaintenanceRoutingModule,
        NgxChartsModule,
        NgbModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        NgxSpinnerModule,


       
        SidebarModule.forRoot(),
        FormsModule,
        
        NgSelectModule
    ],
    declarations: [
  MaintenanceDashboardComponent,
  MaiEquipGroupsComponent,
  MaiEquipDetailsComponent,
  MaiKeyRepEquipmentGroupsComponent,
  MaiKeyRepEquipmentDetailsComponent,
  MaiUnAuthorisedComponent,
  MaiPreventiveMaintenanceComponent,
  MaiBreakdownsComponent,
  MaiServiceAssignComponent,
  MaiServiceClearancesComponent,
  MaiInsurancesComponent,
  MaiPlantDownComponent,
  MaiAMCComponent,
  MaiRepListOfPreventiveMaintenancesComponent,
  MaiRepProjectedPreventiveMaintenancesComponent,
  MaiRepExpiredPreventiveMaintenancesComponent,
  MaiRepListOfBrekdownsComponent,
  MaiRepBreakdownUnassignedComponent,
  MaiRepBreakdownUnclearedComponent,
  MaiRepBreakdownMachineHoursComponent,
  MaiRepVendorRankingComponent,
  MaiRepMaintenanceCostingComponent,
  MaiRepMaintenanceEquipmentWiseComponent,
  MaiRepListofPlantDownComponent,
  MaiRepPlantDownReasonwiseComponent,
  MaiSetsAccountsAssignComponent,        
    ],
    providers:[MenuServiceService]
})
export class MaintenanceModule { }
