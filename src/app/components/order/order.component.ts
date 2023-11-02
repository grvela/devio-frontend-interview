import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges{
  @Input({required: true}) order: Order = {} as Order;

  totalProduct = 0;
  totalOptional = 0;
  totalOrder = 0;

  ngOnInit() {
    this.onOrder();
  }

  ngOnChanges() {
    this.onOrder();
  }

  onOrder(){
    this.totalProduct = this.order.amount * this.order.product.value;
    this.totalOptional = this.order.options.reduce((sum, item) => { return sum + item.value }, 0)
    this.totalOrder = this.totalProduct + this.totalOptional;
  }


}
