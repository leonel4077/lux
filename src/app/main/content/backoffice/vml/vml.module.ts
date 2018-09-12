import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VmlComponent } from './vml.component';
import { AuthGuard } from '../../../../guards/auth.guard';



const routes = [
  {
    path : '',
    component: VmlComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VmlComponent],
  exports:[VmlComponent]
})
export class VmlModule { }
