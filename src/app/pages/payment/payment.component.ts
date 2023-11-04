import { Component, OnChanges, OnInit } from '@angular/core';
import { Order } from '@interfaces/order/order.interface';
import { OrderService } from '@services/order/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, OnChanges{
  order: Order[] = [];
  clientName = '';
  clientPayment = 0;
  debit= true;
  output = 12;

  constructor(private orderService:OrderService){}

  ngOnInit(){
    this.order = this.orderService.get();
  }

  ngOnChanges(){
    console.log(this.clientPayment);
  }

  onDebit(){
    console.log("debito");
  }

  onCredit(){
    console.log("credito");
  }

  onMoney(){
    console.log("dinheiro");
  }
}
