import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ComercioComponent } from "./comercio/comercio.component";
import { LoginPagesRoutingModule } from './login-pages-routing.module';
 

@NgModule({
    imports: [
        CommonModule,
        LoginPagesRoutingModule,
       
        FormsModule ,
        ReactiveFormsModule,
        NgbModule,
        NgxSpinnerModule
    ],
    declarations: [
        ComercioComponent,
       
    ]
})
export class LoginPagesModule { }
