import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';
import { POSRoutingModule } from "./pos-routing.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { PosoutletsComponent } from './posoutlets/posoutlets.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { SalCustomerGroupsComponent } from './sal-customer-groups/sal-customer-groups.component';
import { SalCustomersComponent } from './sal-customers/sal-customers.component';
import { SalCustomerOpeningsComponent } from './sal-customer-openings/sal-customer-openings.component';
import { SaleOrdersComponent } from './sale-orders/sale-orders.component';
import { SalesComponent } from './sales/sales.component';
import { SalSaleTypesComponent } from './sal-sale-types/sal-sale-types.component';
import { SalAccountsAssignComponent } from './sal-accounts-assign/sal-accounts-assign.component';
import { PosunauthorizeComponent } from './posunauthorize/posunauthorize.component';
import { SalTaxesDetailsComponent } from './sal-taxes-details/sal-taxes-details.component';
import { SalSalesComponent } from './sal-sales/sal-sales.component';
import { SalDispatchesComponent } from './sal-dispatches/sal-dispatches.component';
import { SalLogisticsComponent } from './sal-logistics/sal-logistics.component';
import { SalInvoicesComponent } from './sal-invoices/sal-invoices.component';
import { SalSales2Component } from './sal-sales2/sal-sales2.component';
import { SalDespatchClearancesComponent } from './sal-despatch-clearances/sal-despatch-clearances.component';
import { SalRepListOfSalesComponent } from './sal-rep-list-of-sales/sal-rep-list-of-sales.component';
import { SalRepConsolidatedSalesComponent } from './sal-rep-consolidated-sales/sal-rep-consolidated-sales.component';
import { SalRepCustomerWiseConsolidatedComponent } from './sal-rep-customer-wise-consolidated/sal-rep-customer-wise-consolidated.component';
import { SalRepDetailedSalesComponent } from './sal-rep-detailed-sales/sal-rep-detailed-sales.component';
//import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
    imports: [
        CommonModule,
        POSRoutingModule,
        NgxChartsModule,
        NgbModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        NgxSpinnerModule,
        NgSelectModule,
        SidebarModule.forRoot(),
        FormsModule,
      //  HotkeyModule, 
        
    ],
    declarations: [
      
       
        PosoutletsComponent,
         
        SalesDashboardComponent,
        SalCustomerGroupsComponent,
        SalCustomersComponent,
        SalCustomerOpeningsComponent,
        SaleOrdersComponent,
        SalesComponent,
        SalSaleTypesComponent,
        SalAccountsAssignComponent,
        PosunauthorizeComponent,
        SalTaxesDetailsComponent,
        SalSalesComponent,
        SalDispatchesComponent,
        SalLogisticsComponent,
        SalInvoicesComponent,
        SalSales2Component,
        SalDespatchClearancesComponent,
        SalRepListOfSalesComponent,
        SalRepConsolidatedSalesComponent,
        SalRepCustomerWiseConsolidatedComponent,
        SalRepDetailedSalesComponent
        
    ],
    providers:[MenuServiceService]
})
export class POSModule { }
