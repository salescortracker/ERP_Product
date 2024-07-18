import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PrismRoutingModule } from "./prism-routing.module";
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
import { PrismDashboardComponent } from './prism-dashboard/prism-dashboard.component';
import { PrismProductsComponent } from './prism-products/prism-products.component';
import { PrismVendorsComponent } from './prism-vendors/prism-vendors.component';
import { PrismUsersComponent } from './prism-users/prism-users.component';
import { PrismEnquiriesComponent } from './prism-enquiries/prism-enquiries.component';
import { PrismQuotationsComponent } from './prism-quotations/prism-quotations.component';
import { PrismOrdersComponent } from './prism-orders/prism-orders.component';
import { PrismWorkAgreementComponent } from './prism-work-agreement/prism-work-agreement.component';
import { PrismInvoicingComponent } from './prism-invoicing/prism-invoicing.component';
import { PrismTicketingComponent } from './prism-ticketing/prism-ticketing.component';
import { PrismpreFollowUpComponent } from './prismpre-follow-up/prismpre-follow-up.component';
import { PrismpostFollowUpComponent } from './prismpost-follow-up/prismpost-follow-up.component';
import { PrismComplaintsComponent } from './prism-complaints/prism-complaints.component';
import { PrismServicesComponent } from './prism-services/prism-services.component';
import { PrismTrainingComponent } from './prism-training/prism-training.component';
import { PrismRegistersComponent } from './prism-registers/prism-registers.component';
 
 

@NgModule({
    imports: [
        CommonModule,
        PrismRoutingModule,
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
        
       // BlaPurchaseRequestsComponent
       PrismDashboardComponent,
        
       PrismProductsComponent,
        
       PrismVendorsComponent,
        
       PrismUsersComponent,
        
       PrismEnquiriesComponent,
        
       PrismQuotationsComponent,
        
       PrismOrdersComponent,
        
       PrismWorkAgreementComponent,
        
       PrismInvoicingComponent,
        
       PrismTicketingComponent,
        
       PrismpreFollowUpComponent,
        
       PrismpostFollowUpComponent,
        
       PrismComplaintsComponent,
        
       PrismServicesComponent,
        
       PrismTrainingComponent,
        
       PrismRegistersComponent],
    providers:[MenuServiceService]
})
export class PrismModule { }

