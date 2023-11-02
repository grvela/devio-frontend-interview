import { Injectable } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order[] = [];

  set(order: Order): void {
    this.order.push(order);
  }

  get(): Order[] {
    return this.order;
  }
}
