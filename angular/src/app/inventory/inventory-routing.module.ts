import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnAuthorizeComponent } from 'app/admin/un-authorize/un-authorize.component';
import { InvAuditConsumablesComponent } from './inv-audit-consumables/inv-audit-consumables.component';
import { InvAutdiMaterialsComponent } from './inv-autdi-materials/inv-autdi-materials.component';
import { InvBranchFromBranchStocksComponent } from './inv-branch-from-branch-stocks/inv-branch-from-branch-stocks.component';
import { InvBranchFromBranchesBlanksComponent } from './inv-branch-from-branches-blanks/inv-branch-from-branches-blanks.component';
import { InvBranchFromBranchesConsumablesComponent } from './inv-branch-from-branches-consumables/inv-branch-from-branches-consumables.component';
import { InvBranchToBranchBlanksComponent } from './inv-branch-to-branch-blanks/inv-branch-to-branch-blanks.component';
import { InvBranchToBranchConsumablesComponent } from './inv-branch-to-branch-consumables/inv-branch-to-branch-consumables.component';
import { InvBranchToBranchStocksComponent } from './inv-branch-to-branch-stocks/inv-branch-to-branch-stocks.component';
import { InvConsumableProductionComponent } from './inv-consumable-production/inv-consumable-production.component';
import { InvCostRepClosingValuesComponent } from './inv-cost-rep-closing-values/inv-cost-rep-closing-values.component';
import { InvDepartmentsListComponent } from './inv-departments-list/inv-departments-list.component';
import { InvDepartmentsComponent } from './inv-departments/inv-departments.component';
import { InvItemGroupsComponent } from './inv-item-groups/inv-item-groups.component';
import { InvItemMergingComponent } from './inv-item-merging/inv-item-merging.component';
import { InvItemsListComponent } from './inv-items-list/inv-items-list.component';
import { InvItemsTraComponent } from './inv-items-tra/inv-items-tra.component';
import { InvKeyRepDepartmentsComponent } from './inv-key-rep-departments/inv-key-rep-departments.component';
import { InvKeyRepItemGroupsComponent } from './inv-key-rep-item-groups/inv-key-rep-item-groups.component';
import { InvKeyRepItemsComponent } from './inv-key-rep-items/inv-key-rep-items.component';
import { InvKeyRepLossesComponent } from './inv-key-rep-losses/inv-key-rep-losses.component';
import { InvKeyRepStoresComponent } from './inv-key-rep-stores/inv-key-rep-stores.component';
import { InvKeyRepUnitsComponent } from './inv-key-rep-units/inv-key-rep-units.component';
import { InvLossesListComponent } from './inv-losses-list/inv-losses-list.component';
import { InvLossesTraComponent } from './inv-losses-tra/inv-losses-tra.component';

