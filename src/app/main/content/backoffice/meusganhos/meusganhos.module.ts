import { MeusganhosComponent } from './meusganhos.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { AuthGuard } from '../../../../guards/auth.guard';

 
const routes = [
  {
      path     : '',
      component: MeusganhosComponent,
      canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MeusganhosComponent
  ],
  exports :[
    MeusganhosComponent
  ]
})
export class MeusganhosModule { }
