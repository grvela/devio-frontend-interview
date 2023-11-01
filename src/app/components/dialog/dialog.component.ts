import { Component } from '@angular/core';
import { Optional } from '@interfaces/optional/optional';
import { Product } from '@interfaces/product/product';
import { OptionalService } from '@services/optional/optional.service';
import { ProductsService } from '@services/products/products.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  amount = 1;
  backgroundColor = '';
  product: Product = {} as Product;
  optional: Optional[] = [];

  constructor(public config: DynamicDialogConfig, private productService: ProductsService, private optionalService: OptionalService){
    this.getProductById();
    this.getAllOptional();
    console.log(this.optional);
    this.backgroundColor =  this.config.data.color;
  }

  getProductById(){
    this.productService.getById(this.config.data.id).subscribe((product: Product) => {
      this.product = product;
    });
  }

  getAllOptional(){
    this.optionalService.getAllOptional().subscribe((optional: Optional[]) => {
      this.optional = optional;
    });
  }
}
