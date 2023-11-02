import { Component, Input, OnChanges } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.scss']
})
export class ListOrderComponent implements OnChanges {
  @Input({required: true}) listOrders: Order[] = [];
  totalPriceOrders = 0;

  ngOnChanges(){
    this.totalPriceOrders = this.listOrders.reduce((sum, item) => { return sum + item.totalPrice }, 0);
  }
}
