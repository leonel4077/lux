import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { MinharedeComponent } from './minharede.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { AuthGuard } from '../../../../guards/auth.guard';


const routes = [
  {
    path : '',
    component: MinharedeComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatTableModule,
    
    
  ],
  declarations: [MinharedeComponent],
  exports:[MinharedeComponent]
})
export class MinharedeModule { }
