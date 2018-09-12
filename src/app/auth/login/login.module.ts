import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';
import { RouterModule } from '@angular/router';

import { FuseLoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';

const routes = [
    {
        path     : 'auth/login',
        component: FuseLoginComponent
    }
];

@NgModule({
    declarations: [
        FuseLoginComponent
    ],
    imports     : [
        SharedModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    providers : [
        AuthService
    ]
})

export class LoginModule
{

}
