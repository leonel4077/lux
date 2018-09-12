import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {MenuItem} from '../menu-item/menu-item.model'

import {Observable} from 'rxjs/Observable'
import { VendasService } from '../vendas.service';


@Component({
  selector: 'vendas-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>
  linhas: any[];
  produtos: any[];
  

  constructor(private vendasService: VendasService,
              private route: ActivatedRoute) { }

  ngOnInit() { 
    this.vendasService.menuOfLinha()
    .subscribe((data : any) => {
      console.log(data);
      this.linhas = data;
    })  
  }

  onSelectpd($id){
    console.log($id.value);
    this.vendasService.menuOfProdutos($id.value)
    .subscribe((data : any)=>{
      console.log(data);
      this.produtos = data;
    })
  }
  onSelect($id){
    console.log($id.value);
    this.vendasService.menuOfVendas($id.value)
    .subscribe((data : any)=>{
      console.log(data);
      this.menu = data;
    })
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }







}
