import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Optional } from '@interfaces/optional/optional';
import { Product } from '@interfaces/product/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges{
  @Input({required: true}) product: Product = {} as Product;
  @Input({required: true}) optional: Optional[] = [];
  @Input({required: true}) amount = 1;

  totalProduct = 0;
  totalOptional = 0;
  totalOrder = 0;

  ngOnInit(){
    this.totalProduct = this.product.value * this.amount;
    this.totalOptional = this.optional.reduce((sum, item) => { return sum + item.value }, 0);
    this.totalOrder = this.totalProduct + this.totalOptional
  }

  ngOnChanges(){
    this.totalProduct = this.product.value * this.amount;
    this.totalOptional = this.optional.reduce((sum, item) => { return sum + item.value }, 0);
    this.totalOrder = this.totalProduct + this.totalOptional
  }


}
