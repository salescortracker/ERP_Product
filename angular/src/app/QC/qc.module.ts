import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { QCRoutingModule } from "./qc-routing.module";
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
import { QcDashboardComponent } from './qc-dashboard/qc-dashboard.component';import { QcTestsingsComponent } from './qc-testsings/qc-testsings.component';
import { QcTestsingMaterialsComponent } from './qc-testsing-materials/qc-testsing-materials.component';
import { QcTestsingSaleReturnsComponent } from './qc-testsing-sale-returns/qc-testsing-sale-returns.component';
import { QcUnauthorizeComponent } from './qc-unauthorize/qc-unauthorize.component';
import { QcMIRTestingsComponent } from './qc-mirtestings/qc-mirtestings.component';
import { QcProcessWiseQCComponent } from './qc-process-wise-qc/qc-process-wise-qc.component';
import { QcProcessWiseFinalQCComponent } from './qc-process-wise-final-qc/qc-process-wise-final-qc.component';
import { QcSaleReturnsComponent } from './qc-sale-returns/qc-sale-returns.component';
import { QcMIRApprovalsComponent } from './qc-mirapprovals/qc-mirapprovals.component';
import { QcSaleReturnApprovalsComponent } from './qc-sale-return-approvals/qc-sale-return-approvals.component';
import { QcRepMIRPendingsComponent } from './qc-rep-mirpendings/qc-rep-mirpendings.component';
import { QcRepMIRTestResultsComponent } from './qc-rep-mirtest-results/qc-rep-mirtest-results.component';
import { QcRepMIRSupplierRankingComponent } from './qc-rep-mirsupplier-ranking/qc-rep-mirsupplier-ranking.component';
 

@NgModule({
    imports: [
        CommonModule,
        QCRoutingModule,
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
        
        QcDashboardComponent,
         
         QcTestsingsComponent,
        QcTestsingMaterialsComponent,
        QcTestsingSaleReturnsComponent,
        QcUnauthorizeComponent,
        QcMIRTestingsComponent,
        QcProcessWiseQCComponent,
        QcProcessWiseFinalQCComponent,
        QcSaleReturnsComponent,
        
        QcMIRApprovalsComponent,
       
        QcSaleReturnApprovalsComponent,
       
        QcRepMIRPendingsComponent,
       
        QcRepMIRTestResultsComponent,
       
        QcRepMIRSupplierRankingComponent
        //ProductionOpticalsDashboardComponent,
        
       ],
    providers:[MenuServiceService]
})
export class QCModule { }

