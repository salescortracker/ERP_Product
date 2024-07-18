import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

import { PurAccountsAssignComponent } from './pur-accounts-assign/pur-accounts-assign.component';
import { PurAdvancesComponent } from './pur-advances/pur-advances.component';
import { PurCompleteAuditComponent } from './pur-complete-audit/pur-complete-audit.component';
import { PurDashboardComponent } from './pur-dashboard/pur-dashboard.component';
import { PurEnquiryCoveringLetterComponent } from './pur-enquiry-covering-letter/pur-enquiry-covering-letter.component';
import { PurKeyRepListOfSupplierGroupsComponent } from './pur-key-rep-list-of-supplier-groups/pur-key-rep-list-of-supplier-groups.component';
import { PurKeyRepListOfSuppliersComponent } from './pur-key-rep-list-of-suppliers/pur-key-rep-list-of-suppliers.component';
import { PurMailSettingsComponent } from './pur-mail-settings/pur-mail-settings.component';
import { PurMaterialInwardsComponent } from './pur-material-inwards/pur-material-inwards.component';
import { PurOrderCoveringLetterComponent } from './pur-order-covering-letter/pur-order-covering-letter.component';
import { PurPricesListComponent } from './pur-prices-list/pur-prices-list.component';
import { PurPurchaseCreditNotesComponent } from './pur-purchase-credit-notes/pur-purchase-credit-notes.component';
import { PurPurchaseEnquiriesApprovalsComponent } from './pur-purchase-enquiries-approvals/pur-purchase-enquiries-approvals.component';
import { PurPurchaseEnquiriesComponent } from './pur-purchase-enquiries/pur-purchase-enquiries.component';
import { PurPurchaseOrderApprovalsComponent } from './pur-purchase-order-approvals/pur-purchase-order-approvals.component';
import { PurPurchaseOrderComponent } from './pur-purchase-order/pur-purchase-order.component';
import { PurPurchaseOrdersApprovalsComponent } from './pur-purchase-orders-approvals/pur-purchase-orders-approvals.component';
import { PurPurchaseOrders1Component } from './pur-purchase-orders1/pur-purchase-orders1.component';
import { PurPurchasePaymentsComponent } from './pur-purchase-payments/pur-purchase-payments.component';
import { PurPurchaseQuotationsApprovalsComponent } from './pur-purchase-quotations-approvals/pur-purchase-quotations-approvals.component';
import { PurPurchaseQuotationsComponent } from './pur-purchase-quotations/pur-purchase-quotations.component';
import { PurPurchaseRequestApprovalsComponent } from './pur-purchase-request-approvals/pur-purchase-request-approvals.component';
import { PurPurchaseRequestsComponent } from './pur-purchase-requests/pur-purchase-requests.component';
import { PurPurchaseReturnCoveringLetterComponent } from './pur-purchase-return-covering-letter/pur-purchase-return-covering-letter.component';
import { PurPurchaseReturnsComponent } from './pur-purchase-returns/pur-purchase-returns.component';
import { PurPurchaseTermsComponent } from './pur-purchase-terms/pur-purchase-terms.component';
import { PurPurchaseTypesComponent } from './pur-purchase-types/pur-purchase-types.component';
import { PurPurchasesTempComponent } from './pur-purchases-temp/pur-purchases-temp.component';
import { PurPurchasesTraComponent } from './pur-purchases-tra/pur-purchases-tra.component';
import { PurRepAnalysisPricesComparisonComponent } from './pur-rep-analysis-prices-comparison/pur-rep-analysis-prices-comparison.component';
import { PurRepAnalysisReplinishment1Component } from './pur-rep-analysis-replinishment1/pur-rep-analysis-replinishment1.component';
import { PurRepAnalysisReplinishment2Component } from './pur-rep-analysis-replinishment2/pur-rep-analysis-replinishment2.component';
import { PurRepAnalysisStdToActualComponent } from './pur-rep-analysis-std-to-actual/pur-rep-analysis-std-to-actual.component';
import { PurRepCostConsolidatedPurchaseReturnsComponent } from './pur-rep-cost-consolidated-purchase-returns/pur-rep-cost-consolidated-purchase-returns.component';
import { PurRepCostListOfNotesComponent } from './pur-rep-cost-list-of-notes/pur-rep-cost-list-of-notes.component';
import { PurRepCostListOfPurchaseReturnsComponent } from './pur-rep-cost-list-of-purchase-returns/pur-rep-cost-list-of-purchase-returns.component';
import { PurRepCostListofPurchasesConsolidatedComponent } from './pur-rep-cost-listof-purchases-consolidated/pur-rep-cost-listof-purchases-consolidated.component';
import { PurRepCostListofPurchasesDetailedComponent } from './pur-rep-cost-listof-purchases-detailed/pur-rep-cost-listof-purchases-detailed.component';
import { PurRepCostListofPurchasesSupplierWiseConsolidatedComponent } from './pur-rep-cost-listof-purchases-supplier-wise-consolidated/pur-rep-cost-listof-purchases-supplier-wise-consolidated.component';
import { PurRepCostListofPurchasesSupplierWiseComponent } from './pur-rep-cost-listof-purchases-supplier-wise/pur-rep-cost-listof-purchases-supplier-wise.component';
import { PurRepCostListofPurchasesComponent } from './pur-rep-cost-listof-purchases/pur-rep-cost-listof-purchases.component';
import { PurRepCostPurchaseToReturnsComponent } from './pur-rep-cost-purchase-to-returns/pur-rep-cost-purchase-to-returns.component';
import { PurRepCostSupplierAgingComponent } from './pur-rep-cost-supplier-aging/pur-rep-cost-supplier-aging.component';
import { PurRepCostSupplierDayBookComponent } from './pur-rep-cost-supplier-day-book/pur-rep-cost-supplier-day-book.component';
import { PurRepCostSupplierLedgerComponent } from './pur-rep-cost-supplier-ledger/pur-rep-cost-supplier-ledger.component';
import { PurRepCostSupplierSnapShotComponent } from './pur-rep-cost-supplier-snap-shot/pur-rep-cost-supplier-snap-shot.component';
import { PurRepCostSupplierWisePendingComponent } from './pur-rep-cost-supplier-wise-pending/pur-rep-cost-supplier-wise-pending.component';
import { PurRepCostSupplierwisePurchaseReturnsComponent } from './pur-rep-cost-supplierwise-purchase-returns/pur-rep-cost-supplierwise-purchase-returns.component';
import { PurRepOrderManagementDelayedOrdersComponent } from './pur-rep-order-management-delayed-orders/pur-rep-order-management-delayed-orders.component';
import { PurRepOrderManagementEnquiriesExpiredComponent } from './pur-rep-order-management-enquiries-expired/pur-rep-order-management-enquiries-expired.component';
import { PurRepOrderManagementEnquiriesListComponent } from './pur-rep-order-management-enquiries-list/pur-rep-order-management-enquiries-list.component';
import { PurRepOrderManagementEnquiriesPendingComponent } from './pur-rep-order-management-enquiries-pending/pur-rep-order-management-enquiries-pending.component';
import { PurRepOrderManagementExpectedMaterialsComponent } from './pur-rep-order-management-expected-materials/pur-rep-order-management-expected-materials.component';
import { PurRepOrderManagementListOfOrdersComponent } from './pur-rep-order-management-list-of-orders/pur-rep-order-management-list-of-orders.component';
import { PurRepOrderManagementPendingAdvancesComponent } from './pur-rep-order-management-pending-advances/pur-rep-order-management-pending-advances.component';
import { PurRepOrderManagementPendingOrdersComponent } from './pur-rep-order-management-pending-orders/pur-rep-order-management-pending-orders.component';
import { PurRepOrderManagementRequestsExpiredComponent } from './pur-rep-order-management-requests-expired/pur-rep-order-management-requests-expired.component';
import { PurRepOrderManagementRequestsPendingComponent } from './pur-rep-order-management-requests-pending/pur-rep-order-management-requests-pending.component';
import { PurRepOrderManagementRequestsTobeApprovedComponent } from './pur-rep-order-management-requests-tobe-approved/pur-rep-order-management-requests-tobe-approved.component';
import { PurRepOrderManagementRequestsUnOrderedComponent } from './pur-rep-order-management-requests-un-ordered/pur-rep-order-management-requests-un-ordered.component';
import { PurRepOrderManagementRequestsComponent } from './pur-rep-order-management-requests/pur-rep-order-management-requests.component';
import { PurRepOrderManagementSupplierWiseAdvancesComponent } from './pur-rep-order-management-supplier-wise-advances/pur-rep-order-management-supplier-wise-advances.component';
import { PurRepOrderManagementSupplierWiseOrdersComponent } from './pur-rep-order-management-supplier-wise-orders/pur-rep-order-management-supplier-wise-orders.component';
import { PurRepStockDayBookComponent } from './pur-rep-stock-day-book/pur-rep-stock-day-book.component';
import { PurRepStockItemwiseConsolidationsComponent } from './pur-rep-stock-itemwise-consolidations/pur-rep-stock-itemwise-consolidations.component';
import { PurRepStockItemwiseLedgerComponent } from './pur-rep-stock-itemwise-ledger/pur-rep-stock-itemwise-ledger.component';
import { PurRepStockLeastPurchasesComponent } from './pur-rep-stock-least-purchases/pur-rep-stock-least-purchases.component';
import { PurRepStockNoPurchasesComponent } from './pur-rep-stock-no-purchases/pur-rep-stock-no-purchases.component';
import { PurRepStockTopPurchasesComponent } from './pur-rep-stock-top-purchases/pur-rep-stock-top-purchases.component';
import { PurSettingsComponent } from './pur-settings/pur-settings.component';
import { PurSupplierGroupsComponent } from './pur-supplier-groups/pur-supplier-groups.component';
import { PurSupplierOpeningBalancesComponent } from './pur-supplier-opening-balances/pur-supplier-opening-balances.component';
import { PurSuppliersComponent } from './pur-suppliers/pur-suppliers.component';
import { PurTermsSetupComponent } from './pur-terms-setup/pur-terms-setup.component';
import { PurchasesUnauthorizeComponent } from './purchases-unauthorize/purchases-unauthorize.component';

