import { Component, OnInit } from '@angular/core';
import product from '../../../assets/product.json';

@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(product)
  }

  products : any = product;

  buyLists : any = [];

  addOrder(order : any) {
    for (let i = 0; i < this.buyLists.length; i++) {
      if (this.buyLists[i].sku === order.sku) return;
    }
    order.quantity = 1;
    this.buyLists.push(order);
    console.log(this.buyLists)
  }

  addQuantity(order : any, newQuantity : any) {
    order.totalPrice = order.price * newQuantity
  }

  // removeOrder(product : any) {
  //   this.buyList.push(product);
  // }

}
