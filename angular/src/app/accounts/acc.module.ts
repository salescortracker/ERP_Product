import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from 'ngx-spinner';

import { ACCRoutingModule } from "./acc-routing.module";

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule } from 'ng2-charts';
import { ChartistModule} from 'ng-chartist';
import { MenuServiceService } from 'app/services/admin/menu-service.service';
import { AccAccountGroupsComponent } from './acc-account-groups/acc-account-groups.component';

  import { AccDashBoardComponent } from './acc-dash-board/acc-dash-board.component';
import { FormsModule } from '@angular/forms';
import { SidebarModule } from 'ng-sidebar';
import { NgSelectModule } from '@ng-select/ng-select';

import { AccAccountsComponent } from './acc-accounts/acc-accounts.component';
import { AccOpeningBalancesComponent } from './acc-opening-balances/acc-opening-balances.component';
import { AccAssetsComponent } from './acc-assets/acc-assets.component';
import { AccPartyDetailsComponent } from './acc-party-details/acc-party-details.component';
import { AccSupplierAttachmentsComponent } from './acc-supplier-attachments/acc-supplier-attachments.component';
import { AccCustomerAttachmentsComponent } from './acc-customer-attachments/acc-customer-attachments.component';
import { AccPaymentsComponent } from './acc-payments/acc-payments.component';
import { AccReceiptsComponent } from './acc-receipts/acc-receipts.component';
import { AccJournalsComponent } from './acc-journals/acc-journals.component';
import { AccTransfersComponent } from './acc-transfers/acc-transfers.component';
import { AccBRSComponent } from './acc-brs/acc-brs.component';
import { AccYearEndComponent } from './acc-year-end/acc-year-end.component';
import { AccKeyRepGroupsComponent } from './acc-key-rep-groups/acc-key-rep-groups.component';
import { AccKeyRepAccountsComponent } from './acc-key-rep-accounts/acc-key-rep-accounts.component';
import { AccKeyRepAssetsComponent } from './acc-key-rep-assets/acc-key-rep-assets.component';
import { AccFinRepCashBookComponent } from './acc-fin-rep-cash-book/acc-fin-rep-cash-book.component';
import { AccFinRepBankBookComponent } from './acc-fin-rep-bank-book/acc-fin-rep-bank-book.component';
import { AccFinRepDayBookComponent } from './acc-fin-rep-day-book/acc-fin-rep-day-book.component';
import { AccFinRepCompleteDayInfoComponent } from './acc-fin-rep-complete-day-info/acc-fin-rep-complete-day-info.component';
import { AccFinRepLedgersStdComponent } from './acc-fin-rep-ledgers-std/acc-fin-rep-ledgers-std.component';
import { AccFinRepLedgersDetailedComponent } from './acc-fin-rep-ledgers-detailed/acc-fin-rep-ledgers-detailed.component';
import { AccFinRepTrialBalanceComponent } from './acc-fin-rep-trial-balance/acc-fin-rep-trial-balance.component';
import { AccFinRepSchedulesComponent } from './acc-fin-rep-schedules/acc-fin-rep-schedules.component';
import { AccFinRepPNLAccountComponent } from './acc-fin-rep-pnlaccount/acc-fin-rep-pnlaccount.component';
import { AccFinRepBalanceSheetComponent } from './acc-fin-rep-balance-sheet/acc-fin-rep-balance-sheet.component';
import { AccFinRepAgingPayablesComponent } from './acc-fin-rep-aging-payables/acc-fin-rep-aging-payables.component';
import { AccFinRepAgingReceivablesComponent } from './acc-fin-rep-aging-receivables/acc-fin-rep-aging-receivables.component';
import { AccFinRepInterestCalculationComponent } from './acc-fin-rep-interest-calculation/acc-fin-rep-interest-calculation.component';
import { UnAuthorizeComponent } from './un-authorize/un-authorize.component';
import { AccountUnauthorizeComponent } from './account-unauthorize/account-unauthorize.component';
import { AccRepActivityLogComponent } from './acc-rep-activity-log/acc-rep-activity-log.component';

@NgModule({
    imports: [
        CommonModule,
        ACCRoutingModule,
        NgxChartsModule,
        NgbModule,
ChartsModule,ChartistModule,
        MatchHeightModule,
        NgApexchartsModule,
        NgxSpinnerModule,


       
        SidebarModule.forRoot(),
        FormsModule,
        
        NgSelectModule
    ],
    declarations: [
      AccDashBoardComponent,        
    AccAccountGroupsComponent,
    AccAccountsComponent,
    AccOpeningBalancesComponent,
    AccAssetsComponent,
    AccPartyDetailsComponent,
    AccSupplierAttachmentsComponent,
    AccCustomerAttachmentsComponent,
    AccPaymentsComponent,
    AccReceiptsComponent,
    AccJournalsComponent,
    AccTransfersComponent,
    AccBRSComponent,
    AccYearEndComponent,
    AccKeyRepGroupsComponent,
    AccKeyRepAccountsComponent,
    AccKeyRepAssetsComponent,
    AccFinRepCashBookComponent,
    AccFinRepBankBookComponent,
    AccFinRepDayBookComponent,
    AccFinRepCompleteDayInfoComponent,
    AccFinRepLedgersStdComponent,
    AccFinRepLedgersDetailedComponent,
    AccFinRepTrialBalanceComponent,
    AccFinRepSchedulesComponent,
    AccFinRepPNLAccountComponent,
    AccFinRepBalanceSheetComponent,
    AccFinRepAgingPayablesComponent,
    AccFinRepAgingReceivablesComponent,
    AccFinRepInterestCalculationComponent,
    UnAuthorizeComponent,
    AccountUnauthorizeComponent,
    AccRepActivityLogComponent],
    providers:[MenuServiceService]
})
export class ACCModule { }
