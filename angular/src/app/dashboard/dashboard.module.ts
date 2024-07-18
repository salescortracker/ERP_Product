import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ChartistModule } from 'ng-chartist';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularResizedEventModule } from 'angular-resize-event';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { DashboardManageInnComponent } from './dashboard-manage-inn/dashboard-manage-inn.component';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { DashBoardComercioComponent } from './dash-board-comercio/dash-board-comercio.component';
import { DashboardUsineComponent } from './dashboard-usine/dashboard-usine.component';
import { DashboardRealComponent } from './dashboard-real/dashboard-real.component';
import { DashBoardDhanwantariComponent } from './dash-board-dhanwantari/dash-board-dhanwantari.component';
import { DashboardEdificioComponent } from './dashboard-edificio/dashboard-edificio.component';
import { DashboardBienesComponent } from './dashboard-bienes/dashboard-bienes.component';
import { MisInboxComponent } from './mis-inbox/mis-inbox.component';
import { MisTasksComponent } from './mis-tasks/mis-tasks.component';
import { MisTicketsComponent } from './mis-tickets/mis-tickets.component';
import { MisProfileComponent } from './mis-profile/mis-profile.component';
//import {VerticalMenuComponent} from '../shared/vertical-menu/vertical-menu.component';
 
import { QuillModule } from 'ngx-quill'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
 
import { PipeModule } from 'app/shared/pipes/pipe.module';
import { DashboardShikshaComponent } from './dashboard-shiksha/dashboard-shiksha.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ChartistModule,
        NgbModule,
        MatchHeightModule,
        NgApexchartsModule,
        AngularResizedEventModule,
  
        QuillModule.forRoot(),
        FormsModule,
        PerfectScrollbarModule,
        PipeModule
    ],
    exports: [],
    declarations: [
        Dashboard1Component,
        Dashboard2Component,
        DashboardManageInnComponent,
        DashBoardComercioComponent,
        DashboardUsineComponent,
        DashboardRealComponent,
        DashBoardDhanwantariComponent,
        DashboardEdificioComponent,
        DashboardBienesComponent,
        MisInboxComponent,
        MisTasksComponent,
        MisTicketsComponent,
        MisProfileComponent,
        DashboardShikshaComponent,
 //     VerticalMenuComponent
    ],
    providers: [MenuServiceService],
})
export class DashboardModule { }
