import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizeComponent } from 'app/admin/un-authorize/un-authorize.component';
import { HrdAbsentsComponent } from './hrd-absents/hrd-absents.component';
import { HrdAdvancesComponent } from './hrd-advances/hrd-advances.component';
 import { HrdAllowancesDeductionsComponent } from './hrd-allowances-deductions/hrd-allowances-deductions.component';
import { HrdAppointmentDetailsComponent } from './hrd-appointment-details/hrd-appointment-details.component';
import { HrdAttendancesComponent } from './hrd-attendances/hrd-attendances.component';
import { HrdDashBoardComponent } from './hrd-dash-board/hrd-dash-board.component';
import { HrdDepartmentsComponent } from './hrd-departments/hrd-departments.component';
import { HrdDesignationsComponent } from './hrd-designations/hrd-designations.component';
import { HrdEmpInOutComponent } from './hrd-emp-in-out/hrd-emp-in-out.component';
import { HrdEmployeesComponent } from './hrd-employees/hrd-employees.component';
import { HrdInterviewDetailsComponent } from './hrd-interview-details/hrd-interview-details.component';
import { HrdKeyRepDepartmentsComponent } from './hrd-key-rep-departments/hrd-key-rep-departments.component';
import { HrdKeyRepDesignationsComponent } from './hrd-key-rep-designations/hrd-key-rep-designations.component';
import { HrdKeyRepEmployeesComponent } from './hrd-key-rep-employees/hrd-key-rep-employees.component';
import { HrdLeaveApprovalsComponent } from './hrd-leave-approvals/hrd-leave-approvals.component';
import { HrdLeaveRequestsComponent } from './hrd-leave-requests/hrd-leave-requests.component';
import { HrdLeavesComponent } from './hrd-leaves/hrd-leaves.component';
import { HrdMeetingDetailsComponent } from './hrd-meeting-details/hrd-meeting-details.component';
import { HrdRangeWiseAllowancesComponent } from './hrd-range-wise-allowances/hrd-range-wise-allowances.component';
import { HrdResumeDetailsComponent } from './hrd-resume-details/hrd-resume-details.component';
import { HrdSalaryPaymentsComponent } from './hrd-salary-payments/hrd-salary-payments.component';
import { HrdSalaryStatementComponent } from './hrd-salary-statement/hrd-salary-statement.component';
import { HrdServiceClosingsComponent } from './hrd-service-closings/hrd-service-closings.component';
import { HrdShiftAssignmentComponent } from './hrd-shift-assignment/hrd-shift-assignment.component';
import { HrdShiftMastersComponent } from './hrd-shift-masters/hrd-shift-masters.component';
import { HrdTrainingDetailsComponent } from './hrd-training-details/hrd-training-details.component';

const routes: Routes = [
    {
       path: '',children: [{path: 'hrddashboard', component: HrdDashBoardComponent}]
    },

    //Masters
    {
        path: '',children: [{path: 'hrddepts', component: HrdDepartmentsComponent}]
    },
    {
        path: '',children: [{path: 'hrdallowances', component: HrdAllowancesDeductionsComponent}]
    },
    {
        path: '',children: [{path: 'hrdleaves', component: HrdLeavesComponent}]
    },
    {
        path: '',children: [{path: 'hrddesigs', component: HrdDesignationsComponent}]
    },
    {
        path: '',children: [{path: 'hrdrangewise', component: HrdRangeWiseAllowancesComponent}]
    },
    {
        path: '',children: [{path: 'hrdemployees', component: HrdEmployeesComponent}]
    },
    {
        path: '',children: [{path: 'hrdshifts', component: HrdShiftMastersComponent}]
    },
    

    //HRD
    {
        path: '',children: [{path: 'hrdresume', component: HrdResumeDetailsComponent}]
    },
    {
        path: '',children: [{path: 'hrdinterviews', component: HrdInterviewDetailsComponent}]
    },
    {
        path: '',children: [{path: 'appointments', component: HrdAppointmentDetailsComponent}]
    },
    {
        path: '',children: [{path: 'serviceclosings', component: HrdServiceClosingsComponent}]
    },
    {
        path: '',children: [{path: 'trainings', component: HrdTrainingDetailsComponent}]
    },
    {
        path: '',children: [{path: 'meetings', component: HrdMeetingDetailsComponent}]
    },


    //Transactions
    {
        path: '',children: [{path: 'hrdinout', component: HrdEmpInOutComponent}]
    },
    {
        path: '',children: [{path: 'hrdattendances', component: HrdAttendancesComponent}]
    },
    {
        path: '',children: [{path: 'hrdleaverequests', component: HrdLeaveRequestsComponent}]
    },
    {
        path: '',children: [{path: 'hrdleaveapprovals', component: HrdLeaveApprovalsComponent}]
    },
    {
        path: '',children: [{path: 'hrdabsents', component: HrdAbsentsComponent}]
    },
    {
        path: '',children: [{path: 'hrdadvances', component: HrdAdvancesComponent}]
    },
    {
        path: '',children: [{path: 'hrdsalarystatement', component: HrdSalaryStatementComponent}]
    },
    {
        path: '',children: [{path: 'hrdpayments', component: HrdSalaryPaymentsComponent}]
    },
    {
        path: '',children: [{path: 'hrdshiftassign', component: HrdShiftAssignmentComponent}]
    },
    {
        path: '',children: [{path: 'unauthorzeid', component: UnAuthorizeComponent}]
    },
    

    //Key Reports
    {
        path: '',children: [{path: 'hrdkeyrepdepts', component: HrdKeyRepDepartmentsComponent}]
    },
    {
        path: '',children: [{path: 'hrdkeyrepdesigs', component: HrdKeyRepDesignationsComponent}]
    },
    {
        path: '',children: [{path: 'hrdkeyrepemployees', component: HrdKeyRepEmployeesComponent}]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HRDRoutingModule { }
