import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Product } from '@interfaces/product/product';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogComponent } from '@components/dialog/dialog.component';
import { Order } from '@interfaces/order/order.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [DialogService]
})
export class ProductComponent implements OnDestroy{
  @Input({required: true}) product: Product = {} as Product; 
  @Input({required: true}) index = 0;
  @Output() orderRequest = new EventEmitter<Order>();
  colors: string[] = ['#FA6767', '#125C13', '#FFEB70'];

  isSelected = false;

  ref!: DynamicDialogRef;

  constructor(private dialogService: DialogService){
  }

  getBackgroundColor(): string {
    return this.colors[Math.floor(this.index / 4) % this.colors.length];
  }

  onClick(){
    this.isSelected = true;

    this.ref = this.dialogService.open(DialogComponent, {
      data: {
        id: this.product.id,
        color: this.getBackgroundColor(),
      },
      width: '60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe((order: Order) => {
      if(order){
        this.orderRequest.emit(order);
      }else{
        this.isSelected = false;
      }
    })
  }

  ngOnDestroy() {
    this.ref.close();
  }
}
