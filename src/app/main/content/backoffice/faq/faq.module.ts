import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { AuthGuard } from '../../../../guards/auth.guard';



const routes = [
  {
    path : '',
    component: FaqComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqComponent],
  exports:[FaqComponent]
})
export class FaqModule { }
