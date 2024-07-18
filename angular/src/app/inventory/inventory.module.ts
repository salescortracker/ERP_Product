import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { InventoryRoutingModule } from "./inventory-routing.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { InvMINNDashboardComponent } from './inv-minndashboard/inv-minndashboard.component';
import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { InvUMComponent } from './inv-um/inv-um.component';
import { InvStoresListComponent } from './inv-stores-list/inv-stores-list.component';
import { InvItemGroupsComponent } from './inv-item-groups/inv-item-groups.component';
import { InvItemsListComponent } from './inv-items-list/inv-items-list.component';
import { InvOpeningStocksComponent } from './inv-opening-stocks/inv-opening-stocks.component';
import { InvSupplierGroupsListComponent } from './inv-supplier-groups-list/inv-supplier-groups-list.component';
import { InvSuppliersListComponent } from './inv-suppliers-list/inv-suppliers-list.component';
import { InvDepartmentsListComponent } from './inv-departments-list/inv-departments-list.component';
import { InvLossesListComponent } from './inv-losses-list/inv-losses-list.component';
import { InvItemMergingComponent } from './inv-item-merging/inv-item-merging.component';
import { InvItemsTraComponent } from './inv-items-tra/inv-items-tra.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule } from '@angular/forms';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { InvUsineDashboardOptComponent } from './inv-usine-dashboard-opt/inv-usine-dashboard-opt.component';
import { InvUsineDashboardComponent } from './inv-usine-dashboard/inv-usine-dashboard.component';
import { InvConsumableProductionComponent } from './inv-consumable-production/inv-consumable-production.component';
import { InvStoreToStoreConsumablesComponent } from './inv-store-to-store-consumables/inv-store-to-store-consumables.component';
import { InvStoreToStoreBlanksComponent } from './inv-store-to-store-blanks/inv-store-to-store-blanks.component';
import { InvStoreToStoreStocksComponent } from './inv-store-to-store-stocks/inv-store-to-store-stocks.component';
import { InvBranchToBranchConsumablesComponent } from './inv-branch-to-branch-consumables/inv-branch-to-branch-consumables.component';
import { InvBranchToBranchBlanksComponent } from './inv-branch-to-branch-blanks/inv-branch-to-branch-blanks.component';
import { InvBranchToBranchStocksComponent } from './inv-branch-to-branch-stocks/inv-branch-to-branch-stocks.component';
import { InvBranchFromBranchesConsumablesComponent } from './inv-branch-from-branches-consumables/inv-branch-from-branches-consumables.component';
import { InvBranchFromBranchesBlanksComponent } from './inv-branch-from-branches-blanks/inv-branch-from-branches-blanks.component';
import { InvBranchFromBranchStocksComponent } from './inv-branch-from-branch-stocks/inv-branch-from-branch-stocks.component';
import { InvAuditConsumablesComponent } from './inv-audit-consumables/inv-audit-consumables.component';
import { InvDepartmentsComponent } from './inv-departments/inv-departments.component';
import { InvLossesTraComponent } from './inv-losses-tra/inv-losses-tra.component';
import { InvSetupComponent } from './inv-setup/inv-setup.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { InvOpeningShikshaComponent } from './inv-opening-shiksha/inv-opening-shiksha.component';
import { InvKeyRepUnitsComponent } from './inv-key-rep-units/inv-key-rep-units.component';
import { InvKeyRepStoresComponent } from './inv-key-rep-stores/inv-key-rep-stores.component';
import { InvKeyRepItemGroupsComponent } from './inv-key-rep-item-groups/inv-key-rep-item-groups.component';
import { InvKeyRepItemsComponent } from './inv-key-rep-items/inv-key-rep-items.component';
import { InvKeyRepDepartmentsComponent } from './inv-key-rep-departments/inv-key-rep-departments.component';
import { InvKeyRepLossesComponent } from './inv-key-rep-losses/inv-key-rep-losses.component';
import { InvStoRepClosingStocksComponent } from './inv-sto-rep-closing-stocks/inv-sto-rep-closing-stocks.component';
import { InvStoRepDayInfoComponent } from './inv-sto-rep-day-info/inv-sto-rep-day-info.component';
import { InvCostRepClosingValuesComponent } from './inv-cost-rep-closing-values/inv-cost-rep-closing-values.component';
import { InvSampleInwardsComponent } from './inv-sample-inwards/inv-sample-inwards.component';
import { InvSampleOutwardsComponent } from './inv-sample-outwards/inv-sample-outwards.component';
import { InvAutdiMaterialsComponent } from './inv-autdi-materials/inv-autdi-materials.component';
import { InvTraDummyComponent } from './inv-tra-dummy/inv-tra-dummy.component';

@NgModule({
    imports: [
        CommonModule,
        InventoryRoutingModule,
        NgxChartsModule,
        NgbModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        SidebarModule.forRoot(),
        FormsModule,
        NgxSpinnerModule,
        NgSelectModule
    ],
    declarations: [
        
        InvMINNDashboardComponent,
        
        InvUMComponent,
        
        InvStoresListComponent,
        
        InvItemGroupsComponent,
        
        InvItemsListComponent,
        
        InvOpeningStocksComponent,
        
        InvSupplierGroupsListComponent,
        
        InvSuppliersListComponent,
        
        InvDepartmentsListComponent,
        
        InvLossesListComponent,
        
        InvItemMergingComponent,
        
        InvItemsTraComponent,
        
        InvUsineDashboardOptComponent,
        
        InvUsineDashboardComponent,
        
        
        InvConsumableProductionComponent,
        
        InvStoreToStoreConsumablesComponent,
        
        InvStoreToStoreBlanksComponent,
        
        InvStoreToStoreStocksComponent,
        
        InvBranchToBranchConsumablesComponent,
        
        InvBranchToBranchBlanksComponent,
        
        InvBranchToBranchStocksComponent,
        
        InvBranchFromBranchesConsumablesComponent,
        
        InvBranchFromBranchesBlanksComponent,
        
        InvBranchFromBranchStocksComponent,
        
        InvAuditConsumablesComponent,
        
        
        
        InvDepartmentsComponent,
        
        InvLossesTraComponent,
        
        InvSetupComponent,
        
        UnAuthorizeComponent,
        
        
        
        InvOpeningShikshaComponent,
        
       
        
        InvKeyRepUnitsComponent,
        
        InvKeyRepStoresComponent,
        
        InvKeyRepItemGroupsComponent,
        
        InvKeyRepItemsComponent,
        
        InvKeyRepDepartmentsComponent,
        
        InvKeyRepLossesComponent,
        
        InvStoRepClosingStocksComponent,
        
        InvStoRepDayInfoComponent,
        
        InvCostRepClosingValuesComponent,
        
        InvSampleInwardsComponent,
        
        InvSampleOutwardsComponent,
        
        InvAutdiMaterialsComponent,
        
        InvTraDummyComponent,
        
        
    ],
    providers:[MenuServiceService]
})
export class InventoryModule { }

