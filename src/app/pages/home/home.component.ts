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
  searchTerm = '';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = []

  constructor(private productsService: ProductsService, private categoriesService: CategoriesService){
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts (){
    this.productsService.getAll().subscribe((products: Product[]) => {
      this.products = products;
      this.filteredProducts = this.products;
    });
  }

  getAllCategories(){
    this.categoriesService.getAll().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }  


  filterProducts() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = this.products;
    } else {

      const searchValue = this.searchTerm.trim();
      
      if (!isNaN(Number(searchValue))) {
        this.filteredProducts = this.products.filter((product: Product) =>
          product.code.toString().includes(searchValue)
        );
      } else {
        this.filteredProducts = this.products.filter((product: Product) =>
          product.title.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
    }
  }
}
