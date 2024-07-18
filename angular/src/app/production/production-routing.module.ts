import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizeComponent } from 'app/admin/un-authorize/un-authorize.component';
import { PpcBatchPlanningComponent } from './ppc-batch-planning/ppc-batch-planning.component';
import { PpcMassPlanningComponent } from './ppc-mass-planning/ppc-mass-planning.component';
 import { PpcProcessMasterComponent } from './ppc-process-master/ppc-process-master.component';
import { PpcProcessWiseProductionComponent } from './ppc-process-wise-production/ppc-process-wise-production.component';
import { PpcRepMachineUsageComponent } from './ppc-rep-machine-usage/ppc-rep-machine-usage.component';
import { PpcRepMassAchievementsComponent } from './ppc-rep-mass-achievements/ppc-rep-mass-achievements.component';
import { PpcRepMaterialCostingComponent } from './ppc-rep-material-costing/ppc-rep-material-costing.component';
import { PpcRepMaterialRequirementComponent } from './ppc-rep-material-requirement/ppc-rep-material-requirement.component';
import { PpcRepMaterialWastageComponent } from './ppc-rep-material-wastage/ppc-rep-material-wastage.component';
import { PpcRepPendingProcessesComponent } from './ppc-rep-pending-processes/ppc-rep-pending-processes.component';
import { PpcRepRunningBatchesComponent } from './ppc-rep-running-batches/ppc-rep-running-batches.component';
 import { PprProductWiseDetailsComponent } from './ppr-product-wise-details/ppr-product-wise-details.component';
import { ProductionDashboardComponent } from './production-dashboard/production-dashboard.component';
 

const routes: Routes = [
    
     
     
    {
        path: '',
        children: [{
            path: 'dashboard',
            component: ProductionDashboardComponent
        }
        ]
    },
    
    {
        path: '',
        children: [{
            path: 'dashboar',
            component: ProductionDashboardComponent
        }
        ]
    },
    
   
    {
        path: '',
        children: [{
            path: 'ppcprocess',
            component: PpcProcessMasterComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcprocessattachments',
            component: PprProductWiseDetailsComponent
        }
        ]
    },
    //Tranactions
    {
        path: '',
        children: [{
            path: 'promassplanning',
            component: PpcMassPlanningComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'probatchplanning',
            component: PpcBatchPlanningComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'proprocesswiseproduction',
            component: PpcProcessWiseProductionComponent
        }
        ]
    },

    //Reports
    {
        path: '',
        children: [{
            path: 'ppcrepmassachieve',
            component: PpcRepMassAchievementsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcrepmaterialrequired',
            component: PpcRepMaterialRequirementComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcreprunningbatches',
            component: PpcRepRunningBatchesComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcrepmaterialcosting',
            component: PpcRepMaterialCostingComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcreppendingprocesses',
            component: PpcRepPendingProcessesComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcrepmachineusage',
            component: PpcRepMachineUsageComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'ppcrepmaterialwastage',
            component: PpcRepMaterialWastageComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'unauthorize',
            component: UnAuthorizeComponent
        }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductionRoutingModule { }


