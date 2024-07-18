import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmRXPriceListService } from 'app/services/crm/crm-rxprice-list.service';
import { CrmAccountsAssignComponent } from './crm-accounts-assign/crm-accounts-assign.component';
import { CrmAdvancesComponent } from './crm-advances/crm-advances.component';
import { CrmAgentsManagementComponent } from './crm-agents-management/crm-agents-management.component';
import { CrmBillSubmissionsComponent } from './crm-bill-submissions/crm-bill-submissions.component';
import { CrmComplaintsPostComponent } from './crm-complaints-post/crm-complaints-post.component';
import { CrmCustomerGroupsComponent } from './crm-customer-groups/crm-customer-groups.component';
import { CrmCustomersComponent } from './crm-customers/crm-customers.component';
import { CrmDashboardComponent } from './crm-dashboard/crm-dashboard.component';
import { CrmDiscountListComponent } from './crm-discount-list/crm-discount-list.component';
import { CrmEnquiriesRXComponent } from './crm-enquiries-rx/crm-enquiries-rx.component';
import { CrmKeyRepCustomerGroupsComponent } from './crm-key-rep-customer-groups/crm-key-rep-customer-groups.component';
import { CrmKeyRepCustomersComponent } from './crm-key-rep-customers/crm-key-rep-customers.component';
import { CrmLeadsManagementComponent } from './crm-leads-management/crm-leads-management.component';
import { CrmMarketingComponent } from './crm-marketing/crm-marketing.component';
import { CrmMINNDashComponent } from './crm-minndash/crm-minndash.component';
import { CrmOpeningBalancesComponent } from './crm-opening-balances/crm-opening-balances.component';
import { CrmOrdersRxComponent } from './crm-orders-rx/crm-orders-rx.component';
import { CrmPostBillSubmissionsComponent } from './crm-post-bill-submissions/crm-post-bill-submissions.component';
import { CrmPostFollowUpComponent } from './crm-post-follow-up/crm-post-follow-up.component';
import { CrmPostRepCustomerAgingComponent } from './crm-post-rep-customer-aging/crm-post-rep-customer-aging.component';
import { CrmPostRepCustomerSnapshotComponent } from './crm-post-rep-customer-snapshot/crm-post-rep-customer-snapshot.component';
import { CrmPostRepSaleReturnsComponent } from './crm-post-rep-sale-returns/crm-post-rep-sale-returns.component';
import { CrmPostSaleBillClearancesComponent } from './crm-post-sale-bill-clearances/crm-post-sale-bill-clearances.component';
import { CrmPostSaleReturnsComponent } from './crm-post-sale-returns/crm-post-sale-returns.component';
import { CrmPostTicketClearancesComponent } from './crm-post-ticket-clearances/crm-post-ticket-clearances.component';
import { CrmPostTicketsComponent } from './crm-post-tickets/crm-post-tickets.component';
import { CrmPreRepAdvancesCustomerwiseComponent } from './crm-pre-rep-advances-customerwise/crm-pre-rep-advances-customerwise.component';
import { CrmPreRepAdvancesLiableComponent } from './crm-pre-rep-advances-liable/crm-pre-rep-advances-liable.component';
import { CrmPreRepCallerwiseCallsComponent } from './crm-pre-rep-callerwise-calls/crm-pre-rep-callerwise-calls.component';
import { CrmPreRepEmployeewiseDetailsComponent } from './crm-pre-rep-employeewise-details/crm-pre-rep-employeewise-details.component';
import { CrmPreRepEnquiriesListComponent } from './crm-pre-rep-enquiries-list/crm-pre-rep-enquiries-list.component';
import { CrmPreRepEnquiriesPendingComponent } from './crm-pre-rep-enquiries-pending/crm-pre-rep-enquiries-pending.component';
import { CrmPreRepItemWisePendingsComponent } from './crm-pre-rep-item-wise-pendings/crm-pre-rep-item-wise-pendings.component';
import { CrmPreRepOrdersCustomerwiseComponent } from './crm-pre-rep-orders-customerwise/crm-pre-rep-orders-customerwise.component';
import { CrmPreRepOrdersDelayedComponent } from './crm-pre-rep-orders-delayed/crm-pre-rep-orders-delayed.component';
import { CrmPreRepOrdersListComponent } from './crm-pre-rep-orders-list/crm-pre-rep-orders-list.component';
import { CrmPreRepOrdersPendingComponent } from './crm-pre-rep-orders-pending/crm-pre-rep-orders-pending.component';
import { CrmPreRepTeleCallsListComponent } from './crm-pre-rep-tele-calls-list/crm-pre-rep-tele-calls-list.component';
import { CrmPreRepTeleCallsPendingComponent } from './crm-pre-rep-tele-calls-pending/crm-pre-rep-tele-calls-pending.component';
import { CrmPriceListComponent } from './crm-price-list/crm-price-list.component';
import { CrmQuotationsRxComponent } from './crm-quotations-rx/crm-quotations-rx.component';
import { CrmReceiptsFromCustomersComponent } from './crm-receipts-from-customers/crm-receipts-from-customers.component';
import { CrmRepAnalysisCustomerWiseBusinessComponent } from './crm-rep-analysis-customer-wise-business/crm-rep-analysis-customer-wise-business.component';
import { CrmRepClosedOrdersComponent } from './crm-rep-closed-orders/crm-rep-closed-orders.component';
import { CrmRxDiscountsListComponent } from './crm-rx-discounts-list/crm-rx-discounts-list.component';
import { CrmSaleReturnsComponent } from './crm-sale-returns/crm-sale-returns.component';
import { CrmSettingsComponent } from './crm-settings/crm-settings.component';
import { CrmTargetSettingComponent } from './crm-target-setting/crm-target-setting.component';
import { CrmTaxAssigingsComponent } from './crm-tax-assigings/crm-tax-assigings.component';
import { CrmTeleCallPostComponent } from './crm-tele-call-post/crm-tele-call-post.component';
import { CrmTeleCallPreComponent } from './crm-tele-call-pre/crm-tele-call-pre.component';
import { CrmTempOrdersComponent } from './crm-temp-orders/crm-temp-orders.component';
import { CrmUnauthorizeComponent } from './crm-unauthorize/crm-unauthorize.component';
import { CRMDashBoardBlanksComponent } from './crmdash-board-blanks/crmdash-board-blanks.component';
import { CrnRxPriceListComponent } from './crn-rx-price-list/crn-rx-price-list.component';

