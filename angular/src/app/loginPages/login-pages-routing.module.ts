import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercioComponent } from "./comercio/comercio.component";
 


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comercio',
        component: ComercioComponent,
        data: {
          title: 'Comercio'
        }
      },
    
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPagesRoutingModule { }
