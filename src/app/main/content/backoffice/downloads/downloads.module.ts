import { SharedModule } from './../../../../core/modules/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './downloads.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../guards/auth.guard';



const routes = [
  {
    path : '',
    component: DownloadsComponent,
    canActivate : [AuthGuard] 
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DownloadsComponent],
  exports:[DownloadsComponent]
})
export class DownloadsModule { }
