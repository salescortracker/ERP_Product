import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BienesComponent } from './bienes/bienes.component';
import { ComercioHomeScreenComponent } from './comercio-home-screen/comercio-home-screen.component';
import { ComercioComponent } from './comercio/comercio.component';

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DhanwantariComponent } from './dhanwantari/dhanwantari.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { EdificioComponent } from './edificio/edificio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmptyComponent } from './empty/empty.component';
import { ErrorPageComponent } from "./error/error-page.component";
import { FinanziasComponent } from './finanzias/finanzias.component';
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { GafasComponent } from './gafas/gafas.component';
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MainPageComponent } from './main-page/main-page.component';
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
import { ManageinnloginComponent } from './manageinnlogin/manageinnlogin.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { RaicesComponent } from './raices/raices.component';
import { RegisterPageComponent } from "./register/register-page.component";
import { RidesComponent } from './rides/rides.component';
import { ServicesComponent } from './services/services.component';
import { ShiiryokuComponent } from './shiiryoku/shiiryoku.component';
import { ShikshaComponent } from './shiksha/shiksha.component';
import { TLoginComponent } from './t-login/t-login.component';
import { UsineComponent } from './usine/usine.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'comingsoon',
        component: ComingSoonPageComponent,
        data: {
          title: 'Coming Soon page'
        }
      },
      {
        path: 'shiiryoku',
        component: ShiiryokuComponent,
        data: {
          title: 'Coming Soon page'
        }
      },
      
      {
        path: 'error',
        component: ErrorPageComponent,
        data: {
          title: 'Error Page'
        }
      },
      {
        path: 'forgotpassword',
        component: ForgotPasswordPageComponent,
        data: {
          title: 'Forgot Password Page'
        }
      },   
      
      {
        path: 'lockscreen',
        component: LockScreenPageComponent,
        data: {
          title: 'Lock Screen page'
        }
      },   
      {
        path: 'vlogin',
        component: LoginPageComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'tlogin',
        component: TLoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'login',
        component: ManageinnloginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'welcome',
         component:GafasComponent,
        
          data: {
          title: 'Login Page'
        }
      },
      {
        path: 'about',
        component: AboutUsComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'contact',
        component: ContactUsComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'team',
        component: OurTeamComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'services',
        component: ServicesComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'bienes',
        component: BienesComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'comercio',
        component: ComercioComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'usine',
        component: UsineComponent,
        data: {
          title: 'Login Page'
        }
      },
      
      {
        path: 'edificio',
        component: EdificioComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'raices',
        component: RaicesComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'rides',
        component: RidesComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'dhanwantari',
        component: DhanwantariComponent,
        data: {
          title: 'Login Page'
        }
      },
      
      {
        path: 'finanzias',
        component: FinanziasComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'ecommerce',
        component: ECommerceComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'gafas',
        component: GafasComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'empleado',
        component: EmpleadoComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'shiksha',
        component: ShikshaComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'maintenance',
        component: MaintenancePageComponent,
        data: {
          title: 'Maintenance Page'
        }
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          title: 'Register Page'
        }
      }   
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentPagesRoutingModule { }
