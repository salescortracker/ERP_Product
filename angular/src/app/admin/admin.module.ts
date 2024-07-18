import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import {  AdmRoutingModule } from "./admin-routing.module";

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
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdmContriesComponent } from './adm-contries/adm-contries.component';
import { AdmStatesComponent } from './adm-states/adm-states.component';
import { AdmTaxesComponent } from './adm-taxes/adm-taxes.component';
import { AdmRolesComponent } from './adm-roles/adm-roles.component';
import { AdmUsersComponent } from './adm-users/adm-users.component';
import { AdmTargetsComponent } from './adm-targets/adm-targets.component';
import { AdmlicenseComponent } from './admlicense/admlicense.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { AdmSystemVerificationComponent } from './adm-system-verification/adm-system-verification.component';
import { AdmSystemMakeComponent } from './adm-system-make/adm-system-make.component';

@NgModule({
    imports: [
        CommonModule,
        AdmRoutingModule,
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
   AdminDashBoardComponent,
   AdmContriesComponent,
   AdmStatesComponent,
   AdmTaxesComponent,
   AdmRolesComponent,
   AdmUsersComponent,
   AdmTargetsComponent,
   AdmlicenseComponent,
   UnAuthorizeComponent,
   AdmSystemVerificationComponent,
   AdmSystemMakeComponent
    ],
    providers:[MenuServiceService]
})
export class AdmModule { }
