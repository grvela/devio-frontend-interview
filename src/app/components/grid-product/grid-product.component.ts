import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product/product';

@Component({
  selector: 'app-grid-product',
  templateUrl: './grid-product.component.html',
  styleUrls: ['./grid-product.component.scss']
})
export class GridProductComponent {
  @Input() items: Product[] = []; 
  colors: string[] = ['#FA6767', '#125C13', '#FFEB70'];

  getBackgroundColor(index: number): string {
    return this.colors[Math.floor(index / 4) % this.colors.length];
  }
}
