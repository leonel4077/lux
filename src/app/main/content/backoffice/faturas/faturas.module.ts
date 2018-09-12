import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturasComponent } from './faturas.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../guards/auth.guard';


const routes = [
  {
    path : '',
    component: FaturasComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaturasComponent],
  exports:[FaturasComponent]
})
export class FaturasModule { }
