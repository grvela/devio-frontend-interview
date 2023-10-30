import { Component } from '@angular/core';
import { Category } from '@interfaces/category/category';
import { Product } from '@interfaces/product/product';
import { CategoriesService } from '@services/categories/categories.service';
import { ProductsService } from '@services/products/products.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  products: Product[] = [];
  categories: Category[] = []

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService){
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts (){
    this.productsService.getAll().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  getAllCategories(){
    this.categoriesService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  
}