const routes: Routes = [

    //Masters
    {
        path: '',
         children: [{
             path: 'pursuppliergroups',
             component: PurSupplierGroupsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'pursuppliers',
             component: PurSuppliersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'pursupopeningbalances',
             component: PurSupplierOpeningBalancesComponent
         }
         ]
     },
  
     //Order Management
     {
        path: '',
         children: [{
             path: 'purrequests',
             component: PurPurchaseRequestsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrequestapprovals',
             component: PurPurchaseRequestApprovalsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purenquiries',
             component: PurPurchaseEnquiriesComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purenquiriesapprovals',
             component: PurPurchaseEnquiriesApprovalsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purquotations',
             component: PurPurchaseQuotationsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purquotationsapprovals',
             component: PurPurchaseQuotationsApprovalsComponent
         }
         ]
     },
     {
        path: '',
        children: [{
            path: 'purorder',
            component: PurPurchaseOrderComponent
        }
        ]
    },
    {
        path: '',
         children: [{
             path: 'purorders1',
             component: PurPurchaseOrders1Component
         }
         ]
     },
     {
        path: '',
        children: [{
            path: 'purorderapproval',
            component: PurPurchaseOrderApprovalsComponent
        }
        ]
    },

    {
        path: '',
        children: [{
            path: 'puradvances',
            component: PurAdvancesComponent
        }
        ]
    },








     
     {
        path: '',
        children: [{
            path: 'purcoveringenquiry',
            component: PurEnquiryCoveringLetterComponent
        }
        ]
    },

     
    
    {
        path: '',
        children: [{
            path: 'purpurchasetra',
            component: PurPurchasesTraComponent
        }
        ]
    },

    {
        path: '',
        children: [{
            path: 'purpurchasereturns',
            component: PurPurchaseReturnsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'purpurchasecrnotes',
            component: PurPurchaseCreditNotesComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'purpurchasepayments',
            component: PurPurchasePaymentsComponent
        }
        ]
    },
     
    {
        path: '',
        children: [{
            path: 'purdashboard',
            component: PurDashboardComponent
        }
        ]
    },
   
    {
        path: '',
        children: [{
            path: 'purunauthorize',
            component: PurchasesUnauthorizeComponent
        }
        ]
    }
    ,
    {
        path: '',
        children: [{
            path: 'purterms',
            component: PurTermsSetupComponent
        }
        ]
    } ,
    {
        path: '',
        children: [{
            path: 'puraccountsassign',
            component: PurAccountsAssignComponent
        }
        ]
    } ,
    {
        path: '',
        children: [{
            path: 'pursettings',
            component: PurSettingsComponent
        }
        ]
    },
   
    {
        path: '',
        children: [{
            path: 'purcoveringorder',
            component: PurOrderCoveringLetterComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'purcoveringpurreturn',
            component: PurPurchaseReturnCoveringLetterComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'purmailsettings',
            component: PurMailSettingsComponent
        }
        ]
    },
    
   
   
    {
       path: '',
        children: [{
            path: 'purpriceslist',
            component: PurPricesListComponent
        }
        ]
    },
    
    {
        path: '',
         children: [{
             path: 'purkeyrepsuppliergroups',
             component: PurKeyRepListOfSupplierGroupsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purkeyrepsuppliers',
             component: PurKeyRepListOfSuppliersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purtypes',
             component: PurPurchaseTypesComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purtermsWaste',
             component: PurTermsSetupComponent
         }
         ]
     },
    
    
    
     {
        path: '',
         children: [{
             path: 'purorders',
             component: PurPurchaseOrderComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purorders1',
             component: PurPurchaseOrders1Component
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purorderapprovals',
             component: PurPurchaseOrdersApprovalsComponent
         }
         ]
     },

     //Order Management
     {
        path: '',
         children: [{
             path: 'purrepomrequests',
             component: PurRepOrderManagementRequestsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestspending',
             component: PurRepOrderManagementRequestsPendingComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestsexpired',
             component: PurRepOrderManagementRequestsExpiredComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequestsunordered',
             component: PurRepOrderManagementRequestsUnOrderedComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomrequeststobeapproved',
             component: PurRepOrderManagementRequestsTobeApprovedComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiries',
             component: PurRepOrderManagementEnquiriesListComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiriespending',
             component: PurRepOrderManagementEnquiriesPendingComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomenquiriesexpired',
             component: PurRepOrderManagementEnquiriesExpiredComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomlistoforders',
             component: PurRepOrderManagementListOfOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomlistoforders',
             component: PurRepOrderManagementSupplierWiseOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomsupplierwiseorders',
             component: PurRepOrderManagementSupplierWiseOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepompendingorders',
             component: PurRepOrderManagementPendingOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomexpectedmaterials',
             component: PurRepOrderManagementExpectedMaterialsComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomdelayedorders',
             component: PurRepOrderManagementDelayedOrdersComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepompendingadvances',
             component: PurRepOrderManagementPendingAdvancesComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepomsupplierwiseadvances',
             component: PurRepOrderManagementSupplierWiseAdvancesComponent
         }
         ]
     },
//Purchase Reports
{
    path: '',
     children: [{
         path: 'purreppurlistofpurhcases',
         component: PurRepCostListofPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasesconsolidated',
         component: PurRepCostListofPurchasesConsolidatedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasesdetailed',
         component: PurRepCostListofPurchasesDetailedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasessupplierwise',
         component: PurRepCostListofPurchasesSupplierWiseComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purreppurlistofpurhcasessupplierwiseconsolidated',
         component: PurRepCostListofPurchasesSupplierWiseConsolidatedComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostlistofpr',
         component: PurRepCostListOfPurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostconsolidatedpr',
         component: PurRepCostConsolidatedPurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupplierwisepr',
         component: PurRepCostSupplierwisePurchaseReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostpuchasestopr',
         component: PurRepCostPurchaseToReturnsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostlistofnotes',
         component: PurRepCostListOfNotesComponent
     }
     ]
 },
 //Cost Reports
 {
    path: '',
     children: [{
         path: 'purrepcostsupdaybook',
         component: PurRepCostSupplierDayBookComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupledger',
         component: PurRepCostSupplierLedgerComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupsnap',
         component: PurRepCostSupplierSnapShotComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupaging',
         component: PurRepCostSupplierAgingComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepcostsupcbalances',
         component: PurRepCostSupplierWisePendingComponent
     }
     ]
 },

//Stock Reports
{
    path: '',
     children: [{
         path: 'purrepstockdbook',
         component: PurRepStockDayBookComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockitemwiseledger',
         component: PurRepStockItemwiseLedgerComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockitemwiseconsolidations',
         component: PurRepStockItemwiseConsolidationsComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstocktoppur',
         component: PurRepStockTopPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstockleastpur',
         component: PurRepStockLeastPurchasesComponent
     }
     ]
 },
 {
    path: '',
     children: [{
         path: 'purrepstocknopur',
         component: PurRepStockNoPurchasesComponent
     }
     ]
 },
     //Analysis
     {
        path: '',
         children: [{
             path: 'purrepanalypricecompare',
             component: PurRepAnalysisPricesComparisonComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanastdtoactual',
             component: PurRepAnalysisStdToActualComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanalyreplinish1',
             component: PurRepAnalysisReplinishment1Component
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purrepanalyreplinish2',
             component: PurRepAnalysisReplinishment2Component
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'purcompleteaudit',
             component: PurCompleteAuditComponent
         }
         ]
     },

     {
        path: '',
         children: [{
             path: 'unauthorize',
             component: PurchasesUnauthorizeComponent
         }
         ]
     },
     {
        path: '',
         children: [{
             path: 'dummy',
             component: DummyComponent
         }
         ]
     },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PurchasesRoutingModule { }


