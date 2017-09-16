import { Product } from './../shared/models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product;
  isActiveItemCount;

  constructor() {
   this.product = new Product(0, 'Yellow cat', '', '/assets/img/cat01.jpg', '$ 30');
    this.isActiveItemCount = false;
  }

  ngOnInit() {
  }

  addToCart() {
    this.product.quantity += 1;
    this.isActiveItemCount = true;
  }

  onQuantityChanged($event) {
    console.log('Quantity: ' + $event);
    this.product.quantity = $event;
    if (this.product.quantity === 0) {
      this.isActiveItemCount = false;
    }

  }
}
