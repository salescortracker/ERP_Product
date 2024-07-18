import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PurchasesRoutingModule } from "./purchases-routing.module";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";

import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { PurPurchasesTraComponent } from './pur-purchases-tra/pur-purchases-tra.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';
import { PurDashboardComponent } from './pur-dashboard/pur-dashboard.component';
import { PurMaterialInwardsComponent } from './pur-material-inwards/pur-material-inwards.component';
import { PurPurchaseOrderComponent } from './pur-purchase-order/pur-purchase-order.component';
import { PurchasesUnauthorizeComponent } from './purchases-unauthorize/purchases-unauthorize.component';
import { PurTermsSetupComponent } from './pur-terms-setup/pur-terms-setup.component';
import { PurAccountsAssignComponent } from './pur-accounts-assign/pur-accounts-assign.component';
import { PurSupplierGroupsComponent } from './pur-supplier-groups/pur-supplier-groups.component';
import { PurSuppliersComponent } from './pur-suppliers/pur-suppliers.component';
import { PurPricesListComponent } from './pur-prices-list/pur-prices-list.component';
import { PurSupplierOpeningBalancesComponent } from './pur-supplier-opening-balances/pur-supplier-opening-balances.component';
import { PurSupplierOpeningsComponent } from './pur-supplier-openings/pur-supplier-openings.component';
import { PurKeyRepListOfSupplierGroupsComponent } from './pur-key-rep-list-of-supplier-groups/pur-key-rep-list-of-supplier-groups.component';
import { PurKeyRepListOfSuppliersComponent } from './pur-key-rep-list-of-suppliers/pur-key-rep-list-of-suppliers.component';
import { PurPurchaseTypesComponent } from './pur-purchase-types/pur-purchase-types.component';
import { PurPurchaseTermsComponent } from './pur-purchase-terms/pur-purchase-terms.component';
import { PurPurchaseRequestsComponent } from './pur-purchase-requests/pur-purchase-requests.component';
import { PurPurchaseRequestApprovalsComponent } from './pur-purchase-request-approvals/pur-purchase-request-approvals.component';
import { PurPurchaseEnquiriesComponent } from './pur-purchase-enquiries/pur-purchase-enquiries.component';
import { PurPurchaseQuotationsComponent } from './pur-purchase-quotations/pur-purchase-quotations.component';
import { PurPurchaseOrders1Component } from './pur-purchase-orders1/pur-purchase-orders1.component';
import { PurPurchaseOrdersApprovalsComponent } from './pur-purchase-orders-approvals/pur-purchase-orders-approvals.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { PurCompleteAuditComponent } from './pur-complete-audit/pur-complete-audit.component';
import { PurAdvancesComponent } from './pur-advances/pur-advances.component';
import { PurPurchasesTempComponent } from './pur-purchases-temp/pur-purchases-temp.component';
import { PurPurchaseReturnsComponent } from './pur-purchase-returns/pur-purchase-returns.component';
import { PurPurchaseCreditNotesComponent } from './pur-purchase-credit-notes/pur-purchase-credit-notes.component';
import { PurPurchasePaymentsComponent } from './pur-purchase-payments/pur-purchase-payments.component';
import { PurRepOrderManagementRequestsComponent } from './pur-rep-order-management-requests/pur-rep-order-management-requests.component';
import { PurRepOrderManagementRequestsPendingComponent } from './pur-rep-order-management-requests-pending/pur-rep-order-management-requests-pending.component';
import { PurRepOrderManagementListOfOrdersComponent } from './pur-rep-order-management-list-of-orders/pur-rep-order-management-list-of-orders.component';
import { PurRepOrderManagementSupplierWiseOrdersComponent } from './pur-rep-order-management-supplier-wise-orders/pur-rep-order-management-supplier-wise-orders.component';
import { PurRepOrderManagementPendingOrdersComponent } from './pur-rep-order-management-pending-orders/pur-rep-order-management-pending-orders.component';
import { PurRepOrderManagementExpectedMaterialsComponent } from './pur-rep-order-management-expected-materials/pur-rep-order-management-expected-materials.component';
import { PurRepOrderManagementDelayedOrdersComponent } from './pur-rep-order-management-delayed-orders/pur-rep-order-management-delayed-orders.component';
import { PurRepOrderManagementPendingAdvancesComponent } from './pur-rep-order-management-pending-advances/pur-rep-order-management-pending-advances.component';
import { PurRepOrderManagementSupplierWiseAdvancesComponent } from './pur-rep-order-management-supplier-wise-advances/pur-rep-order-management-supplier-wise-advances.component';
import { DummyComponent } from './dummy/dummy.component';
import { PurSuppliersChildComponent } from './pur-suppliers-child/pur-suppliers-child.component';
import { PurInvMaterialsChildComponent } from './pur-inv-materials-child/pur-inv-materials-child.component';
import { PurRepCostListofPurchasesComponent } from './pur-rep-cost-listof-purchases/pur-rep-cost-listof-purchases.component';
import { PurRepCostListofPurchasesDetailedComponent } from './pur-rep-cost-listof-purchases-detailed/pur-rep-cost-listof-purchases-detailed.component';
import { PurRepCostListofPurchasesConsolidatedComponent } from './pur-rep-cost-listof-purchases-consolidated/pur-rep-cost-listof-purchases-consolidated.component';
import { PurRepCostListofPurchasesSupplierWiseComponent } from './pur-rep-cost-listof-purchases-supplier-wise/pur-rep-cost-listof-purchases-supplier-wise.component';
import { PurRepCostListofPurchasesSupplierWiseConsolidatedComponent } from './pur-rep-cost-listof-purchases-supplier-wise-consolidated/pur-rep-cost-listof-purchases-supplier-wise-consolidated.component';
import { PurRepOrderManagementRequestsUnOrderedComponent } from './pur-rep-order-management-requests-un-ordered/pur-rep-order-management-requests-un-ordered.component';
import { PurSettingsComponent } from './pur-settings/pur-settings.component';
import { PurMailSettingsComponent } from './pur-mail-settings/pur-mail-settings.component';
import { PurEnquiryCoveringLetterComponent } from './pur-enquiry-covering-letter/pur-enquiry-covering-letter.component';
import { PurOrderCoveringLetterComponent } from './pur-order-covering-letter/pur-order-covering-letter.component';
import { PurPurchaseReturnCoveringLetterComponent } from './pur-purchase-return-covering-letter/pur-purchase-return-covering-letter.component';
import { PurMaterialsChildComponent } from './pur-materials-child/pur-materials-child.component';
import { PurPurchaseEnquiriesApprovalsComponent } from './pur-purchase-enquiries-approvals/pur-purchase-enquiries-approvals.component';
import { PurPurchaseQuotationsApprovalsComponent } from './pur-purchase-quotations-approvals/pur-purchase-quotations-approvals.component';
import { PurPurchaseOrderApprovalsComponent } from './pur-purchase-order-approvals/pur-purchase-order-approvals.component';
import { PurRepOrderManagementEnquiriesListComponent } from './pur-rep-order-management-enquiries-list/pur-rep-order-management-enquiries-list.component';
import { PurRepOrderManagementEnquiriesPendingComponent } from './pur-rep-order-management-enquiries-pending/pur-rep-order-management-enquiries-pending.component';
import { PurRepOrderManagementEnquiriesExpiredComponent } from './pur-rep-order-management-enquiries-expired/pur-rep-order-management-enquiries-expired.component';
import { PurRepOrderManagementRequestsExpiredComponent } from './pur-rep-order-management-requests-expired/pur-rep-order-management-requests-expired.component';
import { PurRepOrderManagementRequestsTobeApprovedComponent } from './pur-rep-order-management-requests-tobe-approved/pur-rep-order-management-requests-tobe-approved.component';
import { PurRepCostListOfPurchaseReturnsComponent } from './pur-rep-cost-list-of-purchase-returns/pur-rep-cost-list-of-purchase-returns.component';
import { PurRepCostConsolidatedPurchaseReturnsComponent } from './pur-rep-cost-consolidated-purchase-returns/pur-rep-cost-consolidated-purchase-returns.component';
import { PurRepCostSupplierwisePurchaseReturnsComponent } from './pur-rep-cost-supplierwise-purchase-returns/pur-rep-cost-supplierwise-purchase-returns.component';
import { PurRepCostPurchaseToReturnsComponent } from './pur-rep-cost-purchase-to-returns/pur-rep-cost-purchase-to-returns.component';
import { PurRepCostListOfNotesComponent } from './pur-rep-cost-list-of-notes/pur-rep-cost-list-of-notes.component';
import { PurRepStockPurchasesDayBookComponent } from './pur-rep-stock-purchases-day-book/pur-rep-stock-purchases-day-book.component';
import { PurRepCostSupplierDayBookComponent } from './pur-rep-cost-supplier-day-book/pur-rep-cost-supplier-day-book.component';
import { PurRepCostSupplierLedgerComponent } from './pur-rep-cost-supplier-ledger/pur-rep-cost-supplier-ledger.component';
import { PurRepCostSupplierSnapShotComponent } from './pur-rep-cost-supplier-snap-shot/pur-rep-cost-supplier-snap-shot.component';
import { PurRepCostSupplierAgingComponent } from './pur-rep-cost-supplier-aging/pur-rep-cost-supplier-aging.component';
import { PurRepCostSupplierWisePendingComponent } from './pur-rep-cost-supplier-wise-pending/pur-rep-cost-supplier-wise-pending.component';
import { PurRepStockDayBookComponent } from './pur-rep-stock-day-book/pur-rep-stock-day-book.component';
import { PurRepStockItemwiseLedgerComponent } from './pur-rep-stock-itemwise-ledger/pur-rep-stock-itemwise-ledger.component';
import { PurRepStockItemwiseConsolidationsComponent } from './pur-rep-stock-itemwise-consolidations/pur-rep-stock-itemwise-consolidations.component';
import { PurRepStockTopPurchasesComponent } from './pur-rep-stock-top-purchases/pur-rep-stock-top-purchases.component';
import { PurRepStockLeastPurchasesComponent } from './pur-rep-stock-least-purchases/pur-rep-stock-least-purchases.component';
import { PurRepStockNoPurchasesComponent } from './pur-rep-stock-no-purchases/pur-rep-stock-no-purchases.component';
import { PurRepAnalysisPricesComparisonComponent } from './pur-rep-analysis-prices-comparison/pur-rep-analysis-prices-comparison.component';
import { PurRepAnalysisStdToActualComponent } from './pur-rep-analysis-std-to-actual/pur-rep-analysis-std-to-actual.component';
import { PurRepAnalysisReplinishment1Component } from './pur-rep-analysis-replinishment1/pur-rep-analysis-replinishment1.component';
import { PurRepAnalysisReplinishment2Component } from './pur-rep-analysis-replinishment2/pur-rep-analysis-replinishment2.component';
  
