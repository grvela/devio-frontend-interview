import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '@interfaces/category/category';
import { Product } from '@interfaces/product/product';
import { CategoriesService } from '@services/categories/categories.service';
import { ProductsService } from '@services/products/products.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{
  searchTerm = '';
  filteredProducts: Product[] = [];

  products$!: Observable<Product[]>;
  categories$!: Observable<Category[]>;

  private productsSubscription!: Subscription;
  private categoriesSubscription!: Subscription;


  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private productsService: ProductsService, 
    private categoriesService: CategoriesService){
  }

  ngOnInit(){
    this.products$ = this.productsService.getAll();
    this.categories$ = this.categoriesService.getAll();

    this.productsSubscription = this.getAllProducts();
    this.categoriesSubscription = this.getAllCategories();
  }

  getAllProducts (){
    return this.products$.subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  getAllCategories(){
    return this.categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }  

  ngOnDestroy(){
    this.productsSubscription.unsubscribe();
    this.categoriesSubscription.unsubscribe();
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
