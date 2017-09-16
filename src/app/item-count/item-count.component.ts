import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {

  // The quantity property has implement property changed
  private _quantity = 0;
  get quantity(): number {
    return this._quantity;
  }
  set quantity(theQuantity: number) {
    this._quantity = theQuantity;
    this.quantityChangedEvent.emit(this._quantity);
  }

  // The current quantity passing from parent component
  @Input() currentQuantity: number;

  // Raise event when quantity changed
  @Output() quantityChangedEvent = new EventEmitter<number>();

  // Called when view initialize
  ngOnInit() {
    this.quantity = this.currentQuantity;
  }

  // Decrease the quantity one unit
  decrease() {
    if (this.quantity <= 1) {
      this.quantity = 0;
    } else {
      this.quantity -= 1;
    }
  }

  // Increase the quantity one unit
  increase() {
    this.quantity += 1;
  }

}
