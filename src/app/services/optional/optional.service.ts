import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environments';
import { Optional } from '@interfaces/optional/optional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionalService {
  private readonly apiUrl = environment.apiUrl + "/optional"

  constructor(private http: HttpClient) { }

  getAllOptional(): Observable<Optional[]>{
    return this.http.get<Optional[]>(this.apiUrl);
  }
}