const routes: Routes = [
    
    {
        path: '',children: [{path: 'crmpricelist', component: CrmPriceListComponent}]
     },
     {
        path:'',children:[{path: 'crmdiscountlist', component: CrmDiscountListComponent}]
    },
    {
       path: '',children: [{path: 'crmdashboardbla', component: CRMDashBoardBlanksComponent}]
    },
    {
        path: '',children: [{path: 'crmdashboard', component: CrmDashboardComponent}]
     },
     {
        path: '',children: [{path: 'crmleadsmgt', component: CrmLeadsManagementComponent}]
     },
     {
        path: '',children: [{path: 'crmcustomers', component: CrmCustomersComponent}]
     },
     {
        path: '',children: [{path: 'crmagentsmgt', component: CrmAgentsManagementComponent}]
     },
     {
        path: '',children: [{path: 'crmmarket', component: CrmMarketingComponent}]
     },
    
     {
        path:'',children:[{path: 'crmrxpricelist', component: CrnRxPriceListComponent}]
    },
    
    {
        path: '',children: [{path: 'crmopenings', component: CrmOpeningBalancesComponent}]
     },
     {
        path: '',children: [{path: 'crmtargets', component: CrmTargetSettingComponent}]
     },
    {
        path:'',children:[{path: 'crmtelecallblapre', component: CrmTeleCallPreComponent}]
    },
    {
        path:'',children:[{path: 'crmenquiryrx', component: CrmEnquiriesRXComponent}]
    },
    {
        path:'',children:[{path: 'crmquotationrx', component: CrmQuotationsRxComponent}]
    },
    {
        path:'',children:[{path: 'crmordersrx', component: CrmOrdersRxComponent}]
    },
    {
        path:'',children:[{path: 'crmadvances', component: CrmAdvancesComponent}]
    },
    {
        path:'',children:[{path: 'crmbillsub', component: CrmBillSubmissionsComponent}]
    },
    {
        path:'',children:[{path: 'crmtelecallblapost', component: CrmTeleCallPostComponent}]
    },

    {
        path:'',children:[{path: 'crmcomplaints', component: CrmComplaintsPostComponent}]
    },
    {
        path:'',children:[{path: 'crmsalereturn', component: CrmSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmacr', component: CrmReceiptsFromCustomersComponent}]
    },
    
    {
        path:'',children:[{path: 'crmtemporders', component: CrmTempOrdersComponent}]
    },
    {
        path:'',children:[{path: 'crmrepclosedorders', component: CrmRepClosedOrdersComponent}]
    },
   
    {
        path:'',children:[{path: 'crmrxdiscountlist', component: CrmRxDiscountsListComponent}]
    },
    {
        path:'',children:[{path: 'crmcusgrps', component: CrmCustomerGroupsComponent}]
    },
    //Post Sales
    {
        path:'',children:[{path: 'crmbillsubmissions', component: CrmPostBillSubmissionsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsalefollowup', component: CrmPostFollowUpComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsaletickets', component: CrmPostTicketsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsaleticketclearances', component: CrmPostTicketClearancesComponent}]
    },
    {
        path:'',children:[{path: 'crmpostsalereturns', component: CrmPostSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostbillclearances', component: CrmPostSaleBillClearancesComponent}]
    },

    
      {
        path:'',children:[{path: 'crmkeyrepcustgroups', component: CrmKeyRepCustomerGroupsComponent}]
    },
    {
        path:'',children:[{path: 'crmkeyrepcustomers', component: CrmKeyRepCustomersComponent}]
    },

    //Pre Sale Reports
    {
        path:'',children:[{path: 'crmreptelecallslist', component: CrmPreRepTeleCallsListComponent}]
    },
    {
        path:'',children:[{path: 'crmreptelecallspendings', component: CrmPreRepTeleCallsPendingComponent}]
    },
    {
        path:'',children:[{path: 'crmrepenquirieslist', component: CrmPreRepEnquiriesListComponent}]
    },
    {
        path:'',children:[{path: 'crmrepenquiriespendings', component: CrmPreRepEnquiriesPendingComponent}]
    },

    {
        path:'',children:[{path: 'crmrepcallerwisecalls', component: CrmPreRepCallerwiseCallsComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderslist', component: CrmPreRepOrdersListComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderscustomerwise', component: CrmPreRepOrdersCustomerwiseComponent}]
    },
    {
        path:'',children:[{path: 'crmreporderspendings', component: CrmPreRepOrdersPendingComponent}]
    },
    {
        path:'',children:[{path: 'crmrepordersitemwise', component: CrmPreRepItemWisePendingsComponent}]
    },
    {
        path:'',children:[{path: 'crmrepordersdelayed', component: CrmPreRepOrdersDelayedComponent}]
    },
    {
        path:'',children:[{path: 'crmrepadvancesliable', component: CrmPreRepAdvancesLiableComponent}]
    },
    {
        path:'',children:[{path: 'crmrepadvancescustomerwise', component: CrmPreRepAdvancesCustomerwiseComponent}]
    },
    {
        path:'',children:[{path: 'crmrepemployeewise', component: CrmPreRepEmployeewiseDetailsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepsalereturns', component: CrmPostRepSaleReturnsComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepsnapshot', component: CrmPostRepCustomerSnapshotComponent}]
    },
    {
        path:'',children:[{path: 'crmpostrepagings', component: CrmPostRepCustomerAgingComponent}]
    },
    //Analysis
    {
        path:'',children:[{path: 'crmrepanacustomerwise', component: CrmRepAnalysisCustomerWiseBusinessComponent}]
    },
    {
        path:'',children:[{path: 'crmminndash', component: CrmMINNDashComponent}]
    },
    

//Settings
{
    path:'',children:[{path: 'crmTaxes', component: CrmTaxAssigingsComponent}]
},
{
    path:'',children:[{path: 'crmsettings', component: CrmSettingsComponent}]
},
{
    path:'',children:[{path: 'crmaccounts', component: CrmAccountsAssignComponent}]
},
{
    path:'',children:[{path: 'crmunauthorize', component: CrmUnauthorizeComponent}]
},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CRMRoutingModule { }