@NgModule({
    imports: [
        CommonModule,
        PurchasesRoutingModule,
        NgxChartsModule,
        NgbModule,
        FormsModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        SidebarModule.forRoot(),
        FormsModule,
        NgxSpinnerModule,
        NgSelectModule
    ],
    declarations: [
        PurPurchasesTraComponent,
        PurDashboardComponent,
        PurMaterialInwardsComponent,
        PurPurchaseOrderComponent,
        PurchasesUnauthorizeComponent,
        PurTermsSetupComponent,
        PurAccountsAssignComponent,
        PurSupplierGroupsComponent,
        PurSuppliersComponent,
        PurPricesListComponent,
        PurSupplierOpeningBalancesComponent,
        PurSupplierOpeningsComponent,
        PurKeyRepListOfSupplierGroupsComponent,
        PurKeyRepListOfSuppliersComponent,
        PurPurchaseTypesComponent,
        PurPurchaseTermsComponent,
        PurPurchaseRequestsComponent,
        PurPurchaseRequestApprovalsComponent,
        PurPurchaseEnquiriesComponent,
        PurPurchaseQuotationsComponent,
        PurPurchaseOrders1Component,
        PurPurchaseOrdersApprovalsComponent,
        UnAuthorizeComponent,
        PurCompleteAuditComponent,
        PurAdvancesComponent,
        PurPurchasesTempComponent,
        PurPurchaseReturnsComponent,
        PurPurchaseCreditNotesComponent,
        PurPurchasePaymentsComponent,
        PurRepOrderManagementRequestsComponent,
        PurRepOrderManagementRequestsPendingComponent,
        PurRepOrderManagementListOfOrdersComponent,
        PurRepOrderManagementSupplierWiseOrdersComponent,
        PurRepOrderManagementPendingOrdersComponent,
        PurRepOrderManagementExpectedMaterialsComponent,
        PurRepOrderManagementDelayedOrdersComponent,
        PurRepOrderManagementPendingAdvancesComponent,
        PurRepOrderManagementSupplierWiseAdvancesComponent,
        
        DummyComponent,
        
        PurSuppliersChildComponent,
        
        PurInvMaterialsChildComponent,
        
        PurRepCostListofPurchasesComponent,
        
        PurRepCostListofPurchasesDetailedComponent,
        
        PurRepCostListofPurchasesConsolidatedComponent,
        
        PurRepCostListofPurchasesSupplierWiseComponent,
        
        PurRepCostListofPurchasesSupplierWiseConsolidatedComponent,
        
        PurRepOrderManagementRequestsUnOrderedComponent,
        
        PurSettingsComponent,
        
        PurMailSettingsComponent,
        
        PurEnquiryCoveringLetterComponent,
        
        PurOrderCoveringLetterComponent,
        
        PurPurchaseReturnCoveringLetterComponent,
        
        PurMaterialsChildComponent,
        
        PurPurchaseEnquiriesApprovalsComponent,
        
        PurPurchaseQuotationsApprovalsComponent,
        
        PurPurchaseOrderApprovalsComponent,
        
        PurRepOrderManagementEnquiriesListComponent,
        
        PurRepOrderManagementEnquiriesPendingComponent,
        
        PurRepOrderManagementEnquiriesExpiredComponent,
        
        PurRepOrderManagementRequestsExpiredComponent,
        
        PurRepOrderManagementRequestsTobeApprovedComponent,
        
        PurRepCostListOfPurchaseReturnsComponent,
        
        PurRepCostConsolidatedPurchaseReturnsComponent,
        
        PurRepCostSupplierwisePurchaseReturnsComponent,
        
        PurRepCostPurchaseToReturnsComponent,
        
        PurRepCostListOfNotesComponent,
        
        PurRepStockPurchasesDayBookComponent,
        
        PurRepCostSupplierDayBookComponent,
        
        PurRepCostSupplierLedgerComponent,
        
        PurRepCostSupplierSnapShotComponent,
        
        PurRepCostSupplierAgingComponent,
        
        PurRepCostSupplierWisePendingComponent,
        
        PurRepStockDayBookComponent,
        
        PurRepStockItemwiseLedgerComponent,
        
        PurRepStockItemwiseConsolidationsComponent,
        
        PurRepStockTopPurchasesComponent,
        
        PurRepStockLeastPurchasesComponent,
        
        PurRepStockNoPurchasesComponent,
        
        PurRepAnalysisPricesComparisonComponent,
        
        PurRepAnalysisStdToActualComponent,
        
        PurRepAnalysisReplinishment1Component,
        
        PurRepAnalysisReplinishment2Component
        
        ],
    providers:[MenuServiceService]
})
export class PurchasesModule { }

