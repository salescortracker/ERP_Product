import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaiAMCComponent } from './mai-amc/mai-amc.component';
import { MaiBreakdownsComponent } from './mai-breakdowns/mai-breakdowns.component';
import { MaiEquipDetailsComponent } from './mai-equip-details/mai-equip-details.component';
import { MaiEquipGroupsComponent } from './mai-equip-groups/mai-equip-groups.component';
import { MaiInsurancesComponent } from './mai-insurances/mai-insurances.component';
import { MaiKeyRepEquipmentDetailsComponent } from './mai-key-rep-equipment-details/mai-key-rep-equipment-details.component';
import { MaiKeyRepEquipmentGroupsComponent } from './mai-key-rep-equipment-groups/mai-key-rep-equipment-groups.component';
import { MaiPlantDownComponent } from './mai-plant-down/mai-plant-down.component';
import { MaiPreventiveMaintenanceComponent } from './mai-preventive-maintenance/mai-preventive-maintenance.component';
import { MaiRepBreakdownMachineHoursComponent } from './mai-rep-breakdown-machine-hours/mai-rep-breakdown-machine-hours.component';
import { MaiRepBreakdownUnassignedComponent } from './mai-rep-breakdown-unassigned/mai-rep-breakdown-unassigned.component';
import { MaiRepBreakdownUnclearedComponent } from './mai-rep-breakdown-uncleared/mai-rep-breakdown-uncleared.component';
import { MaiRepExpiredPreventiveMaintenancesComponent } from './mai-rep-expired-preventive-maintenances/mai-rep-expired-preventive-maintenances.component';
import { MaiRepListOfBrekdownsComponent } from './mai-rep-list-of-brekdowns/mai-rep-list-of-brekdowns.component';
import { MaiRepListOfPreventiveMaintenancesComponent } from './mai-rep-list-of-preventive-maintenances/mai-rep-list-of-preventive-maintenances.component';
import { MaiRepListofPlantDownComponent } from './mai-rep-listof-plant-down/mai-rep-listof-plant-down.component';
import { MaiRepMaintenanceCostingComponent } from './mai-rep-maintenance-costing/mai-rep-maintenance-costing.component';
import { MaiRepMaintenanceEquipmentWiseComponent } from './mai-rep-maintenance-equipment-wise/mai-rep-maintenance-equipment-wise.component';
import { MaiRepPlantDownReasonwiseComponent } from './mai-rep-plant-down-reasonwise/mai-rep-plant-down-reasonwise.component';
import { MaiRepProjectedPreventiveMaintenancesComponent } from './mai-rep-projected-preventive-maintenances/mai-rep-projected-preventive-maintenances.component';
import { MaiRepVendorRankingComponent } from './mai-rep-vendor-ranking/mai-rep-vendor-ranking.component';
import { MaiServiceAssignComponent } from './mai-service-assign/mai-service-assign.component';
import { MaiServiceClearancesComponent } from './mai-service-clearances/mai-service-clearances.component';
import { MaiSetsAccountsAssignComponent } from './mai-sets-accounts-assign/mai-sets-accounts-assign.component';
import { MaiUnAuthorisedComponent } from './mai-un-authorised/mai-un-authorised.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';

const routes: Routes = [
   

    {
        path: '',children: [{path: 'maindashboard', component:MaintenanceDashboardComponent}]
    },
     //Masters
     {
        path: '',children: [{path: 'maiequipgroups', component:MaiEquipGroupsComponent}]
    },
    {
        path: '',children: [{path: 'maiequipment', component:MaiEquipDetailsComponent}]
    },


    //Transactions
    {
        path: '',children: [{path: 'maipm', component:MaiPreventiveMaintenanceComponent}]
    },
    {
        path: '',children: [{path: 'maibreakdown', component:MaiBreakdownsComponent}]
    },
    {
        path: '',children: [{path: 'maiserviceassign', component:MaiServiceAssignComponent}]
    },
    {
        path: '',children: [{path: 'maiservices', component:MaiServiceClearancesComponent}]
    },
    {
        path: '',children: [{path: 'maiinsurances', component:MaiInsurancesComponent}]
    },
    {
        path: '',children: [{path: 'maiplantdown', component:MaiPlantDownComponent}]
    },
    {
        path: '',children: [{path: 'maiamc', component:MaiAMCComponent}]
    },


    //Key Reports
    {
        path: '',children: [{path: 'maikeyrepequipmentgroups', component:MaiKeyRepEquipmentGroupsComponent}]
    },
    {
        path: '',children: [{path: 'maikeyrepequipment', component:MaiKeyRepEquipmentDetailsComponent}]
    },

    //Reports
    {
        path: '',children: [{path: 'maireplistofpm', component:MaiRepListOfPreventiveMaintenancesComponent}]
    },
       {
        path: '',children: [{path: 'mairepprojectedpm', component:MaiRepProjectedPreventiveMaintenancesComponent}]
    },
    {
        path: '',children: [{path: 'mairepexpiredpm', component:MaiRepExpiredPreventiveMaintenancesComponent}]
    },   
    {
        path: '',children: [{path: 'mairepcomplaints', component:MaiRepListOfBrekdownsComponent}]
    },
    {
        path: '',children: [{path: 'mairepunassignedbreakdown', component:MaiRepBreakdownUnassignedComponent}]
    },
    {
        path: '',children: [{path: 'mairepunclearedbreakdown', component:MaiRepBreakdownUnclearedComponent}]
    },
    {
        path: '',children: [{path: 'mairepmachinehourlosses', component:MaiRepBreakdownMachineHoursComponent}]
    },
    {
        path: '',children: [{path: 'mairepvendorranking', component:MaiRepVendorRankingComponent}]
    },
    {
        path: '',children: [{path: 'mairepcosting', component:  MaiRepMaintenanceCostingComponent}]
    },
    {
        path: '',children: [{path: 'mairepequipmentwise', component:MaiRepMaintenanceEquipmentWiseComponent}]
    },
    {
        path: '',children: [{path: 'maireplistofplantdown', component:MaiRepListofPlantDownComponent}]
    },
    {
        path: '',children: [{path: 'mairepreasonwiseplantdown', component:MaiRepPlantDownReasonwiseComponent}]
    },

//Setup
{
    path: '',children: [{path: 'maisetaccountsassign', component:MaiSetsAccountsAssignComponent}]
},
    //unauthorise
    {
        path: '',children: [{path: 'unauthorize', component:MaiUnAuthorisedComponent}]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaintenanceRoutingModule { }
