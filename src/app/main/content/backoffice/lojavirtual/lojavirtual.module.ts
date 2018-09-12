import { NgModule } from '@angular/core';
import { LojavirtualComponent } from './lojavirtual.component';
import { SharedModule } from './../../../../core/modules/shared.module';
import { RouterModule } from '@angular/router';
import { FuseLojaMainSidenavComponent } from './sidenavs/main/main-sidenav.component';
import { FuseLojaListItemComponent } from './loja-list/loja-list-item/loja-list-item.component';
import { FuseLojaDetailsComponent } from './loja-details/loja-details.component';
import { FuseLojaListComponent } from './loja-list/loja-list.component';



const routes = [
  {
    path : '',
    component: LojavirtualComponent
  }
];
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
      LojavirtualComponent,
      FuseLojaMainSidenavComponent,
      FuseLojaListItemComponent,
      FuseLojaListComponent,
      FuseLojaDetailsComponent],
  exports:[LojavirtualComponent]
})
export class LojavirtualModule { }
