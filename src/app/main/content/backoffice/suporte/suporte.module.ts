import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuporteComponent } from './suporte.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../guards/auth.guard';



const routes = [
  {
    path : '',
    component: SuporteComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SuporteComponent],
  exports:[SuporteComponent]
})
export class SuporteModule { }
