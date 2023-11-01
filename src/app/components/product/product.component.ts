import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product/product';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { DialogComponent } from '@components/dialog/dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({required: true}) product: Product = {} as Product; 
  @Input({required: true}) index = 0;
  colors: string[] = ['#FA6767', '#125C13', '#FFEB70'];

  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService){}

  getBackgroundColor(): string {
    return this.colors[Math.floor(this.index / 4) % this.colors.length];
  }

  onClick(){
    this.dialogService.open(DialogComponent, {
      data: {
        id: this.product.id,
        color: this.getBackgroundColor()
      },
      width: '60%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    })
  }
}
