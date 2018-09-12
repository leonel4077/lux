import { VendasComponent } from './vendas.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../../core/modules/shared.module';
import { AuthGuard } from '../../../../guards/auth.guard';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from './../../../../core/components/widget/widget.module';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



const routes = [
  {
    path : '',
    component: VendasComponent,
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
    VendasComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
  ],
  exports :[
    VendasComponent
    
  ]
})
export class VendasModule { }