import { InvMINNDashboardComponent } from "./inv-minndashboard/inv-minndashboard.component";
import { InvOpeningShikshaComponent } from './inv-opening-shiksha/inv-opening-shiksha.component';
import { InvOpeningStocksComponent } from './inv-opening-stocks/inv-opening-stocks.component';
import { InvSampleInwardsComponent } from './inv-sample-inwards/inv-sample-inwards.component';
import { InvSampleOutwardsComponent } from './inv-sample-outwards/inv-sample-outwards.component';
import { InvSetupComponent } from './inv-setup/inv-setup.component';
import { InvStoRepClosingStocksComponent } from './inv-sto-rep-closing-stocks/inv-sto-rep-closing-stocks.component';
import { InvStoRepDayInfoComponent } from './inv-sto-rep-day-info/inv-sto-rep-day-info.component';
import { InvStoreToStoreBlanksComponent } from './inv-store-to-store-blanks/inv-store-to-store-blanks.component';
import { InvStoreToStoreConsumablesComponent } from './inv-store-to-store-consumables/inv-store-to-store-consumables.component';
import { InvStoreToStoreStocksComponent } from './inv-store-to-store-stocks/inv-store-to-store-stocks.component';
import { InvStoresListComponent } from './inv-stores-list/inv-stores-list.component';
import { InvSupplierGroupsListComponent } from './inv-supplier-groups-list/inv-supplier-groups-list.component';
import { InvSuppliersListComponent } from './inv-suppliers-list/inv-suppliers-list.component';
import { InvTraDummyComponent } from './inv-tra-dummy/inv-tra-dummy.component';
import{InvUMComponent} from './inv-um/inv-um.component';
import { InvUsineDashboardOptComponent } from './inv-usine-dashboard-opt/inv-usine-dashboard-opt.component';
import { InvUsineDashboardComponent } from './inv-usine-dashboard/inv-usine-dashboard.component';
const routes: Routes = [
   

    {
        path: '',
        children: [{
            path: 'invminndashboard',
            component: InvMINNDashboardComponent
        }
        ]
    },
    
    {
      path: 'invum',
      component: InvUMComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invstores',
      component: InvStoresListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invitemgroupslist',
      component: InvItemGroupsComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invitemslist',
      component: InvItemsListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invitemstra',
      component: InvItemsTraComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
     
    {
      path: 'invopeningsotcks',
      component: InvOpeningStocksComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invostocksshiksha',
      component: InvOpeningShikshaComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
     
    
    
    {
      path: 'invitemmerging',
      component: InvItemMergingComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invsuppliergroupslist',
      component: InvSupplierGroupsListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invsupplierslist',
      component: InvSuppliersListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invdepartmentslist',
      component: InvDepartmentsListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path: 'invlosseslist',
      component: InvLossesListComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'invdashusineopt',
      component:InvUsineDashboardOptComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'invdashusine',
      component:InvUsineDashboardComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
     
    
 

    {
      path:'consuproduct',
      component:InvConsumableProductionComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'lossesproduct',
      component:InvLossesTraComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'store2store1',
      component:InvStoreToStoreConsumablesComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'store2store2',
      component:InvStoreToStoreBlanksComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'store2store3',
      component:InvStoreToStoreStocksComponent,
      data: {
        title: 'Dashboard 2'
      }
    }

    ,
    {
      path:'branch2branch1',
      component:InvBranchToBranchConsumablesComponent,
      data: {
        title: 'Dashboard 2'
      }
    }
    ,
    {
      path:'branch2branch2',
      component:InvBranchToBranchBlanksComponent,
      data: {
        title: 'Dashboard 2'
      }
    },
    {
      path:'branch2branch3',
      component:InvBranchToBranchStocksComponent,
      data: {
        title: 'Dashboard 2'
      }
    }
    ,
    {
      path:'branchfbranch1',
      component:InvBranchFromBranchesConsumablesComponent,
      data: {
        title: 'Dashboard 2'
      }
    }
    ,
    {
      path:'branchfbranch2',
      component:InvBranchFromBranchesBlanksComponent,
      data: {
        title: 'Dashboard 2'
      }
    }
    ,
    {
      path:'branchfbranch3',
      component:InvBranchFromBranchStocksComponent,
      data: {
        title: 'Dashboard 2'
      }
    }
    ,
    {
      path:'auditconsu',
      component:InvAuditConsumablesComponent,
      data: {
        title: 'Dashboard 2'
      }
    } ,
    
    
    {
        path: '',
        children: [{
            path: 'invdepts',
            component: InvDepartmentsComponent
        }
        ]
    },
    {
        path: '',
        children: [{
            path: 'invcostinfo',
            component: InvSetupComponent
        }
        ]
    },
    {
      path: '',
      children: [{
          path: 'invsamplesin',
          component: InvSampleInwardsComponent
      }
      ]
  },
  {
    path: '',
    children: [{
        path: 'invsamplesout',
        component: InvSampleOutwardsComponent
    }
    ]
},
{
  path: '',
  children: [{
      path: 'auditconsu',
      component: InvAutdiMaterialsComponent
  }
  ]
},

  
//Key Reports
{
  path: '',
  children: [{
      path: 'invkeyrepum',
      component: InvKeyRepUnitsComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invkeyrepstores',
      component: InvKeyRepStoresComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invkeyrepitemgroups',
      component: InvKeyRepItemGroupsComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invkeyrepitems',
      component: InvKeyRepItemsComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invkeyrepdepartments',
      component: InvKeyRepDepartmentsComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invkeyreplosses',
      component: InvKeyRepLossesComponent
  }
  ]
},

{
  path: '',
  children: [{
      path: 'invstorepclosingstocks',
      component: InvStoRepClosingStocksComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invstorepdayinfo',
      component: InvStoRepDayInfoComponent
  }
  ]
},
{
  path: '',
  children: [{
      path: 'invcostrepclosingvalue',
      component: InvCostRepClosingValuesComponent
  }
  ]
},
     {
        path: '',
        children: [{
            path: 'invunauthorize',
            component: UnAuthorizeComponent
        }
        ]
    },

    {
      path: '',
      children: [{
          path: 'invdummy',
          component: InvTraDummyComponent
      }
      ]
  },
    
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InventoryRoutingModule { }


