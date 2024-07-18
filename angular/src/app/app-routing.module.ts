import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PrismLayoutComponent } from './layouts/prism-layout/prism-layout.component';
import { AccountsLayoutComponent } from './layouts/accounts-layout/accounts-layout.component';
import { PurchasesLayoutComponent } from './layouts/purchases-layout/purchases-layout.component';
import { CrmLayoutComponent } from './layouts/crm-layout/crm-layout.component';
import { ProductionLayoutComponent } from './layouts/production-layout/production-layout.component';
import { QCLayoutComponent } from './layouts/qc-layout/qc-layout.component';
import { InventoryLayoutComponent } from './layouts/inventory-layout/inventory-layout.component';
import { PosLayoutComponent } from './layouts/pos-layout/pos-layout.component';
import { HrdLayoutComponent } from './layouts/hrd-layout/hrd-layout.component';
import { MaintenanceLayoutComponent } from './layouts/maintenance-layout/maintenance-layout.component';
import { AnalysisLayoutComponent } from './layouts/analysis-layout/analysis-layout.component';
  
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pages/welcome',
    pathMatch: 'full',
  },
         
 
  { path: '', component: AdminLayoutComponent, data: { title: 'Admin Views' }, children: 
  
  [{
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdmModule)
  }]
  
  },
  { path: '', component: AccountsLayoutComponent, data: { title: 'Admin Views' }, children: 
  
  [{
    path: 'accounts',
    loadChildren: () => import('./accounts/acc.module').then(m => m.ACCModule)
  }]
  
  },
  { path: '', component: PurchasesLayoutComponent, data: { title: 'Admin Views' }, children: 
  
  [{
    path: 'purchases',
    loadChildren: () => import('./purchases/purchases.module').then(m => m.PurchasesModule)
  }]
  
  },


  { path: '', component: CrmLayoutComponent, data: { title: 'CRM Views' }, children: 
  
  [{
    path: 'crm',
    loadChildren: () => import('./CRM/crm.module').then(m => m.CRMModule)
  }]
  
  },

  { path: '', component: ProductionLayoutComponent, data: { title: 'Production Views' }, children: 
  
  [{
    path: 'production',
    loadChildren: () => import('./Production/production.module').then(m => m.ProductionModule)
  }]
  
  },

  { path: '', component: QCLayoutComponent, data: { title: 'QC Views' }, children: 
  
  [{
    path: 'qc',
    loadChildren: () => import('./QC/qc.module').then(m => m.QCModule)
  }]
  
  },

  { path: '', component:InventoryLayoutComponent , data: { title: 'Inventory Views' }, children: 
  
  [{
    path: 'inventory',
    loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
  }]
  
  },
  { path: '', component: PosLayoutComponent, data: { title: 'Pos Views' }, children: 
  
  [{
    path: 'pos',
    loadChildren: () => import('./pos/pos.module').then(m => m.POSModule)
  }]
  
  },

  { path: '', component: HrdLayoutComponent, data: { title: 'HRD Views' }, children: 
  
  [{
    path: 'hrd',
    loadChildren: () => import('./HRD/hrd.module').then(m => m.HRDModule)
  }]
  
  },
  { path: '', component: MaintenanceLayoutComponent, data: { title: 'Maintenance Views' }, children: 
  
  [{
    path: 'maintenance',
    loadChildren: () => import('./Maintenance/maintenance.module').then(m => m.MaintenanceModule)
  }]
  
  },
  { path: '', component: AnalysisLayoutComponent, data: { title: 'Analysis Views' }, children: 
  
  [{
    path: 'analysis',
    loadChildren: () => import('./analysis/analysis.module').then(m => m.AnalysisModule)
  }]
  
  },

  { path: '',  data: { title: 'Products' }, children: 
  
  [{
    path: 'products',
    loadChildren: () => import('./loginPages/login-pages.module').then(m => m.LoginPagesModule)
  }]
  
  },
  
  { path: '', component: PrismLayoutComponent, data: { title: 'Admin' }, children: 
  
  [{
    path: 'vendors',
    loadChildren: () => import('./prism/prism.module').then(m => m.PrismModule)
  }]
  
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES },





  {
    path: '**',
    redirectTo: 'pages/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
