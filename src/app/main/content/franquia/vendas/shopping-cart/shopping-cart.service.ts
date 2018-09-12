import {Injectable} from '@angular/core'

import {CartItem} from './cart-item.model'
import {MenuItem} from '../menu-item/menu-item.model'

import { MatSnackBar } from '@angular/material';

@Injectable()
export class ShoppingCartService {
  items: CartItem[] = []

  constructor(private snackBar: MatSnackBar){}

  clear(){
    this.items = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
    this.snackBar.open(`Você adicionou o item ${item.nome}`,'X',{duration: 2000})
  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1
    if (item.quantity === 0){
      this.removeItem(item)
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
    this.snackBar.open(`Você removeu o item ${item.menuItem.nome}`,'X',{duration: 2000})
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }
}
