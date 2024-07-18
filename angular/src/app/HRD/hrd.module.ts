import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';
import { DatePipe } from '@angular/common';
import { HRDRoutingModule } from "./hrd-routing.module";

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
import { HrdDashBoardComponent } from './hrd-dash-board/hrd-dash-board.component';
import { HrdDepartmentsComponent } from './hrd-departments/hrd-departments.component';
import { HrdEmployeesComponent } from './hrd-employees/hrd-employees.component';
import { HrdAllowancesDeductionsComponent } from './hrd-allowances-deductions/hrd-allowances-deductions.component';
import { HrdDesignationsComponent } from './hrd-designations/hrd-designations.component';
import { HrdRangeWiseAllowancesComponent } from './hrd-range-wise-allowances/hrd-range-wise-allowances.component';
import { HrdLeavesComponent } from './hrd-leaves/hrd-leaves.component';
import { HrdEmpInOutComponent } from './hrd-emp-in-out/hrd-emp-in-out.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { HrdResumeDetailsComponent } from './hrd-resume-details/hrd-resume-details.component';
import { HrdInterviewDetailsComponent } from './hrd-interview-details/hrd-interview-details.component';
import { HrdAppointmentDetailsComponent } from './hrd-appointment-details/hrd-appointment-details.component';
import { HrdServiceClosingsComponent } from './hrd-service-closings/hrd-service-closings.component';
import { HrdTrainingDetailsComponent } from './hrd-training-details/hrd-training-details.component';
import { HrdMeetingDetailsComponent } from './hrd-meeting-details/hrd-meeting-details.component';
import { HrdShiftMastersComponent } from './hrd-shift-masters/hrd-shift-masters.component';
import { HrdKeyRepDepartmentsComponent } from './hrd-key-rep-departments/hrd-key-rep-departments.component';
import { HrdKeyRepDesignationsComponent } from './hrd-key-rep-designations/hrd-key-rep-designations.component';
import { HrdKeyRepEmployeesComponent } from './hrd-key-rep-employees/hrd-key-rep-employees.component';
import { HrdAttendancesComponent } from './hrd-attendances/hrd-attendances.component';
import { HrdLeaveRequestsComponent } from './hrd-leave-requests/hrd-leave-requests.component';
import { HrdAbsentsComponent } from './hrd-absents/hrd-absents.component';
import { HrdAdvancesComponent } from './hrd-advances/hrd-advances.component';
import { HrdSalaryStatementComponent } from './hrd-salary-statement/hrd-salary-statement.component';
import { HrdSalaryPaymentsComponent } from './hrd-salary-payments/hrd-salary-payments.component';
import { HrdShiftAssignmentComponent } from './hrd-shift-assignment/hrd-shift-assignment.component';
import { HrdLeaveApprovalsComponent } from './hrd-leave-approvals/hrd-leave-approvals.component';


@NgModule({
    imports: [
        CommonModule,
        HRDRoutingModule,
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
   
    HrdDashBoardComponent,
   
    HrdDepartmentsComponent,
   
    HrdEmployeesComponent,
   
    HrdAllowancesDeductionsComponent,
   
    HrdDesignationsComponent,
   
    HrdRangeWiseAllowancesComponent,
   
    HrdLeavesComponent,
   
    HrdEmpInOutComponent,
   
    UnAuthorizedComponent,
   
    HrdResumeDetailsComponent,
   
    HrdInterviewDetailsComponent,
   
    HrdAppointmentDetailsComponent,
   
    HrdServiceClosingsComponent,
   
    HrdTrainingDetailsComponent,
   
    HrdMeetingDetailsComponent,
   
    HrdShiftMastersComponent,
   
    HrdKeyRepDepartmentsComponent,
   
    HrdKeyRepDesignationsComponent,
   
    HrdKeyRepEmployeesComponent,
   
    HrdAttendancesComponent,
   
    HrdLeaveRequestsComponent,
   
    HrdAbsentsComponent,
   
    HrdAdvancesComponent,
   
    HrdSalaryStatementComponent,
   
    HrdSalaryPaymentsComponent,
   
    HrdShiftAssignmentComponent,
   
    HrdLeaveApprovalsComponent],
    providers:[MenuServiceService,DatePipe]
})
export class HRDModule { }
