import { Component, OnDestroy, OnInit } from '@angular/core';
import { Optional } from '@interfaces/optional/optional';
import { Order } from '@interfaces/order/order.interface';
import { Product } from '@interfaces/product/product';
import { OptionalService } from '@services/optional/optional.service';
import { ProductsService } from '@services/products/products.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit, OnDestroy{
  id = 0;
  backgroundColor = '#FA6767';

  order!: Order;

  product$!: Observable<Product>;
  optional$!: Observable<Optional[]>

  product: Product = {} as Product;
  optional: Optional[] = [];

  private productSubscription!: Subscription;
  private optionalSubscription!: Subscription;

  constructor(
    public config: DynamicDialogConfig,
    public dialogRef: DynamicDialogRef, 
    private productService: ProductsService, 
    private optionalService: OptionalService,
    ){
      this.id = this.config.data.id;
      this.backgroundColor =  this.config.data.color;

      this.order = {
        product: {} as Product,
        amount: 1,
        options: [] as Optional[],
        notes: '',
        totalPrice: 0
      }
    }

  ngOnInit(){
    this.product$ = this.productService.getById(this.id);
    this.optional$ = this.optionalService.getAllOptional();
    
    this.productSubscription = this.getProductById();
    this.optionalSubscription = this.getAllOptional();
  }

  getProductById(){
    return this.product$.subscribe((product: Product) => {
      this.order.product = this.product = product;
    });
  }

  getAllOptional(){
    return this.optional$.subscribe((optional: Optional[]) => {
      this.optional = optional;
    });
  }

  onAmountChange(value: number){
    this.order = { ...this.order, amount: value };
  }

  onOptionRequest(event: {option: Optional, selected: boolean}) {
    const updatedOptions = this.order.options.slice();

    if (event.selected) {
      updatedOptions.push(event.option);
    } else {
      updatedOptions.filter((option) => option.id !== event.option.id);
    }

    this.order = {
      ...this.order,
      options: updatedOptions
    };
  }

  onSubmit(){
    this.dialogRef.close(this.order);
  }

  ngOnDestroy(){
    this.productSubscription.unsubscribe();
    this.optionalSubscription.unsubscribe();
  }
}
