import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() backgroundColor = '';
  @Input({required: true}) product: Product = {} as Product; 
}
