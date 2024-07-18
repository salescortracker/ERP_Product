import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { AgmCoreModule } from "@agm/core";
import { DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { DragulaService } from "ng2-dragula";
import { NgxSpinnerModule } from 'ngx-spinner';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { HotkeyModule } from 'angular2-hotkeys';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import * as fromApp from './store/app.reducer';
import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from "./shared/auth/auth.service";
import { AuthGuard } from "./shared/auth/auth-guard.service";
import { WINDOW_PROVIDERS } from './shared/services/window.service';
import {MenuServiceService} from '../app/services/admin/menu-service.service';
 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
  import { VentureLayoutComponent } from './layouts/venture-layout/venture-layout.component';
 import {PrismLayoutComponent} from './layouts/prism-layout/prism-layout.component';
import { AccountsLayoutComponent } from "./layouts/accounts-layout/accounts-layout.component";
import { PurchasesLayoutComponent } from "./layouts/purchases-layout/purchases-layout.component";
import { CrmLayoutComponent } from "./layouts/crm-layout/crm-layout.component";
import { ProductionLayoutComponent } from "./layouts/production-layout/production-layout.component";
import { QCLayoutComponent } from "./layouts/qc-layout/qc-layout.component";
import { InventoryLayoutComponent } from "./layouts/inventory-layout/inventory-layout.component";
import { PosLayoutComponent } from "./layouts/pos-layout/pos-layout.component";
import { HrdLayoutComponent } from "./layouts/hrd-layout/hrd-layout.component";
import { MaintenanceLayoutComponent } from "./layouts/maintenance-layout/maintenance-layout.component";
import { AnalysisLayoutComponent } from "./layouts/analysis-layout/analysis-layout.component";
  
var firebaseConfig = {
  apiKey: "YOUR_API_KEY", //YOUR_API_KEY
  authDomain: "YOUR_AUTH_DOMAIN", //YOUR_AUTH_DOMAIN
  databaseURL: "YOUR_DATABASE_URL", //YOUR_DATABASE_URL
  projectId: "YOUR_PROJECT_ID", //YOUR_PROJECT_ID
  storageBucket: "YOUR_STORAGE_BUCKET", //YOUR_STORAGE_BUCKET
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID", //YOUR_MESSAGING_SENDER_ID
  appId: "YOUR_APP_ID", //YOUR_APP_ID
  measurementId: "YOUR_MEASUREMENT_ID" //YOUR_MEASUREMENT_ID
};


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent,  
      AdminLayoutComponent, VentureLayoutComponent,PrismLayoutComponent,
    AccountsLayoutComponent,PurchasesLayoutComponent,CrmLayoutComponent,ProductionLayoutComponent,
    QCLayoutComponent,InventoryLayoutComponent,PosLayoutComponent,HrdLayoutComponent,MaintenanceLayoutComponent,
    AnalysisLayoutComponent,
    
    
      ],
  imports: [
    BrowserAnimationsModule,
    StoreModule.forRoot(fromApp.appReducer),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgxSpinnerModule,
    DeviceDetectorModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAP_API_KEY"
    }),
    PerfectScrollbarModule,
    SidebarModule.forRoot(),
    HotkeyModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    WINDOW_PROVIDERS,

    {provide: LocationStrategy, useClass: HashLocationStrategy},

    MenuServiceService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
