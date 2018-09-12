import { FuseWidgetModule } from './../../../../core/components/widget/widget.module';
import { SharedModule } from './../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../../../guards/auth.guard';
import { NgxChartsModule } from '@swimlane/ngx-charts';

const routes = [
  {
    path : '',
    component: DashboardComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    FuseWidgetModule,
    NgxChartsModule,
  ],
  declarations: [
    DashboardComponent
  ],
  exports :[
    DashboardComponent
  ],
  providers:[]
})
export class DashboardModule { }
