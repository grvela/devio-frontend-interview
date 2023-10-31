import { Component } from '@angular/core';
import { Product } from '@interfaces/product/product';
import { ProductsService } from '@services/products/products.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  amount = 1;
  product: Product = {} as Product;

  constructor(public config: DynamicDialogConfig, private productService: ProductsService){
    this.getProductById();
  }

  getProductById(){
    this.productService.getById(this.config.data.id).subscribe((product: Product) => {
      this.product = product;
    })
  }

  

}
