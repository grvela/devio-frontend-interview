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
export class DialogComponent{
  backgroundColor = '';
  notes = '';
  amount = 1;

  loadProduct = false;
  product: Product = {} as Product;
  optional: Optional[] = [];
  selectedOptional: Optional[] = [];



  constructor(public config: DynamicDialogConfig, private productService: ProductsService, private optionalService: OptionalService){
    this.getProductById();
    this.getAllOptional();
    this.backgroundColor =  this.config.data.color;
  }

  getProductById(){
    this.productService.getById(this.config.data.id).subscribe((product: Product) => {
      this.product = product;
      this.loadProduct = true;
    });
  }

  getAllOptional(){
    this.optionalService.getAllOptional().subscribe((optional: Optional[]) => {
      this.optional = optional;
    });
  }

  onAmountOrderChange(newAmount: number){
    this.amount = newAmount;
  }

  onOptionRequest(event: {optional: Optional, isChecked: boolean}){
    if(event.isChecked){
      this.selectedOptional.push(event.optional);
    }else{
      const NOT_FOUND = -1;
      const REMOVE_BEFORE = 1;

      const index = this.selectedOptional.findIndex(item => item.id === event.optional.id);
      if (index !== NOT_FOUND){
        this.selectedOptional.splice(index, REMOVE_BEFORE);
      }
    }
    
  }
}
