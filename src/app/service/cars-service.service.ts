import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ICar } from '../components/cars-list/car';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  url: string = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getCars() {
    return this.http
      .get<ICar>(`${this.url}/cars`)
      .pipe(map(res => res));
  }

  postUser() {
    return this.http.post(`${this.url}/register`, {})
  }
}
