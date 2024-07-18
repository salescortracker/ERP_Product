import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import { AnalysisRoutingModule } from "./analysis-routing.module";

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
import { AnalysisDashboardComponent } from './analysis-dashboard/analysis-dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        AnalysisRoutingModule,
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
      AnalysisDashboardComponent,        
 
    ],
    providers:[MenuServiceService]
})
export class AnalysisModule { }
