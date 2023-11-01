import { Component, Input } from '@angular/core';
import { Product } from '@interfaces/product/product';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input({required: true}) product: Product = {} as Product;
  @Input({required: true}) backgroundColor = '';
}
