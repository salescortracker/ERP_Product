import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ComingSoonPageComponent } from "./coming-soon/coming-soon-page.component";
import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LockScreenPageComponent } from "./lock-screen/lock-screen-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { MaintenancePageComponent } from "./maintenance/maintenance-page.component";
import { RegisterPageComponent } from "./register/register-page.component";
import { MainPageComponent } from './main-page/main-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BienesComponent } from './bienes/bienes.component';
import { ComercioComponent } from './comercio/comercio.component';
import { UsineComponent } from './usine/usine.component';
 
import { EdificioComponent } from './edificio/edificio.component';
import { RaicesComponent } from './raices/raices.component';
import { RidesComponent } from './rides/rides.component';
import { DhanwantariComponent } from './dhanwantari/dhanwantari.component';
import { FinanziasComponent } from './finanzias/finanzias.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ShikshaComponent } from './shiksha/shiksha.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { GafasComponent } from './gafas/gafas.component';
import { EmptyComponent } from './empty/empty.component';
import { ShiiryokuComponent } from './shiiryoku/shiiryoku.component';
import { TLoginComponent } from './t-login/t-login.component';

import { ManageinnloginComponent } from './manageinnlogin/manageinnlogin.component';
import { ComercioHomeScreenComponent } from './comercio-home-screen/comercio-home-screen.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule ,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule
    ],
    declarations: [
        ComingSoonPageComponent,
        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LockScreenPageComponent,
        LoginPageComponent,
        MaintenancePageComponent,
        RegisterPageComponent,
        MainPageComponent,
        AboutUsComponent,
        ServicesComponent,
        OurTeamComponent,
        ContactUsComponent,
        BienesComponent,
        ComercioComponent,
        UsineComponent,
         EdificioComponent,
        RaicesComponent,
        RidesComponent,
        DhanwantariComponent,
        FinanziasComponent,
        EmpleadoComponent,
        ShikshaComponent,
        ECommerceComponent,
        GafasComponent,
        EmptyComponent,
        ShiiryokuComponent,
        TLoginComponent,
         ManageinnloginComponent,
        ComercioHomeScreenComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
    ]
})
export class ContentPagesModule { }
