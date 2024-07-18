import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrismComplaintsComponent } from './prism-complaints/prism-complaints.component';
import { PrismDashboardComponent } from './prism-dashboard/prism-dashboard.component';
import { PrismEnquiriesComponent } from './prism-enquiries/prism-enquiries.component';
import { PrismInvoicingComponent } from './prism-invoicing/prism-invoicing.component';
import { PrismOrdersComponent } from './prism-orders/prism-orders.component';
import { PrismProductsComponent } from './prism-products/prism-products.component';
import { PrismQuotationsComponent } from './prism-quotations/prism-quotations.component';
import { PrismRegistersComponent } from './prism-registers/prism-registers.component';
import { PrismServicesComponent } from './prism-services/prism-services.component';
import { PrismTicketingComponent } from './prism-ticketing/prism-ticketing.component';
import { PrismTrainingComponent } from './prism-training/prism-training.component';
import { PrismUsersComponent } from './prism-users/prism-users.component';
import { PrismVendorsComponent } from './prism-vendors/prism-vendors.component';
import { PrismWorkAgreementComponent } from './prism-work-agreement/prism-work-agreement.component';
import { PrismpostFollowUpComponent } from './prismpost-follow-up/prismpost-follow-up.component';
import { PrismpreFollowUpComponent } from './prismpre-follow-up/prismpre-follow-up.component';
 
const routes: Routes = [
   {
        path: '',
        children: [{
            path: 'dashboard',
            component: PrismDashboardComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'products',
            component: PrismProductsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'vendors',
            component: PrismVendorsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'users',
            component: PrismUsersComponent
        }
        ]
    },

    {
        path: '',
        children: [{
            path: 'enquiries',
            component: PrismEnquiriesComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'quotations',
            component: PrismQuotationsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'prefollowup',
            component: PrismpreFollowUpComponent
        }
        ]
    },
    
    {
        path: '',
        children: [{
            path: 'saleorders',
            component: PrismOrdersComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'workagreement',
            component: PrismWorkAgreementComponent
        }
        ]
    },


    {
        path: '',
        children: [{
            path: 'postfollowup',
            component: PrismpostFollowUpComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'training',
            component: PrismTrainingComponent
        }
        ]
    },

 
    {
        path: '',
        children: [{
            path: 'tickets',
            component: PrismTicketingComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'complaints',
            component: PrismComplaintsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'services',
            component: PrismServicesComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'invoicing',
            component: PrismInvoicingComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'register',
            component: PrismRegistersComponent
        }
        ]
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PrismRoutingModule { }


