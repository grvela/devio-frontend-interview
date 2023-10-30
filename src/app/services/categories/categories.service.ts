import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environments';
import { Category } from '@interfaces/category/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly apiUrl = environment.apiUrl + "/categories"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}
