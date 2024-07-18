import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { AdmContriesComponent } from './adm-contries/adm-contries.component';
import { AdmRolesComponent } from './adm-roles/adm-roles.component';
import { AdmStatesComponent } from './adm-states/adm-states.component';
import { AdmSystemMakeComponent } from './adm-system-make/adm-system-make.component';
import { AdmSystemVerificationComponent } from './adm-system-verification/adm-system-verification.component';
import { AdmTargetsComponent } from './adm-targets/adm-targets.component';
import { AdmTaxesComponent } from './adm-taxes/adm-taxes.component';
import { AdmUsersComponent } from './adm-users/adm-users.component';
import { AdminDashBoardComponent } from './admin-dash-board/admin-dash-board.component';
import { AdmlicenseComponent } from './admlicense/admlicense.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';


const routes: Routes = [
    {
        path: '',children: [{path: 'admdashboard', component: AdminDashBoardComponent}]
    },
    {
        path: '',children: [{path: 'sysver', component: AdmSystemVerificationComponent}]
    },
    {
        path: '',children: [{path: 'sysmake', component: AdmSystemMakeComponent}]
    },
    {
        path: '',children: [{path: 'countries', component: AdmContriesComponent}]
    },
    {
        path: '',children: [{path: 'states', component: AdmStatesComponent}]
    },
    {
        path: '',children: [{path: 'taxes', component: AdmTaxesComponent}]
    },
    {
        path: '',children: [{path: 'roles', component: AdmRolesComponent}]
    },
    {
        path: '',children: [{path: 'users', component: AdmUsersComponent}]
    },
    {
        path: '',children: [{path: 'targets', component: AdmTargetsComponent}]
    },
    {
        path: '',children: [{path: 'license', component: AdmlicenseComponent}]
    },
    {
        path: '',children: [{path: 'unauthorize', component: UnAuthorizeComponent}]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdmRoutingModule { }
