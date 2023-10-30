import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input({required: true}) product: Product = {} as Product; 
  @Input({required: true}) index = 0;

  colors: string[] = ['#FA6767', '#125C13', '#FFEB70'];

  getBackgroundColor(): string {
    return this.colors[Math.floor(this.index / 4) % this.colors.length];
  }
}
