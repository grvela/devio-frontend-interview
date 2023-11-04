import { Component, OnInit } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';
import { OrderService } from '@services/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  order: Order[] = [];
  output = 12;

  constructor(private orderService:OrderService){
    this.orderService.set({
      notes: '',
      amount: 1,
      options: [],
      totalPrice: 30.50,
      product:   {
        id: 1,
        code: 11,
        tag: "hambuguer",
            title: "x-bacon",
            short_description: "3x bacon",
            long_description: "3x bacon, 2x cheddar, 1x picanha 200g, 4x tomate",
            value: 30.50,
            image: "https://i.pinimg.com/originals/f2/2d/88/f22d887acea42608c997adacee06a00b.png"
        }
    })


  }

  ngOnInit(){
    this.order = this.orderService.get();
  }
}
