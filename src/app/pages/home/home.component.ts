import { Component } from '@angular/core';
import { Category } from '@interfaces/category/category';
import { Product } from '@interfaces/product/product';
import { ProductsService } from '@services/products/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  products: Product[] = [];
  categories: Category[] = []

  constructor(private productsService: ProductsService){
    this.getAllProducts();
  }

  getAllProducts (){
    this.productsService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
  }
}
