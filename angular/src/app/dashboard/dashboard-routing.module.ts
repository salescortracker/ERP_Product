import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComercioComponent } from './dash-board-comercio/dash-board-comercio.component';
import { DashBoardDhanwantariComponent } from './dash-board-dhanwantari/dash-board-dhanwantari.component';
import { DashboardBienesComponent } from './dashboard-bienes/dashboard-bienes.component';
import { DashboardEdificioComponent } from './dashboard-edificio/dashboard-edificio.component';
import { DashboardManageInnComponent } from './dashboard-manage-inn/dashboard-manage-inn.component';
import { DashboardRealComponent } from './dashboard-real/dashboard-real.component';
import { DashboardShikshaComponent } from './dashboard-shiksha/dashboard-shiksha.component';
import { DashboardUsineComponent } from './dashboard-usine/dashboard-usine.component';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";
import { MisInboxComponent } from './mis-inbox/mis-inbox.component';
import { MisProfileComponent } from './mis-profile/mis-profile.component';
import { MisTasksComponent } from './mis-tasks/mis-tasks.component';
import { MisTicketsComponent } from './mis-tickets/mis-tickets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2'
        }
      },
      {
        path: 'dashboardMINN',
        component: DashboardManageInnComponent,
        data: {
          title: 'Manage Inn'
        }
      },
      {
        path: 'inbox',
        component: MisInboxComponent,
        data: {
          title: 'Manage Inn'
        }
      },
      {
        path: 'tasks',
        component: MisTasksComponent,
        data: {
          title: 'Manage Inn'
        }
      },
      {
        path: 'tickets',
        component: MisTicketsComponent,
        data: {
          title: 'Manage Inn'
        }
      },
      {
        path: 'profile',
        component: MisProfileComponent,
        data: {
          title: 'Manage Inn'
        }
      },
      
      {
path:'dashboardEdificio',
component:DashboardEdificioComponent,
data: {
  title: 'Edificio'
}
      },
      {
        path: 'dashboardComercio',
        component: DashBoardComercioComponent,
        data: {
          title: 'Comercio'
        }
      },
      {
        path: 'dashboardUsine',
        component: DashboardUsineComponent,
        data: {
          title: 'Usine'
        }
      },
      {
        path: 'dashboardReal',
        component: DashboardRealComponent,
        data: {
          title: 'Real'
        }
      },
      {
        path: 'dashboardDhanwantari',
        component: DashBoardDhanwantariComponent,
        data: {
          title: 'Real'
        }
      },
      {
        path: 'dashboardbienes',
        component: DashboardBienesComponent,
        data: {
          title: 'Real'
        }
      },
      {
        path: 'dashboardshiksha',
        component: DashboardShikshaComponent,
        data: {
          title: 'Real'
        }
      }


      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
