import { ViewDialogComponent } from './dialogs/view/view.dialog.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MeusbonusComponent } from './meusbonus.component';
import { MeusbonusService } from './meusbonus.service';
import { AuthGuard } from '../../../../guards/auth.guard';


const routes = [
  {
    path : '',
    component: MeusbonusComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ViewDialogComponent
  ],
  providers: [
    MeusbonusService
  ],
  declarations: [MeusbonusComponent,ViewDialogComponent],
  exports:[MeusbonusComponent,ViewDialogComponent]
})
export class MeusbonusModule { }
