import { Injectable } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  order: Order = {} as Order;

  constructor() { }
}
