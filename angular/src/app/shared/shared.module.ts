import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ClickOutsideModule } from 'ng-click-outside';

import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { PipeModule } from 'app/shared/pipes/pipe.module';

//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from "./vertical-menu/vertical-menu.component";
import { CustomizerComponent } from './customizer/customizer.component';
import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarLinkDirective } from './directives/sidebar-link.directive';
import { SidebarDropdownDirective } from './directives/sidebar-dropdown.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebar-anchor-toggle.directive';
import { SidebarDirective } from './directives/sidebar.directive';
import { TopMenuDirective } from './directives/topmenu.directive';
import { TopMenuLinkDirective } from './directives/topmenu-link.directive';
import { TopMenuDropdownDirective } from './directives/topmenu-dropdown.directive';
import { TopMenuAnchorToggleDirective } from './directives/topmenu-anchor-toggle.directive';
 
import { PrismMenuComponent } from './prism-menu/prism-menu.component';
 
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
 
import { VentureMenuComponent } from './venture-menu/venture-menu.component';
import { ContentLayoutComponent } from 'app/layouts/content/content-layout.component';
import { AdminHMenuComponent } from './admin-hmenu/admin-hmenu.component';
import { AccountsMenuComponent } from './accounts-menu/accounts-menu.component';
import { AccountsHMenuComponent } from './accounts-hmenu/accounts-hmenu.component';
import { PurchasesMenuComponent } from './purchases-menu/purchases-menu.component';
import { CRMMenuComponent } from './CRM-Menu/CRM-menu.component';
import { ProductionMenuComponent } from './production-menu/production-menu.component';
import { PosMenuComponent } from './pos-menu/pos-menu.component';
 
import { InventoryMenuComponent } from './inventory-menu/inventory-menu.component';
import { HrdMenuComponent } from './hrd-menu/hrd-menu.component';
import { MaintenanceMenuComponent } from './maintenance-menu/maintenance-menu.component';
import { QCMenuComponent } from './qc-menu/qc-menu.component';
import { AnalysisMenuComponent } from './analysis-menu/analysis-menu.component';
import { PurchasesHmenuComponent } from './purchases-hmenu/purchases-hmenu.component';
import { HrdHMenuComponent } from './hrd-hmenu/hrd-hmenu.component';
 
@NgModule({
    exports: [
        PrismMenuComponent,
        CommonModule,
        FooterComponent,
        NavbarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        TopMenuDirective,
        NgbModule,
        TranslateModule,
        
        AdminMenuComponent,
        AdminHMenuComponent,

        AccountsMenuComponent,
        AccountsHMenuComponent,
        VentureMenuComponent,

        PurchasesMenuComponent,
        CRMMenuComponent,
        ProductionMenuComponent,
        PosMenuComponent,
        QCMenuComponent,
        InventoryMenuComponent,
        HrdMenuComponent,
        HrdHMenuComponent,
        MaintenanceMenuComponent,
        AnalysisMenuComponent,
        PurchasesHmenuComponent

         
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        TranslateModule,
        FormsModule,
        OverlayModule,
        ReactiveFormsModule ,
        PerfectScrollbarModule,
        ClickOutsideModule,
        AutocompleteModule,
        PipeModule
        
    ],
    declarations: [
        PrismMenuComponent,
        FooterComponent,
        NavbarComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        CustomizerComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarLinkDirective,
        SidebarDropdownDirective,
        SidebarAnchorToggleDirective,
        SidebarDirective,
        TopMenuLinkDirective,
        TopMenuDropdownDirective,
        TopMenuAnchorToggleDirective,
        TopMenuDirective,
        
        AdminMenuComponent,
        
        VentureMenuComponent,
        
        AdminHMenuComponent,
      
        AccountsMenuComponent,
        AccountsHMenuComponent,

        PurchasesMenuComponent,
 
        CRMMenuComponent,
        ProductionMenuComponent,
        PosMenuComponent,
        QCMenuComponent,
        InventoryMenuComponent,
        HrdMenuComponent,
        MaintenanceMenuComponent,
        AnalysisMenuComponent,
        PurchasesHmenuComponent,
        HrdHMenuComponent
      
    ]
})
export class SharedModule { }
