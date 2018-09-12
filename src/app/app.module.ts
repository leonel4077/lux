import { MatPaginatorIntl } from '@angular/material/paginator';
import { LOCALE_ID, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, CanActivateChild } from '@angular/router';
import 'hammerjs';
import { SharedModule } from './core/modules/shared.module';
import { AppComponent } from './app.component';
import { FuseMainModule } from './main/main.module';
import { FuseSplashScreenService } from './core/services/splash-screen.service';
import { FuseConfigService } from './core/services/config.service';
import { FuseNavigationService } from './core/components/navigation/navigation.service';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardModule} from './main/content/backoffice/dashboard/dashboard.module';
import { MeusganhosModule } from './main/content/backoffice/meusganhos/meusganhos.module';
import { DesempenhoModule } from './main/content/backoffice/desempenho/desempenho.module';
import { MeusbonusModule } from './main/content/backoffice/meusbonus/meusbonus.module';
import { MinharedeModule } from './main/content/backoffice/minharede/minharede.module';
import { LojavirtualModule } from './main/content/backoffice/lojavirtual/lojavirtual.module';
import { DownloadsModule } from './main/content/backoffice/downloads/downloads.module';
import { SuporteModule } from './main/content/backoffice/suporte/suporte.module';
import { FaturasModule } from './main/content/backoffice/faturas/faturas.module';
import { VmlModule } from './main/content/backoffice/vml/vml.module';
import { FaqModule } from './main/content/backoffice/faq/faq.module';
import { ProfileModule } from './main/pages/profile/profile.module';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh.token.interceptor';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';
import { PagesModule } from './main/pages/pages.module';
import { AplicationErrorHandle } from './app.error-handle';
import { CustomSnackbarComponent } from './notification.service';
import { FuseError404Component } from './errors/404/error-404.component';
import { FuseLoginComponent } from './auth/login/login.component';
import { Error404Module } from './errors/404/error-404.module';
import { RegisterService } from './auth/services/register.service';
import { CustomPaginator } from './custom-paginator';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


const appRoutes: Routes = [
    {
        path : 'backoffice/dashboard',
        loadChildren: 'app/main/content/backoffice/dashboard/dashboard.module#DashboardModule',
        
        
    },
    {
        path : 'backoffice/meusganhos',
        loadChildren: 'app/main/content/backoffice/meusganhos/meusganhos.module#MeusganhosModule',
        
    },
    {
        path : 'backoffice/desempenho',
        loadChildren: 'app/main/content/backoffice/desempenho/desempenho.module#DesempenhoModule',
        
    },
    {
        path : 'backoffice/meusbonus',
        loadChildren: 'app/main/content/backoffice/meusbonus/meusbonus.module#MeusbonusModule',
        
    },
    {
        path : 'backoffice/minharede',
        loadChildren: 'app/main/content/backoffice/minharede/minharede.module#MinharedeModule',
        
    },
    {
        path : 'backoffice/lojavirtual',
        loadChildren: 'app/main/content/backoffice/lojavirtual/lojavirtual.module#LojavirtualModule',
        
    },
    {
        path : 'backoffice/downloads',
        loadChildren: 'app/main/content/backoffice/downloads/downloads.module#DownloadsModule',
        
    },
    {
        path : 'backoffice/suporte',
        loadChildren: 'app/main/content/backoffice/suporte/suporte.module#SuporteModule',
        
    },
    {
        path : 'backoffice/faturas',
        loadChildren: 'app/main/content/backoffice/faturas/faturas.module#FaturasModule',
        
    },
    {
        path : 'backoffice/vml',
        loadChildren: 'app/main/content/backoffice/vml/vml.module#VmlModule',
        
    },
    {
        path : 'backoffice/faq',
        loadChildren: 'app/main/content/backoffice/faq/faq.module#FaqModule',
       
    },
    {
        path : 'franquia/dashboard',
        loadChildren: 'app/main/content/franquia/dashboard/dashboard.module#DashboardModule',
       
    },
    {
        path : 'franquia/vendas',
        loadChildren: 'app/main/content/franquia/vendas/vendas.module#VendasModule',
       
    },
    {
        path : 'profile',
        loadChildren: 'app/main/pages/profile/profile.module#ProfileModule',
        

    },
    { 
        path: '', 
        component: FuseLoginComponent 
    },
    {
        path      : '**',
        component: FuseError404Component,

    }
];

@NgModule({
    declarations: [
        AppComponent,
        CustomSnackbarComponent
        
    ],
    imports     : [
        BrowserModule,
        HttpModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes,{enableTracing: false}),
        SharedModule,
        TranslateModule.forRoot(),
        FuseMainModule,
        DashboardModule,
        MeusganhosModule,
        DesempenhoModule,
        MeusbonusModule,
        MinharedeModule,
        LojavirtualModule,
        DownloadsModule,
        SuporteModule,
        FaturasModule,
        VmlModule,
        FaqModule,
        PagesModule,
        LoginModule,
        RegisterModule,
        ProfileModule,
        Error404Module,
        
    ],
    providers   : [
        FuseSplashScreenService,
        FuseConfigService,
        FuseNavigationService,
        AuthGuard,
        AuthService,
        RegisterService,
        {provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true },
        {provide : HTTP_INTERCEPTORS, useClass : RefreshTokenInterceptor, multi : true },
        {provide : ErrorHandler, useClass : AplicationErrorHandle },
        {provide : MatPaginatorIntl, useClass: CustomPaginator},
        { provide: LOCALE_ID, useValue: 'pt-BR' }


        
    ],
    entryComponents: [
        CustomSnackbarComponent
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
