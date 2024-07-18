import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 import { QcDashboardComponent } from './qc-dashboard/qc-dashboard.component';
 import { QcMIRApprovalsComponent } from './qc-mirapprovals/qc-mirapprovals.component';
import { QcMIRTestingsComponent } from './qc-mirtestings/qc-mirtestings.component';
import { QcProcessWiseFinalQCComponent } from './qc-process-wise-final-qc/qc-process-wise-final-qc.component';
import { QcProcessWiseQCComponent } from './qc-process-wise-qc/qc-process-wise-qc.component';
import { QcRepMIRPendingsComponent } from './qc-rep-mirpendings/qc-rep-mirpendings.component';
import { QcRepMIRSupplierRankingComponent } from './qc-rep-mirsupplier-ranking/qc-rep-mirsupplier-ranking.component';
import { QcRepMIRTestResultsComponent } from './qc-rep-mirtest-results/qc-rep-mirtest-results.component';
 import { QcSaleReturnApprovalsComponent } from './qc-sale-return-approvals/qc-sale-return-approvals.component';
import { QcSaleReturnsComponent } from './qc-sale-returns/qc-sale-returns.component';
import { QcTestsingMaterialsComponent } from './qc-testsing-materials/qc-testsing-materials.component';
import { QcTestsingSaleReturnsComponent } from './qc-testsing-sale-returns/qc-testsing-sale-returns.component';
import { QcTestsingsComponent } from './qc-testsings/qc-testsings.component';
import { QcUnauthorizeComponent } from './qc-unauthorize/qc-unauthorize.component';
 

const routes: Routes = [
    
     
   
    
    {
        path: '',
        children: [{
            path: 'dashboard',
            component: QcDashboardComponent
        }
        ]
    },

    //QC Masters
    {
        path: '',
        children: [{
            path: 'qctestsraw',
            component: QcTestsingMaterialsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qctestspro',
            component: QcTestsingsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qctestssalereturn',
            component: QcTestsingSaleReturnsComponent
        }
        ]
    },


    //Transactions
    {
        path: '',
        children: [{
            path: 'qcmirtest',
            component: QcMIRTestingsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qcmirapprovals',
            component: QcMIRApprovalsComponent
        }
        ]
    },
    
    {
        path: '',
        children: [{
            path: 'qcprocesstest',
            component: QcProcessWiseQCComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qcprocessapprovals',
            component: QcProcessWiseFinalQCComponent
        }
        ]
    },
     

    {
        path: '',
        children: [{
            path: 'qcsalereturntestings',
            component: QcSaleReturnsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'qcsalereturnapprovals',
            component: QcSaleReturnApprovalsComponent
        }
        ]
    },

//QCReports
{
    path: '',
    children: [{
        path: 'qcmirpending',
        component: QcRepMIRPendingsComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'qcmirresults',
        component: QcRepMIRTestResultsComponent
    }
    ]
},
{
    path: '',
    children: [{
        path: 'qcmirsupplierrating',
        component: QcRepMIRSupplierRankingComponent
    }
    ]
},

    {
        path: '',
        children: [{
            path: 'qcunauthorize',
            component: QcUnauthorizeComponent
        }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class QCRoutingModule { }


