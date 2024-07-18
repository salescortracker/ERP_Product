import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { AccAccountGroupsComponent } from './acc-account-groups/acc-account-groups.component';
import { AccAccountsComponent } from './acc-accounts/acc-accounts.component';
import { AccAssetsComponent } from './acc-assets/acc-assets.component';
import { AccBRSComponent } from './acc-brs/acc-brs.component';
import { AccCustomerAttachmentsComponent } from './acc-customer-attachments/acc-customer-attachments.component';
import { AccDashBoardComponent } from './acc-dash-board/acc-dash-board.component';
import { AccFinRepAgingPayablesComponent } from './acc-fin-rep-aging-payables/acc-fin-rep-aging-payables.component';
import { AccFinRepAgingReceivablesComponent } from './acc-fin-rep-aging-receivables/acc-fin-rep-aging-receivables.component';
import { AccFinRepBalanceSheetComponent } from './acc-fin-rep-balance-sheet/acc-fin-rep-balance-sheet.component';
import { AccFinRepBankBookComponent } from './acc-fin-rep-bank-book/acc-fin-rep-bank-book.component';
import { AccFinRepCashBookComponent } from './acc-fin-rep-cash-book/acc-fin-rep-cash-book.component';
import { AccFinRepCompleteDayInfoComponent } from './acc-fin-rep-complete-day-info/acc-fin-rep-complete-day-info.component';
import { AccFinRepDayBookComponent } from './acc-fin-rep-day-book/acc-fin-rep-day-book.component';
import { AccFinRepInterestCalculationComponent } from './acc-fin-rep-interest-calculation/acc-fin-rep-interest-calculation.component';
import { AccFinRepLedgersDetailedComponent } from './acc-fin-rep-ledgers-detailed/acc-fin-rep-ledgers-detailed.component';
import { AccFinRepLedgersStdComponent } from './acc-fin-rep-ledgers-std/acc-fin-rep-ledgers-std.component';
import { AccFinRepPNLAccountComponent } from './acc-fin-rep-pnlaccount/acc-fin-rep-pnlaccount.component';
import { AccFinRepSchedulesComponent } from './acc-fin-rep-schedules/acc-fin-rep-schedules.component';
import { AccFinRepTrialBalanceComponent } from './acc-fin-rep-trial-balance/acc-fin-rep-trial-balance.component';
import { AccJournalsComponent } from './acc-journals/acc-journals.component';
import { AccKeyRepAccountsComponent } from './acc-key-rep-accounts/acc-key-rep-accounts.component';
import { AccKeyRepAssetsComponent } from './acc-key-rep-assets/acc-key-rep-assets.component';
import { AccKeyRepGroupsComponent } from './acc-key-rep-groups/acc-key-rep-groups.component';
import { AccOpeningBalancesComponent } from './acc-opening-balances/acc-opening-balances.component';
import { AccPartyDetailsComponent } from './acc-party-details/acc-party-details.component';
import { AccPaymentsComponent } from './acc-payments/acc-payments.component';
import { AccReceiptsComponent } from './acc-receipts/acc-receipts.component';
import { AccRepActivityLogComponent } from './acc-rep-activity-log/acc-rep-activity-log.component';
import { AccSupplierAttachmentsComponent } from './acc-supplier-attachments/acc-supplier-attachments.component';
import { AccTransfersComponent } from './acc-transfers/acc-transfers.component';
import { AccYearEndComponent } from './acc-year-end/acc-year-end.component';
import { AccountUnauthorizeComponent } from './account-unauthorize/account-unauthorize.component';


const routes: Routes = [
    {
        path: '',children: [{path: 'accdashboard', component: AccDashBoardComponent}]
    },
    
   //Masters
   {
    path: '',children: [{path: 'accaccountgroups', component: AccAccountGroupsComponent}]
        },
    {
        path: '',children: [{path: 'accaccounts', component: AccAccountsComponent}]
    },
    {
        path: '',children: [{path: 'accopenings', component: AccOpeningBalancesComponent}]
    },
    {
        path: '',children: [{path: 'accassets', component: AccAssetsComponent}]
    },
    
    //Transactions
    {
        path: '',children: [{path: 'accpayments', component: AccPaymentsComponent}]
    },
    {
        path: '',children: [{path: 'accreceipts', component: AccReceiptsComponent}]
    },
    {
        path: '',children: [{path: 'accjournals', component: AccJournalsComponent}]
    },
    {
        path: '',children: [{path: 'acctransfers', component: AccTransfersComponent}]
    },
    {
        path: '',children: [{path: 'accbrs', component: AccBRSComponent}]
    },
    {
        path: '',children: [{path: 'accyearend', component: AccYearEndComponent}]
    },

    //Key Reports
    {
        path: '',children: [{path: 'acckeyrepgroups', component: AccKeyRepGroupsComponent}]
    },
    {
        path: '',children: [{path: 'acckerepaccounts', component: AccKeyRepAccountsComponent}]
    },
    {
        path: '',children: [{path: 'acckeyrepassets', component: AccKeyRepAssetsComponent}]
    },
     
    //Books
    {
        path: '',children: [{path: 'accfinrepcashbook', component: AccFinRepCashBookComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepbankbook', component: AccFinRepBankBookComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepdaybook', component: AccFinRepDayBookComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepcompletedayinfo', component: AccFinRepCompleteDayInfoComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepledgerstd', component: AccFinRepLedgersStdComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepledgerdetailed', component: AccFinRepLedgersDetailedComponent}]
    },

    //Financial Statements
    {
        path: '',children: [{path: 'accfinreptrialbalance', component: AccFinRepTrialBalanceComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepschedules', component: AccFinRepSchedulesComponent}]
    },
    {
        path: '',children: [{path: 'accfinreppnlacc', component: AccFinRepPNLAccountComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepbalancesheet', component: AccFinRepBalanceSheetComponent}]
    },

    //Analysis Reports
    {
        path: '',children: [{path: 'accrepactivities', component: AccRepActivityLogComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepagingreceivables', component: AccFinRepAgingReceivablesComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepagingpayables', component: AccFinRepAgingPayablesComponent}]
    },
    {
        path: '',children: [{path: 'accfinrepinterestcalc', component: AccFinRepInterestCalculationComponent}]
    },

    {
        path: '',children: [{path: 'accunauthorize', component: UnAuthorizeComponent}]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ACCRoutingModule { }
