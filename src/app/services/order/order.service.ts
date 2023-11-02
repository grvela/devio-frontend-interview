import { Injectable } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order | null = null;

  set(order: Order): void {
    this.order = order;
  }

  get(): Order | null {
    return this.order;
  }

  clear(): void {
    this.order = null;
  }
}
