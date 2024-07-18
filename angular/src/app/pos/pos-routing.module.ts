import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalRepDetailedSalesComponent } from 'app/pos/sal-rep-detailed-sales/sal-rep-detailed-sales.component';
import { SalRepListOfSalesComponent } from 'app/pos/sal-rep-list-of-sales/sal-rep-list-of-sales.component';
import { PosoutletsComponent } from './posoutlets/posoutlets.component';
import { PosunauthorizeComponent } from './posunauthorize/posunauthorize.component';
import { SalAccountsAssignComponent } from './sal-accounts-assign/sal-accounts-assign.component';
import { SalCustomerGroupsComponent } from './sal-customer-groups/sal-customer-groups.component';
import { SalCustomerOpeningsComponent } from './sal-customer-openings/sal-customer-openings.component';
import { SalCustomersComponent } from './sal-customers/sal-customers.component';
import { SalDespatchClearancesComponent } from './sal-despatch-clearances/sal-despatch-clearances.component';
import { SalDispatchesComponent } from './sal-dispatches/sal-dispatches.component';
import { SalInvoicesComponent } from './sal-invoices/sal-invoices.component';
import { SalLogisticsComponent } from './sal-logistics/sal-logistics.component';
import { SalRepConsolidatedSalesComponent } from './sal-rep-consolidated-sales/sal-rep-consolidated-sales.component';
import { SalRepCustomerWiseConsolidatedComponent } from './sal-rep-customer-wise-consolidated/sal-rep-customer-wise-consolidated.component';
import { SalSaleTypesComponent } from './sal-sale-types/sal-sale-types.component';
import { SalSalesComponent } from './sal-sales/sal-sales.component';
import { SalSales2Component } from './sal-sales2/sal-sales2.component';
import { SaleOrdersComponent } from './sale-orders/sale-orders.component';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';



const routes: Routes = [
     
    {
        path:'',
        children :[{
            path:'salesdashboard',
            component:  SalesDashboardComponent 

        }]
    },
    {
        path: '',
         children: [{
             path: 'salCustomerGroups',
             component: SalCustomerGroupsComponent
         }
         ]
     }
     ,
    {
        path: '',
         children: [{
             path: 'salCustomers',
             component: SalCustomersComponent
         }
         ]
     } ,
     {
         path: '',
          children: [{
              path: 'salcustomeropenings',
              component: SalCustomerOpeningsComponent
          }
          ]
      } ,
      {
          path: '',
           children: [{
               path: 'saleorders',
               component: SaleOrdersComponent
           }
           ]
       },
       
       
        {
            path: '',
             children: [{
                 path: 'saletypes',
                 component: SalSaleTypesComponent
             }
             ]
         },
         {
             path: '',
              children: [{
                  path: 'salaccounts',
                  component: SalAccountsAssignComponent
              }
              ]
          },

           
          {
              path: '',
               children: [{
                   path: 'posunauthorize',
                   component: PosunauthorizeComponent
               }
               ]
           },
           {
            path: '',
             children: [{
                 path: 'sales',
                 component: SalSalesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'saldispatches',
                 component: SalDispatchesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'sallogistics',
                 component: SalLogisticsComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'salinvoicing',
                 component: SalInvoicesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'sales2',
                 component: SalSales2Component
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'saldespatchclear',
                 component: SalDespatchClearancesComponent
             }
             ]
         },

         {
            path: '',
             children: [{
                 path: 'salreplistofsales',
                 component: SalRepListOfSalesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'salrepdetailedsales',
                 component: SalRepDetailedSalesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'salrepconsolidated',
                 component: SalRepConsolidatedSalesComponent
             }
             ]
         },
         {
            path: '',
             children: [{
                 path: 'salrepcustomerwise',
                 component: SalRepCustomerWiseConsolidatedComponent
             }
             ]
         },
         
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class POSRoutingModule { }
