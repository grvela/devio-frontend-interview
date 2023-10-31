import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environments';
import { Product } from '@interfaces/product/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  readonly apiUrl = environment.apiUrl + "/products"

  constructor(private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id:number): Observable<Product>{
    return this.http.get<Product>(this.apiUrl + `/${id}`);
  }
}
