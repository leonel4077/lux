import { DesempenhoComponent } from './desempenho.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { AuthGuard } from '../../../../guards/auth.guard';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from './../../../../core/components/widget/widget.module';


const routes = [
  {
    path : '',
    component: DesempenhoComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    NgxChartsModule,
    FuseWidgetModule

  ],
  declarations: [
    DesempenhoComponent
  ],
  exports :[
    DesempenhoComponent
  ]
})
export class DesempenhoModule { }
